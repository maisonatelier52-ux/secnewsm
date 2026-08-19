import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ownership & Funding Disclosure — SecNewsM",
  description: "Read SecNewsM's transparent disclosure regarding corporate ownership, revenue models, financial independence, and advertiser firewalls.",
};

export default function OwnershipAndFundingPage() {
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
              <span>Ownership & Funding</span>
            </div>

            <div className="fn-static-header-row">
              <div className="fn-static-accent-bar" />
              <div>
                <h1 className="fn-static-title">Ownership & Funding Disclosure</h1>
                <p className="fn-static-subtitle">
                  SecNewsM is committed to full financial transparency. We believe our readers have a fundamental right to know how our newsroom is funded and governed.
                </p>
              </div>
            </div>

            <div className="fn-static-meta-bar">
              <div><strong>Transparency Rating:</strong> 100% Full Public Disclosure</div>
              <div>•</div>
              <div><strong>Firewall Status:</strong> Legally Enforced Editorial Wall</div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="fn-static-layout">
            {/* Sidebar Sticky TOC */}
            <aside className="fn-static-toc">
              <h3 className="fn-static-toc-title">IN THIS DISCLOSURE</h3>
              <ul className="fn-static-toc-list">
                <li className="fn-static-toc-item"><a href="#structure">1. Corporate Structure</a></li>
                <li className="fn-static-toc-item"><a href="#revenue">2. Revenue Breakdown</a></li>
                <li className="fn-static-toc-item"><a href="#firewall">3. Commercial Firewall</a></li>
                <li className="fn-static-toc-item"><a href="#grants">4. Philanthropic Grants</a></li>
                <li className="fn-static-toc-item"><a href="#conflicts">5. Conflict Disclosures</a></li>
              </ul>
            </aside>

            {/* Content Body */}
            <div className="fn-static-content">
              <section id="structure" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">01</span> Ownership & Governance
                </h2>
                <p>
                  SecNewsM is owned by <strong>Maison Atelier Media Group</strong>, a private media holding company dedicated to independent digital publishing and journalism technology. No foreign government entity, state-owned enterprise, or political party holds equity, debt instruments, or governing seats within our parent corporation.
                </p>
              </section>

              <section id="revenue" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">02</span> Revenue Model Breakdown
                </h2>
                <p>
                  To protect our reporting against sudden economic shifts or targeted advertiser boycotts, SecNewsM maintains a diversified, multi-stream revenue architecture:
                </p>

                <div className="fn-static-grid-2">
                  <div className="fn-static-card">
                    <h3 className="fn-static-card-title">
                      <span style={{ color: "#dc2626" }}>45%</span> Direct Subscriptions
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "#525252" }}>
                      Reader-funded individual and enterprise subscriptions for executive briefings, market analysis, and premium newsletters.
                    </p>
                  </div>

                  <div className="fn-static-card">
                    <h3 className="fn-static-card-title">
                      <span style={{ color: "#dc2626" }}>30%</span> Digital Advertising
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "#525252" }}>
                      Programmatic display banners and premium brand sponsorships delivered via strict privacy-compliant ad exchanges.
                    </p>
                  </div>

                  <div className="fn-static-card">
                    <h3 className="fn-static-card-title">
                      <span style={{ color: "#dc2626" }}>15%</span> Content Syndication
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "#525252" }}>
                      Licensing news feeds, research databases, and visual photo essays to academic institutions and global wire services.
                    </p>
                  </div>

                  <div className="fn-static-card">
                    <h3 className="fn-static-card-title">
                      <span style={{ color: "#dc2626" }}>10%</span> Events & Symposia
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "#525252" }}>
                      Registration fees and corporate sponsorships for annual policy forums, leadership roundtables, and tech summits.
                    </p>
                  </div>
                </div>
              </section>

              <section id="firewall" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">03</span> Strict Commercial Editorial Firewall
                </h2>
                <p>
                  Our commercial sales representatives and advertising teams operate in complete isolation from the editorial newsroom. Advertisers, corporate sponsors, and investors:
                </p>
                <div className="fn-static-box">
                  <ul style={{ fontSize: "13.5px", color: "#404040", paddingLeft: "18px", lineHeight: "1.7" }}>
                    <li>Have <strong>zero advance preview rights</strong> for investigative reports, news stories, or reviews.</li>
                    <li>Cannot influence story assignment, framing, or headline choices.</li>
                    <li>Cannot secure favorable coverage or suppress negative coverage through financial leverage.</li>
                  </ul>
                </div>
              </section>

              <section id="grants" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">04</span> Investigative Grants Policy
                </h2>
                <p>
                  From time to time, SecNewsM accepts non-partisan philanthropic journalism grants to fund costly deep-dive investigative projects. All grant funds are accepted with explicit contractual clauses stating that grantmakers exert zero editorial control over the resulting coverage.
                </p>
              </section>

              <section id="conflicts" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">05</span> Staff Financial Disclosures
                </h2>
                <p>
                  All SecNewsM financial reporters, editors, and columnists are prohibited from trading individual stocks or financial instruments in sectors they actively cover. Any broader holdings must be disclosed to the Editor-in-Chief.
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
