"use client";

import React from "react";
import Link from "next/link";
import { Article } from "@/types/article";

interface VisualEssaysSectionProps {
  leadArticle: Article;
  secondaryArticles: Article[];
}

export default function VisualEssaysSection({
  leadArticle,
  secondaryArticles,
}: VisualEssaysSectionProps) {
  const leadCat = leadArticle.category?.toLowerCase() || "world";

  return (
    <section className="fn-vis-wrap">
      {/* Top Header */}
      <div className="fn-vis-header">
        <div>
          <div className="fn-vis-badge">
            <span className="fn-vis-badge-dot" />
            VISUAL ESSAYS & CULTURE
          </div>
          <h2 className="fn-vis-title">Photojournalism & Cultural Lens</h2>
          <p className="fn-vis-subtitle">
            Immersive longform photo essays and deep-dive cultural commentary from our international field correspondents.
          </p>
        </div>

        <div className="fn-vis-tabs">
          <button className="fn-vis-tab active">All Essays</button>
          <button className="fn-vis-tab">Architecture</button>
          <button className="fn-vis-tab">Expeditions</button>
          <button className="fn-vis-tab">Analog Craft</button>
        </div>
      </div>

      {/* Main Showcase Hero Banner */}
      <div className="fn-vis-hero-card">
        <Link href={`/${leadCat}/${leadArticle.slug}`} className="fn-vis-hero-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={leadArticle.image} alt={leadArticle.title} className="fn-vis-hero-img" />
          <div className="fn-vis-hero-overlay" />
        </Link>

        <div className="fn-vis-hero-content">
          <span className="fn-vis-hero-tag">{leadArticle.category}</span>
          <h3 className="fn-vis-hero-title">
            <Link href={`/${leadCat}/${leadArticle.slug}`}>
              {leadArticle.title}
            </Link>
          </h3>
          <p className="fn-vis-hero-desc">{leadArticle.shortdescription}</p>

          <div className="fn-vis-hero-footer">
            <div className="fn-vis-author">
              {leadArticle.author?.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={leadArticle.author.image}
                  alt={leadArticle.author.name}
                  className="fn-vis-author-avatar"
                />
              )}
              <div>
                <span className="fn-vis-author-name">{leadArticle.author?.name || "Staff Writer"}</span>
                <span className="fn-vis-author-role">{leadArticle.author?.role || "Field Photojournalist"}</span>
              </div>
            </div>

            <Link href={`/${leadCat}/${leadArticle.slug}`} className="fn-vis-btn">
              Explore Visual Essay →
            </Link>
          </div>
        </div>
      </div>

      {/* 3 Secondary Cards Grid */}
      <div className="fn-vis-grid">
        {secondaryArticles.map((art, idx) => {
          const cat = art.category?.toLowerCase() || "world";
          return (
            <div key={idx} className="fn-vis-card">
              <Link href={`/${cat}/${art.slug}`} className="fn-vis-card-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={art.image} alt={art.title} className="fn-vis-card-img" />
              </Link>

              <div className="fn-vis-card-body">
                <h4 className="fn-vis-card-title">
                  <Link href={`/${cat}/${art.slug}`}>
                    {art.title}
                  </Link>
                </h4>
                <p className="fn-vis-card-desc">{art.shortdescription}</p>
                <div className="fn-vis-card-meta">
                  <span>By {art.author?.name || "Correspondent"}</span>
                  <span>·</span>
                  <span>{art.date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
