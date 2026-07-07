import React from "react";
import styles from "../page.module.css";

// ----------------------------------------------------
// Icons
// ----------------------------------------------------
const FolderIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="#ffd60a">
    <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h4a1.5 1.5 0 0 1 1.06.44l1.5 1.5H13a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5v-11z" />
  </svg>
);

const SwiftFileIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path fill="#FF5722" d="M9.862 1c7.034 4.694 4.753 9.852 4.753 9.852S16.613 13.063 15.81 15c0 0-.829-1.353-2.205-1.353-1.33 0-2.117 1.353-4.802 1.353C2.831 15 0 10.106 0 10.106c5.382 3.48 9.059 1.014 9.059 1.014-2.43-1.378-7.584-7.977-7.584-7.977 4.493 3.751 6.432 4.736 6.432 4.736-1.166-.936-4.415-5.523-4.415-5.523 2.6 2.579 7.768 6.175 7.768 6.175C12.742 4.557 9.862 1 9.862 1z" />
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

const XcodeprojIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect width="16" height="16" rx="3" fill="#5e5ce6" />
    <path d="M4 4H12V12H4V4Z" fill="#ffffff" opacity="0.3" />
    <path d="M6 3L11 8L6 13" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M1 1L7 7M7 1L1 7" />
  </svg>
);

const SidebarLeftIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="1.5" y="1.5" width="12" height="12" rx="1.5" />
    <path d="M5.5 1.5v12" />
  </svg>
);

const SidebarRightIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="1.5" y="1.5" width="12" height="12" rx="1.5" />
    <path d="M9.5 1.5v12" />
  </svg>
);

const PlayIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
    <path d="M3 2v8l6-4-6-4z" />
  </svg>
);

const StopIcon = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
    <rect x="2" y="2" width="8" height="8" rx="1" />
  </svg>
);

const BuildIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2.5a2.5 2.5 0 0 0-3.5 0L3.5 5.5l-2-1L1 5.5l2 2 1.5-1.5 3-3a2.5 2.5 0 0 0 .5-.5z" />
    <path d="M6.5 6.5l3.5 3.5m0-1.5l-2 2" />
  </svg>
);

interface TabbarProps {
  openTabs: string[];
  activeFile: string;
  setActiveFile: (fileName: string) => void;
  closeTab: (fileName: string, e: React.MouseEvent) => void;
  isLeftSidebarCollapsed: boolean;
  isRightSidebarCollapsed: boolean;
  setIsLeftSidebarCollapsed: (collapsed: boolean) => void;
  setIsRightSidebarCollapsed: (collapsed: boolean) => void;
  triggerToast: (msg: string) => void;
  buildProject: () => void;
  runProject: () => void;
  isBuilding: boolean;
  buildProgress: number;
  isRunning: boolean;
}

export function Tabbar({
  openTabs,
  activeFile,
  setActiveFile,
  closeTab,
  isLeftSidebarCollapsed,
  isRightSidebarCollapsed,
  setIsLeftSidebarCollapsed,
  setIsRightSidebarCollapsed,
  triggerToast,
  buildProject,
  runProject,
  isBuilding,
  buildProgress,
  isRunning
}: TabbarProps) {
  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith(".swift")) return <SwiftFileIcon />;
    if (fileName.endsWith(".md")) return <MarkdownFileIcon />;
    if (fileName.endsWith(".plist")) return <PlistFileIcon />;
    if (fileName.endsWith(".xcodeproj")) return <XcodeprojIcon />;
    return <FolderIcon />;
  };

  return (
    <div className={styles.tabbar}>
      <style>{`
        @keyframes xcodeSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div className={styles.tabsContainer}>
        {openTabs.map((tab) => (
          <div
            key={tab}
            className={`${styles.tabItem} ${activeFile === tab ? styles.tabItemActive : ""}`}
            onClick={() => setActiveFile(tab)}
          >
            {getFileIcon(tab)}
            {tab}
            <span className={styles.tabCloseBtn} onClick={(e) => closeTab(tab, e)}>
              <CloseIcon />
            </span>
          </div>
        ))}
      </div>

      {/* Xcode Center Status Bar */}
      {(isBuilding || isRunning) && (
        <div className={styles.xcodeStatusBar}>
          {isBuilding ? (
            <div style={{ display: "flex", alignItems: "center", width: "100%", height: "100%", justifyContent: "center" }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: `${buildProgress}%`,
                backgroundColor: "rgba(0, 122, 255, 0.15)",
                transition: "width 0.3s ease",
                zIndex: 0
              }}></div>
              <span style={{ zIndex: 1, display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  border: "1.5px solid var(--text-secondary)",
                  borderTopColor: "transparent",
                  borderRadius: "50%",
                  animation: "xcodeSpin 0.8s linear infinite"
                }}></span>
                Compiling Portfolio: {buildProgress}%
              </span>
            </div>
          ) : (
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              Running PortfolioApp (PID 4820)
            </span>
          )}
        </div>
      )}

      <div className={styles.tabbarActions}>
        <button
          className={`${styles.toolbarBtn} ${isBuilding ? styles.toolbarBtnActive : ""}`}
          onClick={buildProject}
          disabled={isBuilding || isRunning}
          title="Build Project"
          style={{ opacity: (isBuilding || isRunning) ? 0.4 : 1, cursor: (isBuilding || isRunning) ? "not-allowed" : "pointer" }}
        >
          <BuildIcon />
        </button>
        <button
          className={`${styles.toolbarBtn} ${isRunning ? styles.toolbarBtnActive : ""}`}
          onClick={runProject}
          disabled={isBuilding}
          title={isRunning ? "Stop Project" : "Run Project"}
          style={{ opacity: isBuilding ? 0.4 : 1, cursor: isBuilding ? "not-allowed" : "pointer" }}
        >
          {isRunning ? <StopIcon /> : <PlayIcon />}
        </button>
        <div className={styles.toolbarSeparator}></div>
        <button
          className={`${styles.toolbarBtn} ${isLeftSidebarCollapsed ? styles.toolbarBtnActive : ""}`}
          onClick={() => setIsLeftSidebarCollapsed(!isLeftSidebarCollapsed)}
          title="Toggle Left Sidebar"
        >
          <SidebarLeftIcon />
        </button>
        <button
          className={`${styles.toolbarBtn} ${isRightSidebarCollapsed ? styles.toolbarBtnActive : ""}`}
          onClick={() => setIsRightSidebarCollapsed(!isRightSidebarCollapsed)}
          title="Toggle Right Sidebar"
        >
          <SidebarRightIcon />
        </button>
      </div>
    </div>
  );
}
