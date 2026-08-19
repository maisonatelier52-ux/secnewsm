import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertising & Sponsored Content Policy — SecNewsM",
  description: "Read SecNewsM's guidelines for commercial advertising, sponsored articles, partner disclosures, and editorial independence.",
};

export default function AdvertisingPolicyPage() {
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
              <span>Advertising Policy</span>
            </div>

            <div className="fn-static-header-row">
              <div className="fn-static-accent-bar" />
              <div>
                <h1 className="fn-static-title">Advertising & Sponsored Policy</h1>
                <p className="fn-static-subtitle">
                  SecNewsM maintains clear distinctions between independent journalism and commercial advertising. Here are our standards for sponsors, partners, and display advertisers.
                </p>
              </div>
            </div>

            <div className="fn-static-meta-bar">
              <div><strong>Labeling Mandate:</strong> Explicit & Unambiguous Disclosure</div>
              <div>•</div>
              <div><strong>Editorial Independence:</strong> Zero Advertiser Influence</div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="fn-static-layout">
            {/* Sidebar Sticky TOC */}
            <aside className="fn-static-toc">
              <h3 className="fn-static-toc-title">POLICY INDEX</h3>
              <ul className="fn-static-toc-list">
                <li className="fn-static-toc-item"><a href="#separation">1. Separation of Church & State</a></li>
                <li className="fn-static-toc-item"><a href="#labeling">2. Clear Labeling Standards</a></li>
                <li className="fn-static-toc-item"><a href="#prohibited">3. Prohibited Ad Categories</a></li>
                <li className="fn-static-toc-item"><a href="#partner-content">4. Native & Partner Content</a></li>
                <li className="fn-static-toc-item"><a href="#ad-feedback">5. Reader Complaints Channel</a></li>
              </ul>
            </aside>

            {/* Content Body */}
            <div className="fn-static-content">
              <section id="separation" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">01</span> Separation of Editorial and Commercial Interests
                </h2>
                <p>
                  SecNewsM&apos;s editorial newsroom operates with total independence from our commercial advertising team. Advertisers have no influence over story selection, investigative investigations, or editorial positions.
                </p>
              </section>

              <section id="labeling" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">02</span> Mandatory Labeling Standards
                </h2>
                <p>
                  To ensure readers are never misled, all paid or sponsored material is clearly demarcated with prominent visual indicators:
                </p>

                <div className="fn-static-box">
                  <div className="fn-static-box-title">Standard Visual Tags</div>
                  <ul style={{ fontSize: "13.5px", color: "#404040", paddingLeft: "18px", lineHeight: "1.8" }}>
                    <li><strong>&quot;SPONSORED CONTENT&quot;:</strong> Paid articles created by or in collaboration with a commercial sponsor.</li>
                    <li><strong>&quot;ADVERTISER CONTENT&quot;:</strong> Promotional pieces provided directly by an advertiser.</li>
                    <li><strong>&quot;PARTNER STUDIO&quot;:</strong> Special features developed with commercial grant funding.</li>
                  </ul>
                </div>
              </section>

              <section id="prohibited" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">03</span> Prohibited Advertising Categories
                </h2>
                <p>SecNewsM strictly rejects advertisements that involve:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "10px", lineHeight: "1.8" }}>
                  <li>Deceptive or unverified financial get-rich-quick schemes.</li>
                  <li>Illegal products, hazardous weapons, or unregulated pharmaceuticals.</li>
                  <li>Hate speech, malicious malware, or predatory software downloads.</li>
                  <li>Political ad campaigns that disguise identity or source of funding.</li>
                </ul>
              </section>

              <section id="partner-content" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">04</span> Native & Custom Partner Content
                </h2>
                <p>
                  Custom content produced by our commercial studio is handled by dedicated non-editorial copywriters. Newsroom staff journalists are not permitted to write or produce commercial sponsored content for advertisers.
                </p>
              </section>

              <section id="ad-feedback" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">05</span> Reader Ad Complaints Channel
                </h2>
                <p>
                  If you encounter an advertisement on SecNewsM that appears misleading, offensive, or technically intrusive, notify our ad operations team:
                </p>

                <div className="fn-static-card" style={{ marginTop: "14px" }}>
                  <div style={{ fontWeight: "700", color: "#171717" }}>Ad Operations & Safety Desk</div>
                  <div style={{ color: "#dc2626", fontWeight: "600", marginTop: "4px" }}>adsafety@secnewsm.com</div>
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
