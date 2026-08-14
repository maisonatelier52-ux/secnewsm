"use client";

import React from "react";
import { Article } from "@/types/article";

interface HeroGridSectionProps {
  mainArticle: Article;
  miniArticles: Article[];
  featuredTopicArticle: Article;
  topicArticles: Article[];
  hotArticles: Article[];
}

export default function HeroGridSection({
  mainArticle,
  miniArticles,
  featuredTopicArticle,
  topicArticles,
  hotArticles,
}: HeroGridSectionProps) {
  return (
    <div className="fn-hero-grid">
      {/* Column 1: Left Feature (4.2fr) */}
      <div className="fn-col-left">
        <div className="fn-left-slider">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mainArticle.image}
            alt={mainArticle.title}
          />
        </div>

        <h1 className="fn-left-headline">
          {mainArticle.title}
        </h1>

        <div className="fn-left-meta">
          <span className="fn-cat-badge">{mainArticle.category}</span>
          <span className="fn-meta-author">{mainArticle.author.name}</span>
          <span className="fn-meta-date">- {mainArticle.date}</span>
        </div>

        <div className="fn-left-mini-cards">
          {miniArticles.map((item, idx) => (
            <div key={idx} className="fn-mini-card">
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
            </div>
          ))}
        </div>
      </div>

      {/* Column 2: Middle Topics & News (4.0fr) */}
      <div className="fn-col-mid">
        <div className="fn-topics-bar">
          <span className="fn-topics-title">Topics</span>
          <div className="fn-topics-list">
            <span>Strategy</span>
            <span>Marketing</span>
            <span>More ▾</span>
          </div>
        </div>

        <div className="fn-mid-featured">
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
        </div>

        <div className="fn-mid-list">
          {topicArticles.map((item, idx) => (
            <div key={idx} className="fn-mid-item">
              <h3 className="fn-mid-item-title">
                {item.title}
              </h3>
              <div className="fn-mid-item-meta">
                <span className="fn-cat-badge">{item.category}</span>
                <span className="fn-meta-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Column 3: Right Rankings (2.8fr) */}
      <div className="fn-col-right">
        <h2 className="fn-right-header">Hot this week</h2>

        <div className="fn-hot-list">
          {hotArticles.map((item, idx) => (
            <div key={idx} className="fn-hot-item">
              <div className="fn-hot-content">
                <div className="fn-hot-cat">{item.category}</div>
                <h3 className="fn-hot-title">
                  {item.title}
                </h3>
              </div>
              <div className="fn-hot-num">{idx + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
