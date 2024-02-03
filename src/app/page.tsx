"use client"
import Image from "next/image";
import Navbar from "@/componenets/navbar";
import HeroSection from "@/componenets/herosection";
import React from 'react'

import MultiModalClient from "@/src/app/multimodalclient";
import RealTimeTranslation from "@src/app/realtimetranslation";

// import AccessibilitySettingsfrom "../../components/accessibilitysettings";
// import AssistiveTechnologiesIntegrationfrom "../../components/assistivetechnologiesintegration";
// import CommunityEngagementfrom "../../components/eommunityengagemen";
// import EducationalResourcesfrom "../../components/educationalresources";
// import UserSupportfrom "../../components/usersupport";
// import PrivacyAndSecurityfrom "../../components/privacyandsecurity";
// import FeedbackMechanismsfrom "../../components/feedbackmechanisms";



const LandingPage = () => {
  return (
    <div className="bg-purple-900 text-lightGray p-8">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome EqualAccess</h1>
          <p className="text-lg mb-8">
            Bridging Gaps for People With Disabilities and Underserved
            Communities.
          </p>
          <a
            href="/signup"
            className="bg-deepPurple border border-white text-white font-bold rounded-full py-3 px-6 hover:bg-blue-700 hover:text-white"
          >
            Get Started
          </a>
        </div>
        <div>
          {/* Use the Image component for better optimization */}
          <Image
            alt="image"
            src="/close-up-team-hand-shake.jpg"
            width={500}
            height={500}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;