"use client";

import React from "react";
import Link from "next/link";
import { Article } from "@/types/article";

interface ExecutiveBriefingSectionProps {
  leadArticle: Article;
  trendingArticles: Article[];
}

export default function ExecutiveBriefingSection({
  leadArticle,
  trendingArticles,
}: ExecutiveBriefingSectionProps) {
  const leadCat = leadArticle.category?.toLowerCase() || "business";

  return (
    <section className="fn-exec-wrap">
      {/* Top Header */}
      <div className="fn-exec-header">
        <div className="fn-exec-title-group">
          <div className="fn-exec-accent-tag">WEEKEND EDITION</div>
          <h2 className="fn-exec-title">Executive Dossiers & Market Intelligence</h2>
        </div>

        <div className="fn-exec-meta-tag">
          <span>CURATED BY EDITORIAL BOARD</span>
        </div>
      </div>

      {/* 2-Column Split Layout */}
      <div className="fn-exec-grid">
        {/* Left Featured Dossier Card */}
        <div className="fn-exec-lead-card">
          <Link href={`/${leadCat}/${leadArticle.slug}`} className="fn-exec-lead-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={leadArticle.image} alt={leadArticle.title} className="fn-exec-lead-img" />
            <span className="fn-exec-lead-badge">{leadArticle.category}</span>
          </Link>

          <div className="fn-exec-lead-body">
            <h3 className="fn-exec-lead-title">
              <Link href={`/${leadCat}/${leadArticle.slug}`}>
                {leadArticle.title}
              </Link>
            </h3>
            <p className="fn-exec-lead-desc">{leadArticle.shortdescription}</p>

            <div className="fn-exec-lead-footer">
              <div className="fn-exec-author-box">
                {leadArticle.author?.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={leadArticle.author.image}
                    alt={leadArticle.author.name}
                    className="fn-exec-author-avatar"
                  />
                )}
                <div>
                  <span className="fn-exec-author-name">{leadArticle.author?.name || "Senior Analyst"}</span>
                  <span className="fn-exec-author-role">{leadArticle.author?.role || "Global Strategy"}</span>
                </div>
              </div>

              <div className="fn-exec-right-action">
                <span className="fn-exec-read-time">{leadArticle.date}</span>
                <Link href={`/${leadCat}/${leadArticle.slug}`} className="fn-exec-read-btn">
                  Read Dossier →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Vertical Trending Cards */}
        <div className="fn-exec-stack">
          <div className="fn-exec-stack-heading">
            <span>TRENDING STRATEGIC BRIEFINGS</span>
          </div>

          <div className="fn-exec-stack-list">
            {trendingArticles.map((art, idx) => {
              const cat = art.category?.toLowerCase() || "business";
              return (
                <div key={idx} className="fn-exec-stack-item">
                  <Link href={`/${cat}/${art.slug}`} className="fn-exec-stack-img-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={art.image} alt={art.title} className="fn-exec-stack-img" />
                  </Link>

                  <div className="fn-exec-stack-content">
                    <span className="fn-exec-stack-cat">{art.category}</span>
                    <h4 className="fn-exec-stack-title">
                      <Link href={`/${cat}/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h4>
                    <p className="fn-exec-stack-desc">{art.shortdescription}</p>
                    <div className="fn-exec-stack-meta">
                      <span>By {art.author?.name || "Staff"}</span> · <span>{art.date}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
