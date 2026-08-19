import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Right of Reply Policy — SecNewsM",
  description: "Understand SecNewsM's Right of Reply policy, submission standards, timeframe for responses, and fairness commitment for subjects of reporting.",
};

export default function RightOfReplyPolicyPage() {
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
              <span>Editorial Standards</span>
              <span>/</span>
              <span>Right of Reply Policy</span>
            </div>

            <div className="fn-static-header-row">
              <div className="fn-static-accent-bar" />
              <div>
                <h1 className="fn-static-title">Right of Reply Policy</h1>
                <p className="fn-static-subtitle">
                  SecNewsM is committed to fundamental fairness. Individuals, corporations, or public entities subject to critical allegations or investigative findings are provided reasonable opportunity to respond prior to publication.
                </p>
              </div>
            </div>

            <div className="fn-static-meta-bar">
              <div><strong>Core Principle:</strong> Audi Alteram Partem (Hear Both Sides)</div>
              <div>•</div>
              <div><strong>Standard Notice Window:</strong> Minimum 24 to 72 Hours</div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="fn-static-layout">
            {/* Sidebar Sticky TOC */}
            <aside className="fn-static-toc">
              <h3 className="fn-static-toc-title">POLICY SECTIONS</h3>
              <ul className="fn-static-toc-list">
                <li className="fn-static-toc-item"><a href="#scope">1. Scope & Application</a></li>
                <li className="fn-static-toc-item"><a href="#protocol">2. Pre-Publication Protocol</a></li>
                <li className="fn-static-toc-item"><a href="#post-pub">3. Post-Publication Responses</a></li>
                <li className="fn-static-toc-item"><a href="#guidelines">4. Submission Requirements</a></li>
                <li className="fn-static-toc-item"><a href="#contact-desk">5. How to File a Reply</a></li>
              </ul>
            </aside>

            {/* Content Body */}
            <div className="fn-static-content">
              <section id="scope" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">01</span> Scope & When Right of Reply Applies
                </h2>
                <p>
                  Right of Reply applies whenever SecNewsM intends to publish reporting containing significant allegations of misconduct, illegal activity, financial impropriety, professional negligence, or severe personal criticism targeting an identifiable individual or organization.
                </p>
              </section>

              <section id="protocol" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">02</span> Pre-Publication Notification Protocol
                </h2>
                <p>
                  Our investigative journalists and editors must contact the subject of critical coverage before publication, setting out the detailed substance of the allegations in clear, specific terms.
                </p>
                <div className="fn-static-box">
                  <div className="fn-static-box-title">Response Timelines</div>
                  <p style={{ fontSize: "13.5px", color: "#404040" }}>
                    Subjects are provided a fair and reasonable deadline to respond—typically <strong>24 to 72 hours</strong> depending on story urgency and complexity. In breaking news scenarios involving public safety, a shorter, documented outreach effort is made.
                  </p>
                </div>
              </section>

              <section id="post-pub" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">03</span> Post-Publication Statements & Updates
                </h2>
                <p>
                  If a subject submits a response after publication, or if new evidence materializes following outreach, SecNewsM will review the response promptly. If substantive, the article will be updated to reflect the statement prominently alongside the original reporting.
                </p>
              </section>

              <section id="guidelines" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">04</span> Requirements for Right of Reply Submissions
                </h2>
                <p>To ensure constructive editorial evaluation, formal responses must fulfill the following criteria:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8" }}>
                  <li>Be submitted by an authorized representative or the subject directly.</li>
                  <li>Address the specific factual claims or allegations directly without incorporating extraneous personal attacks or irrelevant commentary.</li>
                  <li>Be concise (typically capped at 500 words for inline article quotation).</li>
                </ul>
              </section>

              <section id="contact-desk" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">05</span> Submitting a Right of Reply Request
                </h2>
                <p>
                  To file a formal Right of Reply statement regarding a published or upcoming SecNewsM article, contact our Editorial Standards Desk:
                </p>

                <div className="fn-static-card" style={{ marginTop: "16px" }}>
                  <div style={{ fontWeight: "700", color: "#171717", fontSize: "15px" }}>Editorial Standards Desk</div>
                  <div style={{ color: "#dc2626", fontWeight: "600", marginTop: "4px" }}>reply@secnewsm.com</div>
                  <p style={{ fontSize: "12.5px", color: "#737373", marginTop: "8px" }}>
                    Please include the article headline, URL link, specific paragraph references, and official contact phone/email for verification.
                  </p>
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
