// components/AccessibilitySettings.tsx
import React, { useState } from "react";

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

  const handleShortcutsCustomization = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const shortcutValue = event.target.value;
    setCustomShortcuts([...customShortcuts, shortcutValue]);
    onShortcutsCustomization([...customShortcuts, shortcutValue]);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      {/* Accessibility Menu */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Accessibility Menu</h2>
        <div>
          <label className="block mb-2">Font Size:</label>
          <select
            value={fontSize}
            onChange={handleFontSizeChange}
            className="mb-4"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

          <label className="block mb-2">High Contrast Theme:</label>
          <input
            type="checkbox"
            checked={isHighContrast}
            onChange={handleThemeChange}
            className="mb-4"
          />

          <label className="block mb-2">Screen Reader Compatibility:</label>
          <input
            type="checkbox"
            checked={isScreenReaderEnabled}
            onChange={handleScreenReaderToggle}
          />
        </div>
      </section>

      {/* Feature Customization */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Feature Customization</h2>
        <div>
          <label className="block mb-2">Animations:</label>
          <input
            type="checkbox"
            checked={isAnimationsEnabled}
            onChange={handleAnimationsToggle}
            className="mb-4"
          />

          <label className="block mb-2">
            Keyboard Shortcuts Customization:
          </label>
          <input
            type="text"
            placeholder="Enter custom shortcut"
            onChange={handleShortcutsCustomization}
          />
          <ul>
            {customShortcuts.map((shortcut, index) => (
              <li key={index}>{shortcut}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AccessibilitySettings;
