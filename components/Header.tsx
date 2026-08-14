"use client";

import React from "react";
import Link from "next/link";

interface HeaderProps {
  activeCategory?: string;
}

export default function Header({ activeCategory }: HeaderProps) {
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
            <svg className="fn-logo-triangle" viewBox="0 0 24 24" fill="#ffffff">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </Link>

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
