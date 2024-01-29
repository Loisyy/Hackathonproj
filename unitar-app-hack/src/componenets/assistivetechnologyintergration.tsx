import React, { useState } from "react";

interface AssistiveTechnologiesIntegrationProps {
  onScreenReaderCompatibility: (isCompatible: boolean) => void;
  onVoiceRecognitionSetup: (isSetUp: boolean) => void;
}

const AssistiveTechnologiesIntegration: React.FC<
  AssistiveTechnologiesIntegrationProps
> = ({ onScreenReaderCompatibility, onVoiceRecognitionSetup }) => {
  const [isScreenReaderCompatible, setIsScreenReaderCompatible] =
    useState<boolean>(false);
  const [isVoiceRecognitionSetUp, setIsVoiceRecognitionSetUp] =
    useState<boolean>(false);
  const [isScreenReaderCheckLoading, setIsScreenReaderCheckLoading] =
    useState<boolean>(false);
  const [isVoiceRecognitionSetupLoading, setIsVoiceRecognitionSetupLoading] =
    useState<boolean>(false);

  const runScreenReaderCompatibilityCheck = async () => {
    setIsScreenReaderCheckLoading(true);
    // Simulate a compatibility check, replace with actual logic
    const compatibilityResult =
      /* Your logic to check screen reader compatibility */ true;
    setIsScreenReaderCompatible(compatibilityResult);
    onScreenReaderCompatibility(compatibilityResult);
    setIsScreenReaderCheckLoading(false);
  };

  const runVoiceRecognitionSetup = async () => {
    setIsVoiceRecognitionSetupLoading(true);
    // Simulate a setup guide, replace with actual logic
    const setupResult = /* Your logic for voice recognition setup */ true;
    setIsVoiceRecognitionSetUp(setupResult);
    onVoiceRecognitionSetup(setupResult);
    setIsVoiceRecognitionSetupLoading(false);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-lightGray shadow-lg rounded-md text-darkGray">
      {/* Screen Reader Compatibility Check */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-deepPurple">
          Screen Reader Compatibility Check
        </h2>
        <button
          onClick={runScreenReaderCompatibilityCheck}
          className={`bg-blue text-white p-3 rounded-md hover:bg-blue-700 transition ${
            isScreenReaderCheckLoading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={isScreenReaderCheckLoading}
        >
          {isScreenReaderCheckLoading
            ? "Checking..."
            : "Run Compatibility Check"}
        </button>
        <p
          className={`mt-4 ${
            isScreenReaderCompatible ? "text-green-500" : "text-red-500"
          }`}
        >
          {isScreenReaderCompatible
            ? "Screen reader compatibility: Compatible"
            : "Screen reader compatibility: Not Compatible"}
        </p>
      </section>

      {/* Voice Recognition Setup Guide */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-deepPurple">
          Voice Recognition Setup Guide
        </h2>
        <button
          onClick={runVoiceRecognitionSetup}
          className={`bg-blue text-white p-3 rounded-md hover:bg-blue-700 transition ${
            isVoiceRecognitionSetupLoading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={isVoiceRecognitionSetupLoading}
        >
          {isVoiceRecognitionSetupLoading ? "Setting up..." : "Run Setup Guide"}
        </button>
        <p
          className={`mt-4 ${
            isVoiceRecognitionSetUp ? "text-green-500" : "text-red-500"
          }`}
        >
          {isVoiceRecognitionSetUp
            ? "Voice recognition setup: Completed"
            : "Voice recognition setup: Not Completed"}
        </p>
      </section>
    </div>
  );
};

export default AssistiveTechnologiesIntegration;
