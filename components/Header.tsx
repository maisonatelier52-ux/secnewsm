"use client";

import React from "react";
import Link from "next/link";

interface HeaderProps {
  activeCategory?: string;
}

export default function Header({ activeCategory }: HeaderProps) {
  const [currentDate, setCurrentDate] = React.useState<string>("Tuesday, June 18, 2026");
  const [trendingIndex, setTrendingIndex] = React.useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  const trendingItems = [
    {
      category: "BUSINESS",
      title: "Major Tech Firms Announce Joint AI Safety Alliance Framework",
      slug: "/business/major-tech-firms-announce-joint-ai-safety-initiative",
    },
    {
      category: "TECH",
      title: "Quantum Encryption Breakthroughs Set New Standard for Global Cyber Defense",
      slug: "/technology/quantum-encryption-breakthroughs-set-new-standard-for-global-cyber-defense",
    },
    {
      category: "WORLD",
      title: "Central Banks Accelerate Sovereign Digital Assets in International Clearance",
      slug: "/world/central-banks-accelerate-sovereign-digital-assets-in-international-trade",
    },
    {
      category: "US NEWS",
      title: "Multinational Supply Chains Shift Toward Nearshoring Hubs in North America",
      slug: "/us/multinational-supply-chains-shift-toward-nearshoring-alliances",
    },
  ];

  React.useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setCurrentDate(formattedDate);

    const timer = setInterval(() => {
      setTrendingIndex((prev) => (prev + 1) % trendingItems.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [trendingItems.length]);

  const categories = [
    { slug: "business", label: "Business" },
    { slug: "lifestyle", label: "Lifestyle" },
    { slug: "travel", label: "Travel" },
    { slug: "science", label: "Science" },
    { slug: "technology", label: "Tech" },
  ];

  const currentTrending = trendingItems[trendingIndex];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fn-header-wrapper">
      {/* ── TOP TRENDING NEWS BAR ── */}
      <div className="fn-top-trending-bar">
        <div className="fn-top-trending-inner">
          <div className="fn-trending-badge-new">
            <span className="fn-trending-pulse" />
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>BREAKING NEWS</span>
          </div>

          <div className="fn-trending-ticker-container">
            <div className="fn-trending-ticker">
              <Link href={currentTrending.slug} className="fn-trending-link-new">
                {currentTrending.title}
              </Link>
            </div>
          </div>

          <div className="fn-trending-date-box-new">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="fn-trending-date-text">{currentDate}</span>
          </div>
        </div>
      </div>

      {/* ── DESKTOP: LOGO + NAV ROW ── */}
      <div className="fn-header-inner">
        {/* Logo */}
        <div className="fn-header-brand-box">
          <Link href="/" className="fn-logo-box" aria-label="Home">
            <div className="fn-play-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
              </svg>
            </div>
            <span className="fn-logo-text">Domain Name</span>
          </Link>
        </div>

        {/* Right Side (desktop) */}
        <div className="fn-header-right-box">
          {/* Top Row: About Us Links */}
          <div className="fn-header-top-tools">
            <div className="fn-header-links">
              <Link href="/about-us">About Us</Link>
              <span>|</span>
              <Link href="/contact">Contact</Link>
              <span>|</span>
              <Link href="/our-team">Our Team</Link>
              <span>|</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>

          {/* Bottom Row: Category Nav + Hamburger + Subscribe */}
          <div className="fn-header-main-nav">
            <ul className="fn-nav-list">
              <li className={`fn-nav-item ${!activeCategory ? "active" : ""}`}>
                <Link href="/">Home</Link>
              </li>
              {categories.map((cat) => {
                const isActive =
                  activeCategory?.toLowerCase() === cat.slug ||
                  (activeCategory?.toLowerCase() === "tech" && cat.slug === "technology");
                return (
                  <li key={cat.slug} className={`fn-nav-item ${isActive ? "active" : ""}`}>
                    <Link href={`/${cat.slug}`}>{cat.label}</Link>
                  </li>
                );
              })}
            </ul>

            <div className="fn-header-actions">
              <button
                id="fn-hamburger-btn"
                className={`fn-hamburger-btn ${mobileMenuOpen ? "is-open" : ""}`}
                aria-label="Menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <button className="fn-subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE HEADER (logo row + scrollable nav row) ── */}
      <div className="fn-mobile-header-bar">
        {/* Row 1: Logo + Hamburger */}
        <div className="fn-mobile-top-row">
          <Link href="/" className="fn-logo-box" aria-label="Home">
            <div className="fn-play-circle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
              </svg>
            </div>
            <span className="fn-logo-text">Domain Name</span>
          </Link>

          <button
            id="fn-hamburger-btn-mobile"
            className={`fn-hamburger-btn ${mobileMenuOpen ? "is-open" : ""}`}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Row 2: Scrollable category nav */}
        <nav className="fn-mobile-cat-nav">
          <Link
            href="/"
            className={`fn-mobile-cat-link ${!activeCategory ? "active" : ""}`}
          >
            Home
          </Link>
          {categories.map((cat) => {
            const isActive =
              activeCategory?.toLowerCase() === cat.slug ||
              (activeCategory?.toLowerCase() === "tech" && cat.slug === "technology");
            return (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={`fn-mobile-cat-link ${isActive ? "active" : ""}`}
              >
                {cat.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* ── MOBILE MENU DRAWER ── */}
      {mobileMenuOpen && (
        <div className="fn-mobile-menu-overlay" onClick={closeMobileMenu} />
      )}
      <div className={`fn-mobile-menu-drawer ${mobileMenuOpen ? "is-open" : ""}`}>
        <div className="fn-mobile-menu-header">
          <span className="fn-mobile-menu-title">Menu</span>
          <button className="fn-mobile-menu-close" onClick={closeMobileMenu} aria-label="Close menu">
            ✕
          </button>
        </div>

        {/* Main Nav Links */}
        <nav className="fn-mobile-nav">
          <Link href="/" className={`fn-mobile-nav-link ${!activeCategory ? "active" : ""}`} onClick={closeMobileMenu}>
            Home
          </Link>
          {categories.map((cat) => {
            const isActive =
              activeCategory?.toLowerCase() === cat.slug ||
              (activeCategory?.toLowerCase() === "tech" && cat.slug === "technology");
            return (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={`fn-mobile-nav-link ${isActive ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                {cat.label}
              </Link>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="fn-mobile-menu-divider" />

        {/* Secondary Links — About Us etc */}
        <nav className="fn-mobile-secondary-nav">
          <Link href="/about-us" className="fn-mobile-secondary-link" onClick={closeMobileMenu}>About Us</Link>
          <Link href="/contact" className="fn-mobile-secondary-link" onClick={closeMobileMenu}>Contact</Link>
          <Link href="/our-team" className="fn-mobile-secondary-link" onClick={closeMobileMenu}>Our Team</Link>
          <Link href="/privacy-policy" className="fn-mobile-secondary-link" onClick={closeMobileMenu}>Privacy Policy</Link>
        </nav>
      </div>
    </header>
  );
}
