"use client";

import React from "react";
import { Article } from "@/types/article";

interface InvestigativeReportsSectionProps {
  leadArticle: Article;
  stackArticles: Article[];
}

export default function InvestigativeReportsSection({
  leadArticle,
  stackArticles,
}: InvestigativeReportsSectionProps) {
  return (
    <section className="fn-sec5-wrap">
      {/* Header */}
      <div className="fn-sec5-header">
        <h2 className="fn-sec5-title">Investigative Reports & Special Series</h2>
        <span className="fn-sec5-sub-link">View All Investigations →</span>
      </div>

      {/* Grid */}
      <div className="fn-sec5-grid">
        {/* Left Lead Investigation */}
        <div className="fn-sec5-lead-card">
          <div className="fn-sec5-lead-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={leadArticle.image}
              alt={leadArticle.title}
            />
          </div>

          <span className="fn-sec5-lead-cat">{leadArticle.category}</span>
          <h3 className="fn-sec5-lead-title">
            {leadArticle.title}
          </h3>
          <p className="fn-sec5-lead-desc">
            {leadArticle.shortdescription}
          </p>

          <div className="fn-sec5-lead-meta">
            By {leadArticle.author.name} · {leadArticle.date}
          </div>
        </div>

        {/* Right Stacked Cards */}
        <div className="fn-sec5-right-stack">
          {stackArticles.map((item, idx) => (
            <div key={idx} className="fn-sec5-stack-card">
              <div className="fn-sec5-stack-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="fn-sec5-stack-content">
                <span className="fn-sec5-stack-cat">{item.category}</span>
                <h4 className="fn-sec5-stack-title">
                  {item.title}
                </h4>
                <span className="fn-sec5-stack-meta">
                  By {item.author.name} · {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
