"use client";

import React from "react";
import Link from "next/link";
import { Article } from "@/types/article";

interface HeroGridSectionProps {
  mainArticle: Article;
  miniArticles: Article[];
  featuredTopicArticle: Article;
  topicArticles: Article[];
  hotArticles: Article[];
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

export default function HeroGridSection({
  mainArticle,
  miniArticles,
  featuredTopicArticle,
  topicArticles,
  hotArticles,
}: HeroGridSectionProps) {
  const mainCat = getCategorySlug(mainArticle.category);
  const featuredCat = getCategorySlug(featuredTopicArticle.category);

  return (
    <div className="fn-hero-grid">
      {/* Column 1: Left Feature (4.2fr) */}
      <div className="fn-col-left">
        <Link href={`/${mainCat}/${mainArticle.slug}`} className="fn-left-slider" style={{ display: "block" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mainArticle.image}
            alt={mainArticle.title}
          />
        </Link>

        <h1 className="fn-left-headline">
          <Link href={`/${mainCat}/${mainArticle.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
            {mainArticle.title}
          </Link>
        </h1>

        <div className="fn-left-meta">
          <span className="fn-cat-badge">{mainArticle.category}</span>
          <span className="fn-meta-author">{mainArticle.author.name}</span>
          <span className="fn-meta-date">- {mainArticle.date}</span>
        </div>

        <div className="fn-left-mini-cards">
          {miniArticles.map((item, idx) => {
            const cat = getCategorySlug(item.category);
            return (
              <Link key={idx} href={`/${cat}/${item.slug}`} className="fn-mini-card" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="fn-mini-card-text">
                  <div className="fn-mini-card-cat">{item.category}</div>
                  <h3 className="fn-mini-card-title">
                    {item.title}
                  </h3>
                </div>
                <div className="fn-mini-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Column 2: Middle Topics & News (4.0fr) */}
      <div className="fn-col-mid">
        <Link href={`/${featuredCat}/${featuredTopicArticle.slug}`} className="fn-mid-featured" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
          <div className="fn-mid-featured-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featuredTopicArticle.image}
              alt={featuredTopicArticle.title}
            />
          </div>
          <h2 className="fn-mid-featured-headline">
            {featuredTopicArticle.title}
          </h2>
          <div className="fn-left-meta">
            <span className="fn-cat-badge">{featuredTopicArticle.category}</span>
            <span className="fn-meta-date">{featuredTopicArticle.date}</span>
          </div>
          {featuredTopicArticle.shortdescription && (
            <p className="fn-mid-featured-desc">{featuredTopicArticle.shortdescription}</p>
          )}
        </Link>

        <div className="fn-mid-list">
          {topicArticles.map((item, idx) => {
            const cat = getCategorySlug(item.category);
            return (
              <Link key={idx} href={`/${cat}/${item.slug}`} className="fn-mid-item" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <h3 className="fn-mid-item-title">
                  {item.title}
                </h3>
                <div className="fn-mid-item-meta">
                  <span className="fn-meta-date">{item.date}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Column 3: Right Rankings (2.8fr) */}
      <div className="fn-col-right">
        <h2 className="fn-right-header">Hot this week</h2>

        <div className="fn-hot-list">
          {hotArticles.slice(0, 5).map((item, idx) => {
            const cat = getCategorySlug(item.category);
            return (
              <Link key={idx} href={`/${cat}/${item.slug}`} className="fn-hot-item" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="fn-hot-content">
                  <div className="fn-hot-cat">{item.category}</div>
                  <h3 className="fn-hot-title">
                    {item.title}
                  </h3>
                  <div className="fn-hot-meta">{item.date || "3 hours ago · 4 min read"}</div>
                </div>
                <div className="fn-hot-num">{idx + 1}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
