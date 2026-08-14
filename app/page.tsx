"use client";

import React from "react";
import Header from "@/components/Header";
import HeroGridSection from "@/components/HeroGridSection";
import EditorialSelectionSection from "@/components/EditorialSelectionSection";
import OpinionCarouselSection from "@/components/OpinionCarouselSection";
import InvestigativeReportsSection from "@/components/InvestigativeReportsSection";
import Footer from "@/components/Footer";

import {
  heroMainArticle,
  heroMiniArticles,
  heroFeaturedTopicArticle,
  heroTopicArticles,
  hotArticles,
  editorialLeadArticle,
  editorialMidStackArticles,
  editorialRightStackArticles,
  editorialStripArticles,
  opinionArticles,
  investigativeLeadArticle,
  investigativeStackArticles,
} from "@/lib/data";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main style={{ backgroundColor: "#ffffff" }}>
        <div className="fn-site-container">
          {/* Section 1: Hero Grid */}
          <HeroGridSection
            mainArticle={heroMainArticle}
            miniArticles={heroMiniArticles}
            featuredTopicArticle={heroFeaturedTopicArticle}
            topicArticles={heroTopicArticles}
            hotArticles={hotArticles}
          />

          {/* Section 2: Editorial Selection */}
          <EditorialSelectionSection
            leadArticle={editorialLeadArticle}
            midStackArticles={editorialMidStackArticles}
            rightStackArticles={editorialRightStackArticles}
            stripArticles={editorialStripArticles}
          />

          {/* Section 4: Opinion & Audio Carousel */}
          <OpinionCarouselSection articles={opinionArticles} />

          {/* Section 5: Investigative Reports */}
          <InvestigativeReportsSection
            leadArticle={investigativeLeadArticle}
            stackArticles={investigativeStackArticles}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
