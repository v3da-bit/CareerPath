import React from "react";
import Navbar from "../Components/common/Navbar";
import SkillInsightsSection from "../Components/skilltracker/SkillInsightsSection";
import SuggestionsSection from "../Components/skilltracker/SuggestionsSection";
import TrendsSection from "../Components/skilltracker/TrendsSection";
import SkillTrackerTopSection from '../Components/skilltracker/SkillTrackerTopSection'

const SkillTracker = () => {
  return (
    <>
      <div className="w-full h-full overflow-y-scroll bg-[#000814] text-[#fff] ">
        <Navbar />
        <div>
          <SkillTrackerTopSection/>
          <SkillInsightsSection/>
          <SuggestionsSection/>
          <TrendsSection/>
        </div>
      </div>
    </>
  );
};

export default SkillTracker;
