"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FAQItem {
  id: string;
  category: "subscriptions" | "editorial" | "account" | "syndication";
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "subscriptions",
    question: "What is included with a SecNewsM digital subscription?",
    answer: "A SecNewsM subscription grants unlimited access to all breaking news dispatches, executive briefings, investigative reports, data lab visualizations, daily market summaries, and our audio podcast archives.",
  },
  {
    id: "faq-2",
    category: "subscriptions",
    question: "How do I cancel or modify my subscription plan?",
    answer: "You can manage your subscription settings at any time by navigating to your Account Dashboard or contacting our reader support desk at support@secnewsm.com. Cancellations take effect at the end of your active billing period.",
  },
  {
    id: "faq-3",
    category: "editorial",
    question: "How does SecNewsM handle factual corrections in articles?",
    answer: "When a factual error is discovered, our editorial team immediately updates the story and appends a transparent correction box detailing what was modified, the corrected fact, and the timestamp of update.",
  },
  {
    id: "faq-4",
    category: "editorial",
    question: "How can I submit a confidential news tip to the newsroom?",
    answer: "Confidential news tips can be submitted via encrypted email to tips@secnewsm.com or via our secure dispatch form on the Contact page. Senior investigative editors monitor tip lines 24/7.",
  },
  {
    id: "faq-5",
    category: "account",
    question: "How do I update my email address or newsletter preferences?",
    answer: "You can update your newsletter preferences directly via the link in the footer of any daily newsletter email, or by logging into your account settings page.",
  },
  {
    id: "faq-6",
    category: "account",
    question: "Is my personal reading data and email address safe?",
    answer: "Yes. SecNewsM adheres strictly to GDPR and CCPA privacy standards. We do not sell, rent, or trade reader personal data to third-party data brokers under any circumstances.",
  },
  {
    id: "faq-7",
    category: "syndication",
    question: "Can I quote or republish SecNewsM articles for academic or media use?",
    answer: "Brief quotations (up to 150 words) are permitted for fair use with hyperlinked attribution. Full article re-publishing or commercial syndication requires licensing permission from syndication@secnewsm.com.",
  },
  {
    id: "faq-8",
    category: "syndication",
    question: "Does SecNewsM offer corporate or institutional enterprise licenses?",
    answer: "Yes. We offer enterprise site licenses for universities, corporate newsrooms, government agencies, and financial firms. Contact corporate@secnewsm.com for custom group rates.",
  },
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ "faq-1": true });

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqData.filter((item) => {
    const matchesTab = activeTab === "all" || item.category === activeTab;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="fn-static-page-wrapper">
      <Header />

      <main style={{ flexGrow: 1 }}>
        <div className="fn-static-container">
          {/* Hero Section */}
          <div className="fn-static-hero">
            <div className="fn-static-breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Help Center</span>
              <span>/</span>
              <span>FAQ</span>
            </div>

            <div className="fn-static-header-row">
              <div className="fn-static-accent-bar" />
              <div>
                <h1 className="fn-static-title">Frequently Asked Questions</h1>
                <p className="fn-static-subtitle">
                  Find fast answers to common questions regarding SecNewsM subscriptions, editorial standards, newsletter preferences, and content licensing.
                </p>
              </div>
            </div>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ marginBottom: "18px" }}>
              <input
                type="text"
                className="fn-contact-input"
                placeholder="Search questions (e.g. subscription, tip, corrections, syndication)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontSize: "15px", padding: "14px 18px", borderRadius: "6px" }}
              />
            </div>

            <div className="fn-section-tabs" style={{ marginBottom: 0, gap: "10px", flexWrap: "wrap" }}>
              <button
                className={`fn-section-tab ${activeTab === "all" ? "active" : ""}`}
                onClick={() => setActiveTab("all")}
                style={{ border: "none", cursor: "pointer", fontSize: "13px" }}
              >
                All Questions ({faqData.length})
              </button>
              <button
                className={`fn-section-tab ${activeTab === "subscriptions" ? "active" : ""}`}
                onClick={() => setActiveTab("subscriptions")}
                style={{ border: "none", cursor: "pointer", fontSize: "13px" }}
              >
                Subscriptions
              </button>
              <button
                className={`fn-section-tab ${activeTab === "editorial" ? "active" : ""}`}
                onClick={() => setActiveTab("editorial")}
                style={{ border: "none", cursor: "pointer", fontSize: "13px" }}
              >
                Newsroom & Editorial
              </button>
              <button
                className={`fn-section-tab ${activeTab === "account" ? "active" : ""}`}
                onClick={() => setActiveTab("account")}
                style={{ border: "none", cursor: "pointer", fontSize: "13px" }}
              >
                Account & Privacy
              </button>
              <button
                className={`fn-section-tab ${activeTab === "syndication" ? "active" : ""}`}
                onClick={() => setActiveTab("syndication")}
                style={{ border: "none", cursor: "pointer", fontSize: "13px" }}
              >
                Rights & Syndication
              </button>
            </div>
          </div>

          {/* Accordion Container */}
          <div className="fn-faq-accordion">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div key={faq.id} className={`fn-faq-item ${isOpen ? "active" : ""}`}>
                    <button
                      type="button"
                      className="fn-faq-button"
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className="fn-faq-icon">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="fn-faq-content">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div style={{ padding: "40px 20px", textAlign: "center", border: "1px dashed #cccccc", borderRadius: "6px" }}>
                <p style={{ fontSize: "16px", color: "#525252" }}>No questions match your search parameters.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
                  className="fn-contact-submit-btn"
                  style={{ width: "auto", marginTop: "14px", padding: "8px 18px", fontSize: "13px" }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Still Have Questions Box */}
          <div className="fn-static-box" style={{ marginTop: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div className="fn-static-box-title" style={{ fontSize: "17px" }}>Have a Question Not Listed Here?</div>
              <p style={{ fontSize: "13.5px", color: "#525252" }}>
                Our reader support team and editorial desk are ready to assist you directly.
              </p>
            </div>
            <Link href="/contact" className="fn-contact-submit-btn" style={{ width: "auto", fontSize: "13px", padding: "10px 20px" }}>
              Contact Newsroom →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
