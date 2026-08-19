import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — SecNewsM",
  description: "Understand how SecNewsM collects, uses, protects, and respects your personal data under GDPR, CCPA, and global privacy laws.",
};

export default function PrivacyPolicyPage() {
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
              <span>Legal</span>
              <span>/</span>
              <span>Privacy Policy</span>
            </div>

            <div className="fn-static-header-row">
              <div className="fn-static-accent-bar" />
              <div>
                <h1 className="fn-static-title">Privacy Policy & Data Protection</h1>
                <p className="fn-static-subtitle">
                  SecNewsM respects your privacy. This policy outlines the types of personal information we collect, how it is secured, and how you can exercise your rights under GDPR and CCPA frameworks.
                </p>
              </div>
            </div>

            <div className="fn-static-meta-bar">
              <div><strong>Compliance:</strong> GDPR, CCPA & Global Privacy Standards</div>
              <div>•</div>
              <div><strong>Data Sale Policy:</strong> We Do NOT Sell Personal Data</div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="fn-static-layout">
            {/* Sidebar Sticky TOC */}
            <aside className="fn-static-toc">
              <h3 className="fn-static-toc-title">PRIVACY INDEX</h3>
              <ul className="fn-static-toc-list">
                <li className="fn-static-toc-item"><a href="#data-collection">1. Data We Collect</a></li>
                <li className="fn-static-toc-item"><a href="#data-usage">2. How Data is Used</a></li>
                <li className="fn-static-toc-item"><a href="#cookies">3. Cookies & Analytics</a></li>
                <li className="fn-static-toc-item"><a href="#third-parties">4. Third-Party Partners</a></li>
                <li className="fn-static-toc-item"><a href="#user-rights">5. Your Privacy Rights</a></li>
                <li className="fn-static-toc-item"><a href="#dpo">6. Data Protection Officer</a></li>
              </ul>
            </aside>

            {/* Content Body */}
            <div className="fn-static-content">
              <section id="data-collection" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">01</span> Personal Data We Collect
                </h2>
                <p>
                  We collect information to provide better editorial services, deliver breaking news alerts, and maintain site functionality:
                </p>
                <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8" }}>
                  <li><strong>Account Data:</strong> Email address, subscription preferences, and billing records when subscribing to premium newsletters.</li>
                  <li><strong>Technical Data:</strong> IP address, device type, browser specifications, and referral URLs collected automatically via web logs.</li>
                  <li><strong>Interactive Data:</strong> Reading preferences, bookmarked categories, and newsletter opening metrics.</li>
                </ul>
              </section>

              <section id="data-usage" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">02</span> How We Use Your Data
                </h2>
                <p>SecNewsM uses collected information strictly for operational and editorial purposes:</p>
                <div className="fn-static-box">
                  <ul style={{ fontSize: "13.5px", color: "#404040", paddingLeft: "18px", lineHeight: "1.7" }}>
                    <li>Delivering daily briefings and breaking news notifications requested by you.</li>
                    <li>Processing payments and managing digital subscriptions securely.</li>
                    <li>Analyzing site traffic trends to optimize server performance and site navigation.</li>
                    <li>Preventing fraud, paywall abuse, and malicious cyber attacks.</li>
                  </ul>
                </div>
              </section>

              <section id="cookies" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">03</span> Cookies & Tracking Technologies
                </h2>
                <p>
                  We use cookies and similar technologies to preserve your reading preferences, maintain logged-in sessions, and gather anonymous analytics metrics. You can manage or disable non-essential cookies at any time via your browser settings.
                </p>
              </section>

              <section id="third-parties" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">04</span> Third-Party Service Providers
                </h2>
                <p>
                  We do not sell, rent, or trade personal data to third-party data brokers. We share necessary data only with trusted infrastructure providers (payment processors, cloud storage providers, security firewalls) under strict confidentiality agreements.
                </p>
              </section>

              <section id="user-rights" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">05</span> Your Privacy Rights (GDPR & CCPA)
                </h2>
                <p>Depending on your location, you hold the following rights regarding your personal data:</p>
                <div className="fn-static-grid-2" style={{ marginTop: "14px" }}>
                  <div className="fn-static-card">
                    <h3 className="fn-static-card-title">Right to Access & Export</h3>
                    <p style={{ fontSize: "13px", color: "#525252" }}>
                      Request a copy of all personal data held by SecNewsM in a portable format.
                    </p>
                  </div>
                  <div className="fn-static-card">
                    <h3 className="fn-static-card-title">Right to Erasure (&quot;Right to be Forgotten&quot;)</h3>
                    <p style={{ fontSize: "13px", color: "#525252" }}>
                      Request complete deletion of your account records and newsletter history.
                    </p>
                  </div>
                </div>
              </section>

              <section id="dpo" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">06</span> Data Protection Contacts
                </h2>
                <p>
                  For privacy inquiries, data access requests, or opt-out notices, contact our Data Protection Officer:
                </p>
                <div className="fn-static-card" style={{ marginTop: "14px" }}>
                  <div style={{ fontWeight: "700", color: "#171717" }}>Data Protection Officer</div>
                  <div style={{ color: "#dc2626", fontWeight: "600", marginTop: "4px" }}>privacy@secnewsm.com</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
