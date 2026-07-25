"use client";

import { useState, useId } from "react";
import { Send, MapPin, Mail, Clock, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Generate unique IDs for accessibility
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="content-page-form-grid">
      {/* Form Card */}
      <div className="content-page-form-card">
        {submitted ? (
          <div className="content-page-success">
            <div className="content-page-success-icon">
              <CheckCircle size={32} />
            </div>
            <h3 className="content-page-success-title">Message Sent!</h3>
            <p className="content-page-success-text">
              Thank you for contacting OrkaTool support. Our team will review your request and get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="button button--primary"
              style={{ margin: "0 auto", display: "inline-flex" }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h3 className="content-page-form-title">Send Message</h3>
            
            <div className="form-group" style={{ marginBottom: "1.25rem" }}>
              <label htmlFor={nameId} className="form-label">
                Full Name <span className="form-required">*</span>
              </label>
              <input
                id={nameId}
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`form-input ${errors.name ? "input--error" : ""}`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? `${nameId}-error` : undefined}
                disabled={loading}
              />
              {errors.name && (
                <span id={`${nameId}-error`} className="form-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group" style={{ marginBottom: "1.25rem" }}>
              <label htmlFor={emailId} className="form-label">
                Email Address <span className="form-required">*</span>
              </label>
              <input
                id={emailId}
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`form-input ${errors.email ? "input--error" : ""}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? `${emailId}-error` : undefined}
                disabled={loading}
              />
              {errors.email && (
                <span id={`${emailId}-error`} className="form-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group" style={{ marginBottom: "1.25rem" }}>
              <label htmlFor={subjectId} className="form-label">
                Subject <span className="form-required">*</span>
              </label>
              <input
                id={subjectId}
                type="text"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`form-input ${errors.subject ? "input--error" : ""}`}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? `${subjectId}-error` : undefined}
                disabled={loading}
              />
              {errors.subject && (
                <span id={`${subjectId}-error`} className="form-error">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
              <label htmlFor={messageId} className="form-label">
                Message <span className="form-required">*</span>
              </label>
              <textarea
                id={messageId}
                placeholder="Type your message here..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`form-textarea ${errors.message ? "input--error" : ""}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? `${messageId}-error` : undefined}
                disabled={loading}
              />
              {errors.message && (
                <span id={`${messageId}-error`} className="form-error">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="button button--primary button--full"
              style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}
            >
              {loading ? (
                <>
                  <span className="spinner-animate" style={{ display: "inline-block", width: "16px", height: "16px", border: "2px solid currentColor", borderTopColor: "transparent", borderRadius: "50%" }}></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Info Card */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div className="content-page-info-card">
          <h3 className="content-page-form-title">Contact Information</h3>
          
          <div className="content-page-info-item">
            <Mail className="content-page-info-icon" />
            <div>
              <h4 className="content-page-info-title">Email Support</h4>
              <p className="content-page-info-text">support@orkatool.com</p>
            </div>
          </div>

          <div className="content-page-info-item">
            <MapPin className="content-page-info-icon" />
            <div>
              <h4 className="content-page-info-title">Location</h4>
              <p className="content-page-info-text">San Francisco, CA, USA</p>
            </div>
          </div>

          <div className="content-page-info-item">
            <Clock className="content-page-info-icon" />
            <div>
              <h4 className="content-page-info-title">Hours</h4>
              <p className="content-page-info-text">24/7 Available (Typical response in 12 hours)</p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="content-page-map-placeholder">
          <MapPin size={32} style={{ marginBottom: "0.5rem", color: "var(--color-primary)" }} />
          <h4 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 0.25rem", color: "var(--color-text-primary)" }}>Our Headquarters Location</h4>
          <p style={{ fontSize: "0.85rem", margin: 0 }}>San Francisco Financial District, California</p>
        </div>
      </div>
    </div>
  );
}
