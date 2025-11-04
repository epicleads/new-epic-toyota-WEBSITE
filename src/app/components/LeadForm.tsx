"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type LeadFormProps = {
  buttonLabel?: string;
  onSuccess?: () => void;
};

export default function LeadForm({
  buttonLabel = "Submit Now",
  onSuccess,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_mobile_number: "",
    model_interested: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const originalUrlRef = useRef<string>('');

  // URL tracking for marketing analytics
  const updateURL = useCallback((testdriveState: string | null) => {
    if (typeof window === 'undefined') return;
    
    const url = new URL(window.location.href);
    
    if (testdriveState) {
      url.searchParams.set('testdrive', testdriveState);
    } else {
      url.searchParams.delete('testdrive');
    }
    
    window.history.replaceState({}, '', url.toString());
  }, []);

  // Track URL on component mount
  useEffect(() => {
    // Store original URL
    originalUrlRef.current = window.location.href;
    
    // Update URL to include testdrive=true for tracking
    updateURL('true');

    return () => {
      // Restore original URL ONLY if form was NOT submitted successfully
      const hasSubmitted = submitted ||
        (typeof window !== 'undefined' && localStorage.getItem('testdrive_submitted') === 'true');

      if (originalUrlRef.current && !hasSubmitted && !originalUrlRef.current.includes('testdrive=thankyou')) {
        window.history.replaceState({}, '', originalUrlRef.current);
      }
    };
  }, [updateURL, submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch(
        "https://raticwohyvxcyoqzqnwj.supabase.co/functions/v1/smart-handler",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "df878d10-c2e4-42b6-84d5-6a70ed0041dd",
          },
          body: JSON.stringify({
            customer_name: formData.customer_name,
            customer_mobile_number: formData.customer_mobile_number,
            model_interested: formData.model_interested,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        // Update URL to thankyou state for tracking
        updateURL('thankyou');

        // 🎯 IMMEDIATE GA Pageview Tracking for Thank You (Multi-layer tracking)
        // Send pageview immediately even if user closes browser/navigates away
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname + '?testdrive=thankyou',
            page_title: 'Test Drive - Thank You'
          });

          console.log('🎯 GA4 Pageview Tracked:', {
            event: 'page_view',
            path: '?testdrive=thankyou'
          });
        }

        // Save submission status to localStorage for auto-popup tracking
        if (typeof window !== 'undefined') {
          localStorage.setItem('testdrive_submitted', 'true');
          localStorage.setItem('testdrive_submitted_at', new Date().toISOString());
        }

        setSubmitted(true);
        setFormData({ customer_name: "", customer_mobile_number: "", model_interested: "" });
        if (onSuccess) {
          setTimeout(() => {
            try {
              onSuccess();
            } catch (_) {
              // no-op
            }
          }, 2000);
        }
      } else {
        setErrorMsg(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setErrorMsg("Failed to submit form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Show thank you message if submitted
  if (submitted) {
    return (
      <div
        className="rounded-2xl shadow-2xl p-6 md:p-8 text-center w-full max-w-lg mx-auto"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="text-white text-3xl font-bold">✓</div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
        <p className="text-gray-200 mb-6 text-lg">
          Your request has been submitted successfully. Our team will contact you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-white font-semibold py-3 px-6 rounded-lg transition-all"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      id="toyota-lead-form"
      onSubmit={handleSubmit}
      className="rounded-2xl shadow-2xl p-6 md:p-8 text-left w-full max-w-lg mx-auto"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
      }}
    >
      {/* Customer Name */}
      <div className="mb-5">
        <label
          htmlFor="customer_name"
          className="block text-sm font-semibold text-white mb-2"
        >
          Customer Name
        </label>
        <input
          type="text"
          id="customer_name"
          name="customer_name"
          value={formData.customer_name}
          onChange={handleChange}
          required
          className="w-full rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition placeholder-white/60"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
          placeholder="Enter your name"
        />
      </div>

      {/* Customer Mobile Number */}
      <div className="mb-5">
        <label
          htmlFor="customer_mobile_number"
          className="block text-sm font-semibold text-white mb-2"
        >
          Mobile Number
        </label>
        <input
          type="tel"
          id="customer_mobile_number"
          name="customer_mobile_number"
          value={formData.customer_mobile_number}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          className="w-full rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition placeholder-white/60"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
          placeholder="Enter 10-digit mobile number"
        />
      </div>

      {/* Model Interested */}
      <div className="mb-6">
        <label
          htmlFor="model_interested"
          className="block text-sm font-semibold text-white mb-2"
        >
          Model Interested
        </label>
        <select
          id="model_interested"
          name="model_interested"
          value={formData.model_interested}
          onChange={handleChange}
          required
          className="w-full rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <option value="" className="bg-gray-900 text-white">Select a model</option>
          <option value="Glanza" className="bg-gray-900 text-white">Glanza</option>
          <option value="Urban Cruiser Taisor" className="bg-gray-900 text-white">Urban Cruiser Taisor</option>
          <option value="Urban Cruiser Hyryder" className="bg-gray-900 text-white">Urban Cruiser Hyryder</option>
          <option value="Rumion" className="bg-gray-900 text-white">Rumion</option>
          <option value="Innova Hycross" className="bg-gray-900 text-white">Innova Hycross</option>
          <option value="Innova Crysta" className="bg-gray-900 text-white">Innova Crysta</option>
          <option value="Fortuner" className="bg-gray-900 text-white">Fortuner</option>
          <option value="Hilux" className="bg-gray-900 text-white">Hilux</option>
          <option value="Camry" className="bg-gray-900 text-white">Camry</option>
          <option value="Vellfire" className="bg-gray-900 text-white">Vellfire</option>
          <option value="Land Cruiser" className="bg-gray-900 text-white">Land Cruiser</option>
          <option value="Other" className="bg-gray-900 text-white">Other</option>
        </select>
      </div>

      {/* CTA Button */}
      <button
        id="toyota-lead-form-submit"
        type="submit"
        disabled={loading}
        className="w-full text-white font-bold py-3 md:py-4 rounded-lg uppercase tracking-wide transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
        style={{
          background: loading ? 'rgba(220, 38, 28, 0.5)' : 'rgba(220, 38, 28, 0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(220, 38, 28, 0.5)'
        }}
      >
        {loading ? "Submitting..." : buttonLabel}
      </button>

      {/* Error Messages */}
      {errorMsg && (
        <p className="mt-4 text-red-400 text-sm font-semibold">⚠ {errorMsg}</p>
      )}
    </form>
  );
}