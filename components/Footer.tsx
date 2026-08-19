"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
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
              Independent Journalism & Global Market Intelligence .
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
              <li><Link href="/us">US & Global News</Link></li>
              <li><Link href="/business">Business & Markets</Link></li>
              <li><Link href="/technology">Tech & Innovation</Link></li>
              <li><Link href="/lifestyle">Lifestyle & Culture</Link></li>
              <li><Link href="/travel">Travel & Food</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="fn-footer-col-title">About & Newsroom</h4>
            <ul className="fn-footer-col-list">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/our-team">Our Team</Link></li>
              <li><Link href="/ownership-and-funding">Ownership & Funding</Link></li>
              <li><Link href="/editorial-policy">Editorial Policy</Link></li>
              <li><Link href="/contact">Contact Newsroom</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="fn-footer-col-title">Standards & Guidelines</h4>
            <ul className="fn-footer-col-list">
              <li><Link href="/source-methodology">Source Methodology</Link></li>
              <li><Link href="/right-of-reply-policy">Right of Reply Policy</Link></li>
              <li><Link href="/advertising-and-sponsored-policy">Advertising & Sponsored Policy</Link></li>
              <li><Link href="/faq">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="fn-footer-col-title">Legal & Compliance</h4>
            <ul className="fn-footer-col-list">
              <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/legal">Legal Disclosures</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="fn-footer-bottom">
          <div>© 2026 All Rights Reserved.</div>
          <button className="fn-footer-back-top" onClick={scrollToTop}>
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
