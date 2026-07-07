// Server Component — NO "use client" directive
// This component renders crawlable semantic HTML for search engine indexing.
// It is visually hidden but fully readable by Google, Bing, and all crawlers.

import data from "../data/portfolioData.json";

export function SeoContent() {
  return (
    <article
      aria-hidden="true"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: 0,
      }}
    >
      {/* Primary H1 — only one per page */}
      <h1>Sharnabh Banerjee — iOS Developer Portfolio</h1>

      <section>
        <h2>About Sharnabh Banerjee</h2>
        <p>{data.profile.bio}</p>
        <p>
          Role: {data.profile.role}. Experience: {data.profile.experienceSummary}{" "}
          of {data.profile.experienceLabel}. Open to work and freelance
          opportunities.
        </p>
        <p>
          Core Technologies:{" "}
          {data.profile.coreTechnologies?.join(", ")}.
        </p>
        <p>
          Contact:{" "}
          <a href="mailto:banerjeesharnabh@gmail.com">
            banerjeesharnabh@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href={data.profile.linkedinUrl}
            rel="noopener noreferrer"
          >
            linkedin.com/in/sharnabh
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Sharnabh"
            rel="noopener noreferrer"
          >
            github.com/Sharnabh
          </a>
        </p>
      </section>

      <section>
        <h2>iOS &amp; macOS Projects</h2>
        {data.projects.map((proj) => (
          <article key={proj.id}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p>
              Platform: {proj.platform}. Language: {proj.language}. Role:{" "}
              {proj.role}. Status: {proj.status}.
            </p>
            <p>Technologies: {proj.technologies.join(", ")}.</p>
            <a href={proj.linkUrl} rel="noopener noreferrer">
              View {proj.title} — {proj.linkType}
            </a>
          </article>
        ))}
      </section>

      <section>
        <h2>Professional Experience</h2>
        {data.experience.map((exp) => (
          <article key={exp.id}>
            <h3>
              {exp.title} at {exp.company}
            </h3>
            <p>Period: {exp.period}</p>
            <h4>Key Achievements</h4>
            <ul>
              {exp.achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
            <p>Skills: {exp.tags.join(", ")}.</p>
          </article>
        ))}
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          {data.skills.map((skill) => (
            <li key={skill.name}>
              {skill.name} — {skill.level}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Shipped Products — App Store &amp; Web</h2>
        <p>
          Total Downloads: {data.shippedProducts.metrics.totalDownloads}. Average
          Rating: {data.shippedProducts.metrics.avgRating}. Active Users:{" "}
          {data.shippedProducts.metrics.activeUsers}. Live Apps:{" "}
          {data.shippedProducts.metrics.liveApps}.
        </p>
        {data.shippedProducts.products.map((prod) => (
          <article key={prod.id}>
            <h3>{prod.title}</h3>
            <p>
              {prod.subtitle} — {prod.description}
            </p>
            <p>
              Status: {prod.badge}. Rating: {prod.rating} ({prod.ratingsCount}).
            </p>
            <p>Technologies: {prod.tags.join(", ")}.</p>
            {prod.linkUrl && (
              <a href={prod.linkUrl} rel="noopener noreferrer">
                Visit {prod.title}
              </a>
            )}
          </article>
        ))}
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} Sharnabh Banerjee. iOS Developer based in
          India. Available for freelance and full-time iOS development
          opportunities. Built with Swift, SwiftUI, UIKit, Next.js.
        </p>
      </footer>
    </article>
  );
}
