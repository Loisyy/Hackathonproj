// components/PrivacyAndSecurity.tsx
import React from "react";

interface PrivacyAndSecurityProps {
  onOpenPrivacySettings: () => void;
  onEnableTwoFactorAuth: () => void;
}

const PrivacyAndSecurity: React.FC<PrivacyAndSecurityProps> = ({
  onOpenPrivacySettings,
  onEnableTwoFactorAuth,
}) => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      {/* Privacy Settings */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Privacy Settings</h2>
        <p className="mb-4">
          Customize your privacy preferences and control how your data is shared
          with others.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={onOpenPrivacySettings}
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Open Privacy Settings
          </button>
        </div>
      </section>

      {/* Security Measures */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Security Measures</h2>
        <p className="mb-4">
          Enhance the security of your account with advanced security measures.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={onEnableTwoFactorAuth}
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Enable Two-Factor Authentication
          </button>
          <a
            href="#"
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            View Encryption Details
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Security Certifications
          </a>
        </div>
      </section>
    </div>
  );
};

export default ;
