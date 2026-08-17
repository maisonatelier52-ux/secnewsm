"use client";

import React from "react";
import Link from "next/link";
import { WireTickerItem } from "@/lib/data";

interface DailyWireSectionProps {
  featuredStory: {
    time: string;
    category: string;
    title: string;
    slug: string;
    image: string;
    quote: string;
    author: string;
    readTime: string;
  };
  metricCard: {
    stat: string;
    statLabel: string;
    category: string;
    title: string;
    slug: string;
    image: string;
    author: string;
    readTime: string;
  };
  tickerItems: WireTickerItem[];
}

export default function DailyWireSection({
  featuredStory,
  metricCard,
  tickerItems,
}: DailyWireSectionProps) {
  return (
    <section className="fn-wire-section">
      {/* Live Header Bar */}
      <div className="fn-wire-header">
        <div className="fn-wire-header-left">
          <div className="fn-wire-live-badge">
            <span className="fn-wire-pulse-dot" />
            LIVE WIRE & DATA PULSE
          </div>
          <span className="fn-wire-timestamp">UPDATED 11:45 AM EDT</span>
        </div>

        <div className="fn-wire-tabs">
          <span className="fn-wire-tab active">All Dispatches</span>
          <span className="fn-wire-tab">Markets</span>
          <span className="fn-wire-tab">Deep Tech</span>
          <span className="fn-wire-tab">Global Policy</span>
        </div>
      </div>

      {/* 3-Column Distinct Wire Grid */}
      <div className="fn-wire-grid">
        {/* Column 1: Featured Flash Dispatch */}
        <div className="fn-wire-col-featured">
          <div className="fn-wire-tag-row">
            <span className="fn-wire-cat-tag">{featuredStory.category}</span>
            <span className="fn-wire-time-badge">{featuredStory.time}</span>
          </div>

          <Link href={`/business/${featuredStory.slug}`} className="fn-wire-img-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featuredStory.image} alt={featuredStory.title} className="fn-wire-img" />
          </Link>

          <h3 className="fn-wire-headline">
            <Link href={`/business/${featuredStory.slug}`}>
              {featuredStory.title}
            </Link>
          </h3>

          <blockquote className="fn-wire-quote">
            "{featuredStory.quote}"
          </blockquote>

          <div className="fn-wire-footer-meta">
            <span>{featuredStory.author}</span>
            <Link href={`/business/${featuredStory.slug}`} className="fn-wire-link-btn">
              Read Wire →
            </Link>
          </div>
        </div>

        {/* Column 2: Data Metric & Pulse Card */}
        <div className="fn-wire-col-metric">
          <div className="fn-wire-stat-banner">
            <span className="fn-wire-stat-val">{metricCard.stat}</span>
            <span className="fn-wire-stat-lbl">{metricCard.statLabel}</span>
          </div>

          <Link href={`/technology/${metricCard.slug}`} className="fn-wire-img-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={metricCard.image} alt={metricCard.title} className="fn-wire-img" />
            <span className="fn-wire-img-overlay-tag">{metricCard.category}</span>
          </Link>

          <h3 className="fn-wire-headline-sm">
            <Link href={`/technology/${metricCard.slug}`}>
              {metricCard.title}
            </Link>
          </h3>

          <div className="fn-wire-footer-meta">
            <span>{metricCard.author}</span>
            <span className="fn-wire-pill-read">{metricCard.readTime}</span>
          </div>
        </div>

        {/* Column 3: Real-Time Fast News Ticker (4 Micro Items) */}
        <div className="fn-wire-col-ticker">
          <div className="fn-wire-ticker-head">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <span>REAL-TIME WIRE TICKER</span>
          </div>

          <div className="fn-wire-ticker-list">
            {tickerItems.map((item, idx) => (
              <div key={idx} className="fn-wire-ticker-item">
                <div className="fn-wire-item-top">
                  <span className="fn-wire-time-ago">{item.timeAgo}</span>
                  <span className="fn-wire-item-cat">{item.category}</span>
                </div>
                <h4 className="fn-wire-item-title">
                  <Link href={`/us/${item.slug}`}>
                    {item.title}
                  </Link>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
