import Image from "next/image";
import { Navbar } from "../../components/navbar";
import {HeroSection } from "../../components/herosection";
import {SignUp} from "../../components/signup";
import {Login} from "../../components/login";
import {MultiModalServer} from "../../app/components/multimodal-server";
import {MultiModalClient} from "../../app/componenets/multimodal-client";
import {RealTimeTranslation} from "../../app/componenets/realtimetranslation";
import {Dashboard } from "../../components/dashboard";
import {AccessibilitySettings} from "../../components/accessibilitysettings";
import {AssistiveTechnologiesIntegration} from "../../components/assistivetechnologiesintegration";
import {CommunityEngagement} from "../../components/eommunityengagemen";
import {EducationalResources} from "../../components/educationalresources";
import {UserSupport} from "../../components/usersupport";
import {PrivacyAndSecurity} from "../../components/privacyandsecurity";
import {FeedbackMechanisms} from "../../components/feedbackmechanisms";





export default function Home() {
  return (
    <div>
      {/* NAVBAR SECTION BELOW */}
      <Navbar />

      {/* HEROSECTION SECTION BELOW */}
      <HeroSection />

      {/* SIGNUP SECTION BELOW */}
      <SignUp />

      {/* LOGIN SECTION BELOW */}
       <Login>

      {/* MULTIMODALSERVER SECTION BELOW */}
      <MultiModalServer />
     
      {/* MULTIMODALCLIENT SECTION BELOW */}
      <MultiModalClient />

      {/* DASHBOARD SECTION BELOW */}
      <Dashboard />

      {/* REALTIMETRANSLATION SECTION BELOW */}
      <RealTimeTranslation/>

      {/* ACCESSIBILITYSETTINGS SECTION BELOW */}
      <AccessibilitySettings/>
      
      {/* ASSISTIVETECHNOLOGYINTEGRATION SECTION BELOW */}
      <AssistiveTechnologiesIntegration/>
     
      {/* COMMUNITYENGAGEMENT SECTION BELOW */}
      <CommunityEngagemen/>

      {/* EDUCATIONALRESOURCES SECTION BELOW */}
      <EducationalResources/>

      {/* USERSUPPORT SECTION BELOW */}
      <UserSupport/>

      {/* COMMUNITYENGAGEMENT SECTION BELOW */}
      <CommunityEngagemen/>
   
      {/* PRIVACYANDSECURITY SECTION BELOW */}
      <PrivacyAndSecurity/>

      {/* FEEDBACKMECHANISM SECTION BELOW */}
      <FeedbackMechanisms/>
    </div>
  );
}
