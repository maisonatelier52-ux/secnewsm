"use client";

import React, { useRef } from "react";
import { Article } from "@/types/article";

interface OpinionCarouselSectionProps {
  articles: Article[];
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
        <h2 className="fn-sec4-title">Featured Opinion & Audio Series</h2>

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
        {articles.map((item, idx) => (
          <div key={idx} className="fn-sec4-card">
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
          </div>
        ))}
      </div>
    </section>
  );
}
