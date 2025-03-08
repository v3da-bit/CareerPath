
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/common/Navbar";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 text-white py-20 px-5 text-center">
      <div className="absolute inset-0 animate-gradient-x opacity-40"></div>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold"
      >
        Find Your Ideal Career Path
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-lg md:text-xl text-gray-300"
      >
        Explore opportunities tailored to your skills and interests.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-8"
      >
      </motion.div>
      <input
        type="text"
        placeholder="Search for careers..."
        className="w-full md:w-2/3 p-4 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

const CareerRecommendations = () => {
  const careers = [
    { title: "Software Engineer", salary: "$120k", demand: "High", link: "https://in.indeed.com/jobs?q=software+engineer&l=Ahmedabad%2C+Gujarat&from=searchOnHP%2Cwhatautocomplete%2Cwhereautocomplete&vjk=00d14eaeced62913" },
    { title: "Data Scientist", salary: "$110k", demand: "High", link: "https://in.indeed.com/jobs?q=data+scientist&l=Ahmedabad%2C+Gujarat&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=8a1de8ec80b14714" },
    { title: "Product Manager", salary: "$100k", demand: "Medium", link: "https://in.indeed.com/jobs?q=product+manager&l=Ahmedabad%2C+Gujarat&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=b79801f2bf63538a" },
    { title: "UX Designer", salary: "$90k", demand: "Medium", link: "https://in.indeed.com/jobs?q=ux+designer&l=Ahmedabad%2C+Gujarat&from=searchOnDesktopSerp%2Cwhatautocomplete&vjk=f5e5b201cb9e3383" },
  ];

  return (
    <div className="text-white py-16 px-5 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Career Recommendations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {careers.map((career, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl"
          >
            <a href={career.link}>
              <h3 className="text-xl font-bold mb-2">{career.title}</h3>
              <p className="text-gray-400">Salary: {career.salary}</p>
              <p className="text-gray-400">Demand: {career.demand}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// const SkillsToCareerMapping = () => {
//   return (
//     <div className="bg-gray-900 text-white py-16 px-5 md:px-20">
//       <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
//         Skills to Career Mapping
//       </h2>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="flex flex-col items-center"
//       >
//         <input
//           type="text"
//           placeholder="Enter your skills..."
//           className="w-full md:w-2/3 p-4 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-8"
//         />
//         <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center">
//           <p className="text-gray-400">Interactive flowchart coming soon...</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

const TrendingCareers = () => {
  const careers = [{ name: "AI Engineer", link: "https://www.naukri.com/ai-engineer-jobs" }, { name: "Blockchain Developer", link: "https://www.naukri.com/blockchain-developer-jobs" }, { name: "Cybersecurity Analyst", link: "https://www.naukri.com/cybersecurity-analyst-jobs" }, { name: "Cloud Architect", link: "https://www.naukri.com/code360/library/cloud-computing-architecture" }];

  return (
    <div className="text-white py-14 px-5 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Trending Careers
      </h2>
      <div className="w-full  flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex overflow-x-auto space-x-6 py-4"
        >
          {careers.map((career, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg min-w-[200px] w-[250px] text-center"
            >
              <a href={career.link}>
                <p className="text-md font-bold text-indigo-400">{career.name}</p>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const CareerInsights = () => {
  const articles = [
    { title: "How to Upskill for Future Careers", link: "https://www.springboard.com/blog/software-engineering/software-engineer-career-path/" },
    { title: "Top 10 High-Demand Jobs in 2025", link: "https://nbs.edu.in/top-10-high-demand-jobs-in-2025/" },
    { title: "Tips for Building a Successful Career", link: "https://in.indeed.com/career-advice/career-development/how-to-build-career" },
  ];

  return (
    <div className="text-white py-16 px-5 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Career Insights and Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <a
              href={article.link}
              className="text-indigo-400 underline hover:text-indigo-300"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Job = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Navbar />
      <div className="bg-[#000814] text-[#fff]">
        <HeroSection />
        <CareerRecommendations />
        {/* <SkillsToCareerMapping /> */}
        <TrendingCareers />
        <CareerInsights />
      </div>
    </div>
  );
};

export default Job;
