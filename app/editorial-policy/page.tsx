import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy & Ethics — SecNewsM",
  description: "Read SecNewsM's editorial code of ethics, newsgathering standards, fact-checking workflows, AI usage guidelines, and corrections policy.",
};

export default function EditorialPolicyPage() {
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
              <span>About Us</span>
              <span>/</span>
              <span>Editorial Policy</span>
            </div>

            <div className="fn-static-header-row">
              <div className="fn-static-accent-bar" />
              <div>
                <h1 className="fn-static-title">Editorial Policy & Code of Ethics</h1>
                <p className="fn-static-subtitle">
                  The principles, standards, and verification processes that govern every article, dispatch, investigation, and analysis published by SecNewsM.
                </p>
              </div>
            </div>

            <div className="fn-static-meta-bar">
              <div><strong>Code Standard:</strong> IFJ & SPJ Global Journalism Charter</div>
              <div>•</div>
              <div><strong>Fact Check Mandate:</strong> Multi-Source Independent Verification</div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="fn-static-layout">
            {/* Sidebar Sticky TOC */}
            <aside className="fn-static-toc">
              <h3 className="fn-static-toc-title">CHARTER INDEX</h3>
              <ul className="fn-static-toc-list">
                <li className="fn-static-toc-item"><a href="#objectivity">1. Objectivity & Fairness</a></li>
                <li className="fn-static-toc-item"><a href="#factcheck">2. Fact-Checking Standards</a></li>
                <li className="fn-static-toc-item"><a href="#corrections">3. Corrections & Clarifications</a></li>
                <li className="fn-static-toc-item"><a href="#ai-policy">4. AI & Generative Tech Rules</a></li>
                <li className="fn-static-toc-item"><a href="#sources">5. Confidential Sourcing</a></li>
                <li className="fn-static-toc-item"><a href="#conflicts-code">6. Personal Conflicts of Interest</a></li>
              </ul>
            </aside>

            {/* Content Body */}
            <div className="fn-static-content">
              <section id="objectivity" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">01</span> Objectivity & Impartiality
                </h2>
                <p>
                  SecNewsM strives to deliver objective, evidence-based reporting. We do not align with any political party, corporate conglomerate, or ideological movement. News reporting is strictly demarcated from opinion, analysis, and column pieces.
                </p>
              </section>

              <section id="factcheck" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">02</span> Fact-Checking & Verification Standards
                </h2>
                <p>
                  No factual statement is published on SecNewsM without rigorous verification. Factual claims require corroboration by at least two independent primary sources or official documentation (e.g. court filings, regulatory datasets, audited balance sheets, official transcripts).
                </p>

                <div className="fn-static-box">
                  <div className="fn-static-box-title">Verification Checklist</div>
                  <ul style={{ fontSize: "13.5px", color: "#404040", paddingLeft: "18px", lineHeight: "1.7" }}>
                    <li>Primary document verification (FOIA requests, SEC disclosures).</li>
                    <li>Technical data auditing by subject-matter domain experts.</li>
                    <li>Editor-in-Chief review for sensitive geopolitical or legal dispatches.</li>
                  </ul>
                </div>
              </section>

              <section id="corrections" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">03</span> Corrections & Clarifications Policy
                </h2>
                <p>
                  When a factual error occurs, SecNewsM corrects it promptly and transparently. We do not unannouncedly alter text or &quot;stealth edit&quot; published stories.
                </p>
                <p style={{ marginTop: "10px" }}>
                  Corrections are flagged at the bottom or top of the article with a clear note specifying the nature of the error, the correct information, and the exact timestamp when the correction was applied.
                </p>
              </section>

              <section id="ai-policy" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">04</span> AI & Generative Technology Guidelines
                </h2>
                <p>
                  While SecNewsM utilizes modern technological tools for data sorting, language translation, and archival indexing:
                </p>
                <div className="fn-static-card" style={{ marginTop: "14px" }}>
                  <ul style={{ fontSize: "13.5px", color: "#404040", paddingLeft: "18px", lineHeight: "1.8" }}>
                    <li><strong>No AI-Generated Bylines:</strong> Every article published under a reporter byline is researched and drafted by human journalists.</li>
                    <li><strong>Human Oversight Mandatory:</strong> Automated tools are never permitted to publish content directly without editor sign-off.</li>
                    <li><strong>No Synthetic Deepfakes:</strong> Photorealistic AI images or synthetic voice tracks are strictly prohibited in news reporting.</li>
                  </ul>
                </div>
              </section>

              <section id="sources" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">05</span> Confidential Anonymous Sourcing
                </h2>
                <p>
                  We prefer on-the-record sources whenever possible. Confidentiality is granted only when the source faces physical, legal, or professional retaliation, and the information is vital to the public interest. To learn more, view our <Link href="/source-methodology" style={{ color: "#dc2626", fontWeight: 600 }}>Source Methodology Guide</Link>.
                </p>
              </section>

              <section id="conflicts-code" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">06</span> Personal Conflicts of Interest
                </h2>
                <p>
                  SecNewsM journalists may not accept gifts, paid trips, favored financial allocations, or personal favors from subjects of reporting. Any potential conflict of interest must be disclosed immediately to executive editors.
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
