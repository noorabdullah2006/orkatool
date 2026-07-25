"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Simulate subscribing to API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="footer-newsletter">
      <h4 className="footer-newsletter-title">Stay Updated</h4>
      <p className="footer-newsletter-text">Get notified when new tools launch.</p>
      
      {status === "success" ? (
        <div className="newsletter-success-box" style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
          <CheckCircle2 size={16} style={{ color: "#10b981", flexShrink: 0 }} />
          <span style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.9)" }}>
            Thank you for subscribing!
          </span>
        </div>
      ) : (
        <form className="footer-newsletter-form" onSubmit={handleSubmit} noValidate>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
            <div style={{ display: "flex", gap: "8.5px", width: "100%" }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                aria-label="Email address for newsletter"
                required
              />
              <button 
                type="submit" 
                className="footer-newsletter-button"
                disabled={status === "loading"}
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "90px" }}
              >
                {status === "loading" ? (
                  <Loader2 className="spinner-animate" size={16} />
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
            
            {status === "error" && (
              <div className="newsletter-error-box" style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
                <AlertCircle size={14} style={{ color: "#ef4444" }} />
                <span style={{ fontSize: "0.75rem", color: "#fca5a5" }}>{errorMessage}</span>
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
