"use client";

import React from "react";
import { Article } from "@/types/article";

interface EditorialSelectionSectionProps {
  leadArticle: Article;
  midStackArticles: Article[];
  rightStackArticles: Article[];
  stripArticles: Article[];
}

export default function EditorialSelectionSection({
  leadArticle,
  midStackArticles,
  rightStackArticles,
  stripArticles,
}: EditorialSelectionSectionProps) {
  return (
    <section className="fn-section-wrap">
      {/* Section Header */}
      <div className="fn-section-header">
        <div className="fn-section-title-box">
          <span className="fn-section-kicker">EDITORIAL SELECTION</span>
          <h2 className="fn-section-main-heading">Global Currents & Perspectives</h2>
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
          <div>
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
          </div>

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
          {midStackArticles.map((item, idx) => (
            <div key={idx} className="fn-stack-item">
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
            </div>
          ))}
        </div>

        {/* Column 3: News Stack 2 */}
        <div className="fn-right-stack">
          {rightStackArticles.map((item, idx) => (
            <div key={idx} className="fn-stack-item">
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
            </div>
          ))}
        </div>
      </div>

      {/* 4-Column Minimal Deep Dives Strip */}
      <div className="fn-strip-4col">
        {stripArticles.map((item, idx) => (
          <div key={idx} className="fn-strip-item">
            <span className="fn-strip-num">{item.category}</span>
            <h4 className="fn-strip-title">
              {item.title}
            </h4>
            <div className="fn-strip-meta">By {item.author.name} · {item.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
