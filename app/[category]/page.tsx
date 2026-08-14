import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategoryInfo, getArticlesForCategory } from "@/lib/data";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const categoryInfo = getCategoryInfo(categorySlug);
  const articles = getArticlesForCategory(categorySlug);

  const leadArticle = articles[0];
  const gridArticles = articles.length > 5 ? articles.slice(5) : articles.length > 1 ? articles.slice(1) : articles;
  const hotArticles = articles.slice(0, 8);

  const categoryPills = [
    { slug: "business", label: "Business" },
    { slug: "technology", label: "Technology" },
    { slug: "entertainment", label: "Entertainment" },
    { slug: "lifestyle", label: "Lifestyle" },
    { slug: "travel", label: "Travel" },
    { slug: "science", label: "Science" },
    { slug: "us", label: "US News" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%", backgroundColor: "#ffffff" }}>
      <Header activeCategory={categorySlug} />

      <main style={{ backgroundColor: "#ffffff", flexGrow: 1 }}>
        <div className="fn-site-container">
          {/* Category Hero Header Banner */}
          <div className="fn-cat-hero-wrapper">
            <div className="fn-cat-breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="#">Categories</Link>
              <span>/</span>
              <span>{categoryInfo.name}</span>
            </div>

            <div className="fn-cat-title-row">
              <div className="fn-cat-title-box">
                <div className="fn-cat-accent-bar" style={{ backgroundColor: "var(--red)" }} />
                <h1 className="fn-cat-main-title">{categoryInfo.name}</h1>
              </div>
            </div>

            <p className="fn-cat-tagline">{categoryInfo.description}</p>

            {/* Quick Navigation Category Pills */}
            <div className="fn-cat-pills-row">
              {categoryPills.map((pill) => {
                const isActive =
                  pill.slug === categorySlug.toLowerCase() ||
                  (categorySlug.toLowerCase() === "tech" && pill.slug === "technology");
                return (
                  <Link
                    key={pill.slug}
                    href={`/${pill.slug}`}
                    className={`fn-cat-pill ${isActive ? "active" : ""}`}
                  >
                    {pill.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Featured Section: Lead Left + Right Section Spotlight */}
          {leadArticle && (
            <div className="fn-cat-featured-wrapper">
              {/* LEFT — Major Lead Showcase */}
              <div className="fn-cat-featured-lead">
                <Link href={`/${categorySlug}/${leadArticle.slug}`} className="fn-cat-featured-lead-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={leadArticle.image} alt={leadArticle.title} />
                </Link>
                <div className="fn-cat-featured-lead-body">
                  <div>
                    <div className="fn-cat-badge-row">
                      <span className="fn-cat-lead-badge">Featured Story</span>
                    </div>
                    <Link href={`/${categorySlug}/${leadArticle.slug}`}>
                      <h2 className="fn-cat-lead-title">{leadArticle.title}</h2>
                    </Link>
                    <p className="fn-cat-lead-desc">{leadArticle.shortdescription}</p>
                  </div>

                  <div className="fn-cat-author-row">
                    {leadArticle.author?.image && (
                      <div className="fn-cat-avatar-img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={leadArticle.author.image} alt={leadArticle.author.name} />
                      </div>
                    )}
                    <span>By {leadArticle.author?.name || "Editorial Team"}</span>
                    <span>·</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>

              {/* RIGHT — Section Spotlight (4 Horizontal Magazine Cards) */}
              <div className="fn-cat-featured-stack">
                <div className="fn-cat-spotlight-header">
                  <span className="fn-cat-spotlight-dot" />
                  <h3 className="fn-cat-spotlight-title">SECTION SPOTLIGHT</h3>
                </div>

                <div className="fn-cat-spotlight-list">
                  {articles.slice(1, 5).map((art, idx) => (
                    <div key={idx} className="fn-cat-spotlight-card">
                      <Link href={`/${categorySlug}/${art.slug}`} className="fn-cat-spotlight-img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={art.image} alt={art.title} />
                      </Link>
                      <div className="fn-cat-spotlight-content">
                        <span className="fn-cat-spotlight-cat">{art.category}</span>
                        <Link href={`/${categorySlug}/${art.slug}`}>
                          <h4 className="fn-cat-spotlight-card-title">{art.title}</h4>
                        </Link>
                        <div className="fn-cat-spotlight-meta">
                          <span>By {art.author?.name || "Staff Writer"}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Category Grid & Sidebar Layout */}
          <div className="fn-cat-grid-layout">
            {/* Left Main Feed Grid with Hidden Scrollbar */}
            <div>
              <div className="fn-cat-section-title">
                <span>LATEST DISPATCHES & ARTICLES</span>
                <div className="fn-section-tabs" style={{ marginBottom: 0 }}>
                  <span className="fn-section-tab active">All</span>
                  <span className="fn-section-tab">Analysis</span>
                  <span className="fn-section-tab">Opinion</span>
                </div>
              </div>

              <div className="fn-cat-scroll-container">
                <div className="fn-cat-card-grid">
                  {gridArticles.map((article, idx) => (
                    <div key={idx} className="fn-cat-card">
                      <Link href={`/${categorySlug}/${article.slug}`} className="fn-cat-card-img-wrap">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={article.image} alt={article.title} />
                      </Link>
                      <div className="fn-cat-card-body">
                        <div>
                          <div className="fn-cat-card-cat" style={{ color: "var(--red)" }}>
                            {article.category}
                          </div>
                          <Link href={`/${categorySlug}/${article.slug}`}>
                            <h3 className="fn-cat-card-title">{article.title}</h3>
                          </Link>
                          {article.shortdescription && (
                            <p className="fn-cat-card-desc">{article.shortdescription}</p>
                          )}
                        </div>

                        <div className="fn-cat-card-meta">
                          <span>By {article.author?.name || "Staff Writer"}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar Widgets */}
            <aside className="fn-cat-sidebar">
              {/* Hot in Category Ranking */}
              <div className="fn-cat-hot-widget">
                <h3 className="fn-cat-widget-title" style={{ borderColor: "var(--red)" }}>
                  HOT IN {categoryInfo.name.toUpperCase()}
                </h3>

                <div>
                  {hotArticles.map((item, idx) => (
                    <div key={idx} className="fn-cat-hot-item">
                      <span className="fn-cat-hot-num" style={{ color: "var(--red)" }}>
                        {idx + 1}
                      </span>
                      <div>
                        <Link href={`/${categorySlug}/${item.slug}`}>
                          <h4 className="fn-cat-hot-text">{item.title}</h4>
                        </Link>
                        <div className="fn-cat-hot-meta">By {item.author?.name || "Staff Writer"}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
