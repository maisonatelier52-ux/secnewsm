"use client";

import React from "react";
import Link from "next/link";
import { Article } from "@/types/article";

interface SpecialFeaturesSectionProps {
  articles: Article[];
}

export default function SpecialFeaturesSection({
  articles,
}: SpecialFeaturesSectionProps) {
  return (
    <section className="fn-feat-wrap">
      {/* Top Header */}
      <div className="fn-feat-header">
        <h2 className="fn-feat-title">Special Features & Industry Insights</h2>
        <Link href="/business" className="fn-feat-more-link">
          Explore All Features →
        </Link>
      </div>

      {/* 4 Equal Light Cards Grid */}
      <div className="fn-feat-4col-grid">
        {articles.map((art, idx) => {
          const categorySlug = art.category?.toLowerCase().includes("tech")
            ? "technology"
            : art.category?.toLowerCase().includes("market")
            ? "business"
            : "us";

          return (
            <div key={idx} className="fn-feat-card">
              <Link href={`/${categorySlug}/${art.slug}`} className="fn-feat-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={art.image} alt={art.title} className="fn-feat-img" />
              </Link>

              <div className="fn-feat-card-body">
                <span className="fn-feat-category">{art.category}</span>
                <h3 className="fn-feat-card-title">
                  <Link href={`/${categorySlug}/${art.slug}`}>
                    {art.title}
                  </Link>
                </h3>
                <p className="fn-feat-card-desc">{art.shortdescription}</p>
                <div className="fn-feat-card-meta">
                  <span>By {art.author?.name || "Staff Writer"}</span> · <span>{art.date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
