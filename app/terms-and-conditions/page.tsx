import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — SecNewsM",
  description: "Read the official Terms and Conditions governing your use of SecNewsM digital services, articles, media assets, and interactive features.",
};

export default function TermsAndConditionsPage() {
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
              <span>Terms & Conditions</span>
            </div>

            <div className="fn-static-header-row">
              <div className="fn-static-accent-bar" />
              <div>
                <h1 className="fn-static-title">Terms & Conditions of Service</h1>
                <p className="fn-static-subtitle">
                  Please read these Terms and Conditions carefully before accessing or using SecNewsM&apos;s digital platform, mobile features, newsletters, and syndicated feeds.
                </p>
              </div>
            </div>

            <div className="fn-static-meta-bar">
              <div><strong>Effective Date:</strong> January 1, 2026</div>
              <div>•</div>
              <div><strong>Version:</strong> 4.2</div>
              <div>•</div>
              <div><strong>Scope:</strong> Global Digital Properties</div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="fn-static-layout">
            {/* Sidebar Sticky TOC */}
            <aside className="fn-static-toc">
              <h3 className="fn-static-toc-title">SECTIONS</h3>
              <ul className="fn-static-toc-list">
                <li className="fn-static-toc-item"><a href="#acceptance">1. Acceptance of Terms</a></li>
                <li className="fn-static-toc-item"><a href="#ip">2. Intellectual Property</a></li>
                <li className="fn-static-toc-item"><a href="#usage">3. Permitted & Prohibited Use</a></li>
                <li className="fn-static-toc-item"><a href="#submissions">4. User Submissions & Comments</a></li>
                <li className="fn-static-toc-item"><a href="#subscriptions">5. Subscriptions & Payments</a></li>
                <li className="fn-static-toc-item"><a href="#liability">6. Disclaimers & Liability</a></li>
                <li className="fn-static-toc-item"><a href="#governing">7. Governing Law</a></li>
              </ul>
            </aside>

            {/* Content Body */}
            <div className="fn-static-content">
              <section id="acceptance" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">01</span> Acceptance of Agreement
                </h2>
                <p>
                  By accessing, browsing, or creating an account on SecNewsM (referred to as &quot;the Service&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must immediately cease all access to the site.
                </p>
              </section>

              <section id="ip" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">02</span> Intellectual Property Rights
                </h2>
                <p>
                  All content published on SecNewsM—including text, graphics, logos, photos, audio clips, video broadcasts, software code, and data visualizers—is the property of SecNewsM or its content suppliers and is protected under international copyright, trademark, and database protection laws.
                </p>
                <div className="fn-static-box">
                  <div className="fn-static-box-title">Reprint & Quotation Rules</div>
                  <p style={{ fontSize: "13.5px", color: "#404040" }}>
                    Brief excerpts (up to 150 words) may be quoted for journalistic, educational, or critique purposes provided that clear hyperlinked attribution is given to <strong>SecNewsM</strong>. Full article re-publishing requires written licensing permission from our syndication team.
                  </p>
                </div>
              </section>

              <section id="usage" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">03</span> Permitted & Prohibited Use
                </h2>
                <p>You agree to use our digital properties exclusively for lawful, non-commercial personal purposes. You specifically agree NOT to:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8" }}>
                  <li>Scrape, extract, or mine data or articles using automated scrapers, bots, or AI scrapers without explicit API contracts.</li>
                  <li>Attempt to disrupt site security, bypass subscription paywalls, or alter editorial layout.</li>
                  <li>Distribute defamatory, obscene, harassing, or illegal material via interactive comment sections.</li>
                </ul>
              </section>

              <section id="submissions" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">04</span> User Submissions & Reader Comments
                </h2>
                <p>
                  Any commentary, letters to the editor, or opinion responses submitted to SecNewsM grant us a non-exclusive, worldwide, royalty-free license to publish, archive, or syndicate your submission across our digital network.
                </p>
              </section>

              <section id="subscriptions" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">05</span> Subscriptions & Payments
                </h2>
                <p>
                  Premium newsletters and briefing passes are billed on a recurring monthly or annual basis. Cancellations take effect at the end of the current billing cycle. Refund requests for unused partial billing periods are handled according to our customer service policy.
                </p>
              </section>

              <section id="liability" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">06</span> Limitation of Liability
                </h2>
                <p>
                  Articles on SecNewsM are published for informational and educational purposes. Financial, legal, or market reporting does not constitute individualized investment or financial advice. SecNewsM is not liable for financial decisions made based on published analysis.
                </p>
              </section>

              <section id="governing" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">07</span> Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance with international media law and applicable jurisdictions, without giving effect to conflict of law principles.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
