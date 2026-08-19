"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Article } from "@/types/article";

interface OpinionCarouselSectionProps {
  articles: Article[];
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

export default function OpinionCarouselSection({
  articles,
}: OpinionCarouselSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="fn-sec4-wrap">
      {/* Header with Arrow Controls */}
      <div className="fn-sec4-header">
        <h2 className="fn-sec4-title">Featured Opinion &amp; Audio Series</h2>

        <div className="fn-sec4-controls">
          <button className="fn-sec4-arrow" onClick={scrollLeft} aria-label="Scroll left">
            ‹
          </button>
          <button className="fn-sec4-arrow" onClick={scrollRight} aria-label="Scroll right">
            ›
          </button>
        </div>
      </div>

      {/* Smooth Horizontal Scroll Track */}
      <div className="fn-sec4-carousel" ref={carouselRef}>
        {articles.map((item, idx) => {
          const cat = getCategorySlug(item.category);
          return (
            <Link key={idx} href={`/${cat}/${item.slug}`} className="fn-sec4-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="fn-sec4-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                />
                <span className="fn-sec4-badge">{item.category}</span>
              </div>
              <h3 className="fn-sec4-card-title">
                {item.title}
              </h3>
              <div className="fn-sec4-author-row">
                {item.author.image && (
                  <div className="fn-sec4-author-avatar">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.author.image} alt={item.author.name} />
                  </div>
                )}
                <span>{item.author.role === "Host" ? "Hosted by " : "By "}{item.author.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
