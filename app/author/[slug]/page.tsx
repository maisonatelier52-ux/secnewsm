import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAuthorBySlug, getArticlesByAuthorSlug, TEAM_MEMBERS } from "@/lib/data";

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  return {
    title: `${author.name} — ${author.role} | SecNewsM`,
    description: author.bio,
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  const articles = getArticlesByAuthorSlug(slug);

  // Other team members for recommended sidebar/footer section
  const relatedTeam = TEAM_MEMBERS.filter((m) => m.slug !== author.slug).slice(0, 4);

  return (
    <div className="fn-static-page-wrapper">
      <Header />

      <main style={{ flexGrow: 1 }}>
        <div className="fn-static-container">
          {/* Breadcrumbs */}
          <div className="fn-static-breadcrumbs" style={{ marginBottom: "24px" }}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/our-team">Our Team</Link>
            <span>/</span>
            <span>{author.name}</span>
          </div>

          {/* Author Profile Header Box */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e5e5",
              borderRadius: "10px",
              padding: "36px",
              marginBottom: "48px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "32px", alignItems: "start" }}>
              {/* Avatar Image */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #dc2626",
                    boxShadow: "0 4px 12px rgba(220,38,38,0.15)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={author.image}
                    alt={author.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#171717",
                    color: "#ffffff",
                    fontSize: "10px",
                    fontWeight: "800",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  VERIFIED
                </div>
              </div>

              {/* Profile Details */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "800",
                      letterSpacing: "0.8px",
                      textTransform: "uppercase",
                      color: "#dc2626",
                      backgroundColor: "rgba(220,38,38,0.08)",
                      padding: "3px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    {author.department}
                  </span>
                  <span style={{ fontSize: "12px", color: "#737373", fontWeight: "600" }}>
                    📍 Bureau: {author.location}
                  </span>
                  <span style={{ fontSize: "12px", color: "#737373" }}>•</span>
                  <span style={{ fontSize: "12px", color: "#737373" }}>
                    Joined SecNewsM: {author.joinedYear}
                  </span>
                </div>

                <h1
                  style={{
                    fontFamily: "Georgia, Cambria, serif",
                    fontSize: "34px",
                    fontWeight: "800",
                    color: "#171717",
                    lineHeight: 1.15,
                    marginBottom: "6px",
                  }}
                >
                  {author.name}
                </h1>

                <div style={{ fontSize: "16px", fontWeight: "700", color: "#404040", marginBottom: "14px" }}>
                  {author.role}
                </div>

                <p style={{ fontSize: "15px", color: "#525252", lineHeight: "1.7", maxWidth: "800px", marginBottom: "20px" }}>
                  {author.bio}
                </p>

                {/* Social & Direct Contact Links */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                  <a
                    href={`mailto:${author.email}`}
                    className="fn-contact-submit-btn"
                    style={{ width: "auto", fontSize: "12.5px", padding: "8px 16px" }}
                  >
                    ✉ Contact Journalist
                  </a>
                  {author.twitter && (
                    <a
                      href={`https://x.com/${author.twitter.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "12.5px",
                        fontWeight: "600",
                        color: "#171717",
                        backgroundColor: "#f5f5f5",
                        padding: "8px 14px",
                        borderRadius: "5px",
                        border: "1px solid #e5e5e5",
                      }}
                    >
                      {author.twitter}
                    </a>
                  )}
                  {author.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${author.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "12.5px",
                        fontWeight: "600",
                        color: "#171717",
                        backgroundColor: "#f5f5f5",
                        padding: "8px 14px",
                        borderRadius: "5px",
                        border: "1px solid #e5e5e5",
                      }}
                    >
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Author Stats Bar */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "16px",
                marginTop: "28px",
                paddingTop: "24px",
                borderTop: "1px solid #f0f0f0",
              }}
            >
              <div style={{ background: "#f8fafc", padding: "14px 18px", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "22px", fontWeight: "800", color: "#dc2626", fontFamily: "Georgia, serif" }}>
                  {articles.length}+
                </div>
                <div style={{ fontSize: "11.5px", fontWeight: "700", textTransform: "uppercase", color: "#64748b" }}>
                  Published Dispatches
                </div>
              </div>

              <div style={{ background: "#f8fafc", padding: "14px 18px", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "22px", fontWeight: "800", color: "#171717", fontFamily: "Georgia, serif" }}>
                  99.8%
                </div>
                <div style={{ fontSize: "11.5px", fontWeight: "700", textTransform: "uppercase", color: "#64748b" }}>
                  Fact-Check Audit Rating
                </div>
              </div>

              <div style={{ background: "#f8fafc", padding: "14px 18px", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "22px", fontWeight: "800", color: "#171717", fontFamily: "Georgia, serif" }}>
                  {author.department}
                </div>
                <div style={{ fontSize: "11.5px", fontWeight: "700", textTransform: "uppercase", color: "#64748b" }}>
                  Primary Coverage Beat
                </div>
              </div>
            </div>
          </div>

          {/* Main Layout: Left Articles Feed + Right Sidebar */}
          <div className="fn-cat-grid-layout">
            <div>
              <div className="fn-cat-section-title" style={{ borderColor: "#171717", borderBottomWidth: "2px" }}>
                <span style={{ fontSize: "16px", fontFamily: "Georgia, serif" }}>
                  ARTICLES & DISPATCHES BY {author.name.toUpperCase()}
                </span>
                <span style={{ fontSize: "12px", color: "#737373", fontWeight: "500" }}>
                  ({articles.length} stories found)
                </span>
              </div>

              <div className="fn-cat-card-grid" style={{ marginTop: "24px" }}>
                {articles.map((art, idx) => (
                  <div key={idx} className="fn-cat-card">
                    <Link href={`/${art.category.toLowerCase()}/${art.slug}`} className="fn-cat-card-img-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={art.image} alt={art.title} />
                    </Link>
                    <div className="fn-cat-card-body">
                      <div>
                        <div className="fn-cat-card-cat" style={{ color: "var(--red)" }}>
                          {art.category.toUpperCase()}
                        </div>
                        <Link href={`/${art.category.toLowerCase()}/${art.slug}`}>
                          <h3 className="fn-cat-card-title">{art.title}</h3>
                        </Link>
                        {art.shortdescription && (
                          <p className="fn-cat-card-desc">{art.shortdescription}</p>
                        )}
                      </div>

                      <div className="fn-cat-card-meta">
                        <span>{art.date || "Dec 14, 2026"}</span>
                        <span>·</span>
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="fn-cat-sidebar">
              {/* Editorial Charter Box */}
              <div className="fn-static-box" style={{ marginTop: 0 }}>
                <div className="fn-static-box-title">Journalistic Independence</div>
                <p style={{ fontSize: "12.5px", color: "#525252", lineHeight: "1.5" }}>
                  {author.name} adheres strictly to the SecNewsM Editorial Code of Ethics. All published stories undergo dual-source verification and independent copy editing.
                </p>
                <Link href="/editorial-policy" style={{ fontSize: "12px", color: "#dc2626", fontWeight: "700", display: "inline-block", marginTop: "8px" }}>
                  Read Editorial Code →
                </Link>
              </div>

              {/* Other Editorial Colleagues */}
              <div style={{ marginTop: "28px", border: "1px solid #e5e5e5", borderRadius: "8px", padding: "20px", background: "#ffffff" }}>
                <h3 style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.8px", textTransform: "uppercase", color: "#171717", marginBottom: "14px", paddingBottom: "8px", borderBottom: "2px solid #dc2626" }}>
                  EDITORIAL COLLEAGUES
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {relatedTeam.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "42px", height: "42px", borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <Link href={`/author/${item.slug}`} style={{ fontWeight: "700", fontSize: "13.5px", color: "#171717", display: "block" }}>
                          {item.name}
                        </Link>
                        <div style={{ fontSize: "11.5px", color: "#737373", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {item.role}
                        </div>
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
