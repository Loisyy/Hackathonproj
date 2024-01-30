"use client"
import Link from "next/link";
import React, { useState } from "react";
//import { Link } from "react-router-dom"; // Import Link from react-router-dom
//import AssistiveTechnologiesIntegration from "@../components/assistivetechnologiesintegration";

interface AccessibilitySettingsProps {
  onFontSizeChange: (fontSize: string) => void;
  onThemeChange: (isHighContrast: boolean) => void;
  onScreenReaderToggle: (isEnabled: boolean) => void;
  onAnimationsToggle: (isEnabled: boolean) => void;
  onShortcutsCustomization: (customShortcuts: string[]) => void;
}

const AccessibilitySettings: React.FC<AccessibilitySettingsProps> = ({
  onFontSizeChange,
  onThemeChange,
  onScreenReaderToggle,
  onAnimationsToggle,
  onShortcutsCustomization,
}) => {
  const [fontSize, setFontSize] = useState<string>("medium");
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] =
    useState<boolean>(false);
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState<boolean>(true);
  const [customShortcuts, setCustomShortcuts] = useState<string[]>([]);
  const [newShortcut, setNewShortcut] = useState<string>("");

  const handleFontSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedFontSize = event.target.value;
    setFontSize(selectedFontSize);
    onFontSizeChange(selectedFontSize);
  };

  const handleThemeChange = () => {
    const newTheme = !isHighContrast;
    setIsHighContrast(newTheme);
    onThemeChange(newTheme);
  };

  const handleScreenReaderToggle = () => {
    const newScreenReaderState = !isScreenReaderEnabled;
    setIsScreenReaderEnabled(newScreenReaderState);
    onScreenReaderToggle(newScreenReaderState);
  };

  const handleAnimationsToggle = () => {
    const newAnimationsState = !isAnimationsEnabled;
    setIsAnimationsEnabled(newAnimationsState);
    onAnimationsToggle(newAnimationsState);
  };

  const handleShortcutsCustomization = () => {
    if (newShortcut.trim() !== "") {
      setCustomShortcuts([...customShortcuts, newShortcut]);
      onShortcutsCustomization([...customShortcuts, newShortcut]);
      setNewShortcut("");
    }
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-lightGray shadow-lg rounded-md text-darkGray">
      {/* Accessibility Menu */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-deepPurple">
          Accessibility Menu
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <label className="mr-2">Font Size:</label>
            <select
              value={fontSize}
              onChange={handleFontSizeChange}
              className="border rounded-md p-2"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div className="flex items-center">
            <label className="mr-2">High Contrast Theme:</label>
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={handleThemeChange}
            />
          </div>

          <div className="flex items-center">
            <label className="mr-2">Screen Reader Compatibility:</label>
            <input
              type="checkbox"
              checked={isScreenReaderEnabled}
              onChange={handleScreenReaderToggle}
            />
          </div>

          {/* Link to Assistive Technologies Integration page */}
           {/* <AssistiveTechnologiesIntegration /> */}
          <div className="flex items-center no-underline">
            <Link
              href="/assistive-tech"
              className="text-blue-500 underline"
            >
              Assistive Technologies Integration
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Customization */}
      <section>{/* ... (rest of the component) */}</section>
    </div>
  );
};

export default AccessibilitySettings;
