import React from "react";
import styles from "../page.module.css";

const CheckmarkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px", color: "#30d158" }}>
    <path d="M13.5 4.5l-7 7.5-3.5-3.5" />
  </svg>
);

interface ModalsProps {
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
  isHelpOpen: boolean;
  setIsHelpOpen: (open: boolean) => void;
  toastMessage: string | null;
}

export function Modals({
  isSettingsOpen,
  setIsSettingsOpen,
  isHelpOpen,
  setIsHelpOpen,
  toastMessage
}: ModalsProps) {
  return (
    <>
      {/* ---------------------------------------------------- */}
      {/* TOAST / ALERTS */}
      {/* ---------------------------------------------------- */}
      {toastMessage && (
        <div className={styles.toast} style={{ display: "flex", alignItems: "center" }}>
          <CheckmarkIcon /> {toastMessage}
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* SETTINGS MODAL */}
      {/* ---------------------------------------------------- */}
      {isSettingsOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsSettingsOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>IDE Settings</h2>
              <button className={styles.modalCloseBtn} onClick={() => setIsSettingsOpen(false)}>
                &times;
              </button>
            </div>
            <p>Adjust developer environment settings (simulated editor features):</p>
            <div className={styles.envItem}>
              <span>Tab Size</span>
              <select className={styles.dropdownSelect}>
                <option>4 Spaces</option>
                <option>2 Spaces</option>
                <option>Tabs</option>
              </select>
            </div>
            <div className={styles.envItem}>
              <span>Line Wrapping</span>
              <label className={styles.toggleSwitch}>
                <input type="checkbox" defaultChecked />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div className={styles.modalFooter}>
              <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => setIsSettingsOpen(false)}>Cancel</button>
              <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => setIsSettingsOpen(false)}>Save Settings</button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* HELP MODAL */}
      {/* ---------------------------------------------------- */}
      {isHelpOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsHelpOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Portfolio Guide</h2>
              <button className={styles.modalCloseBtn} onClick={() => setIsHelpOpen(false)}>
                &times;
              </button>
            </div>
            <p style={{ lineHeight: "1.5" }}>
              Welcome to the <strong>Project Navigator</strong> Developer Portfolio!
            </p>
            <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", listStyleType: "square", color: "var(--text-secondary)", fontSize: "12px", lineHeight: "1.5" }}>
              <li>Click files in the left sidebar to change editor views.</li>
              <li>Use central editor tabs to navigate open files.</li>
              <li>Click project cards to display detail pages and App Store/GitHub links in the right Inspector panel.</li>
              <li>Toggle Light/Dark mode and themes in the Inspector under Environment.</li>
            </ul>
            <div className={styles.modalFooter}>
              <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => setIsHelpOpen(false)}>Dismiss</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
