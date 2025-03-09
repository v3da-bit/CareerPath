import React from "react";
import Navbar from "../Components/landing/Navbar.jsx";
import HeroSection from "../Components/landing/HeroSection.jsx";
import Footer from "../Components/landing/Footer.jsx";
import Scrollbar from "../Components/landing/Scrollbar.jsx";
import CareerStages from "../Components/landing/CareerStages.jsx";
// import FeaturesSection from "./FeaturesSection ";
import DataSection from "../Components/landing/DataSection.jsx";
import ImageSlider from "../Components/landing/ImageSlider.jsx";
import FeedbackSection from "../Components/landing/FeaturesSection .jsx";
import CommunitySection from "../Components/landing/CommunitySection.jsx";
import StatsSection from "../Components/landing/StatsSection.jsx";
import AnimationWrapper from "../contaxt/AnimationWrapper.jsx";

const Home = () => {
  return (
    <div className="bg-[#001a2c]">
      <Navbar />
      <HeroSection />
      <Scrollbar />

      {/* Sections wrapped in AnimationWrapper */}

      <AnimationWrapper>
        <StatsSection />
      </AnimationWrapper>

      <AnimationWrapper>
        <CommunitySection />
      </AnimationWrapper>

      <AnimationWrapper>
        <ImageSlider />
      </AnimationWrapper>

      <AnimationWrapper>
        <CareerStages />
      </AnimationWrapper>

      <AnimationWrapper>
        <DataSection />
      </AnimationWrapper>

      <AnimationWrapper>
        <FeedbackSection />
      </AnimationWrapper>

      <Footer />
    </div>
  );
};

export default Home;
