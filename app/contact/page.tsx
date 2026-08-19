"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "general",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="fn-static-page-wrapper">
      <Header />

      <main style={{ flexGrow: 1 }}>
        <div className="fn-static-container">
          {/* Hero Section */}
          <div className="fn-static-hero">
            <div className="fn-static-breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>

            <div className="fn-static-header-row">
              <div className="fn-static-accent-bar" />
              <div>
                <h1 className="fn-static-title">Contact Newsroom & Editorial</h1>
                <p className="fn-static-subtitle">
                  Reach out to the SecNewsM newsroom, submit confidential news tips, inquire about advertising partnerships, or request editorial clarifications.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Layout Grid */}
          <div className="fn-contact-grid">
            {/* Left Column: Form */}
            <div>
              {submitted ? (
                <div className="fn-contact-form-card" style={{ textAlign: "center", padding: "48px 24px" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#dcfce7", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto", fontSize: "24px" }}>
                    ✓
                  </div>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "#171717", marginBottom: "8px" }}>
                    Message Received
                  </h3>
                  <p style={{ fontSize: "14.5px", color: "#525252", maxWidth: "480px", margin: "0 auto 24px auto", lineHeight: "1.6" }}>
                    Thank you for reaching out to SecNewsM. Your submission has been directed to our {formData.department.toUpperCase()} desk. A representative or duty editor will review your message shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", department: "general", subject: "", message: "" }); }}
                    className="fn-contact-submit-btn"
                    style={{ width: "auto", padding: "10px 24px" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="fn-contact-form-card">
                  <h2 style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#171717", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #e5e5e5" }}>
                    Send Direct Dispatch
                  </h2>

                  <div className="fn-contact-field-group">
                    <label className="fn-contact-label" htmlFor="contact-name">
                      Your Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="fn-contact-input"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="fn-contact-field-group">
                    <label className="fn-contact-label" htmlFor="contact-email">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="fn-contact-input"
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="fn-contact-field-group">
                    <label className="fn-contact-label" htmlFor="contact-department">
                      Target Department
                    </label>
                    <select
                      id="contact-department"
                      className="fn-contact-select"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    >
                      <option value="general">General Inquiries & Feedback</option>
                      <option value="tips">Confidential Newsroom Tipoff</option>
                      <option value="editorial">Editorial Desk & Corrections</option>
                      <option value="advertising">Advertising & Brand Partnerships</option>
                      <option value="syndication">Syndication & Rights Permissions</option>
                    </select>
                  </div>

                  <div className="fn-contact-field-group">
                    <label className="fn-contact-label" htmlFor="contact-subject">
                      Subject Headline
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      className="fn-contact-input"
                      placeholder="Brief overview of your inquiry..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div className="fn-contact-field-group">
                    <label className="fn-contact-label" htmlFor="contact-message">
                      Message Content
                    </label>
                    <textarea
                      id="contact-message"
                      rows={6}
                      className="fn-contact-textarea"
                      placeholder="Provide detailed information, context, or press release details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <button type="submit" className="fn-contact-submit-btn">
                    Submit Message to Desk →
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Department Directory */}
            <div>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ background: "#171717", color: "#ffffff", padding: "16px 20px", fontWeight: "700", fontSize: "14px", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                  Department Email Directory
                </div>

                <div className="fn-dept-item">
                  <div className="fn-dept-name">Newsroom Desk</div>
                  <div className="fn-dept-email">newsroom@secnewsm.com</div>
                  <div className="fn-dept-desc">For general reporting inquiries, breaking updates, and story ideas.</div>
                </div>

                <div className="fn-dept-item">
                  <div className="fn-dept-name">Confidential Tips</div>
                  <div className="fn-dept-email">tips@secnewsm.com</div>
                  <div className="fn-dept-desc">Monitored 24/7 by senior investigative editors. PGP encryption key available upon request.</div>
                </div>

                <div className="fn-dept-item">
                  <div className="fn-dept-name">Editorial Corrections</div>
                  <div className="fn-dept-email">corrections@secnewsm.com</div>
                  <div className="fn-dept-desc">For factual correction requests, attribution notices, or clarifications.</div>
                </div>

                <div className="fn-dept-item">
                  <div className="fn-dept-name">Advertising & Partnerships</div>
                  <div className="fn-dept-email">advertising@secnewsm.com</div>
                  <div className="fn-dept-desc">Sponsorship packages, programmatic advertising, and media kits.</div>
                </div>

                <div className="fn-dept-item">
                  <div className="fn-dept-name">Rights & Syndication</div>
                  <div className="fn-dept-email">syndication@secnewsm.com</div>
                  <div className="fn-dept-desc">Reprint permissions, content licensing, and academic re-use.</div>
                </div>
              </div>

              {/* Turnaround Box */}
              <div className="fn-static-box" style={{ marginTop: "24px" }}>
                <div className="fn-static-box-title">Response Times</div>
                <p style={{ fontSize: "13px", color: "#525252", lineHeight: "1.5" }}>
                  Newsroom tips and urgent breaking developments are reviewed immediately. General administrative messages are handled within 24 to 48 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
