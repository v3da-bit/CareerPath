import React from 'react';

const CommunitySection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center p-20 pb-44">
      {/* Content Section */}
      <div className="lg:w-1/2 p-8 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-6xl font-bold mb-4">
          Grow Your Network with the Trailblazer Community
        </h1>
        <p className="mb-6">
          Learn relevant skills, connect to Trailblazers around the world, and give back.
          Join millions who are blazing trails with Salesforce. Plus, you'll have fun and make friends along the way.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
            Join Groups
          </button>
          <button className="px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-100">
            Find Meetings
          </button>
        </div>
      </div>

      {/* Illustration Section */}
      <div className="lg:w-1/2">
        <img
          src="images/community.png"
          alt="Trailblazer Community Illustration"
          className="w-5/6 h-auto m-auto"
        />
      </div>
    </section>
  );
};

export default CommunitySection;
