import React from "react";
import Image from "next/image";
import { PortfolioData, Project } from "../types";
import styles from "../page.module.css";

// ----------------------------------------------------
// Icons
// ----------------------------------------------------
const GridIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
    <rect x="1" y="1" width="6" height="6" rx="1" />
    <rect x="9" y="1" width="6" height="6" rx="1" />
    <rect x="1" y="9" width="6" height="6" rx="1" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
  </svg>
);

const ListIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M1 3h14M1 8h14M1 13h14" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 1H15V5" />
    <path d="M9 7L15 1" />
    <path d="M12 9V14C12 14.55 11.55 15 11 15H2C1.45 15 1 14.55 1 14V5C1 4.45 1.45 4 2 4H7" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px", color: "var(--text-muted)" }}>
    <circle cx="8" cy="8" r="7" />
    <path d="M8 1v14M1 8h14M2.5 4.5A13 13 0 0 0 8 15a13 13 0 0 0 5.5-10.5M2.5 11.5A13 13 0 0 0 8 1a13 13 0 0 0 5.5 10.5" />
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: "6px", color: "#ffd60a" }}>
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
  </svg>
);

const UsersIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px", color: "var(--text-muted)" }}>
    <path d="M12 14v-1a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v1" />
    <circle cx="7" cy="4" r="3" />
    <path d="M14 14v-1a3 3 0 0 0-2.4-2.9" />
    <circle cx="12" cy="4" r="2" />
  </svg>
);

const CheckmarkCircleIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px", color: "var(--text-muted)" }}>
    <circle cx="8" cy="8" r="7" />
    <path d="M4.5 8l2.5 2.5 4.5-5" />
  </svg>
);

const BreadcrumbFolderIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px", color: "#ffd60a" }}>
    <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h4a1.5 1.5 0 0 1 1.06.44l1.5 1.5H13a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5v-11z" />
  </svg>
);

const BreadcrumbDocumentIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px", color: "#6cb6ff" }}>
    <path d="M9 1H2v14h12V6L9 1z" />
    <path d="M9 1v5h5" />
  </svg>
);

const ZynkIcon = () => (
  <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
    <rect x="12" y="14" width="36" height="32" rx="4" stroke="#ffffff" strokeWidth="3" />
    <line x1="12" y1="24" x2="48" y2="24" stroke="#ffffff" strokeWidth="3" />
    <circle cx="21" cy="32" r="3" fill="#ffffff" />
    <circle cx="30" cy="32" r="3" fill="#ffffff" />
    <circle cx="39" cy="32" r="3" fill="#ffffff" />
    <circle cx="21" cy="39" r="3" fill="#ffffff" />
    <circle cx="30" cy="39" r="3" fill="#ffffff" />
    <circle cx="39" cy="39" r="3" fill="#ffffff" />
    <line x1="21" y1="10" x2="21" y2="15" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
    <line x1="39" y1="10" x2="39" y2="15" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const FoodiesIcon = () => (
  <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="16" stroke="#ffffff" strokeWidth="3" fill="#ffffff" fillOpacity="0.1" />
    <circle cx="30" cy="30" r="10" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 3" />
    <path d="M22 34h16c0-6-4-10-8-10s-8 4-8 10z" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 37h20" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const FilledStar = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="#ffd60a">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
  </svg>
);

const EmptyStar = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="#6c7986" strokeWidth="1.5">
    <path d="M8 .25l1.882 3.815 4.21.612-3.046 2.97.719 4.192L8 12.347l-3.766 1.98.72-4.194L.818 6.374l4.21-.611L8 .25z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
    <path d="M8 12V2M3 7l5 5 5-5" />
    <path d="M1 14h14" strokeWidth="1.5" />
  </svg>
);

