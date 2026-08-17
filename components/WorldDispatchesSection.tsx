"use client";

import React from "react";
import Link from "next/link";
import { WorldDispatchColumn } from "@/lib/data";

interface WorldDispatchesSectionProps {
  columns: WorldDispatchColumn[];
}

export default function WorldDispatchesSection({
  columns,
}: WorldDispatchesSectionProps) {
  return (
    <section className="fn-sec3-wrap">
      {/* Header */}
      <div className="fn-sec3-top-head">
        <h2 className="fn-sec3-main-title">World Dispatches & Special Briefings</h2>

        <div className="fn-sec3-categories">
          <span className="fn-sec3-cat-item active">All Regions</span>
          <span className="fn-sec3-cat-item">Americas</span>
          <span className="fn-sec3-cat-item">Europe & UK</span>
          <span className="fn-sec3-cat-item">Asia Pacific</span>
          <span className="fn-sec3-cat-item">Middle East</span>
        </div>
      </div>

      {/* 4 Equal Columns Grid */}
      <div className="fn-sec3-4col-grid">
        {columns.map((col, idx) => {
          const leadCategory = col.leadArticle.category?.toLowerCase() || "world";
          return (
            <div key={idx} className="fn-sec3-column">
              <div className="fn-sec3-col-header">{col.header}</div>

              <Link href={`/${leadCategory}/${col.leadArticle.slug}`} className="fn-sec3-card-img" style={{ display: "block" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={col.leadArticle.image}
                  alt={col.leadArticle.title}
                />
              </Link>

              <h3 className="fn-sec3-card-title">
                <Link href={`/${leadCategory}/${col.leadArticle.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {col.leadArticle.title}
                </Link>
              </h3>
              <p className="fn-sec3-card-desc">
                {col.leadArticle.shortdescription}
              </p>
              <div className="fn-sec3-card-meta">
                By {col.leadArticle.author?.name || "Staff Writer"} · {col.leadArticle.date}
              </div>

              <div className="fn-sec3-sub-list">
                {col.subArticles.map((sub, sIdx) => {
                  const subCat = sub.category?.toLowerCase() || "world";
                  return (
                    <div key={sIdx} className="fn-sec3-sub-item">
                      <h4 className="fn-sec3-sub-title">
                        <Link href={`/${subCat}/${sub.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                          {sub.title}
                        </Link>
                      </h4>
                      <span className="fn-sec3-sub-meta">{sub.date}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
