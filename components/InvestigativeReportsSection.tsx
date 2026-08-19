"use client";

import React from "react";
import Link from "next/link";
import { Article } from "@/types/article";

interface InvestigativeReportsSectionProps {
  leadArticle: Article;
  stackArticles: Article[];
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

export default function InvestigativeReportsSection({
  leadArticle,
  stackArticles,
}: InvestigativeReportsSectionProps) {
  const leadCat = getCategorySlug(leadArticle.category);

  return (
    <section className="fn-sec5-wrap">
      {/* Header */}
      <div className="fn-sec5-header">
        <h2 className="fn-sec5-title">Investigative Reports &amp; Special Series</h2>
        <Link href="/world" className="fn-sec5-sub-link" style={{ textDecoration: "none" }}>
          View All Investigations →
        </Link>
      </div>

      {/* Grid */}
      <div className="fn-sec5-grid">
        {/* Left Lead Investigation */}
        <div className="fn-sec5-lead-card">
          <Link href={`/${leadCat}/${leadArticle.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
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
          </Link>

          <div className="fn-sec5-lead-meta">
            By {leadArticle.author.name} · {leadArticle.date}
          </div>
        </div>

        {/* Right Stacked Cards */}
        <div className="fn-sec5-right-stack">
          {stackArticles.map((item, idx) => {
            const cat = getCategorySlug(item.category);
            return (
              <Link
                key={idx}
                href={`/${cat}/${item.slug}`}
                className="fn-sec5-stack-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
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
                  {item.shortdescription && (
                    <p className="fn-sec5-stack-desc">
                      {item.shortdescription}
                    </p>
                  )}
                  <span className="fn-sec5-stack-meta">
                    By {item.author.name} · {item.date}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