interface EditorWorkspaceProps {
  activeFile: string;
  openTabs: string[];
  data: PortfolioData;
  selectedProject: Project | null;
  setSelectedProject: (proj: Project | null) => void;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  parsedItemsCount: number;
  handleLoadCommits: () => void;
  triggerToast: (msg: string) => void;
  editorFontSize: number;
  editorTabWidth: number;
  editorLineNumbers: boolean;
  editorLineWrapping: boolean;
}

export function EditorWorkspace({
  activeFile,
  openTabs,
  data,
  selectedProject,
  setSelectedProject,
  viewMode,
  setViewMode,
  parsedItemsCount,
  handleLoadCommits,
  triggerToast,
  editorFontSize,
  editorTabWidth,
  editorLineNumbers,
  editorLineWrapping
}: EditorWorkspaceProps) {
  if (openTabs.length === 0) {
    return (
      <div className={styles.noSelection} style={{ marginTop: "100px" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <BreadcrumbFolderIcon /> No Open Files
        </span>
        <p style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
          Select a file from the Project Navigator to view content.
        </p>
      </div>
    );
  }

  // Resolve dynamic CSS module classes
  const getFallbackClass = (fallbackClass: string) => {
    const classMapping: { [key: string]: string } = {
      gradientMindflow: styles.gradientMindflow,
      gradientLeoLingo: styles.gradientLeoLingo,
      gradientBulkmart: styles.gradientBulkmart,
      gradient7Sales: styles.gradient7Sales
    };
    return classMapping[fallbackClass] || styles.gradientMindflow;
  };

  const getBreadcrumbs = () => {
    const folders = ["Portfolio"];
    if (activeFile === "Products.plist") {
      folders.push("Resources");
    } else if (activeFile === "Experience.md") {
      folders.push("Content");
    } else if (activeFile === "Main.swift") {
      folders.push("Sources", "App");
    } else {
      folders.push("Sources", "Views");
    }
    return (
      <div className={styles.breadcrumbs}>
        {folders.map((folder) => (
          <React.Fragment key={folder}>
            <span style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <BreadcrumbFolderIcon /> {folder}
            </span>
            <span className={styles.breadcrumbArrow}>/</span>
          </React.Fragment>
        ))}
        <span style={{ color: "var(--text-primary)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "2px" }}>
          <BreadcrumbDocumentIcon /> {activeFile}
        </span>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", overflow: "hidden" }}>
      {getBreadcrumbs()}
      <div className={styles.editorContent}>
      {/* ---------------------------------------------------- */}
      {/* activeFile === "Projects.swift" */}
      {/* ---------------------------------------------------- */}
      {activeFile === "Projects.swift" && (
        <div>
          <div className={styles.catalogHeader}>
            <div className={styles.catalogMeta}>
              <h1>Asset Catalog</h1>
              <p>~/Portfolio/Projects.swift — {parsedItemsCount} items parsed</p>
            </div>
            <div className={styles.catalogControls}>
              <div className={styles.segmentedControl}>
                <button
                  className={`${styles.segmentedBtn} ${viewMode === "grid" ? styles.segmentedBtnActive : ""}`}
                  onClick={() => setViewMode("grid")}
                  title="Grid View"
                >
                  <GridIcon /> Grid
                </button>
                <button
                  className={`${styles.segmentedBtn} ${viewMode === "list" ? styles.segmentedBtnActive : ""}`}
                  onClick={() => setViewMode("list")}
                  title="List View"
                >
                  <ListIcon /> List
                </button>
              </div>
            </div>
          </div>

          {/* Grid/List layout container */}
          <div className={viewMode === "grid" ? styles.projectGrid : styles.projectList}>
            {data.projects.map((proj) => (
              <div
                key={proj.id}
                className={`${styles.projectCard} ${selectedProject?.id === proj.id ? styles.projectCardSelected : ""} ${
                  viewMode === "grid" ? (proj.size === "large" ? styles.largeCard : styles.smallCard) : styles.listCard
                }`}
                onClick={() => setSelectedProject(proj)}
              >
                {/* Media Container */}
                <div className={styles.cardMediaContainer}>
                  {proj.imageUrl ? (
                    <Image
                      src={proj.imageUrl}
                      alt={`${proj.title} Mockup`}
                      fill
                      className={styles.cardImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                      priority={proj.size === "large"}
                    />
                  ) : (
                    <div className={`${styles.cardFallbackMedia} ${getFallbackClass(proj.fallbackClass)}`}>
                      <div className={styles.fallbackIconContainer}>{proj.fallbackIcon}</div>
                    </div>
                  )}

                  {/* Grid overlay description */}
                  {viewMode === "grid" && (
                    <div className={styles.cardOverlay}>
                      <div className={styles.cardContentText}>
                        <div className={styles.cardHeaderInfo}>
                          <h3 className={styles.cardTitle}>{proj.title}</h3>
                          <span className={styles.cardLinkIcon}>
                            <ExternalLinkIcon />
                          </span>
                        </div>
                        <p className={styles.cardDescription}>{proj.subtitle}</p>
                        <div className={styles.cardTags}>
                          {proj.technologies.slice(0, 3).map((t) => (
                            <span key={t} className={styles.tag}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* List split columns */}
                {viewMode === "list" && (
                  <div className={styles.listCardContent}>
                    <div className={styles.listCardLeft}>
                      <div className={styles.listCardTitleRow}>
                        <h3 className={styles.listCardTitle}>{proj.title}</h3>
                        <span className={styles.listPlatformBadge}>{proj.platform}</span>
                      </div>
                      <p className={styles.listCardDesc}>{proj.description}</p>
                      <div className={styles.listCardTags}>
                        {proj.technologies.map((t) => (
                          <span key={t} className={styles.listTag}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.listCardRight}>
                      <span className={styles.listStatusLabel}>STATUS</span>
                      <span className={styles.listStatusVal}>{proj.status}</span>
                      <span className={styles.listRoleLabel}>ROLE</span>
                      <span className={styles.listRoleVal}>{proj.role}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.loadMoreContainer}>
            <button className={styles.loadMoreBtn} onClick={handleLoadCommits}>
              🔄 Load More Commits
            </button>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* activeFile === "Main.swift" */}
      {/* ---------------------------------------------------- */}
      {activeFile === "Main.swift" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Top Panel Row */}
          <div style={{ display: "flex", gap: "20px" }}>
            {/* Profile Card */}
            <div style={{ flex: 2, background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", gap: "8px" }}>
                <span style={{ fontSize: "9px", fontWeight: 700, padding: "2px 6px", borderRadius: "4px", backgroundColor: "rgba(48, 209, 88, 0.12)", color: "#30d158", border: "1px solid rgba(48, 209, 88, 0.2)" }}>
                  OPEN TO WORK
                </span>
                <span style={{ fontSize: "9px", fontWeight: 700, padding: "2px 6px", borderRadius: "4px", backgroundColor: "rgba(255, 159, 10, 0.12)", color: "#ff9f0a", border: "1px solid rgba(255, 159, 10, 0.2)" }}>
                  FREELANCE AVAILABLE
                </span>
              </div>
              <div>
                <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", margin: 0 }}>{data.profile.name}</h1>
                <h2 style={{ fontSize: "16px", fontWeight: 500, color: "var(--text-secondary)", marginTop: "4px" }}>{data.profile.role}</h2>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.5", margin: 0 }}>
                {data.profile.bio}
              </p>
              
              <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
                {data.profile.linkedinUrl && (
                  <a 
                    href={data.profile.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--accent-color)", textDecoration: "none", fontWeight: 500 }}
                  >
                    <ExternalLinkIcon /> LinkedIn Profile
                  </a>
                )}
                {data.profile.resumeUrl && (
                  <a 
                    href={data.profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => triggerToast("Opening official resume Google Drive link...")}
                    style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--accent-color)", textDecoration: "none", fontWeight: 500 }}
                  >
                    <DownloadIcon /> View Resume.pdf
                  </a>
                )}
              </div>
            </div>

            {/* Experience Summary Card */}
            <div style={{ flex: 1, background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "10px" }}>
              <div style={{ fontSize: "32px", color: "#ffd60a" }}>🏆</div>
              <div>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#ffffff" }}>{data.profile.experienceSummary}</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "4px" }}>{data.profile.experienceLabel}</div>
              </div>
            </div>
          </div>

          {/* Bottom Code Editor Window */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Window Title Bar */}
            <div 
              style={{ 
                background: "rgba(30, 30, 36, 0.8)", 
                border: "1px solid var(--border-color)", 
                borderBottom: "none",
                borderTopLeftRadius: "8px", 
                borderTopRightRadius: "8px", 
                padding: "10px 16px", 
                display: "flex", 
                alignItems: "center" 
              }}
            >
              {/* macOS window controls */}
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#ff453a", display: "inline-block" }}></span>
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#ff9f0a", display: "inline-block" }}></span>
                <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#30d158", display: "inline-block" }}></span>
              </div>
              <span style={{ flex: 1, textAlign: "center", fontSize: "11px", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginRight: "33px" }}>
                Developer.swift — Edited
              </span>
            </div>

            {/* Window Content */}
            <div 
              style={{ 
                background: "rgba(0, 0, 0, 0.15)", 
                border: "1px solid var(--border-color)", 
                borderBottomLeftRadius: "8px", 
                borderBottomRightRadius: "8px", 
                padding: "20px", 
                fontFamily: "var(--font-mono)", 
                fontSize: "12px", 
                lineHeight: "1.6" 
              }}
            >
              <div 
                className={styles.codeEditor}
                style={{
                  fontSize: `${editorFontSize}px`,
                  whiteSpace: editorLineWrapping ? "pre-wrap" : "pre",
                  wordBreak: editorLineWrapping ? "break-all" : "normal"
                }}
              >
                {[
                  <React.Fragment key="1"><span className={styles.syntaxKeyword}>import</span> SwiftUI</React.Fragment>,
                  <React.Fragment key="2"><span className={styles.syntaxKeyword}>import</span> Foundation</React.Fragment>,
                  <React.Fragment key="3"></React.Fragment>,
                  <React.Fragment key="4"><span className={styles.syntaxComment}>/// Main entry point for my professional profile</span></React.Fragment>,
                  <React.Fragment key="5"><span className={styles.syntaxKeyword}>struct</span> <span className={styles.syntaxType}>Developer</span>: <span className={styles.syntaxType}>Engineer</span> &#123;</React.Fragment>,
                  <React.Fragment key="6">{" ".repeat(1 * editorTabWidth)}<span className={styles.syntaxKeyword}>let</span> name = <span className={styles.syntaxString}>&quot;{data.profile.name}&quot;</span></React.Fragment>,
                  <React.Fragment key="7">{" ".repeat(1 * editorTabWidth)}<span className={styles.syntaxKeyword}>let</span> role = <span className={styles.syntaxString}>&quot;{data.profile.role}&quot;</span></React.Fragment>,
                  <React.Fragment key="8">{" ".repeat(1 * editorTabWidth)}<span className={styles.syntaxKeyword}>var</span> status: <span className={styles.syntaxType}>Status</span> = .openToWork</React.Fragment>,
                  <React.Fragment key="9"></React.Fragment>,
                  <React.Fragment key="10">{" ".repeat(1 * editorTabWidth)}<span className={styles.syntaxKeyword}>var</span> coreTechnologies: [<span className={styles.syntaxType}>String</span>] &#123;</React.Fragment>,
                  <React.Fragment key="11">{" ".repeat(2 * editorTabWidth)}[</React.Fragment>,
                  <React.Fragment key="12">
                    {" ".repeat(3 * editorTabWidth)}
                    {data.profile.coreTechnologies?.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className={styles.syntaxString}>&quot;{tech}&quot;</span>
                        {idx < (data.profile.coreTechnologies?.length || 0) - 1 ? ", " : ""}
                      </React.Fragment>
                    ))}
                  </React.Fragment>,
                  <React.Fragment key="13">{" ".repeat(2 * editorTabWidth)}]</React.Fragment>,
                  <React.Fragment key="14">{" ".repeat(1 * editorTabWidth)}&#125;</React.Fragment>,
                  <React.Fragment key="15"></React.Fragment>,
                  <React.Fragment key="16">{" ".repeat(1 * editorTabWidth)}<span className={styles.syntaxKeyword}>func</span> <span className={styles.syntaxMethod}>getExperience</span>() -&gt; <span className={styles.syntaxType}>String</span> &#123;</React.Fragment>,
                  <React.Fragment key="17">{" ".repeat(2 * editorTabWidth)}<span className={styles.syntaxKeyword}>return</span> <span className={styles.syntaxString}>&quot;{data.profile.experienceSummary} of {data.profile.experienceLabel}&quot;</span></React.Fragment>,
                  <React.Fragment key="18">{" ".repeat(1 * editorTabWidth)}&#125;</React.Fragment>,
                  <React.Fragment key="19"></React.Fragment>,
                  <React.Fragment key="20">{" ".repeat(1 * editorTabWidth)}<span className={styles.syntaxKeyword}>func</span> <span className={styles.syntaxMethod}>triggerResumeDownload</span>() &#123;</React.Fragment>,
                  <React.Fragment key="21">{" ".repeat(2 * editorTabWidth)}<span className={styles.syntaxType}>System</span>.download(<span className={styles.syntaxString}>&quot;Resume_{data.profile.name.replace(/\s+/g, '_')}.pdf&quot;</span>)</React.Fragment>,
                  <React.Fragment key="22">{" ".repeat(1 * editorTabWidth)}&#125;</React.Fragment>,
                  <React.Fragment key="23">&#125;</React.Fragment>
                ].map((element, index) => (
                  <div className={styles.codeLine} key={index}>
                    {editorLineNumbers && <span className={styles.lineNum}>{index + 1}</span>}
                    <span className={styles.lineContent}>
                      {element}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* activeFile === "Experience.md" */}
      {/* ---------------------------------------------------- */}
      {activeFile === "Experience.md" && (
        <div className={styles.markdownBody}>
          <div className={styles.codeLine} style={{ marginBottom: "6px" }}>
            <span className={styles.syntaxKeyword} style={{ fontSize: "20px", marginRight: "6px", fontWeight: "bold" }}>#</span>
            <span className={styles.syntaxHeading} style={{ fontSize: "20px", fontWeight: "bold", color: "#ffffff" }}>Professional Experience</span>
          </div>
          <div className={styles.codeLine} style={{ marginBottom: "20px" }}>
            <span className={styles.syntaxComment}>Last updated: </span>
            <span className={styles.syntaxString} style={{ marginLeft: "4px" }}>&quot;{data.profile.lastUpdated}&quot;</span>
          </div>

          <div className={styles.timeline}>
            {data.experience.map((exp) => (
              <div key={exp.id} className={styles.timelineItem}>
                <div className={styles.codeLine}>
                  <span className={styles.syntaxKeyword} style={{ fontSize: "15px", marginRight: "6px", fontWeight: "bold" }}>##</span>
                  <span className={styles.syntaxHeading} style={{ fontSize: "15px", fontWeight: "bold", color: "#6cb6ff" }}>{exp.title}</span>
                </div>
                <div className={styles.codeLine} style={{ marginTop: "4px" }}>
                  <span className={styles.syntaxKeyword} style={{ color: "#ff7ab6", marginRight: "4px" }}>@</span>
                  <span style={{ color: "#ffffff", fontWeight: 500 }}>{exp.company}</span>
                  <span className={styles.syntaxComment} style={{ marginLeft: "8px" }}>// {exp.period}</span>
                </div>

                <div className={styles.achievementsBox}>
                  <div className={styles.codeLine} style={{ marginBottom: "4px" }}>
                    <span className={styles.syntaxKeyword} style={{ marginRight: "4px", fontSize: "11px" }}>###</span>
                    <span style={{ color: "#ffffff", fontWeight: 600, fontSize: "11px" }}>Achievements</span>
                  </div>
                  <ul className={styles.achievementsList}>
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardTags} style={{ marginTop: "8px" }}>
                  {exp.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* activeFile === "Products.plist" */}
      {/* ---------------------------------------------------- */}
      {activeFile === "Products.plist" && (
        <div>
          {/* Header */}
          <div className={styles.catalogHeader} style={{ marginBottom: "16px" }}>
            <div className={styles.catalogMeta}>
              <div className={styles.codeLine} style={{ marginBottom: "4px" }}>
                <span className={styles.syntaxKeyword} style={{ fontSize: "20px", marginRight: "6px", fontWeight: "bold" }}>#</span>
                <span className={styles.syntaxHeading} style={{ fontSize: "20px", fontWeight: "bold", color: "#ffffff" }}>Shipped Products</span>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "12px", marginTop: "4px" }}>
                Live applications currently available on the App Store and Web. Demonstrating end-to-end delivery from concept to production.
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className={styles.metricsGrid} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>
            <div className={styles.metricCard} style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "12px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                <GlobeIcon /> Total Downloads
              </div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}>{data.shippedProducts.metrics.totalDownloads}</div>
            </div>
            
            <div className={styles.metricCard} style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "12px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                <StarIcon /> Avg Rating
              </div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}>{data.shippedProducts.metrics.avgRating}</div>
            </div>

            <div className={styles.metricCard} style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "12px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                <UsersIcon /> Active Users
              </div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}>{data.shippedProducts.metrics.activeUsers}</div>
            </div>

            <div className={styles.metricCard} style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "12px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                <CheckmarkCircleIcon /> Live Apps
              </div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}>{data.shippedProducts.metrics.liveApps}</div>
            </div>
          </div>

          {/* Products Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "32px" }}>
            {data.shippedProducts.products.map((prod) => (
              <div 
                key={prod.id} 
                style={{ 
                  background: "rgba(0, 0, 0, 0.15)", 
                  border: "1px solid var(--border-color)", 
                  borderRadius: "10px", 
                  padding: "20px", 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "12px" 
                }}
              >
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <div 
                    style={{ 
                      width: "60px", 
                      height: "60px", 
                      borderRadius: "12px", 
                      background: prod.id === "zynk" ? "linear-gradient(135deg, #8e5fe6 0%, #ff375f 100%)" : "linear-gradient(135deg, #30d158 0%, #007aff 100%)", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
                    }}
                  >
                    {prod.id === "zynk" ? <ZynkIcon /> : <FoodiesIcon />}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}>{prod.title}</h3>
                      <span 
                        style={{ 
                          fontSize: "9px", 
                          fontFamily: "var(--font-mono)", 
                          padding: "1px 5px", 
                          borderRadius: "4px", 
                          backgroundColor: prod.badge === "Live" ? "rgba(48, 209, 88, 0.15)" : "rgba(255, 159, 10, 0.15)", 
                          color: prod.badge === "Live" ? "#30d158" : "#ff9f0a",
                          border: prod.badge === "Live" ? "1px solid rgba(48, 209, 88, 0.2)" : "1px solid rgba(255, 159, 10, 0.2)"
                        }}
                      >
                        {prod.badge}
                      </span>
                    </div>
                    <p style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "2px" }}>{prod.subtitle}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "4px", fontSize: "11px" }}>
                      <div style={{ display: "flex", gap: "2px" }}>
                        {prod.rating === "0.0" ? (
                          <>
                            <EmptyStar /><EmptyStar /><EmptyStar /><EmptyStar /><EmptyStar />
                          </>
                        ) : (
                          <>
                            <FilledStar /><FilledStar /><FilledStar /><FilledStar /><FilledStar />
                          </>
                        )}
                      </div>
                      <span style={{ color: "var(--text-muted)", fontSize: "10px" }}>({prod.ratingsCount})</span>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.45", minHeight: "36px" }}>
                  {prod.description}
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px" }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {prod.tags.map((t) => (
                      <span key={t} className={styles.tag} style={{ fontSize: "9px" }}>{t}</span>
                    ))}
                  </div>
                  
                  <button 
                    style={{ 
                      background: "none", 
                      border: "1px solid var(--border-color)", 
                      color: (prod.hasDownloads || prod.linkUrl) ? "var(--text-primary)" : "var(--text-muted)",
                      borderRadius: "6px",
                      padding: "4px 12px",
                      fontSize: "11px",
                      fontWeight: 600,
                      cursor: (prod.hasDownloads || prod.linkUrl) ? "pointer" : "default",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                    onClick={() => {
                      if (prod.linkUrl) {
                        window.open(prod.linkUrl, "_blank");
                        triggerToast(`Opening ${prod.title} official link...`);
                      } else if (prod.hasDownloads) {
                        triggerToast(`Simulating App Store POS integration for Foodies...`);
                      } else {
                        triggerToast(`Zynk is in staging: client builds available upon release.`);
                      }
                    }}
                  >
                    {prod.buttonText} {prod.hasDownloads && <DownloadIcon />}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Code Snippet Preview */}
          <div className={styles.codeSnippetSection}>
            <div className={styles.codeLine} style={{ marginBottom: "12px" }}>
              <span className={styles.syntaxKeyword} style={{ fontSize: "16px", marginRight: "6px", fontWeight: "bold" }}>##</span>
              <span className={styles.syntaxHeading} style={{ fontSize: "16px", fontWeight: "bold", color: "#ffffff" }}>Code Snippet Preview</span>
            </div>
            
             <div 
                className={styles.codeWorkspace} 
                style={{ border: "1px solid var(--border-color)", borderRadius: "8px", padding: "16px", background: "rgba(0, 0, 0, 0.15)" }}
              >
                <div 
                  className={styles.codeEditor}
                  style={{
                    fontSize: `${editorFontSize}px`,
                    whiteSpace: editorLineWrapping ? "pre-wrap" : "pre",
                    wordBreak: editorLineWrapping ? "break-all" : "normal"
                  }}
                >
                  {data.shippedProducts.codePreview.split("\n").map((line, idx) => {
                    const tabReplacement = " ".repeat(editorTabWidth);
                    const processedLine = line.replace(/\t/g, tabReplacement);
                    return (
                      <div key={idx} className={styles.codeLine}>
                        {editorLineNumbers && <span className={styles.lineNum}>{idx + 1}</span>}
                        <span className={styles.lineContent} style={{ paddingLeft: editorLineNumbers ? "10px" : "0" }}>
                          {/* Simple client-side text syntax color highlight */}
                          {processedLine.startsWith("import") ? (
                            <span>
                              <span className={styles.syntaxKeyword}>import</span> {processedLine.replace("import", "")}
                            </span>
                          ) : processedLine.includes("class") ? (
                            <span>
                              <span className={styles.syntaxKeyword}>class</span> {processedLine.replace("class", "")}
                            </span>
                          ) : processedLine.includes("@Published") ? (
                            <span>
                              <span className={styles.syntaxKeyword}>@Published</span> {processedLine.replace("@Published", "")}
                            </span>
                          ) : processedLine.includes("func") ? (
                            <span>
                              <span className={styles.syntaxKeyword}>func</span> {processedLine.replace("func", "")}
                            </span>
                          ) : (
                            <span>{processedLine}</span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
}
