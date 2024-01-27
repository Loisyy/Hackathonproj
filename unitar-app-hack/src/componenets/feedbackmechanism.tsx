// components/FeedbackMechanisms.tsx
import React from "react";

interface FeedbackMechanismsProps {
  onOpenFeedbackForm: () => void;
  onReportIssue: () => void;
  onTakeSurvey: () => void;
}

const FeedbackMechanisms: React.FC<FeedbackMechanismsProps> = ({
  onOpenFeedbackForm,
  onReportIssue,
  onTakeSurvey,
}) => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      {/* Feedback Forms */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Feedback Forms</h2>
        <p className="mb-4">
          Share your thoughts on specific features or aspects of the platform
          using our feedback forms.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={onOpenFeedbackForm}
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Open Feedback Form
          </button>
        </div>
      </section>

      {/* Reporting System */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Reporting System</h2>
        <p className="mb-4">
          Use our reporting system to notify us of any issues or concerns you
          encounter while using the platform.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={onReportIssue}
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Report Issue
          </button>
        </div>
      </section>

      {/* Regular Surveys */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Regular Surveys</h2>
        <p className="mb-4">
          Participate in our regular surveys to provide valuable insights and
          suggestions for improvement.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={onTakeSurvey}
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Take Survey
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeedbackMechanisms;
