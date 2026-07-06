import React from "react";
import styles from "../page.module.css";

// ----------------------------------------------------
// Icons
// ----------------------------------------------------
const ChevronRight = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 9L5 5L1 1" />
  </svg>
);

const FolderIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="#ffd60a">
    <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h4a1.5 1.5 0 0 1 1.06.44l1.5 1.5H13a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5v-11z" />
  </svg>
);

const SwiftFileIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect width="16" height="16" rx="3" fill="#ff453a" />
    <path d="M12.5 11C11.5 12 9 12.5 7.5 12.5C5.5 12.5 3 11 3 8.5C3 6.5 5 4.5 7.5 4.5C9 4.5 11.5 5 12.5 6C11 5.5 9.5 5.5 8.5 6C7.5 6.5 6.5 7.5 6.5 8.5C6.5 9.5 7.5 10.5 8.5 11C9.5 11.5 11 11.5 12.5 11Z" fill="#ffffff" />
  </svg>
);

const MarkdownFileIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect width="16" height="16" rx="3" fill="#007aff" />
    <path d="M4 5V11H5.5V8.5L7 10L8.5 8.5V11H10V5H8.5L7 7.5L5.5 5H4ZM11 5V8H10L11.5 10.5L13 8H12V5H11Z" fill="#ffffff" />
  </svg>
);

const PlistFileIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect width="16" height="16" rx="3" fill="#30d158" />
    <path d="M4 11V5H6C7.1 5 8 5.9 8 7C8 8.1 7.1 9 6 9H5V11H4ZM5 6V8H6C6.55 8 7 7.55 7 7C7 6.45 6.55 6 6 6H5ZM9 11V5H10V11H9ZM11 11V5H12V11H11Z" fill="#ffffff" />
  </svg>
);

const CodeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 11L1 8L5 5M11 5L15 8L11 11M9 3L7 13" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 12V2M3 7l5 5 5-5" />
    <path d="M1 14h14" strokeWidth="1.5" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="3" />
    <path d="M14 9.5a1.5 1.5 0 0 0-1-2.5 1.5 1.5 0 0 0 1-2.5M2 9.5a1.5 1.5 0 0 1-1-2.5 1.5 1.5 0 0 1 1-2.5M9.5 14a1.5 1.5 0 0 0-2.5-1 1.5 1.5 0 0 0-2.5 1M9.5 2a1.5 1.5 0 0 1-2.5-1 1.5 1.5 0 0 1-2.5 1" />
  </svg>
);

const HelpIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="7" />
    <path d="M6.5 6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .75-.38 1.12-.75 1.5S8 8.75 8 9" />
    <circle cx="8" cy="11.5" r="0.5" fill="currentColor" />
  </svg>
);

interface SidebarProps {
  activeFile: string;
  isLeftSidebarCollapsed: boolean;
  openTab: (fileName: string) => void;
  handleDownloadResume: () => void;
  setIsSettingsOpen: (open: boolean) => void;
  setIsHelpOpen: (open: boolean) => void;
  navigatorWidth: number;
}

export function Sidebar({
  activeFile,
  isLeftSidebarCollapsed,
  openTab,
  handleDownloadResume,
  setIsSettingsOpen,
  setIsHelpOpen,
  navigatorWidth
}: SidebarProps) {
  return (
    <aside 
      className={`${styles.sidebar} ${isLeftSidebarCollapsed ? styles.leftSidebarCollapsed : ""}`}
      style={{
        width: isLeftSidebarCollapsed ? 0 : `${navigatorWidth}px`,
        minWidth: isLeftSidebarCollapsed ? 0 : `${navigatorWidth}px`,
        maxWidth: isLeftSidebarCollapsed ? 0 : `${navigatorWidth}px`
      }}
    >
      <div>
        <div className={styles.sidebarHeader}>
          <span className={styles.ideLogo}>
            <CodeIcon />
          </span>
          <div>
            <span className={styles.ideTitle}>Project Navigator</span>
            <span className={styles.ideVersion}>v1.0.0-stable</span>
          </div>
        </div>

        <div className={styles.sidebarContent}>
          <div className={styles.treeSection}>
            <div className={styles.treeSectionHeader}>
              <ChevronRight /> Workspace
            </div>
            
            <div 
              className={`${styles.treeItem} ${activeFile === "Main.swift" ? styles.treeItemActive : ""}`}
              onClick={() => openTab("Main.swift")}
            >
              <SwiftFileIcon /> Main.swift
            </div>

            <div 
              className={`${styles.treeItem} ${activeFile === "Experience.md" ? styles.treeItemActive : ""}`}
              onClick={() => openTab("Experience.md")}
            >
              <MarkdownFileIcon /> Experience.md
            </div>

            <div 
              className={`${styles.treeItem} ${activeFile === "Projects.swift" ? styles.treeItemActive : ""}`}
              onClick={() => openTab("Projects.swift")}
            >
              <SwiftFileIcon /> Projects.swift
            </div>

            <div 
              className={`${styles.treeItem} ${activeFile === "Products.plist" ? styles.treeItemActive : ""}`}
              onClick={() => openTab("Products.plist")}
            >
              <PlistFileIcon /> Products.plist
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sidebarFooter}>
        <button className={styles.downloadBtn} onClick={handleDownloadResume}>
          <DownloadIcon /> Download Resume
        </button>
        <div className={styles.footerActions}>
          <button className={styles.footerActionBtn} onClick={() => setIsSettingsOpen(true)}>
            <SettingsIcon /> Settings
          </button>
          <button className={styles.footerActionBtn} onClick={() => setIsHelpOpen(true)}>
            <HelpIcon /> Help
          </button>
        </div>
      </div>
    </aside>
  );
}
