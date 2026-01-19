"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Sparkles } from "lucide-react";

const serviceOptions = [
  "Company Formation",
  "Trade License",
  "Visa Services",
  "PRO Services",
  "Bank Account",
  "Accounting & Tax",
  "Other",
];

export default function LeadPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  // Show popup on page visit
  useEffect(() => {
    // Small delay for better UX
    const timer = setTimeout(() => setShowPopup(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    localStorage.setItem("starlinkVisited", "true");
    setShowPopup(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission (email integration later)
    setSubmitted(true);
    // Auto close after showing success
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {submitted ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-dark mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Our team will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              /* Form State */
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    Free Consultation
                  </div>
                  <h3 className="font-display text-2xl font-bold text-dark mb-2">
                    Start Your Business Journey
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get expert guidance for your UAE business setup
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="lead-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="lead-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="lead-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-company" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="lead-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lead-service" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Interest
                    </label>
                    <select
                      id="lead-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="lead-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="lead-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="form-input resize-none"
                      placeholder="Tell us about your business needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-dark font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-gold hover:shadow-lg"
                  >
                    Get Free Consultation
                    <Send className="w-5 h-5" />
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    By submitting, you agree to our privacy policy
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
