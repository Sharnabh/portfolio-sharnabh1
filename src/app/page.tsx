"use client";

import React from "react";
import { usePortfolio } from "./hooks/usePortfolio";
import { Sidebar } from "./components/Sidebar";
import { Tabbar } from "./components/Tabbar";
import { EditorWorkspace } from "./components/EditorWorkspace";
import { Inspector } from "./components/Inspector";
import { Modals } from "./components/Modals";
import styles from "./page.module.css";

export default function Home() {
  const portfolio = usePortfolio();

  return (
    <div className={styles.container}>
      <Sidebar
        activeFile={portfolio.activeFile}
        isLeftSidebarCollapsed={portfolio.isLeftSidebarCollapsed}
        openTab={portfolio.openTab}
        handleDownloadResume={portfolio.handleDownloadResume}
        setIsSettingsOpen={portfolio.setIsSettingsOpen}
        setIsHelpOpen={portfolio.setIsHelpOpen}
        navigatorWidth={portfolio.navigatorWidth}
      />

      <main className={styles.workspace}>
        <Tabbar
          openTabs={portfolio.openTabs}
          activeFile={portfolio.activeFile}
          setActiveFile={portfolio.openTab}
          closeTab={portfolio.closeTab}
          isLeftSidebarCollapsed={portfolio.isLeftSidebarCollapsed}
          isRightSidebarCollapsed={portfolio.isRightSidebarCollapsed}
          setIsLeftSidebarCollapsed={portfolio.setIsLeftSidebarCollapsed}
          setIsRightSidebarCollapsed={portfolio.setIsRightSidebarCollapsed}
          triggerToast={portfolio.triggerToast}
        />

        <EditorWorkspace
          activeFile={portfolio.activeFile}
          openTabs={portfolio.openTabs}
          data={portfolio.data}
          selectedProject={portfolio.selectedProject}
          setSelectedProject={portfolio.setSelectedProject}
          viewMode={portfolio.viewMode}
          setViewMode={portfolio.setViewMode}
          parsedItemsCount={portfolio.parsedItemsCount}
          handleLoadCommits={portfolio.handleLoadCommits}
          triggerToast={portfolio.triggerToast}
          editorFontSize={portfolio.editorFontSize}
          editorTabWidth={portfolio.editorTabWidth}
          editorLineNumbers={portfolio.editorLineNumbers}
          editorLineWrapping={portfolio.editorLineWrapping}
        />
      </main>

      <Inspector
        activeFile={portfolio.activeFile}
        selectedProject={portfolio.selectedProject}
        theme={portfolio.theme}
        setTheme={portfolio.setTheme}
        syntaxTheme={portfolio.syntaxTheme}
        setSyntaxTheme={portfolio.setSyntaxTheme}
        triggerToast={portfolio.triggerToast}
        isRightSidebarCollapsed={portfolio.isRightSidebarCollapsed}
        
        // Tab states
        activeInspectorTab={portfolio.activeInspectorTab}
        setActiveInspectorTab={portfolio.setActiveInspectorTab}

        // Attributes states
        editorFontSize={portfolio.editorFontSize}
        setEditorFontSize={portfolio.setEditorFontSize}
        editorTabWidth={portfolio.editorTabWidth}
        setEditorTabWidth={portfolio.setEditorTabWidth}
        editorLineNumbers={portfolio.editorLineNumbers}
        setEditorLineNumbers={portfolio.setEditorLineNumbers}
        editorLineWrapping={portfolio.editorLineWrapping}
        setEditorLineWrapping={portfolio.setEditorLineWrapping}

        // Size states
        navigatorWidth={portfolio.navigatorWidth}
        setNavigatorWidth={portfolio.setNavigatorWidth}
        inspectorWidth={portfolio.inspectorWidth}
        setInspectorWidth={portfolio.setInspectorWidth}
      />

      <Modals
        isSettingsOpen={portfolio.isSettingsOpen}
        setIsSettingsOpen={portfolio.setIsSettingsOpen}
        isHelpOpen={portfolio.isHelpOpen}
        setIsHelpOpen={portfolio.setIsHelpOpen}
        toastMessage={portfolio.toastMessage}
      />
    </div>
  );
}
