import React from "react";

const skills = [
  { name: "JavaScript", score: 85, activity: "Completed 3 tests" },
  { name: "React", score: 70, activity: "Watched 4 tutorials" },
  { name: "Python", score: 65, activity: "Completed 2 projects" },
];

const SkillInsightsSection = () => {
  return (
    <div className="bg-gray-800 m-4 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Skill Insights</h2>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-2">Skill</th>
            <th>Proficiency</th>
            <th>Recent Activity</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-2">{skill.name}</td>
              <td>{skill.score}%</td>
              <td>{skill.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillInsightsSection;
