"use client";

import React from "react";
import Header from "@/components/Header";
import HeroGridSection from "@/components/HeroGridSection";
import EditorialSelectionSection from "@/components/EditorialSelectionSection";
import OpinionCarouselSection from "@/components/OpinionCarouselSection";
import InvestigativeReportsSection from "@/components/InvestigativeReportsSection";
import WorldDispatchesSection from "@/components/WorldDispatchesSection";
import VisualEssaysSection from "@/components/VisualEssaysSection";
import SpecialFeaturesSection from "@/components/SpecialFeaturesSection";
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
  worldDispatchColumns,
  visualEssayLeadArticle,
  visualEssaySecondaryArticles,
  specialFeatureArticles,
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

          {/* Section 3: Opinion & Audio Carousel */}
          <OpinionCarouselSection articles={opinionArticles} />

          {/* Section 4: Investigative Reports */}
          <InvestigativeReportsSection
            leadArticle={investigativeLeadArticle}
            stackArticles={investigativeStackArticles}
          />

          {/* Section 5: World Dispatches & Special Briefings */}
          <WorldDispatchesSection columns={worldDispatchColumns} />

          {/* Section 6: Photojournalism & Culture Visual Essays */}
          <VisualEssaysSection
            leadArticle={visualEssayLeadArticle}
            secondaryArticles={visualEssaySecondaryArticles}
          />

          {/* Section 7: Special Features & Industry Insights */}
          <SpecialFeaturesSection articles={specialFeatureArticles} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
