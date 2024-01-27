// components/EducationalResources.tsx
import React from "react";

interface EducationalResourcesProps {
  onResourceDownload: (resourceId: string) => void;
}

const EducationalResources: React.FC<EducationalResourcesProps> = ({
  onResourceDownload,
}) => {
  const downloadResource = (resourceId: string) => {
    // Simulate resource download, replace with actual logic
    console.log(`Downloading resource with ID: ${resourceId}`);
    onResourceDownload(resourceId);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      {/* Guides and Tutorials */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Guides and Tutorials</h2>
        <p className="mb-4">
          Explore in-app guides and video tutorials to enhance your
          communication skills.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            In-App Guides
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Video Tutorials
          </a>
        </div>
      </section>

      {/* Resource Library */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Resource Library</h2>
        <p className="mb-4">
          Access a variety of downloadable resources and external educational
          content.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => downloadResource("1")}
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Download Resource 1
          </button>
          <button
            onClick={() => downloadResource("2")}
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Download Resource 2
          </button>
        </div>
      </section>
    </div>
  );
};

export default EducationalResources;
