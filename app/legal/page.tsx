import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Information & Disclosures — SecNewsM",
  description: "Official legal disclosures, copyright agent notices, DMCA compliance, libel protocols, and regulatory details for SecNewsM.",
};

export default function LegalPage() {
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
              <span>Legal Disclosures</span>
            </div>

            <div className="fn-static-header-row">
              <div className="fn-static-accent-bar" />
              <div>
                <h1 className="fn-static-title">Legal Information & Disclosures</h1>
                <p className="fn-static-subtitle">
                  Corporate regulatory notices, Digital Millennium Copyright Act (DMCA) procedures, trademark declarations, and editorial liability statements.
                </p>
              </div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="fn-static-layout">
            {/* Sidebar Sticky TOC */}
            <aside className="fn-static-toc">
              <h3 className="fn-static-toc-title">LEGAL INDEX</h3>
              <ul className="fn-static-toc-list">
                <li className="fn-static-toc-item"><a href="#corporate">Corporate Identity</a></li>
                <li className="fn-static-toc-item"><a href="#dmca">DMCA & Copyright Takedowns</a></li>
                <li className="fn-static-toc-item"><a href="#trademarks">Trademarks & Brand Rights</a></li>
                <li className="fn-static-toc-item"><a href="#financial-disclaimer">Financial Disclaimer</a></li>
                <li className="fn-static-toc-item"><a href="#external">External Content Links</a></li>
              </ul>
            </aside>

            {/* Content Body */}
            <div className="fn-static-content">
              <section id="corporate" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">01</span> Corporate Identity & Publisher Notice
                </h2>
                <p>
                  SecNewsM is an independent publishing platform. All publications, audio podcasts, newsletter broadcasts, and market analytics produced under the SecNewsM header are protected under international intellectual property frameworks.
                </p>
              </section>

              <section id="dmca" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">02</span> DMCA & Copyright Policy
                </h2>
                <p>
                  SecNewsM respects the intellectual property of authors, photojournalists, and creators. If you believe your copyrighted work has been copied in a way that constitutes copyright infringement, please notify our Designated Copyright Agent.
                </p>

                <div className="fn-static-box">
                  <div className="fn-static-box-title">Required DMCA Notice Information</div>
                  <ul style={{ fontSize: "13.5px", color: "#404040", paddingLeft: "18px", lineHeight: "1.7" }}>
                    <li>Identification of the copyrighted work claimed to have been infringed.</li>
                    <li>Direct URL link on SecNewsM where the material is located.</li>
                    <li>Your official contact email and statement of good faith belief.</li>
                  </ul>
                  <p style={{ marginTop: "10px", fontSize: "13px", fontWeight: "600" }}>
                    Submit DMCA Notices to: <span style={{ color: "#dc2626" }}>legal@secnewsm.com</span>
                  </p>
                </div>
              </section>

              <section id="trademarks" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">03</span> Trademarks & Brand Usage
                </h2>
                <p>
                  &quot;SecNewsM&quot;, the SecNewsM play emblem logo, and section branding are registered trademarks. Unauthorized use of SecNewsM logos, headers, or styling to impersonate our newsroom or deceive readers is strictly prohibited and subject to legal action.
                </p>
              </section>

              <section id="financial-disclaimer" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">04</span> Financial & Market Reporting Disclaimer
                </h2>
                <p>
                  Articles covering equities, commodities, cryptocurrencies, or venture markets are intended for general editorial news purposes only. SecNewsM is not registered as a broker-dealer or investment advisor. Readers should consult certified financial advisors before making investment decisions.
                </p>
              </section>

              <section id="external" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">05</span> External Links & Third-Party References
                </h2>
                <p>
                  Our dispatches contain hyperlinks to primary sources, research repositories, government transcripts, and external news outlets. SecNewsM holds no responsibility for the accuracy or privacy practices of external third-party domains.
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
