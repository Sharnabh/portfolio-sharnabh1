import React from "react";
import { Project } from "../types";
import styles from "../page.module.css";

// ----------------------------------------------------
// Icons
// ----------------------------------------------------
const InfoIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px" }}>
    <circle cx="8" cy="8" r="7" />
    <path d="M8 11V8M8 5h.01" />
  </svg>
);

const GearIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px" }}>
    <circle cx="8" cy="8" r="2.5" />
    <path d="M14 9.5a1.5 1.5 0 0 0-1-2.5 1.5 1.5 0 0 0 1-2.5M2 9.5a1.5 1.5 0 0 1-1-2.5 1.5 1.5 0 0 1 1-2.5M9.5 14a1.5 1.5 0 0 0-2.5-1 1.5 1.5 0 0 0-2.5 1M9.5 2a1.5 1.5 0 0 1-2.5-1 1.5 1.5 0 0 1-2.5 1" />
  </svg>
);

const RulerIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px" }}>
    <rect x="1" y="4" width="14" height="8" rx="1.5" />
    <path d="M4 4v3M7 4v2M10 4v3M13 4v2" />
  </svg>
);

const CheckmarkIcon = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "3px" }}>
    <path d="M13.5 4.5l-7 7.5-3.5-3.5" />
  </svg>
);

interface InspectorProps {
  activeFile: string;
  selectedProject: Project | null;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
  syntaxTheme: string;
  setSyntaxTheme: (theme: string) => void;
  triggerToast: (msg: string) => void;
  isRightSidebarCollapsed: boolean;

  // Inspector Tabs State
  activeInspectorTab: "identity" | "attributes" | "size";
  setActiveInspectorTab: (tab: "identity" | "attributes" | "size") => void;

  // Text Editor Attributes States
  editorFontSize: number;
  setEditorFontSize: (size: number) => void;
  editorTabWidth: number;
  setEditorTabWidth: (width: number) => void;
  editorLineNumbers: boolean;
  setEditorLineNumbers: (show: boolean) => void;
  editorLineWrapping: boolean;
  setEditorLineWrapping: (wrap: boolean) => void;

  // Layout Width States
  navigatorWidth: number;
  setNavigatorWidth: (width: number) => void;
  inspectorWidth: number;
  setInspectorWidth: (width: number) => void;
}

