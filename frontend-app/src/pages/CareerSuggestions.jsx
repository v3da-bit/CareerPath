
import React from "react";
import Navbar from "../Components/common/Navbar";
import PersonalizedRecommendations from "../Components/careerSuggestion/PersonalizedRecommendations";
import TrendingCareers from "../Components/careerSuggestion/TrendingCareers";
import SkillMatchAnalysis from "../Components/careerSuggestion/SkillMatchAnalysis";
import CareerPathRoadmap from "../Components/careerSuggestion/CareerPathRoadmap";
import ExpertAdvice from "../Components/careerSuggestion/ExpertAdvice";

const CareerSuggestions = () => {
  return (
   <div className=" w-full h-full overflow-y-scroll">
    <Navbar/>
    <div className="bg-[#000814] text-[#fff] min-h-screen p-4">
      <PersonalizedRecommendations/>
      <TrendingCareers/>
      <SkillMatchAnalysis/>
      <CareerPathRoadmap/>
      <ExpertAdvice/>
    </div>
   </div>
  );
};

export default CareerSuggestions;