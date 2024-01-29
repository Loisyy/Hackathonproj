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
    <div className="bg-deep-purple-500 text-light-gray-100 p-8">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome InclusiveCommTech</h1>
          <p className="text-lg mb-8">
            Bridging Gaps for PWDs and Underserved Communities.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white font-bold rounded-full py-3 px-6 hover:bg-blue-700 hover:text-white"
          >
            Get Started
          </a>
        </div>
        <div>

          {/* @lois it can be done this way but will throw a warning like the yellow  */}
          {/* underlines below to get rid of that you can use the Image tag from nextjs  */}
          <img
            src="/close-up-team-hand-shake.jpg" 
            alt="Landing Page Image"
            className="w-full h-auto max-w-md"
          />

          {/* this way:::: */}

          <Image alt="image" src='/close-up-team-hand-shake.jpg' width={500} height={500} />
        </div>
      </div>
    </div>
  );
}

export default page