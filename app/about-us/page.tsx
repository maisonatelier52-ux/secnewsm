import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — SecNewsM",
  description: "Learn about SecNewsM's mission, journalistic principles, editorial independence, global news coverage, and commitment to factual reporting.",
};

export default function AboutUsPage() {
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
            </div>

            <div className="fn-static-header-row">
              <div className="fn-static-accent-bar" />
              <div>
                <h1 className="fn-static-title">About SecNewsM</h1>
                <p className="fn-static-subtitle">
                  SecNewsM is an independent digital news institution dedicated to delivers rigourous, impartial reporting, deep geopolitical analysis, and market-defining insights to millions of readers around the globe.
                </p>
              </div>
            </div>

            <div className="fn-static-meta-bar">
              <div className="fn-static-meta-item">
                <strong>Founded:</strong> 2021
              </div>
              <div>•</div>
              <div className="fn-static-meta-item">
                <strong>Newsroom Ethos:</strong> Uncompromising Independence & Verification
              </div>
              <div>•</div>
              <div className="fn-static-meta-item">
                <strong>Coverage:</strong> Global Markets, Tech, Geopolitics & Culture
              </div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="fn-static-layout">
            {/* Sidebar Sticky TOC */}
            <aside className="fn-static-toc">
              <h3 className="fn-static-toc-title">ON THIS PAGE</h3>
              <ul className="fn-static-toc-list">
                <li className="fn-static-toc-item"><a href="#mission">Our Journalistic Mission</a></li>
                <li className="fn-static-toc-item"><a href="#pillars">Core Editorial Pillars</a></li>
                <li className="fn-static-toc-item"><a href="#impact">Global Reach & Impact</a></li>
                <li className="fn-static-toc-item"><a href="#independence">Ownership & Independence</a></li>
                <li className="fn-static-toc-item"><a href="#standards">Commitment to Factuality</a></li>
              </ul>
            </aside>

            {/* Content Body */}
            <div className="fn-static-content">
              {/* Mission */}
              <section id="mission" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">01</span> Our Journalistic Mission
                </h2>
                <p>
                  In an era dominated by instantaneous information, click-driven headlines, and algorithmic bias, <strong>SecNewsM</strong> stands as a sanctuary of verified, analytical, and deeply researched journalism. We believe that an informed public is the bedrock of democratic accountability, global stability, and economic progress.
                </p>
                <p style={{ marginTop: "14px" }}>
                  Our newsroom operates around the clock to track breaking developments across international trade, political summits, technological breakthroughs, and societal shifts. We prioritize context over speed, accuracy over sensation, and depth over noise.
                </p>

                <div className="fn-static-box">
                  <div className="fn-static-box-title">The SecNewsM Promise</div>
                  <p style={{ fontSize: "14px", color: "#404040" }}>
                    "Every article published by SecNewsM undergoes multi-layer editorial review, rigorous source verification, and transparent disclosure of data sources. We earn our readers&apos; trust anew with every story we break."
                  </p>
                </div>
              </section>

              {/* Pillars */}
              <section id="pillars" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">02</span> Core Editorial Pillars
                </h2>
                <div className="fn-static-grid-2">
                  <div className="fn-static-card">
                    <h3 className="fn-static-card-title">
                      <span style={{ color: "#dc2626" }}>✦</span> Absolute Truth & Verification
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "#525252", lineHeight: "1.6" }}>
                      We hold all claims to double-source standards. Anonymous sources are strictly scrutinized and utilized only when public interest requires protection of identity.
                    </p>
                  </div>

                  <div className="fn-static-card">
                    <h3 className="fn-static-card-title">
                      <span style={{ color: "#dc2626" }}>✦</span> Geopolitical Neutrality
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "#525252", lineHeight: "1.6" }}>
                      Our reporting remains untethered to partisan political agendas, nationalistic bias, or special interest lobbies. We present facts fairly from all angles.
                    </p>
                  </div>

                  <div className="fn-static-card">
                    <h3 className="fn-static-card-title">
                      <span style={{ color: "#dc2626" }}>✦</span> Deep Market Intelligence
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "#525252", lineHeight: "1.6" }}>
                      We contextualize macro-economic policies, venture funding, energy transitions, and enterprise shifts for executives and curious readers alike.
                    </p>
                  </div>

                  <div className="fn-static-card">
                    <h3 className="fn-static-card-title">
                      <span style={{ color: "#dc2626" }}>✦</span> Radical Transparency
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "#525252", lineHeight: "1.6" }}>
                      When errors occur, we correct them immediately and transparently. We explicitly distinguish between news reporting, expert commentary, and sponsored partner content.
                    </p>
                  </div>
                </div>
              </section>

              {/* Impact Stats */}
              <section id="impact" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">03</span> Global Reach & Scale
                </h2>
                <p>
                  With specialized bureaus across key financial capitals and diplomatic hubs, SecNewsM provides continuous coverage tailored for global decision-makers.
                </p>

                <div className="fn-static-grid-2" style={{ marginTop: "18px" }}>
                  <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "6px", textAlign: "center", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: "32px", fontWeight: "800", color: "#dc2626", fontFamily: "Georgia, serif" }}>14M+</div>
                    <div style={{ fontSize: "12.5px", fontWeight: "700", textTransform: "uppercase", color: "#475569", marginTop: "4px" }}>Monthly Active Readers</div>
                  </div>
                  <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "6px", textAlign: "center", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: "32px", fontWeight: "800", color: "#171717", fontFamily: "Georgia, serif" }}>85+</div>
                    <div style={{ fontSize: "12.5px", fontWeight: "700", textTransform: "uppercase", color: "#475569", marginTop: "4px" }}>Investigative Journalists</div>
                  </div>
                </div>
              </section>

              {/* Independence */}
              <section id="independence" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">04</span> Ownership & Structural Independence
                </h2>
                <p>
                  SecNewsM is privately owned and operated with a strict, legally binding editorial firewall that protects newsroom decision-making from commercial, corporate, or investor interference. Advertisers and sponsors have zero access to upcoming investigative reporting and no oversight over editorial choices.
                </p>
                <p style={{ marginTop: "12px" }}>
                  To read our complete funding structure, visit our <Link href="/ownership-and-funding" style={{ color: "#dc2626", fontWeight: 600 }}>Ownership & Funding Disclosure</Link>.
                </p>
              </section>

              {/* Standards */}
              <section id="standards" className="fn-static-section">
                <h2 className="fn-static-section-title">
                  <span className="fn-static-section-num">05</span> Commitment to Factuality & Standards
                </h2>
                <p>
                  Our journalists adhere to the highest global ethical standards, following guidelines established by international press federations. For further details on our newsgathering methods and corrections policies, explore our dedicated documentation:
                </p>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "18px" }}>
                  <Link href="/editorial-policy" className="fn-contact-submit-btn" style={{ width: "auto", fontSize: "13px", padding: "10px 18px" }}>
                    Editorial Policy →
                  </Link>
                  <Link href="/our-team" className="fn-contact-submit-btn" style={{ width: "auto", fontSize: "13px", padding: "10px 18px", backgroundColor: "#171717" }}>
                    Meet Our Editorial Team →
                  </Link>
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
