"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TEAM_MEMBERS, TeamMember } from "@/lib/data";

export default function OurTeamPage() {
  const [selectedDept, setSelectedDept] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const departments = [
    { id: "all", label: "All Team Members" },
    { id: "Executive Board", label: "Executive Board" },
    { id: "Business & Markets", label: "Business & Markets" },
    { id: "Technology & AI", label: "Technology & AI" },
    { id: "Politics & Economy", label: "Politics & Economy" },
    { id: "Culture & Visual Essays", label: "Culture & Visuals" },
    { id: "Science & Environment", label: "Science & Environment" },
  ];

  const filteredMembers = TEAM_MEMBERS.filter((member: TeamMember) => {
    const matchesDept = selectedDept === "all" || member.department === selectedDept;
    const matchesQuery =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesQuery;
  });

  return (
    <div className="fn-static-page-wrapper">
      <Header />

      <main style={{ flexGrow: 1 }}>
        <div className="fn-static-container">
          {/* Hero Section */}
          <div className="fn-static-hero" style={{ borderBottom: "2px solid #dc2626" }}>
            <div className="fn-static-breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/about-us">About Us</Link>
              <span>/</span>
              <span>Our Team</span>
            </div>

            <div className="fn-static-header-row">
              <div className="fn-static-accent-bar" />
              <div>
                <h1 className="fn-static-title">Our Newsroom & Editorial Board</h1>
                <p className="fn-static-subtitle">
                  Meet the award-winning journalists, foreign correspondents, data analysts, and executive editors driving independent reporting across SecNewsM dispatches.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Filter & Search Controls */}
          <div style={{ marginBottom: "36px" }}>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                className="fn-contact-input"
                placeholder="Search team by name, role, beat, or bureau location (e.g. Sarah, Tech, London, Editor)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontSize: "15px", padding: "14px 18px", borderRadius: "6px" }}
              />
            </div>

            {/* Department Navigation Tabs */}
            <div className="fn-section-tabs" style={{ marginBottom: 0, gap: "8px", flexWrap: "wrap" }}>
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  type="button"
                  className={`fn-section-tab ${selectedDept === dept.id ? "active" : ""}`}
                  onClick={() => setSelectedDept(dept.id)}
                  style={{ border: "none", cursor: "pointer", fontSize: "12.5px", padding: "6px 14px" }}
                >
                  {dept.label}
                </button>
              ))}
            </div>
          </div>

          {/* Redesigned Team Cards Grid */}
          <div className="fn-team-grid" style={{ gap: "32px" }}>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member: TeamMember) => (
                <div
                  key={member.slug}
                  className="fn-team-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "10px",
                    border: "1px solid #e5e5e5",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <div>
                    {/* Image Wrap with Badge Overlay */}
                    <div className="fn-team-img-wrap" style={{ height: "280px" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={member.image} alt={member.name} />
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          backgroundColor: "#dc2626",
                          color: "#ffffff",
                          fontSize: "10.5px",
                          fontWeight: "800",
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                          padding: "4px 10px",
                          borderRadius: "4px",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                        }}
                      >
                        {member.department}
                      </div>

                      <div
                        style={{
                          position: "absolute",
                          bottom: "12px",
                          right: "12px",
                          backgroundColor: "rgba(23, 23, 23, 0.85)",
                          color: "#ffffff",
                          fontSize: "11px",
                          fontWeight: "600",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        📍 {member.location}
                      </div>
                    </div>

                    {/* Team Body Info */}
                    <div className="fn-team-body" style={{ padding: "24px" }}>
                      <div className="fn-team-role" style={{ color: "#dc2626", fontWeight: "800", fontSize: "11.5px" }}>
                        {member.role}
                      </div>

                      <Link href={`/author/${member.slug}`}>
                        <h2 className="fn-team-name" style={{ fontSize: "20px", margin: "6px 0 10px 0" }}>
                          {member.name}
                        </h2>
                      </Link>

                      <p className="fn-team-bio" style={{ fontSize: "13.5px", color: "#525252", lineHeight: "1.6" }}>
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Action Bar */}
                  <div style={{ padding: "0 24px 24px 24px" }}>
                    <Link
                      href={`/author/${member.slug}`}
                      className="fn-contact-submit-btn"
                      style={{
                        width: "100%",
                        fontSize: "13px",
                        padding: "10px 16px",
                        backgroundColor: "#171717",
                        borderRadius: "5px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      View Profile & Dispatches →
                    </Link>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "12px", fontSize: "12px", color: "#737373" }}>
                      <a href={`mailto:${member.email}`} style={{ color: "#dc2626", fontWeight: "600" }}>
                        ✉ Email
                      </a>
                      {member.twitter && <span>{member.twitter}</span>}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: "1 / -1", padding: "48px 20px", textAlign: "center", border: "1px dashed #cccccc", borderRadius: "8px" }}>
                <p style={{ fontSize: "16px", color: "#525252" }}>No team members found matching your search term.</p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(""); setSelectedDept("all"); }}
                  className="fn-contact-submit-btn"
                  style={{ width: "auto", marginTop: "14px", padding: "8px 20px", fontSize: "13px" }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Editorial Integrity Box */}
          <div className="fn-static-box" style={{ marginTop: "56px", background: "#f8fafc", padding: "32px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#171717", marginBottom: "6px" }}>
                  Journalistic Ethics & Independence Charter
                </h3>
                <p style={{ fontSize: "14px", color: "#525252", lineHeight: "1.6", maxWidth: "750px" }}>
                  Our global team of reporters adheres strictly to double-source verification rules and the IFJ Code of Ethics. Every journalist operates behind an unbreachable commercial firewall.
                </p>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/editorial-policy" className="fn-contact-submit-btn" style={{ width: "auto", fontSize: "13px", padding: "10px 18px" }}>
                  Read Editorial Policy →
                </Link>
                <Link href="/source-methodology" className="fn-contact-submit-btn" style={{ width: "auto", fontSize: "13px", padding: "10px 18px", backgroundColor: "#171717" }}>
                  Source Methodology →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
