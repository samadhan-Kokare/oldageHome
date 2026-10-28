export type EnquiryValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

export function validateEnquiry(v: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const name = v.name.trim();
  const phone = v.phone.replace(/[\s-]/g, "");
  const email = v.email.trim();

  if (!name) errors.name = "Please enter your full name.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";
  else if (name.length > 80) errors.name = "Name must be 80 characters or fewer.";

  if (!phone) errors.phone = "Please enter your phone number.";
  else if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(phone))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Enter a valid email address.";

  if (v.message.length > 600) errors.message = "Message must be 600 characters or fewer.";

  return errors;
}

/**
 * BACKEND INTEGRATION PENDING.
 * Replace the body of this function with a real call (API route, email
 * service, Google Sheets, CRM, etc.). Until then nothing is sent anywhere.
 */
export const ENQUIRY_BACKEND_CONNECTED = false;

export async function submitEnquiry(_values: EnquiryValues): Promise<{ ok: boolean; sent: boolean }> {
  // TODO: connect to a real service, e.g. await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(_values) })
  await new Promise((r) => setTimeout(r, 400));
  return { ok: true, sent: ENQUIRY_BACKEND_CONNECTED };
}
