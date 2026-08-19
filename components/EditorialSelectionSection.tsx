"use client";

import React from "react";
import Link from "next/link";
import { Article } from "@/types/article";

interface EditorialSelectionSectionProps {
  leadArticle: Article;
  midStackArticles: Article[];
  rightStackArticles: Article[];
  stripArticles: Article[];
}

function getCategorySlug(category: string): string {
  const lower = category?.toLowerCase() || "world";
  if (lower.includes("tech")) return "technology";
  if (lower.includes("business") || lower.includes("market") || lower.includes("finance")) return "business";
  if (lower.includes("lifestyle") || lower.includes("culture")) return "lifestyle";
  if (lower.includes("travel")) return "travel";
  if (lower.includes("science")) return "science";
  if (lower.includes("world") || lower.includes("global") || lower.includes("international")) return "world";
  return lower.split(" ")[0];
}

export default function EditorialSelectionSection({
  leadArticle,
  midStackArticles,
  rightStackArticles,
  stripArticles,
}: EditorialSelectionSectionProps) {
  const leadCat = getCategorySlug(leadArticle.category);

  return (
    <section className="fn-section-wrap">
      {/* Section Header */}
      <div className="fn-section-header">
        <div className="fn-section-title-box">
          <span className="fn-section-kicker">EDITORIAL SELECTION</span>
          <h2 className="fn-section-main-heading">Global Currents &amp; Perspectives</h2>
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
          <Link href={`/${leadCat}/${leadArticle.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className="fn-lead-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={leadArticle.image}
                alt={leadArticle.title}
              />
            </div>
            <span className="fn-lead-subtitle">{leadArticle.category}</span>
            <h3 className="fn-lead-title">
              {leadArticle.title}
            </h3>
            <p className="fn-lead-desc">
              {leadArticle.shortdescription}
            </p>
          </Link>

          <div className="fn-lead-author-row">
            <div className="fn-author-avatar-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={leadArticle.author.image}
                alt={leadArticle.author.name}
              />
            </div>
            <span>By {leadArticle.author.name}</span>
            <span>·</span>
            <span>{leadArticle.date}</span>
          </div>
        </div>

        {/* Column 2: News Stack 1 */}
        <div className="fn-mid-stack">
          {midStackArticles.map((item, idx) => {
            const cat = getCategorySlug(item.category);
            return (
              <Link key={idx} href={`/${cat}/${item.slug}`} className="fn-stack-item" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="fn-stack-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="fn-stack-content">
                  <span className="fn-stack-subtitle">{item.category}</span>
                  <h4 className="fn-stack-title">
                    {item.title}
                  </h4>
                  <span className="fn-stack-time">{item.date}</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Column 3: News Stack 2 */}
        <div className="fn-right-stack">
          {rightStackArticles.map((item, idx) => {
            const cat = getCategorySlug(item.category);
            return (
              <Link key={idx} href={`/${cat}/${item.slug}`} className="fn-stack-item" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="fn-stack-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="fn-stack-content">
                  <span className="fn-stack-subtitle">{item.category}</span>
                  <h4 className="fn-stack-title">
                    {item.title}
                  </h4>
                  <span className="fn-stack-time">{item.date}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 4-Column Minimal Deep Dives Strip */}
      <div className="fn-strip-4col">
        {stripArticles.map((item, idx) => {
          const cat = getCategorySlug(item.category);
          return (
            <Link key={idx} href={`/${cat}/${item.slug}`} className="fn-strip-item" style={{ textDecoration: "none", color: "inherit" }}>
              <span className="fn-strip-num">{item.category}</span>
              <h4 className="fn-strip-title">
                {item.title}
              </h4>
              <div className="fn-strip-meta">By {item.author.name} · {item.date}</div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
