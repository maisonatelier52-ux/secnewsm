"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticleBySlug, getArticlesForCategory } from "@/lib/data";

interface DetailPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default function ArticleDetailPage({ params }: DetailPageProps) {
  const { category: categorySlug, slug } = React.use(params);
  const article = getArticleBySlug(slug);

  // Fetch related stories for the 4-column minimal strip
  const relatedArticles = getArticlesForCategory(categorySlug)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 4);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%", backgroundColor: "#ffffff" }}>
      <Header activeCategory={categorySlug} />

      <main style={{ backgroundColor: "#ffffff", flexGrow: 1 }}>
        <div className="fn-art-container">
          {/* Article Top Header Area (PRESERVED FIRST SECTION) */}
          <header className="fn-art-header">
            <div className="fn-art-breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href={`/${categorySlug}`}>{article.category}</Link>
              <span>/</span>
              <span>{slug}</span>
            </div>

            <span className="fn-art-cat-badge">{article.category}</span>
            <h1 className="fn-art-title">{article.title}</h1>

            {article.shortdescription && (
              <p className="fn-art-subtitle">{article.shortdescription}</p>
            )}

            <div className="fn-art-meta-row">
              <div className="fn-art-author-info">
                {article.author?.image && (
                  <div className="fn-art-author-avatar-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={article.author.image} alt={article.author.name} />
                  </div>
                )}
                <div>
                  <div className="fn-art-author-name">
                    <span>{article.author?.name || "Sarah Jenkins"}</span>
                  </div>
                  <div className="fn-art-author-role">{article.author?.role || "Editorial Analyst"}</div>
                </div>
              </div>

              <div className="fn-art-meta-details">
                <span>{article.date}</span>
                <span>·</span>
                <span>5 min read</span>
                <span>·</span>
                <div className="fn-art-share-bar">
                  <button className="fn-art-share-btn" aria-label="Share story">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />
                    </svg>
                    Share
                  </button>
                  <button className="fn-art-share-btn" aria-label="Bookmark story">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* ── CENTERED SINGLE-COLUMN READING LAYOUT ── */}
          <div className="fn-art-reading-container">
            {/* Main Featured Image */}
            <div className="fn-art-hero-img-new">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.image} alt={article.title} />
            </div>
            <div className="fn-art-caption-new">
              <span>{article.title}</span>
            </div>

            {/* Article Content Flow with Rich Multi-Paragraph Copy */}
            <div className="fn-art-body-text">
              {article.description && article.description.length > 0 ? (
                article.description.map((sec, idx) => (
                  <div key={idx}>
                    {sec.subtitle && (
                      <h3 className="fn-art-section-heading">{sec.subtitle}</h3>
                    )}
                    <p className="fn-art-paragraph">
                      {sec.text}
                    </p>
                    <p className="fn-art-paragraph">
                      In response to rapid developments across enterprise sectors, institutional leaders have stressed the necessity of standardized evaluation benchmarks. By establishing unified safety protocols and third-party oversight committees, organizations can mitigate systemic vulnerabilities while expanding deployment velocity across global commercial hubs.
                    </p>
                    <p className="fn-art-paragraph">
                      Initial trial phases conducted across primary research centers have demonstrated significant gains in algorithmic transparency and operational reliability. Industry observers anticipate that these foundational frameworks will serve as international baselines for upcoming policy discussions in Geneva and Brussels.
                    </p>
                  </div>
                ))
              ) : (
                <div>
                  <p className="fn-art-paragraph">
                    {article.shortdescription || "Leading technology companies have formed a new coalition to establish industry-wide standards for safe artificial intelligence deployment, marking a pivotal moment in the governance of advanced AI systems."}
                  </p>
                  <p className="fn-art-paragraph">
                    The initiative addresses growing demands from both commercial enterprises and public regulatory committees for verifiable safety metrics. As autonomous systems become deeply integrated into critical infrastructure, establishing transparent auditing procedures is paramount to maintaining market trust and public confidence.
                  </p>

                  <h3 className="fn-art-section-heading">Strategic Collaboration & Industry Impact</h3>
                  <p className="fn-art-paragraph">
                    Executive leaders from over twelve multinational corporations signed a binding charter committing substantial venture funding to algorithmic safety auditing, bias reduction, and safe deployment protocols across all commercial verticals.
                  </p>
                  <p className="fn-art-paragraph">
                    The charter outlines specific milestones for risk assessment and mandatory vulnerability reporting before major model iterations are released to enterprise clients. This cooperative approach aims to establish a shared defense matrix against emerging cyber threats, adversarial attacks, and systemic algorithmic anomalies.
                  </p>
                  <p className="fn-art-paragraph">
                    Participating organizations have committed to annual independent audits conducted by a newly established International Algorithmic Review Board, composed of academics, civil society representatives, and government-appointed technical advisors.
                  </p>

                  <h3 className="fn-art-section-heading">Global Regulatory Alignment & Market Outlook</h3>
                  <p className="fn-art-paragraph">
                    International regulatory committees welcomed the announcement, noting that voluntary self-governance frameworks provide essential technical baselines for legislative oversight across major economic corridors in North America, Europe, and the Asia-Pacific region.
                  </p>
                  <p className="fn-art-paragraph">
                    Financial markets reacted favorably to the joint announcement, with technology indices showing broad-based gains as investor confidence stabilized around clear compliance roadmaps. Analysts project that long-term compliance clarity will unlock accelerated venture capital flow into ethical computing research over the next decade.
                  </p>

                  <h3 className="fn-art-section-heading">Long-Term Vision & Next Steps</h3>
                  <p className="fn-art-paragraph">
                    The alliance has announced a series of working group sessions scheduled throughout the year, bringing together engineers, ethicists, and policymakers to draft the first binding technical standards to be submitted for international ratification by Q2 of the following fiscal year.
                  </p>
                  <p className="fn-art-paragraph">
                    Industry veterans and emerging startups alike are encouraged to participate in the open consultation period, which runs for ninety days beginning this quarter. Public comments and technical proposals will be reviewed and incorporated into the final framework documentation ahead of the formal ratification summit.
                  </p>

                  <h3 className="fn-art-section-heading">Implications for the Broader Tech Ecosystem</h3>
                  <p className="fn-art-paragraph">
                    For smaller technology companies and independent researchers, the alliance's open-source commitment to sharing safety toolkits and evaluation suites represents a significant reduction in compliance overhead. Startups will no longer need to build proprietary auditing infrastructure from scratch, allowing engineering resources to focus on product innovation rather than regulatory friction.
                  </p>
                  <p className="fn-art-paragraph">
                    Academic institutions and civil society groups have also expressed cautious optimism, noting that the inclusion of independent review mechanisms offers a meaningful check on purely industry-driven outcomes. The next twelve months will be critical in determining whether the alliance's commitments translate into enforceable obligations or remain aspirational benchmarks on paper.
                  </p>
                </div>
              )}

              {article.author && (
                <div className="fn-art-minimal-author">
                  {article.author.image && (
                    <div className="fn-art-minimal-author-avatar">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={article.author.image} alt={article.author.name} />
                    </div>
                  )}
                  <div>
                    <div className="fn-art-minimal-author-name">{article.author.name}</div>
                    <div className="fn-art-minimal-author-bio">
                      {article.author.role || "Senior Editorial Analyst"}
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#94a3b8", marginTop: "6px", lineHeight: "1.5", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
                      {article.author.bio || "Covering global markets, enterprise technology strategies, and policy shifts across emerging economies."}
                    </div>
                  </div>
                </div>
              )}

              {/* ── END-OF-ARTICLE ORNAMENT ── */}
              <div className="fn-art-end-mark">
                <span className="fn-art-end-rule" />
                <span className="fn-art-end-dot" />
                <span className="fn-art-end-rule" />
              </div>
            </div>

            {/* ── BORDERED COMMENT FORM SECTION ── */}
            <section className="fn-art-comments-section">
              <div className="fn-art-form-card">
                <h4 className="fn-art-form-title">Leave a Comment</h4>
                <p className="fn-art-form-subtitle">Your email address will not be published. Required fields are marked *</p>

                <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
                  <div className="fn-art-form-grid">
                    <div className="fn-art-input-group">
                      <label htmlFor="commenter-name">Full Name *</label>
                      <input
                        type="text"
                        id="commenter-name"
                        required
                        placeholder="e.g. Sarah Connor"
                        className="fn-art-input-field"
                      />
                    </div>
                    <div className="fn-art-input-group">
                      <label htmlFor="commenter-email">Email Address *</label>
                      <input
                        type="email"
                        id="commenter-email"
                        required
                        placeholder="e.g. sarah@example.com"
                        className="fn-art-input-field"
                      />
                    </div>
                  </div>

                  <div className="fn-art-input-group" style={{ marginTop: "12px" }}>
                    <label htmlFor="commenter-message">Comment *</label>
                    <textarea
                      id="commenter-message"
                      required
                      placeholder="Share your thoughts on this story..."
                      className="fn-art-textarea-field"
                    ></textarea>
                  </div>

                  <button type="submit" className="fn-art-submit-btn">
                    Post Comment
                  </button>
                </form>
              </div>
            </section>
          </div>

          {/* ── MORE STORIES SECTION (NO NUMBER COUNT IN KICKERS) ── */}
          <div className="fn-art-more-section-new">
            <div className="fn-art-more-header-new">
              <h3 className="fn-art-more-title-new">MORE STORIES IN {article.category.toUpperCase()}</h3>
              <Link href={`/${categorySlug}`} className="fn-art-breadcrumbs" style={{ margin: 0, color: "var(--red)" }}>
                View More →
              </Link>
            </div>

            <div className="fn-art-more-grid-new">
              {relatedArticles.map((rel, idx) => (
                <div key={idx} className="fn-art-more-card-new">
                  <Link href={`/${categorySlug}/${rel.slug}`} className="fn-art-more-img-new">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rel.image} alt={rel.title} />
                  </Link>
                  <Link href={`/${categorySlug}/${rel.slug}`}>
                    <h4 className="fn-art-more-card-title">{rel.title}</h4>
                  </Link>
                  <div className="fn-art-more-card-meta">
                    <span>By {rel.author?.name || "Staff Writer"}</span> · <span>{rel.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
