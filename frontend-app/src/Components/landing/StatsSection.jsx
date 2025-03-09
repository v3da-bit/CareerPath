import React from "react";
import BoardThree from "../three/BoardThree";
import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-6xl font-bold text-white mb-4">
          Empower Your Career with AI-Driven Insights
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          The CareerPath platform is designed to track and enhance your skills, using AI-powered tools to guide you through personal and professional development.
        </p>
        <div className="mb-12">
          <BoardThree />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 md:grid-cols-4 gap-8 text-white">
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={1000} separator="," duration={3} />+
            </h3>
            <p className="mt-2">Skills Tracked</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={500} separator="," duration={3} />+
            </h3>
            <p className="mt-2">AI-Powered Quizzes Taken</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={300} separator="," duration={3} />+
            </h3>
            <p className="mt-2">Career Paths Suggested</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={95} duration={3} />%
            </h3>
            <p className="mt-2">User Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
