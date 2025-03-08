import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title);

const TrendsSection = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Hours Spent Learning",
        data: [2, 3, 4, 5, 6, 4, 3],
        borderColor: "#FFD700",
        backgroundColor: "rgba(255, 215, 0, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#fff",
        },
      },
      title: {
        display: true,
        text: "Weekly Trends",
        color: "#FFD700",
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "#666" },
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "#666" },
      },
    },
  };

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg m-4">
      <h2 className="text-xl font-semibold mb-4 text-yellow-500">Weekly Trends</h2>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TrendsSection;