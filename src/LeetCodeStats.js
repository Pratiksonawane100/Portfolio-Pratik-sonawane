import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Leetcode from "../src/Logo/Leetcode.gif";

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/Pratiksonawane" // Replace with your username
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        console.error("Error fetching LeetCode stats:", err.message);
        setError("Failed to load LeetCode stats. Please try again later.");
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!stats) {
    return <p>Loading...</p>;
  }

  const statsData = [
    {
      title: "Easy Problems",
      value: stats.easySolved,
      badge: `https://img.shields.io/badge/Easy-${stats.easySolved}-blue`,
    },
    {
      title: "Medium Problems",
      value: stats.mediumSolved,
      badge: `https://img.shields.io/badge/Medium-${stats.mediumSolved}-orange`,
    },
    {
      title: "Hard Problems",
      value: stats.hardSolved,
      badge: `https://img.shields.io/badge/Hard-${stats.hardSolved}-red`,
    },
    {
      title: "Total Problems Solved",
      value: stats.totalSolved,
      badge: `https://img.shields.io/badge/Total-${stats.totalSolved}-brightgreen`,
    },
  ];

  return (
    <div className="bg-white min-h-[50vh] flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center mb-6" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-gray-800">LeetCode Stats</h1>
        <img src={Leetcode} alt="LeetCode Logo" className="mt-2 w-16 h-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md border border-gray-200 text-center bg-white hover:bg-gray-100 transition-transform transform hover:scale-105"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={index * 100}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {stat.title}
            </h2>
            <p className="text-3xl font-semibold text-gray-600">{stat.value}</p>
            <img
              src={stat.badge}
              alt={`${stat.title} Badge`}
              className="mt-4 mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeetCodeStats;
