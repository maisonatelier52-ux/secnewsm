"use client";

import React from "react";

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
  );
}
