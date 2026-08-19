import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Source Methodology — SecNewsM",
  description: "Learn how SecNewsM verifies sources, authenticates primary documents, handles anonymous informants, and ensures factual precision.",
};

export default function SourceMethodologyPage() {
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
              <span>Source Methodology</span>
            </div>

            <div className="fn-static-header-row">
              <div className="fn-static-accent-bar" />
              <div>
                <h1 className="fn-static-title">Source Methodology & Verification Guide</h1>
                <p className="fn-static-subtitle">
                  A transparent breakdown of how SecNewsM journalists identify primary sources, vet confidential whistleblowers, authenticate data, and corroborate facts.
                </p>
              </div>
            </div>

            <div className="fn-static-meta-bar">
              <div><strong>Standard:</strong> Dual-Independent Verification Rule</div>
              <div>•</div>
              <div><strong>Document Protocol:</strong> Cryptographic & Forensic Validation</div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="fn-static-layout">
            {/* Sidebar Sticky TOC */}
            <aside className="fn-static-toc">
              <h3 className="fn-static-toc-title">METHODOLOGY INDEX</h3>
              <ul className="fn-static-toc-list">
                <li className="fn-static-toc-item"><a href="#hierarchy">1. Source Hierarchy</a></li>
                <li className="fn-static-toc-item"><a href="#anonymous">2. Anonymous Sourcing Protocol</a></li>
                <li className="fn-static-toc-item"><a href="#document-vetting">3. Document Authentication</a></li>
                <li className="fn-static-toc-item"><a href="#data-lab">4. Data Journalism & Statistics</a></li>
                <li className="fn-static-toc-item"><a href="#ground-reporting">5. On-the-Ground Verification</a></li>
              </ul>
            </aside>

            {/* Content Body */}
            <div className="fn-static-content">
              <section id="hierarchy" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">01</span> The SecNewsM Source Hierarchy
                </h2>
                <p>
                  We prioritize primary sources with direct, firsthand knowledge of events, policy deliberations, or corporate transactions:
                </p>
                <div className="fn-static-grid-2" style={{ marginTop: "14px" }}>
                  <div className="fn-static-card">
                    <h3 className="fn-static-card-title">
                      <span style={{ color: "#dc2626" }}>Tier 1</span> Primary Direct Sources
                    </h3>
                    <p style={{ fontSize: "13px", color: "#525252" }}>
                      Official documents, court filings, audited SEC disclosures, eye-witness testimonies, and recorded interviews.
                    </p>
                  </div>
                  <div className="fn-static-card">
                    <h3 className="fn-static-card-title">
                      <span style={{ color: "#dc2626" }}>Tier 2</span> Vetted Background Informants
                    </h3>
                    <p style={{ fontSize: "13px", color: "#525252" }}>
                      Senior officials, domain experts, and industry whistleblowers whose identities are known to editors.
                    </p>
                  </div>
                </div>
              </section>

              <section id="anonymous" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">02</span> Anonymous Sourcing Protocol
                </h2>
                <p>
                  Anonymous sourcing is a powerful journalistic tool used to expose corruption and bring vital facts to light. However, un-named sourcing is used as a last resort, never a convenience.
                </p>

                <div className="fn-static-box">
                  <div className="fn-static-box-title">4 Mandatory Conditions for Anonymity</div>
                  <ol style={{ fontSize: "13.5px", color: "#404040", paddingLeft: "18px", lineHeight: "1.8" }}>
                    <li>The information is vital to public interest and cannot be obtained on-the-record.</li>
                    <li>The source faces genuine risk of physical harm, wrongful termination, or legal reprisal.</li>
                    <li>The source&apos;s real identity is disclosed to and verified by at least one Senior Editor.</li>
                    <li>The article explicitly explains to readers <em>why</em> anonymity was granted.</li>
                  </ol>
                </div>
              </section>

              <section id="document-vetting" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">03</span> Document & Record Authentication
                </h2>
                <p>
                  Leaked files, government transcripts, or internal memos undergo rigorous forensic checks before publication. Our investigative team verifies metadata, digital signatures, sender IP trails, and physical stamps to rule out forgery or disinformation.
                </p>
              </section>

              <section id="data-lab" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">04</span> Data Journalism & Statistical Auditing
                </h2>
                <p>
                  When reporting on economic indicators, clinical trials, or market projections, SecNewsM data journalists cross-reference raw datasets against peer-reviewed methodologies and independent econometric models.
                </p>
              </section>

              <section id="ground-reporting" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">05</span> On-the-Ground Foreign Correspondence
                </h2>
                <p>
                  Our international dispatches rely on accredited correspondents based in conflict zones, political capitals, and emerging trade hubs who report directly from primary locations rather than synthesizing secondhand aggregations.
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
