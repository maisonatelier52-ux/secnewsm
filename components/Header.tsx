"use client";

import React from "react";
import Link from "next/link";

interface HeaderProps {
  activeCategory?: string;
}

export default function Header({ activeCategory }: HeaderProps) {
  const [currentDate, setCurrentDate] = React.useState<string>("Tuesday, June 18, 2026");

  React.useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  const categories = [
    { slug: "business", label: "Business" },
    { slug: "lifestyle", label: "Lifestyle" },
    { slug: "travel", label: "Travel" },
    { slug: "science", label: "Science" },
    { slug: "technology", label: "Tech" },
  ];

  return (
    <header className="fn-header-wrapper">
      <div className="fn-header-inner">
        {/* Left Brand & Meta Box */}
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
          </Link>

          <div className="fn-header-meta">
            <span className="fn-header-date">{currentDate}</span>
            <span className="fn-header-weather">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
              </svg>
              20.9° •
            </span>
          </div>
        </div>

        {/* Right Side Box */}
        <div className="fn-header-right-box">
          {/* Top Row: About Us Links */}
          <div className="fn-header-top-tools">
            <div className="fn-header-links">
              <a href="#">About Us</a>
              <span>|</span>
              <a href="#">Contact</a>
              <span>|</span>
              <a href="#">Careers</a>
              <span>|</span>
              <a href="#">Privacy Policy</a>
            </div>
          </div>

          {/* Bottom Row: Main Category Nav */}
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
                    <Link href={`/${cat.slug}`}>
                      {cat.label}
                    </Link>
                  </li>
                );
              })}
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
  );
}
