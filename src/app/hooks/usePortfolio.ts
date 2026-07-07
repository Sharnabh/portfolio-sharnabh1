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
    "Products.plist",
    "Contact.swift"
  ]);

  // Sidebar Collapse States
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = useState(false);
  const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = useState(false);

  const setLeftSidebarCollapsed = (collapsed: boolean) => {
    setIsLeftSidebarCollapsed(collapsed);
    if (!collapsed && typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsRightSidebarCollapsed(true);
    }
  };

  const setRightSidebarCollapsed = (collapsed: boolean) => {
    setIsRightSidebarCollapsed(collapsed);
    if (!collapsed && typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsLeftSidebarCollapsed(true);
    }
  };

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

  // Xcode Build & Run States
  const [isBuilding, setIsBuilding] = useState<boolean>(false);
  const [buildProgress, setBuildProgress] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showConsole, setShowConsole] = useState<boolean>(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [cpuUsage, setCpuUsage] = useState<number>(0);
  const [ramUsage, setRamUsage] = useState<number>(0);

  // Simulate active CPU/RAM usage fluctuations when running
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      setCpuUsage(Math.floor(Math.random() * 4) + 1); // 1-4%
      setRamUsage(12.4); // Base RAM usage
      
      timer = setInterval(() => {
        setCpuUsage(Math.floor(Math.random() * 5) + 1); // 1-5%
        setRamUsage(prev => {
          const delta = (Math.random() * 0.4) - 0.2; // +/- 0.2MB
          return Number((prev + delta).toFixed(1));
        });
      }, 1500);
    } else {
      setCpuUsage(0);
      setRamUsage(0);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // Trigger Build Sequence
  const buildProject = () => {
    if (isBuilding || isRunning) return;
    setIsBuilding(true);
    setShowConsole(true);
    setBuildProgress(0);
    setConsoleLogs([
      "[BUILD] Initializing compiler configuration...",
      "[BUILD] Reading Main.swift...",
      "[BUILD] Reading Projects.swift...",
      "[BUILD] Reading Products.plist..."
    ]);

    // Stage 1 (25% progress)
    setTimeout(() => {
      setBuildProgress(25);
      setConsoleLogs(prev => [...prev, "[BUILD] Checking module imports & bundle identifiers... OK"]);
    }, 400);

    // Stage 2 (50% progress)
    setTimeout(() => {
      setBuildProgress(50);
      setConsoleLogs(prev => [...prev, "[BUILD] Optimizing layout constraints & assets... OK"]);
    }, 800);

    // Stage 3 (75% progress)
    setTimeout(() => {
      setBuildProgress(75);
      setConsoleLogs(prev => [...prev, "[BUILD] Linking application frameworks... OK"]);
    }, 1200);

    // Stage 4 (100% progress)
    setTimeout(() => {
      setBuildProgress(100);
      setConsoleLogs(prev => [...prev, "[BUILD] Compilation Succeeded. Binary artifact generated.", "[BUILD] Build complete (1.6s)"]);
      setIsBuilding(false);
    }, 1600);
  };

  // Trigger Run / Terminate Sequence
  const runProject = () => {
    if (isBuilding) return;

    if (isRunning) {
      // Terminate
      setIsRunning(false);
      setConsoleLogs(prev => [...prev, "[RUN] Terminating process...", "[RUN] Program ended with exit code: 0"]);
      triggerToast("Sandbox execution stopped.");
    } else {
      // Start Sandbox
      setShowConsole(true);
      setConsoleLogs(prev => [
        ...prev,
        "[RUN] Launching PortfolioApp in secure Sandbox container...",
        "[RUN] Process initialized (PID 4820)",
        "[RUN] Listening for events. Sandbox environment operational."
      ]);
      setIsRunning(true);
      triggerToast("Sandbox execution started.");
    }
  };

  // Clear Console logs
  const clearConsole = () => {
    setConsoleLogs([]);
  };

  // Sync state theme values to the HTML attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Auto-collapse sidebars on initial mount if screen is tablet/mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isSmall = window.innerWidth < 1024;
      setIsLeftSidebarCollapsed(isSmall);
      setIsRightSidebarCollapsed(isSmall);
    }
  }, []);

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

    // Sandbox & Build States
    isBuilding,
    buildProgress,
    isRunning,
    showConsole,
    consoleLogs,
    cpuUsage,
    ramUsage,

    // Actions & State Setters
    openTab,
    closeTab,
    setIsLeftSidebarCollapsed: setLeftSidebarCollapsed,
    setIsRightSidebarCollapsed: setRightSidebarCollapsed,
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
    setInspectorWidth,
    buildProject,
    runProject,
    clearConsole,
    setShowConsole
  };
}
