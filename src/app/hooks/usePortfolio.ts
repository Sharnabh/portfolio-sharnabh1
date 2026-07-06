import React, { useState, useEffect } from "react";
import { Project, PortfolioData } from "../types";
import rawData from "../data/portfolioData.json";

const portfolioData = rawData as PortfolioData;

export function usePortfolio() {
  // Navigation State
  const [activeFile, setActiveFile] = useState<string>("Projects.swift");
  const [openTabs, setOpenTabs] = useState<string[]>([
    "Main.swift",
    "Experience.md",
    "Projects.swift",
    "Products.plist"
  ]);

  // Sidebar Collapse States
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = useState(false);
  const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = useState(false);

  // Project catalog specific states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Environmental Configuration
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [syntaxTheme, setSyntaxTheme] = useState<string>("Xcode Dark");

  // Modals & Toast notifications
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [parsedItemsCount, setParsedItemsCount] = useState<number>(4);

  // Inspector & Layout Sizing States
  const [activeInspectorTab, setActiveInspectorTab] = useState<"identity" | "attributes" | "size">("identity");
  
  // Editor Attributes
  const [editorFontSize, setEditorFontSize] = useState<number>(13);
  const [editorTabWidth, setEditorTabWidth] = useState<number>(4);
  const [editorLineNumbers, setEditorLineNumbers] = useState<boolean>(true);
  const [editorLineWrapping, setEditorLineWrapping] = useState<boolean>(false);

  // Panel Width Customizations
  const [navigatorWidth, setNavigatorWidth] = useState<number>(260);
  const [inspectorWidth, setInspectorWidth] = useState<number>(290);

  // Sync state theme values to the HTML attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Trigger Toast Notification
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Open resume PDF link
  const handleDownloadResume = () => {
    if (portfolioData.profile.resumeUrl) {
      window.open(portfolioData.profile.resumeUrl, "_blank");
      triggerToast("Opening official resume Google Drive link...");
    } else {
      triggerToast("No resume URL configured.");
    }
  };

  // Close Tab handler
  const closeTab = (tabName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedTabs = openTabs.filter(t => t !== tabName);
    setOpenTabs(updatedTabs);
    
    // If closed tab was the active file, switch to another open one
    if (activeFile === tabName && updatedTabs.length > 0) {
      setActiveFile(updatedTabs[updatedTabs.length - 1]);
    } else if (updatedTabs.length === 0) {
      setActiveFile("");
    }
  };

  // Open Tab / Select File handler
  const openTab = (fileName: string) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    setActiveFile(fileName);
  };

  // Load more commits simulator
  const handleLoadCommits = () => {
    setParsedItemsCount(prev => prev + 2);
    triggerToast("Scanned git commit logs: project indexes updated!");
  };

  return {
    // Static raw data model
    data: portfolioData,

    // Navigation state
    activeFile,
    openTabs,
    isLeftSidebarCollapsed,
    isRightSidebarCollapsed,
    selectedProject,
    viewMode,
    theme,
    syntaxTheme,
    isSettingsOpen,
    isHelpOpen,
    toastMessage,
    parsedItemsCount,
    
    // Inspector & Sizing States
    activeInspectorTab,
    editorFontSize,
    editorTabWidth,
    editorLineNumbers,
    editorLineWrapping,
    navigatorWidth,
    inspectorWidth,

    // Actions & State Setters
    openTab,
    closeTab,
    setIsLeftSidebarCollapsed,
    setIsRightSidebarCollapsed,
    setSelectedProject,
    setViewMode,
    setTheme,
    setSyntaxTheme,
    setIsSettingsOpen,
    setIsHelpOpen,
    triggerToast,
    handleDownloadResume,
    handleLoadCommits,
    setActiveInspectorTab,
    setEditorFontSize,
    setEditorTabWidth,
    setEditorLineNumbers,
    setEditorLineWrapping,
    setNavigatorWidth,
    setInspectorWidth
  };
}
