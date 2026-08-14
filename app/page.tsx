"use client";

import React, { useRef } from "react";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%", backgroundColor: "#ffffff" }}>
      {/* ══════════════════════════════════════════════════════════
          100% FULL WIDTH DARK NAVY HEADER (WHITE TRIANGLE ICON ONLY)
      ══════════════════════════════════════════════════════════ */}
      <header className="fn-header-wrapper">
        <div className="fn-header-inner">
          {/* Left Brand & Meta Box */}
          <div className="fn-header-brand-box">
            <div className="fn-logo-box">
              <svg className="fn-logo-triangle" viewBox="0 0 24 24" fill="#ffffff">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>

            <div className="fn-header-meta">
              <span className="fn-header-date">Tuesday, June 18, 2026</span>
              <span className="fn-header-weather">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
                </svg>
                20.9 ° London
              </span>
            </div>
          </div>

          {/* Right Side Box */}
          <div className="fn-header-right-box">
            {/* Top Row: About Us Links */}
            <div className="fn-header-top-tools">
              <div className="fn-header-links">
                <a href="#">ABOUT US</a>
                <a href="#">CONTACT</a>
                <a href="#">CAREERS</a>
                <a href="#">PRIVACY POLICY</a>
              </div>
            </div>

            {/* Bottom Row: Main Category Nav */}
            <div className="fn-header-main-nav">
              <ul className="fn-nav-list">
                <li className="fn-nav-item active">Home</li>
                <li className="fn-nav-item">
                  Business <span className="fn-nav-caret">▾</span>
                </li>
                <li className="fn-nav-item">
                  Lifestyle <span className="fn-nav-caret">▾</span>
                </li>
                <li className="fn-nav-item">Travel</li>
                <li className="fn-nav-item">Food</li>
                <li className="fn-nav-item">Tech</li>
              </ul>

              <div className="fn-header-actions">
                <button className="fn-hamburger-btn" aria-label="Menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <button className="fn-subscribe-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
          MAIN CONTENT AREA
      ══════════════════════════════════════════════════════════ */}
      <main style={{ backgroundColor: "#ffffff" }}>
        <div className="fn-site-container">
          
          {/* ── SECTION 1: HERO GRID ───────────────────────────── */}
          <div className="fn-hero-grid">

            {/* Column 1: Left Feature (4.2fr) */}
            <div className="fn-col-left">
              <div className="fn-left-slider">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=85&auto=format&fit=crop"
                  alt="Kansas City National Companies"
                />
              </div>

              <h1 className="fn-left-headline">
                Kansas City Has a Massive Array of Big National Companies
              </h1>

              <div className="fn-left-meta">
                <span className="fn-cat-badge">Strategy</span>
                <span className="fn-meta-author">Arianna Scott</span>
                <span className="fn-meta-date">- December 14, 2026</span>
              </div>

              <div className="fn-left-mini-cards">
                <div className="fn-mini-card">
                  <div className="fn-mini-card-text">
                    <div className="fn-mini-card-cat">Marketing</div>
                    <h3 className="fn-mini-card-title">
                      Social Media Marketing for Franchises is Meant
                    </h3>
                  </div>
                  <div className="fn-mini-card-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop"
                      alt="Marketing"
                    />
                  </div>
                </div>

                <div className="fn-mini-card">
                  <div className="fn-mini-card-text">
                    <div className="fn-mini-card-cat">Marketing</div>
                    <h3 className="fn-mini-card-title">
                      Customer Engagement Marketing: A New
                    </h3>
                  </div>
                  <div className="fn-mini-card-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&q=80&auto=format&fit=crop"
                      alt="Customer Engagement"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Middle Topics & News (4.0fr) */}
            <div className="fn-col-mid">
              <div className="fn-topics-bar">
                <span className="fn-topics-title">Topics</span>
                <div className="fn-topics-list">
                  <span>Strategy</span>
                  <span>Marketing</span>
                  <span>More ▾</span>
                </div>
              </div>

              <div className="fn-mid-featured">
                <div className="fn-mid-featured-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=85&auto=format&fit=crop"
                    alt="Fashion Finder"
                  />
                </div>
                <h2 className="fn-mid-featured-headline">
                  Fashion Finder: Biggest Shows, Parties and Celebrity for New Years
                </h2>
                <div className="fn-left-meta">
                  <span className="fn-cat-badge">Celebrity</span>
                  <span className="fn-meta-date">December 14, 2026</span>
                </div>
              </div>

              <div className="fn-mid-list">
                <div className="fn-mid-item">
                  <h3 className="fn-mid-item-title">
                    The Biggest Hollywood Celebrities Visit the Ranches of California
                  </h3>
                  <div className="fn-mid-item-meta">
                    <span className="fn-cat-badge">Celebrity</span>
                    <span className="fn-meta-date">December 14, 2026</span>
                  </div>
                </div>

                <div className="fn-mid-item">
                  <h3 className="fn-mid-item-title">
                    The Most Popular Celebrity Name List of the Millennium is Here
                  </h3>
                  <div className="fn-mid-item-meta">
                    <span className="fn-cat-badge">Celebrity</span>
                    <span className="fn-meta-date">December 14, 2026</span>
                  </div>
                </div>

                <div className="fn-mid-item">
                  <h3 className="fn-mid-item-title">
                    Discover Creative Writing as a Therapeutic Tool for Depression and Anxiety
                  </h3>
                  <div className="fn-mid-item-meta">
                    <span className="fn-cat-badge">Celebrity</span>
                    <span className="fn-meta-date">December 13, 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Right Rankings (2.8fr) */}
            <div className="fn-col-right">
              <h2 className="fn-right-header">Hot this week</h2>

              <div className="fn-hot-list">
                <div className="fn-hot-item">
                  <div className="fn-hot-content">
                    <div className="fn-hot-cat">Strategy</div>
                    <h3 className="fn-hot-title">
                      Kansas City Has a Massive Array of Big National Companies
                    </h3>
                  </div>
                  <div className="fn-hot-num">1</div>
                </div>

                <div className="fn-hot-item">
                  <div className="fn-hot-content">
                    <div className="fn-hot-cat">Celebrity</div>
                    <h3 className="fn-hot-title">
                      Fashion Finder: Biggest Shows, Parties and Celebrity for New Years
                    </h3>
                  </div>
                  <div className="fn-hot-num">2</div>
                </div>

                <div className="fn-hot-item">
                  <div className="fn-hot-content">
                    <div className="fn-hot-cat">Tech</div>
                    <h3 className="fn-hot-title">
                      The Hottest Wearable Tech and Smart Gadgets of the Year Will Amaze You
                    </h3>
                  </div>
                  <div className="fn-hot-num">3</div>
                </div>

                <div className="fn-hot-item">
                  <div className="fn-hot-content">
                    <div className="fn-hot-cat">Travel</div>
                    <h3 className="fn-hot-title">
                      10 Things You Should Know Before You Visit South America&apos;s Jungles
                    </h3>
                  </div>
                  <div className="fn-hot-num">4</div>
                </div>

                <div className="fn-hot-item">
                  <div className="fn-hot-content">
                    <div className="fn-hot-cat">Tech</div>
                    <h3 className="fn-hot-title">
                      New Technology Will Help Keep Your Smart Home from Becoming Obsolete
                    </h3>
                  </div>
                  <div className="fn-hot-num">5</div>
                </div>

                <div className="fn-hot-item">
                  <div className="fn-hot-content">
                    <div className="fn-hot-cat">Business</div>
                    <h3 className="fn-hot-title">
                      Global Markets Surge as Innovation Hubs Expand Footprint
                    </h3>
                  </div>
                  <div className="fn-hot-num">6</div>
                </div>

                <div className="fn-hot-item">
                  <div className="fn-hot-content">
                    <div className="fn-hot-cat">Lifestyle</div>
                    <h3 className="fn-hot-title">
                      Discover Creative Writing as a Therapeutic Tool for Mindfulness
                    </h3>
                  </div>
                  <div className="fn-hot-num">7</div>
                </div>
              </div>
            </div>

          </div>

          {/* ── SECTION 2: EDITORIAL SELECTION ── */}
          <section className="fn-section-wrap">
            
            {/* Section Header */}
            <div className="fn-section-header">
              <div className="fn-section-title-box">
                <span className="fn-section-kicker">EDITORIAL SELECTION</span>
                <h2 className="fn-section-main-heading">Global Currents & Perspectives</h2>
                <p className="fn-section-subtitle">
                  In-depth analysis, breaking stories, and investigative reporting from around the globe.
                </p>
              </div>

              <div className="fn-section-tabs">
                <span className="fn-section-tab active">All Stories</span>
                <span className="fn-section-tab">Deep Dives</span>
                <span className="fn-section-tab">Analysis</span>
                <span className="fn-section-tab">Interviews</span>
              </div>
            </div>

            {/* 3-Column Grid */}
            <div className="fn-editorial-grid">

              {/* Column 1: Clean Lead Showcase */}
              <div className="fn-lead-card">
                <div>
                  <div className="fn-lead-img-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=85&auto=format&fit=crop"
                      alt="Quantum Cyber Security"
                    />
                  </div>
                  <span className="fn-lead-subtitle">FUTURE OF TECH & COMPUTING</span>
                  <h3 className="fn-lead-title">
                    Quantum Encryption Breakthroughs Set New Standard for Global Cyber Defense
                  </h3>
                  <p className="fn-lead-desc">
                    As quantum processors surpass classical supercomputers, global intelligence agencies and enterprise leaders are racing to implement post-quantum cryptographic standards before legacy infrastructure becomes vulnerable...
                  </p>
                </div>

                <div className="fn-lead-author-row">
                  <div className="fn-author-avatar-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&auto=format&fit=crop"
                      alt="David Chen"
                    />
                  </div>
                  <span>By David Chen</span>
                  <span>·</span>
                  <span>Published 2 hrs ago</span>
                  <span>·</span>
                  <span style={{ color: "var(--red)" }}>6 min read</span>
                </div>
              </div>

              {/* Column 2: News Stack 1 */}
              <div className="fn-mid-stack">
                <div className="fn-stack-item">
                  <div className="fn-stack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80&auto=format&fit=crop"
                      alt="Financial Markets"
                    />
                  </div>
                  <div className="fn-stack-content">
                    <span className="fn-stack-subtitle">FINANCIAL ARCHITECTURE</span>
                    <h4 className="fn-stack-title">
                      Central Banks Accelerate Sovereign Digital Assets in International Trade
                    </h4>
                    <span className="fn-stack-time">3 hours ago · 4 min read</span>
                  </div>
                </div>

                <div className="fn-stack-item">
                  <div className="fn-stack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&q=80&auto=format&fit=crop"
                      alt="Urban Climate"
                    />
                  </div>
                  <div className="fn-stack-content">
                    <span className="fn-stack-subtitle">URBAN INNOVATION</span>
                    <h4 className="fn-stack-title">
                      Urban Micro-Forests: How Metropolises Are Beating Rising Summer Heatwaves
                    </h4>
                    <span className="fn-stack-time">5 hours ago · 3 min read</span>
                  </div>
                </div>

                <div className="fn-stack-item">
                  <div className="fn-stack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&q=80&auto=format&fit=crop"
                      alt="Media & Arts"
                    />
                  </div>
                  <div className="fn-stack-content">
                    <span className="fn-stack-subtitle">MEDIA & DIGITAL CULTURE</span>
                    <h4 className="fn-stack-title">
                      Generative Cinema Wins Major Accolades at International Film Festival
                    </h4>
                    <span className="fn-stack-time">7 hours ago · 5 min read</span>
                  </div>
                </div>

                <div className="fn-stack-item">
                  <div className="fn-stack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&q=80&auto=format&fit=crop"
                      alt="Global Trade"
                    />
                  </div>
                  <div className="fn-stack-content">
                    <span className="fn-stack-subtitle">GLOBAL TRADE</span>
                    <h4 className="fn-stack-title">
                      Multinational Supply Chains Shift Toward Nearshoring Alliances
                    </h4>
                    <span className="fn-stack-time">8 hours ago · 4 min read</span>
                  </div>
                </div>

                <div className="fn-stack-item">
                  <div className="fn-stack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80&auto=format&fit=crop"
                      alt="Future Health"
                    />
                  </div>
                  <div className="fn-stack-content">
                    <span className="fn-stack-subtitle">FUTURE HEALTH</span>
                    <h4 className="fn-stack-title">
                      Personalized Micro-Nutrient Therapy Receives Global Regulatory Clearance
                    </h4>
                    <span className="fn-stack-time">10 hours ago · 3 min read</span>
                  </div>
                </div>

                <div className="fn-stack-item">
                  <div className="fn-stack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=300&q=80&auto=format&fit=crop"
                      alt="Sustainability"
                    />
                  </div>
                  <div className="fn-stack-content">
                    <span className="fn-stack-subtitle">SUSTAINABILITY</span>
                    <h4 className="fn-stack-title">
                      Next-Generation Solar Grids Achieve Unprecedented Conversion Efficiency
                    </h4>
                    <span className="fn-stack-time">12 hours ago · 4 min read</span>
                  </div>
                </div>
              </div>

              {/* Column 3: News Stack 2 */}
              <div className="fn-right-stack">
                <div className="fn-stack-item">
                  <div className="fn-stack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80&auto=format&fit=crop"
                      alt="Eco Innovation"
                    />
                  </div>
                  <div className="fn-stack-content">
                    <span className="fn-stack-subtitle">ECO-INNOVATION</span>
                    <h4 className="fn-stack-title">
                      Renewable Energy Storage Breakthrough Hits Commercial Viability in 2026
                    </h4>
                    <span className="fn-stack-time">2 hours ago · 4 min read</span>
                  </div>
                </div>

                <div className="fn-stack-item">
                  <div className="fn-stack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80&auto=format&fit=crop"
                      alt="Biotech Frontiers"
                    />
                  </div>
                  <div className="fn-stack-content">
                    <span className="fn-stack-subtitle">BIOTECH FRONTIERS</span>
                    <h4 className="fn-stack-title">
                      CRISPR 3.0 Delivers Precision Gene Therapy Breakthroughs for Rare Conditions
                    </h4>
                    <span className="fn-stack-time">4 hours ago · 6 min read</span>
                  </div>
                </div>

                <div className="fn-stack-item">
                  <div className="fn-stack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80&auto=format&fit=crop"
                      alt="Exploration"
                    />
                  </div>
                  <div className="fn-stack-content">
                    <span className="fn-stack-subtitle">DEEP EXPLORATION</span>
                    <h4 className="fn-stack-title">
                      Autonomous Deep Sea Mapping Expedition Uncovers Uncharted Ecosystems
                    </h4>
                    <span className="fn-stack-time">6 hours ago · 5 min read</span>
                  </div>
                </div>

                <div className="fn-stack-item">
                  <div className="fn-stack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&q=80&auto=format&fit=crop"
                      alt="Cybersecurity"
                    />
                  </div>
                  <div className="fn-stack-content">
                    <span className="fn-stack-subtitle">CYBERSECURITY</span>
                    <h4 className="fn-stack-title">
                      Next-Gen Zero Trust Protocols Implemented Across Defense Networks
                    </h4>
                    <span className="fn-stack-time">9 hours ago · 3 min read</span>
                  </div>
                </div>

                <div className="fn-stack-item">
                  <div className="fn-stack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&q=80&auto=format&fit=crop"
                      alt="Space Technology"
                    />
                  </div>
                  <div className="fn-stack-content">
                    <span className="fn-stack-subtitle">SPACE TECHNOLOGY</span>
                    <h4 className="fn-stack-title">
                      Commercial Orbital Stations Expand Microgravity Manufacturing
                    </h4>
                    <span className="fn-stack-time">11 hours ago · 4 min read</span>
                  </div>
                </div>

                <div className="fn-stack-item">
                  <div className="fn-stack-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80&auto=format&fit=crop"
                      alt="Creative Tech"
                    />
                  </div>
                  <div className="fn-stack-content">
                    <span className="fn-stack-subtitle">CREATIVE TECH</span>
                    <h4 className="fn-stack-title">
                      Immersive Audio Interfaces Transform Spatial Computing Standards
                    </h4>
                    <span className="fn-stack-time">13 hours ago · 3 min read</span>
                  </div>
                </div>
              </div>

            </div>

            {/* 4-Column Minimal Deep Dives Strip */}
            <div className="fn-strip-4col">
              <div className="fn-strip-item">
                <span className="fn-strip-num">01 · ECO-INNOVATION</span>
                <h4 className="fn-strip-title">
                  Renewable Energy Storage Breakthrough Hits Commercial Viability in 2026
                </h4>
                <div className="fn-strip-meta">By Sarah Jenkins · 4 min read</div>
              </div>

              <div className="fn-strip-item">
                <span className="fn-strip-num">02 · BIOTECH FRONTIERS</span>
                <h4 className="fn-strip-title">
                  CRISPR 3.0 Delivers Precision Gene Therapy Breakthroughs for Rare Conditions
                </h4>
                <div className="fn-strip-meta">By Dr. Alex Mercer · 6 min read</div>
              </div>

              <div className="fn-strip-item">
                <span className="fn-strip-num">03 · CREATIVE ECONOMY</span>
                <h4 className="fn-strip-title">
                  Independent Digital Studios Reshape Global Streaming Media Networks
                </h4>
                <div className="fn-strip-meta">By Chloe Bennett · 3 min read</div>
              </div>

              <div className="fn-strip-item">
                <span className="fn-strip-num">04 · DEEP EXPLORATION</span>
                <h4 className="fn-strip-title">
                  Autonomous Deep Sea Mapping Expedition Uncovers Uncharted Ecosystems
                </h4>
                <div className="fn-strip-meta">By Marco Silva · 5 min read</div>
              </div>
            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              MINIMAL STANDARD SECTION 3: WORLD DISPATCHES
          ══════════════════════════════════════════════════════════ */}
          <section className="fn-sec3-wrap">
            
            {/* Header */}
            <div className="fn-sec3-top-head">
              <h2 className="fn-sec3-main-title">World Dispatches & Special Briefings</h2>
              
              <div className="fn-sec3-categories">
                <span className="fn-sec3-cat-item active">All Regions</span>
                <span className="fn-sec3-cat-item">Americas</span>
                <span className="fn-sec3-cat-item">Europe & UK</span>
                <span className="fn-sec3-cat-item">Asia Pacific</span>
                <span className="fn-sec3-cat-item">Middle East</span>
              </div>
            </div>

            {/* 4 Equal Columns Grid */}
            <div className="fn-sec3-4col-grid">

              {/* Column 1 */}
              <div className="fn-sec3-column">
                <div className="fn-sec3-col-header">TECH & COMPUTING</div>
                
                <div className="fn-sec3-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80&auto=format&fit=crop"
                    alt="Silicon Microchips"
                  />
                </div>

                <h3 className="fn-sec3-card-title">
                  Next-Gen Silicon Fabrics Overhaul Enterprise Data Processing
                </h3>
                <p className="fn-sec3-card-desc">
                  Sub-nanometer architecture unlocks 40% higher efficiency across distributed cloud clusters...
                </p>
                <div className="fn-sec3-card-meta">By Marcus Vance · 5 min read</div>

                <div className="fn-sec3-sub-list">
                  <div className="fn-sec3-sub-item">
                    <h4 className="fn-sec3-sub-title">
                      Quantum Key Distribution Networks Expand to Commercial Hubs
                    </h4>
                    <span className="fn-sec3-sub-meta">2 hours ago · 3 min read</span>
                  </div>

                  <div className="fn-sec3-sub-item">
                    <h4 className="fn-sec3-sub-title">
                      Edge AI Processing Chips Deployed in Autonomous Logistics Fleets
                    </h4>
                    <span className="fn-sec3-sub-meta">4 hours ago · 4 min read</span>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="fn-sec3-column">
                <div className="fn-sec3-col-header">MACRO MARKETS</div>

                <div className="fn-sec3-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&q=80&auto=format&fit=crop"
                    alt="Global Economy"
                  />
                </div>

                <h3 className="fn-sec3-card-title">
                  Sovereign Wealth Funds Pivot Toward Clean Energy Infrastructure
                </h3>
                <p className="fn-sec3-card-desc">
                  Multibillion-dollar capital allocations target fusion energy and grid stabilization projects globally...
                </p>
                <div className="fn-sec3-card-meta">By Dr. Elena Rostova · 6 min read</div>

                <div className="fn-sec3-sub-list">
                  <div className="fn-sec3-sub-item">
                    <h4 className="fn-sec3-sub-title">
                      Central Banks Signal Shift Toward Interoperable Digital Currency Settlement
                    </h4>
                    <span className="fn-sec3-sub-meta">3 hours ago · 4 min read</span>
                  </div>

                  <div className="fn-sec3-sub-item">
                    <h4 className="fn-sec3-sub-title">
                      Nearshoring Supply Chains Reshape Regional Industrial Hubs
                    </h4>
                    <span className="fn-sec3-sub-meta">5 hours ago · 3 min read</span>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="fn-sec3-column">
                <div className="fn-sec3-col-header">GREEN TRANSITION</div>

                <div className="fn-sec3-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&q=80&auto=format&fit=crop"
                    alt="Wind Turbine Farm"
                  />
                </div>

                <h3 className="fn-sec3-card-title">
                  Offshore Wind Grid Array Begins Powering Coastal Metropolitan Centers
                </h3>
                <p className="fn-sec3-card-desc">
                  Deepwater turbine installations deliver continuous gigawatt-scale renewable power to grid operators...
                </p>
                <div className="fn-sec3-card-meta">By Sarah Jenkins · 4 min read</div>

                <div className="fn-sec3-sub-list">
                  <div className="fn-sec3-sub-item">
                    <h4 className="fn-sec3-sub-title">
                      Next-Gen Geothermal Plants Tap Deep Rock Reserves for Stable Baseload Power
                    </h4>
                    <span className="fn-sec3-sub-meta">1 hour ago · 5 min read</span>
                  </div>

                  <div className="fn-sec3-sub-item">
                    <h4 className="fn-sec3-sub-title">
                      Grid-Scale Solid-State Batteries Enter Full Industrial Production
                    </h4>
                    <span className="fn-sec3-sub-meta">6 hours ago · 4 min read</span>
                  </div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="fn-sec3-column">
                <div className="fn-sec3-col-header">FRONTIER SCIENCE</div>

                <div className="fn-sec3-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80&auto=format&fit=crop"
                    alt="Space Exploration"
                  />
                </div>

                <h3 className="fn-sec3-card-title">
                  Deep-Sea Mapping Mission Catalogues Uncharted Hydrothermal Ecosystems
                </h3>
                <p className="fn-sec3-card-desc">
                  Autonomous oceanographic submersibles discover thriving biological habitats in abyssal trenches...
                </p>
                <div className="fn-sec3-card-meta">By Marco Silva · 7 min read</div>

                <div className="fn-sec3-sub-list">
                  <div className="fn-sec3-sub-item">
                    <h4 className="fn-sec3-sub-title">
                      Orbital Manufacturing Station Completes First Microgravity Crystal Growth
                    </h4>
                    <span className="fn-sec3-sub-meta">4 hours ago · 5 min read</span>
                  </div>

                  <div className="fn-sec3-sub-item">
                    <h4 className="fn-sec3-sub-title">
                      CRISPR 3.0 Clinical Trials Demonstrate High Precision Gene Editing Success
                    </h4>
                    <span className="fn-sec3-sub-meta">7 hours ago · 6 min read</span>
                  </div>
                </div>
              </div>

            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 4: SMOOTH HORIZONTAL SCROLL CAROUSEL
          ══════════════════════════════════════════════════════════ */}
          <section className="fn-sec4-wrap">
            
            {/* Header with Arrow Controls */}
            <div className="fn-sec4-header">
              <h2 className="fn-sec4-title">Featured Opinion & Audio Series</h2>

              <div className="fn-sec4-controls">
                <button className="fn-sec4-arrow" onClick={scrollLeft} aria-label="Scroll left">
                  ‹
                </button>
                <button className="fn-sec4-arrow" onClick={scrollRight} aria-label="Scroll right">
                  ›
                </button>
              </div>
            </div>

            {/* Smooth Horizontal Scroll Track */}
            <div className="fn-sec4-carousel" ref={carouselRef}>
              
              {/* Card 1 */}
              <div className="fn-sec4-card">
                <div className="fn-sec4-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&q=80&auto=format&fit=crop"
                    alt="Fusion Energy Opinion"
                  />
                  <span className="fn-sec4-badge">OPINION</span>
                </div>
                <h3 className="fn-sec4-card-title">
                  Why Fusion Energy Capital Investments Will Triple Before 2030
                </h3>
                <div className="fn-sec4-author-row">
                  <div className="fn-sec4-author-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&auto=format&fit=crop" alt="Author" />
                  </div>
                  <span>By Dr. Elena Rostova</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="fn-sec4-card">
                <div className="fn-sec4-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80&auto=format&fit=crop"
                    alt="Subsea Cable Podcast"
                  />
                  <span className="fn-sec4-badge">PODCAST</span>
                </div>
                <h3 className="fn-sec4-card-title">
                  Episode 84: The Geopolitics of Subsea Polar Data Fiber Lines
                </h3>
                <div className="fn-sec4-author-row">
                  <div className="fn-sec4-author-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop" alt="Author" />
                  </div>
                  <span>Hosted by Marcus Vance</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="fn-sec4-card">
                <div className="fn-sec4-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80&auto=format&fit=crop"
                    alt="Architectural Re-Wilding"
                  />
                  <span className="fn-sec4-badge">LONG FORM</span>
                </div>
                <h3 className="fn-sec4-card-title">
                  The Silent Re-Wilding of Post-Industrial Northern Europe
                </h3>
                <div className="fn-sec4-author-row">
                  <div className="fn-sec4-author-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80&auto=format&fit=crop" alt="Author" />
                  </div>
                  <span>By Jean-Luc Dupont</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="fn-sec4-card">
                <div className="fn-sec4-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80&auto=format&fit=crop"
                    alt="Quantum Financial Assets"
                  />
                  <span className="fn-sec4-badge">ESSAY</span>
                </div>
                <h3 className="fn-sec4-card-title">
                  Quantum Encryption: Safeguarding Sovereign Financial Infrastructure
                </h3>
                <div className="fn-sec4-author-row">
                  <div className="fn-sec4-author-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&auto=format&fit=crop" alt="Author" />
                  </div>
                  <span>By David Chen</span>
                </div>
              </div>

              {/* Card 5 */}
              <div className="fn-sec4-card">
                <div className="fn-sec4-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80&auto=format&fit=crop"
                    alt="Autonomous Cities"
                  />
                  <span className="fn-sec4-badge">INTERVIEW</span>
                </div>
                <h3 className="fn-sec4-card-title">
                  Designing Autonomous Cities Prepared for Extreme Climate Waves
                </h3>
                <div className="fn-sec4-author-row">
                  <div className="fn-sec4-author-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop" alt="Author" />
                  </div>
                  <span>By Sarah Jenkins</span>
                </div>
              </div>

              {/* Card 6 */}
              <div className="fn-sec4-card">
                <div className="fn-sec4-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop"
                    alt="Biotech Gene Editing"
                  />
                  <span className="fn-sec4-badge">SPECIAL REPORT</span>
                </div>
                <h3 className="fn-sec4-card-title">
                  Inside Next-Generation Biotech Gene Editing Production Facilities
                </h3>
                <div className="fn-sec4-author-row">
                  <div className="fn-sec4-author-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80&auto=format&fit=crop" alt="Author" />
                  </div>
                  <span>By Dr. Alex Mercer</span>
                </div>
              </div>

            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════
              SECTION 5: INVESTIGATIVE REPORTS & SPECIAL SERIES (3 CLEAN CARDS PERFECT BALANCE)
          ══════════════════════════════════════════════════════════ */}
          <section className="fn-sec5-wrap">
            
            {/* Header */}
            <div className="fn-sec5-header">
              <h2 className="fn-sec5-title">Investigative Reports & Special Series</h2>
              <span className="fn-sec5-sub-link">View All Investigations →</span>
            </div>

            {/* Grid */}
            <div className="fn-sec5-grid">
              
              {/* Left Lead Investigation */}
              <div className="fn-sec5-lead-card">
                <div className="fn-sec5-lead-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85&auto=format&fit=crop"
                    alt="Autonomous Grid Infrastructure"
                  />
                </div>
                
                <span className="fn-sec5-lead-cat">FEATURED INVESTIGATION</span>
                <h3 className="fn-sec5-lead-title">
                  The Architecture of Autonomous Grid Infrastructure in Northern Europe
                </h3>
                <p className="fn-sec5-lead-desc">
                  An in-depth 6-month investigation into how next-generation power networks integrate AI load balance algorithms to achieve 100% renewable baseload uptime...
                </p>

                <div className="fn-sec5-lead-meta">
                  By Marco Silva · 8 min read · Published Today
                </div>
              </div>

              {/* Right Stacked Cards (3 Clean Cards without Excerpt to Match Exact Baseline) */}
              <div className="fn-sec5-right-stack">
                
                <div className="fn-sec5-stack-card">
                  <div className="fn-sec5-stack-img-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&q=80&auto=format&fit=crop"
                      alt="Tokyo Underground Flood System"
                    />
                  </div>
                  <div className="fn-sec5-stack-content">
                    <span className="fn-sec5-stack-cat">URBAN FUTURES</span>
                    <h4 className="fn-sec5-stack-title">
                      Inside Tokyo&apos;s Subterranean Underground Flood Prevention System
                    </h4>
                    <span className="fn-sec5-stack-meta">By Kenji Sato · 5 min read</span>
                  </div>
                </div>

                <div className="fn-sec5-stack-card">
                  <div className="fn-sec5-stack-img-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80&auto=format&fit=crop"
                      alt="Swiss Watchmaking"
                    />
                  </div>
                  <div className="fn-sec5-stack-content">
                    <span className="fn-sec5-stack-cat">CRAFT & INDUSTRY</span>
                    <h4 className="fn-sec5-stack-title">
                      The Craftsmanship Behind Century-Old High Precision Swiss Watchmaking
                    </h4>
                    <span className="fn-sec5-stack-meta">By Claire Dubois · 4 min read</span>
                  </div>
                </div>

                <div className="fn-sec5-stack-card">
                  <div className="fn-sec5-stack-img-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&auto=format&fit=crop"
                      alt="Deep Sea Robotics"
                    />
                  </div>
                  <div className="fn-sec5-stack-content">
                    <span className="fn-sec5-stack-cat">OCEANIC SCIENCE</span>
                    <h4 className="fn-sec5-stack-title">
                      Autonomous Deep-Sea Robotics Mapping Abyssal Thermal Vents
                    </h4>
                    <span className="fn-sec5-stack-meta">By Dr. Elena Rostova · 4 min read</span>
                  </div>
                </div>

              </div>

            </div>

          </section>

        </div>
      </main>

      {/* ══════════════════════════════════════════════════════════
          100% FULL-WIDTH DARK NAVY FOOTER SECTION (WHITE TRIANGLE ICON ONLY)
      ══════════════════════════════════════════════════════════ */}
      <footer className="fn-footer-wrapper">
        <div className="fn-footer-inner">
          
          {/* Top Newsletter & Brand Row */}
          <div className="fn-footer-top">
            <div className="fn-footer-brand-tagline">
              <div className="fn-footer-logo-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              <p className="fn-footer-tagline">
                Independent Journalism & Global Market Intelligence Since 1998.
              </p>
            </div>

            <div className="fn-footer-newsletter-box">
              <input
                type="email"
                className="fn-footer-newsletter-input"
                placeholder="Enter your email address..."
              />
              <button className="fn-footer-newsletter-btn">Subscribe Daily</button>
            </div>
          </div>

          {/* Middle Links Grid (4 Columns) */}
          <div className="fn-footer-links-grid">
            <div>
              <h4 className="fn-footer-col-title">News Sections</h4>
              <ul className="fn-footer-col-list">
                <li><a href="#">World News</a></li>
                <li><a href="#">Business & Markets</a></li>
                <li><a href="#">Tech & Innovation</a></li>
                <li><a href="#">Lifestyle & Culture</a></li>
                <li><a href="#">Travel & Food</a></li>
              </ul>
            </div>

            <div>
              <h4 className="fn-footer-col-title">Analysis & Opinion</h4>
              <ul className="fn-footer-col-list">
                <li><a href="#">Editorial Selection</a></li>
                <li><a href="#">Special Briefings</a></li>
                <li><a href="#">Audio Podcasts</a></li>
                <li><a href="#">Data Lab Investigations</a></li>
                <li><a href="#">Photo Essays</a></li>
              </ul>
            </div>

            <div>
              <h4 className="fn-footer-col-title">Company & Press</h4>
              <ul className="fn-footer-col-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Editorial Board</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press Room</a></li>
                <li><a href="#">Contact Newsroom</a></li>
              </ul>
            </div>

            <div>
              <h4 className="fn-footer-col-title">Policies & Legal</h4>
              <ul className="fn-footer-col-list">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Ethics & Corrections</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Row */}
          <div className="fn-footer-bottom">
            <div>© 2026 FN News Media Group. All Rights Reserved.</div>
            <button className="fn-footer-back-top" onClick={scrollToTop}>
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>

        </div>
      </footer>
    </div>
  );
}