export function Inspector({
  activeFile,
  selectedProject,
  theme,
  setTheme,
  syntaxTheme,
  setSyntaxTheme,
  triggerToast,
  isRightSidebarCollapsed,
  activeInspectorTab,
  setActiveInspectorTab,
  editorFontSize,
  setEditorFontSize,
  editorTabWidth,
  setEditorTabWidth,
  editorLineNumbers,
  setEditorLineNumbers,
  editorLineWrapping,
  setEditorLineWrapping,
  navigatorWidth,
  setNavigatorWidth,
  inspectorWidth,
  setInspectorWidth
}: InspectorProps) {
  return (
    <aside 
      className={`${styles.inspector} ${isRightSidebarCollapsed ? styles.rightSidebarCollapsed : ""}`}
      style={{ width: isRightSidebarCollapsed ? 0 : `${inspectorWidth}px`, minWidth: isRightSidebarCollapsed ? 0 : `${inspectorWidth}px` }}
    >
      <div className={styles.inspectorHeader}>
        <span className={styles.inspectorTitle}>Inspector</span>
      </div>

      {/* Inspector Tabs */}
      <div className={styles.inspectorTabs}>
        <button 
          className={`${styles.inspectorTabBtn} ${activeInspectorTab === "identity" ? styles.inspectorTabBtnActive : ""}`}
          onClick={() => setActiveInspectorTab("identity")}
          title="Identity Inspector"
        >
          <InfoIcon /> Identity
        </button>
        <button 
          className={`${styles.inspectorTabBtn} ${activeInspectorTab === "attributes" ? styles.inspectorTabBtnActive : ""}`}
          onClick={() => setActiveInspectorTab("attributes")}
          title="Attributes Inspector"
        >
          <GearIcon /> Attributes
        </button>
        <button 
          className={`${styles.inspectorTabBtn} ${activeInspectorTab === "size" ? styles.inspectorTabBtnActive : ""}`}
          onClick={() => setActiveInspectorTab("size")}
          title="Size Inspector"
        >
          <RulerIcon /> Size
        </button>
      </div>

      <div className={styles.inspectorContent}>
        {/* ==================================================== */}
        {/* 1. IDENTITY INSPECTOR VIEW */}
        {/* ==================================================== */}
        {activeInspectorTab === "identity" && (
          <>
            <div className={styles.inspectorSection}>
              <span className={styles.sectionTitle}>{activeFile === "Products.plist" ? "FILE STATUS" : "Identity"}</span>
              <div className={styles.metadataGrid}>
                <span className={styles.metaLabel}>Type:</span>
                <span className={styles.metaValue}>
                  {activeFile 
                    ? (activeFile.endsWith(".swift") 
                        ? "Swift Source File" 
                        : activeFile.endsWith(".md") 
                          ? "Markdown Document" 
                          : "Property List") 
                    : "None"}
                </span>
                
                <span className={styles.metaLabel}>Location:</span>
                <span className={styles.metaValue}>
                  {activeFile 
                    ? (activeFile === "Products.plist" 
                        ? "/Root/.../Products.plist" 
                        : `~/Portfolio/${activeFile}`) 
                    : "No file open"}
                </span>
                
                {activeFile === "Products.plist" ? (
                  <>
                    <span className={styles.metaLabel}>Size:</span>
                    <span className={styles.metaValue}>4 KB</span>
                  </>
                ) : (
                  <>
                    <span className={styles.metaLabel}>Target:</span>
                    <span className={styles.metaValue}>PortfolioApp</span>
                  </>
                )}
              </div>
            </div>

            {activeFile === "Products.plist" ? (
              <div className={styles.inspectorSection}>
                <span className={styles.sectionTitle}>APP STORE CONNECT</span>
                <div className={styles.metadataGrid}>
                  <span className={styles.metaLabel}>Team ID:</span>
                  <span className={styles.metaValue}>A1B2C3D4E5</span>
                  
                  <span className={styles.metaLabel}>Certificates:</span>
                  <span className={styles.metaValue} style={{ color: "#30d158", fontWeight: "bold", display: "flex", alignItems: "center" }}>
                    <CheckmarkIcon /> Valid
                  </span>
                  
                  <span className={styles.metaLabel}>Profiles:</span>
                  <span className={styles.metaValue}>Managed</span>
                </div>
              </div>
            ) : (
              <div className={styles.inspectorSection}>
                <span className={styles.sectionTitle}>Selected Item</span>
                <div className={styles.detailBox}>
                  {selectedProject ? (
                    <div>
                      <div className={styles.selectedDetailHeader}>
                        <span className={styles.selectedIcon}>{selectedProject.fallbackIcon}</span>
                        <div>
                          <span className={styles.selectedTitle}>{selectedProject.title}</span>
                          <span className={styles.selectedSubtitle}>{selectedProject.platform}</span>
                        </div>
                      </div>
                      <p className={styles.selectedDesc} style={{ margin: "10px 0" }}>{selectedProject.description}</p>
                      
                      <div className={styles.specList}>
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>Language:</span>
                          <span className={styles.specValue}>{selectedProject.language}</span>
                        </div>
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>Role:</span>
                          <span className={styles.specValue}>{selectedProject.role}</span>
                        </div>
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>Build Status:</span>
                          <span className={styles.specValue}>{selectedProject.status}</span>
                        </div>
                      </div>

                      <div className={styles.linksContainer}>
                        <a
                          href={selectedProject.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.projectLinkBtn} ${styles.primaryLink}`}
                        >
                          {selectedProject.linkType === "Github" ? "View GitHub Repo" : "View on App Store"}
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.noSelection}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><InfoIcon /> No Selection</span>
                      <p style={{ fontSize: "11px" }}>Select a project card in the editor to inspect repository links, technical specifications, and metadata.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {/* ==================================================== */}
        {/* 2. ATTRIBUTES INSPECTOR VIEW */}
        {/* ==================================================== */}
        {activeInspectorTab === "attributes" && (
          <>
            <div className={styles.inspectorSection}>
              <span className={styles.sectionTitle}>TEXT DETAILED PREFERENCE</span>
              
              <div className={styles.envItem} style={{ marginBottom: "12px" }}>
                <span>Font Size</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <input
                    type="range"
                    min="11"
                    max="18"
                    value={editorFontSize}
                    onChange={(e) => setEditorFontSize(Number(e.target.value))}
                    style={{ width: "90px", accentColor: "#007aff", cursor: "pointer" }}
                  />
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", width: "32px", textAlign: "right" }}>
                    {editorFontSize}px
                  </span>
                </div>
              </div>

              <div className={styles.envItem} style={{ marginBottom: "12px" }}>
                <span>Tab Indent</span>
                <select
                  className={styles.dropdownSelect}
                  value={editorTabWidth}
                  onChange={(e) => setEditorTabWidth(Number(e.target.value))}
                  style={{ padding: "3px 6px", fontSize: "11px" }}
                >
                  <option value={2}>2 Spaces</option>
                  <option value={4}>4 Spaces</option>
                  <option value={8}>8 Spaces</option>
                </select>
              </div>

              <div className={styles.envItem} style={{ marginBottom: "12px" }}>
                <span>Line Numbers</span>
                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={editorLineNumbers}
                    onChange={(e) => setEditorLineNumbers(e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <div className={styles.envItem} style={{ marginBottom: "12px" }}>
                <span>Line Wrapping</span>
                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={editorLineWrapping}
                    onChange={(e) => setEditorLineWrapping(e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>

            <div className={styles.inspectorSection}>
              <span className={styles.sectionTitle}>ENVIRONMENT</span>
              <div className={styles.envItem} style={{ marginBottom: "10px" }}>
                <span>Dark Mode</span>
                <label className={styles.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
              
              <div className={styles.envItem}>
                <span>Syntax Theme</span>
                <select
                  className={styles.dropdownSelect}
                  value={syntaxTheme}
                  onChange={(e) => {
                    setSyntaxTheme(e.target.value);
                    triggerToast(`Code style changed to: ${e.target.value}`);
                  }}
                >
                  <option value="Xcode Dark">Xcode Dark</option>
                  <option value="Xcode Light">Xcode Light</option>
                  <option value="Classic Monokai">Monokai Retro</option>
                </select>
              </div>
            </div>
          </>
        )}

        {/* ==================================================== */}
        {/* 3. SIZE INSPECTOR VIEW */}
        {/* ==================================================== */}
        {activeInspectorTab === "size" && (
          <>
            <div className={styles.inspectorSection}>
              <span className={styles.sectionTitle}>WORKSPACE DIMENSIONS</span>
              
              <div className={styles.envItem} style={{ marginBottom: "14px" }}>
                <span>Sidebar Width</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <input
                    type="range"
                    min="200"
                    max="320"
                    step="5"
                    value={navigatorWidth}
                    onChange={(e) => setNavigatorWidth(Number(e.target.value))}
                    style={{ width: "90px", accentColor: "#007aff", cursor: "pointer" }}
                  />
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", width: "38px", textAlign: "right" }}>
                    {navigatorWidth}px
                  </span>
                </div>
              </div>

              <div className={styles.envItem} style={{ marginBottom: "14px" }}>
                <span>Inspector Width</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <input
                    type="range"
                    min="240"
                    max="380"
                    step="5"
                    value={inspectorWidth}
                    onChange={(e) => setInspectorWidth(Number(e.target.value))}
                    style={{ width: "90px", accentColor: "#007aff", cursor: "pointer" }}
                  />
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", width: "38px", textAlign: "right" }}>
                    {inspectorWidth}px
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setNavigatorWidth(260);
                  setInspectorWidth(290);
                  triggerToast("Xcode workspace dimensions reset to defaults");
                }}
                style={{
                  width: "100%",
                  padding: "6px 0",
                  borderRadius: "6px",
                  border: "1px solid var(--border-color)",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 600,
                  cursor: "pointer",
                  marginTop: "8px"
                }}
              >
                Reset Layout Sizes
              </button>
            </div>

            <div className={styles.inspectorSection}>
              <span className={styles.sectionTitle}>LAYOUT METRICS</span>
              <div className={styles.metadataGrid}>
                <span className={styles.metaLabel}>View Grid:</span>
                <span className={styles.metaValue}>{selectedProject ? "B2B Spec Sheet" : "Project Catalog"}</span>
                
                <span className={styles.metaLabel}>Workspace:</span>
                <span className={styles.metaValue}>Liquid Glass</span>

                <span className={styles.metaLabel}>Safe Area:</span>
                <span className={styles.metaValue}>0px (Fluid Layout)</span>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
