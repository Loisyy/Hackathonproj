"use client"
import Image from "next/image";
import Navbar from "@/componenets/navbar";
import HeroSection from "@/componenets/herosection";
import React from 'react'

// import MultiModalClientfrom
// import RealTimeTranslationfrom

// import AccessibilitySettingsfrom "../../components/accessibilitysettings";
// import AssistiveTechnologiesIntegrationfrom "../../components/assistivetechnologiesintegration";
// import CommunityEngagementfrom "../../components/eommunityengagemen";
// import EducationalResourcesfrom "../../components/educationalresources";
// import UserSupportfrom "../../components/usersupport";
// import PrivacyAndSecurityfrom "../../components/privacyandsecurity";
// import FeedbackMechanismsfrom "../../components/feedbackmechanisms";



const page = () => {
  return (
    <div className="bg-deepPurple text-lightGray p-8">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome InclusiveCommTech</h1>
          <p className="text-lg mb-8">
            Bridging Gaps for Peoaple With Disabilitties and Underserved Communities.
          </p>
          <a
            href="#"
            className="bg-blue text-white font-bold rounded-full py-3 px-6 hover:bg-blue-700 hover:text-white"
          >
            Get Started
          </a>
        </div>
        <div>
          <img
            src="/your-image.jpg" // Replace with the actual image source
            alt="Landing Page Image"
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default page