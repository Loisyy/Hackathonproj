// components/UserSupport.tsx
import React from "react";

interface UserSupportProps {
  onOpenTicketSystem: () => void;
  onOpenLiveChat: () => void;
}

const UserSupport: React.FC<UserSupportProps> = ({
  onOpenTicketSystem,
  onOpenLiveChat,
}) => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      {/* Help Center */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Help Center</h2>
        <p className="mb-4">
          Find answers to common questions and troubleshoot issues with our
          comprehensive help center.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Frequently Asked Questions
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Troubleshooting Guides
          </a>
        </div>
      </section>

      {/* Contact Options */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Contact Options</h2>
        <p className="mb-4">
          Reach out to our support team for personalized assistance through
          different contact options.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={onOpenTicketSystem}
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Open Ticket System
          </button>
          <button
            onClick={onOpenLiveChat}
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Live Chat Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default UserSupport;
