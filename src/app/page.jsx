"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";


import RevenueChart from "@/components/Tables/RevenueChart";
import OnboardingScreen from "@/components/Tables/OnboardingScreen";
import CustomerCard from "@/components/Tables/CustomerCard";
import FeatureSection from "@/components/FeatureSection";
import HyperlocalSection from "@/components/HyperlocalSection";
import IntegrationsSection from "@/components/IntegraitonSection";
import PlatformSection from "@/components/PlatformSection";
import TestimonialsCarousel from "@/components/SocialmediaSection";
import FreeTrialSection from "@/components/TrailSeciton";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-300">
      <Navbar />
      <Hero />

   <div className="flex flex-col pb-6 lg:flex-row md:pt-10 md:pb-15 justify-center items-center gap-8 lg:gap-12 w-full px-4">
  {/* Onboarding Screen */}
  <div className="flex justify-center w-full max-w-sm">
    <OnboardingScreen />
  </div>

  {/* Revenue Chart */}
  <div className="flex justify-center w-full max-w-sm">
    <RevenueChart />
  </div>

  {/* Customer Card */}
  <div className="flex justify-center w-full max-w-sm">
    <CustomerCard />
  </div>
</div>

      <FeatureSection></FeatureSection>

      <PlatformSection></PlatformSection>
      <HyperlocalSection></HyperlocalSection>
      <IntegrationsSection></IntegrationsSection>
      <TestimonialsCarousel></TestimonialsCarousel>
      <FreeTrialSection></FreeTrialSection>










      {/* Placeholder grid for components like charts */}

    </div>
  );
}
