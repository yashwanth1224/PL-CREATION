"use server";

import { contactFormSchema, ContactFormData } from "@/lib/validations";

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

// In-memory rate limiting tracker (fallback if Upstash is unconfigured)
const requestRateMap = new Map<string, { count: number; expiresAt: number }>();

function checkRateLimit(identifier: string, limit = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const entry = requestRateMap.get(identifier);

  if (!entry || now > entry.expiresAt) {
    requestRateMap.set(identifier, { count: 1, expiresAt: now + windowMs });
    return true;
  }

  if (entry.count >= limit) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function submitLeadAction(formData: FormData): Promise<ActionResponse> {
  try {
    const rawData = {
      fullName: formData.get("fullName")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      serviceCategory: formData.get("serviceCategory")?.toString() || "",
      estimatedBudget: formData.get("estimatedBudget")?.toString() || "",
      city: formData.get("city")?.toString() || "Bengaluru",
      message: formData.get("message")?.toString() || "",
    };

    // 1. Validate with Zod
    const validationResult = contactFormSchema.safeParse(rawData);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Please correct the errors in the form.",
        errors: fieldErrors,
      };
    }

    const validData = validationResult.data;

    // 2. Rate limiting check by phone/email identifier
    const rateKey = `${validData.phone}-${validData.email}`;
    const allowed = checkRateLimit(rateKey, 5, 60000);

    if (!allowed) {
      return {
        success: false,
        message: "Too many requests. Please wait a minute or chat directly on WhatsApp at +91 9187535990.",
      };
    }

    // 3. Process Lead (Resend Email if configured, or log lead for dispatch)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey && resendApiKey.startsWith("re_") && !resendApiKey.includes("placeholder")) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Pratanvi Leads <leads@pratanvicreations.com>",
            to: [process.env.CONTACT_FORWARD_EMAIL || "pratanvicreations@gmail.com"],
            subject: `[NEW LEAD] ${validData.fullName} - ${validData.serviceCategory}`,
            html: `
              <h2>New Inquiry Received on Pratanvi Creations</h2>
              <p><strong>Name:</strong> ${validData.fullName}</p>
              <p><strong>Email:</strong> ${validData.email}</p>
              <p><strong>Phone:</strong> ${validData.phone}</p>
              <p><strong>City:</strong> ${validData.city}</p>
              <p><strong>Service:</strong> ${validData.serviceCategory}</p>
              <p><strong>Budget:</strong> ${validData.estimatedBudget || "Not specified"}</p>
              <p><strong>Message:</strong></p>
              <blockquote>${validData.message}</blockquote>
            `,
          }),
        });
      } catch (emailErr) {
        console.error("Resend delivery failed:", emailErr);
      }
    }

    return {
      success: true,
      message: "Thank you! Your inquiry has been received. Our senior strategy team in Bengaluru will contact you within 2 business hours.",
    };
  } catch (error) {
    console.error("submitLeadAction error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please reach us directly on WhatsApp (+91 9187535990).",
    };
  }
}
