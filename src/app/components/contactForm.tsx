"use client";

import { useState } from "react";

type ContactFormProps = {
  buttonLabel?: string;
};

export default function ContactForm({
  buttonLabel = "Submit Now",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Phone number validation: 10 digits, starting with 6, 7, 8, or 9
  const validatePhone = (phone: string): boolean => {
    // Remove any non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, "");
    
    // Check if it's exactly 10 digits
    if (digitsOnly.length !== 10) {
      return false;
    }
    
    // Check if it starts with 6, 7, 8, or 9
    const firstDigit = digitsOnly[0];
    if (!['6', '7', '8', '9'].includes(firstDigit)) {
      return false;
    }
    
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // Special handling for phone number
    if (name === "phone") {
      // Only allow digits, max 10 digits
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      
      // Real-time validation
      if (digitsOnly.length > 0) {
        if (digitsOnly.length < 10) {
          setPhoneError("Phone number must be 10 digits");
        } else if (!['6', '7', '8', '9'].includes(digitsOnly[0])) {
          setPhoneError("Phone number must start with 6, 7, 8, or 9");
        } else {
          setPhoneError("");
        }
      } else {
        setPhoneError("");
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setPhoneError("");

    // Validate phone number before submission
    if (!validatePhone(formData.phone)) {
      if (formData.phone.length < 10) {
        setPhoneError("Phone number must be exactly 10 digits");
      } else if (!['6', '7', '8', '9'].includes(formData.phone[0])) {
        setPhoneError("Phone number must start with 6, 7, 8, or 9");
      } else {
        setPhoneError("Please enter a valid phone number");
      }
      return;
    }

    setLoading(true);

    try {
      // Use the same Supabase Edge Function that is already working in FinalCTA
      const url = "https://raticwohyvxcyoqzqnwj.supabase.co/functions/v1/smart-handler";

      const payload = {
        customer_name: formData.name,
        customer_mobile_number: formData.phone,
        model_interested: formData.service,
      };

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "df878d10-c2e4-42b6-84d5-6a70ed0041dd",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({} as any));

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit form. Please try again later.");
      }

      setSubmitted(true);
      setFormData({ name: "", phone: "", service: "" });
      setPhoneError("");
      setErrorMsg("");
    } catch (err) {
      console.error("Error submitting form:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Failed to submit form. Please try again later.";
      setErrorMsg(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Show thank you message if submitted
  if (submitted) {
    return (
      <div className="bg-white border border-green-200 rounded-2xl shadow-lg p-6 md:p-8 text-center w-full max-w-lg mx-auto">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="text-white text-3xl font-bold">✓</div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
        <p className="text-gray-600 mb-6 text-lg">
          Your inquiry has been submitted successfully. Our team will contact you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      id="toyota-contact-form"
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 md:p-8 text-left w-full max-w-lg mx-auto"
    >
      {/* Name */}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition"
          placeholder="Enter your name"
        />
      </div>

      {/* Phone */}
      <div className="mb-5">
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          maxLength={10}
          pattern="[6789][0-9]{9}"
          className={`w-full rounded-lg bg-gray-50 border ${
            phoneError 
              ? "border-red-500 focus:ring-red-500 focus:border-red-500" 
              : "border-gray-300 focus:ring-red-500 focus:border-red-500"
          } text-gray-900 px-4 py-3 focus:outline-none focus:ring-1 transition`}
          placeholder="Enter 10-digit phone number"
        />
        {phoneError && (
          <p className="mt-1 text-sm text-red-500">{phoneError}</p>
        )}
        {!phoneError && formData.phone.length > 0 && formData.phone.length < 10 && (
          <p className="mt-1 text-xs text-gray-500">
            {10 - formData.phone.length} more digit{10 - formData.phone.length !== 1 ? 's' : ''} required
          </p>
        )}
        {!phoneError && formData.phone.length === 10 && validatePhone(formData.phone) && (
          <p className="mt-1 text-sm text-green-600">✓ Valid phone number</p>
        )}
      </div>

      {/* Service Type */}
      <div className="mb-6">
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Looking For
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition"
        >
          <option value="">Select an option</option>
          <option value="buy">Buy New Car</option>
          <option value="service">Servicing</option>
          <option value="exchange">Exchange / Upgrade</option>
          <option value="other">Any Other Services</option>
        </select>
      </div>

      {/* CTA Button */}
      <button
        id="toyota-contact-form-submit"
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 hover:bg-red-500 disabled:bg-red-400 text-white font-bold py-3 md:py-4 rounded-lg uppercase tracking-wide transition-all shadow-md hover:shadow-lg"
      >
        {loading ? "Submitting..." : buttonLabel}
      </button>

      {/* Error Messages */}
      {errorMsg && (
        <p className="mt-4 text-red-400 text-sm">⚠ {errorMsg}</p>
      )}
    </form>
  );
}
