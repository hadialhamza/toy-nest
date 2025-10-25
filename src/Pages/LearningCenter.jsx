import React from "react";
import {
  FaLightbulb,
  FaPuzzlePiece,
  FaBookOpen,
  FaBrain,
  FaHeart,
  FaUsers,
  FaHandHoldingHeart,
  FaStar,
} from "react-icons/fa";

const LearningCenter = () => {
  const tips = [
    {
      icon: <FaPuzzlePiece className="text-blue-500 text-3xl" />,
      title: "Problem Solving Skills",
      desc: "Building blocks and puzzles help children think creatively and develop logical reasoning.",
      age: "Ages 3-8",
      duration: "15-30 min daily",
    },
    {
      icon: <FaBrain className="text-purple-500 text-3xl" />,
      title: "Cognitive Development",
      desc: "Memory games and pattern activities improve focus and planning abilities.",
      age: "Ages 2-6",
      duration: "10-20 min sessions",
    },
    {
      icon: <FaBookOpen className="text-green-500 text-3xl" />,
      title: "Language Building",
      desc: "Storytelling toys and role-play enhance vocabulary and communication skills.",
      age: "Ages 1-5",
      duration: "20-40 min daily",
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
      title: "Creative Thinking",
      desc: "Art supplies and discovery sets spark imagination and curiosity.",
      age: "All Ages",
      duration: "30+ min free play",
    },
    {
      icon: <FaHeart className="text-red-500 text-3xl" />,
      title: "Emotional Growth",
      desc: "Dolls and stuffed animals help children express feelings and develop empathy.",
      age: "Ages 2-7",
      duration: "Open-ended play",
    },
    {
      icon: <FaUsers className="text-indigo-500 text-3xl" />,
      title: "Social Skills",
      desc: "Board games and group activities teach sharing and teamwork.",
      age: "Ages 4+",
      duration: "20-45 min",
    },
    {
      icon: <FaHandHoldingHeart className="text-pink-500 text-3xl" />,
      title: "Motor Skills",
      desc: "Play dough and stacking toys strengthen hand muscles and coordination.",
      age: "Ages 1-4",
      duration: "15-25 min",
    },
    {
      icon: <FaStar className="text-teal-500 text-3xl" />,
      title: "Confidence Building",
      desc: "Achievement-based toys boost self-esteem through successful play.",
      age: "All Ages",
      duration: "Varies",
    },
  ];

  const quickTips = [
    "Follow your child's interests when choosing toys",
    "Rotate toys weekly to maintain interest",
    "Combine learning with fun activities",
    "Praise effort rather than results",
    "Play together to strengthen bonds",
  ];

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="title font-baloo">Learning Through Play</h1>
          <p className="subtitle">
            Discover how playtime builds essential skills for your child's
            development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tips.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {t.icon}
                <div>
                  <h3 className="font-baloo text-lg font-semibold text-gray-800">
                    {t.title}
                  </h3>
                  <div className="flex gap-2 text-xs text-gray-500">
                    <span>{t.age}</span>
                    <span>•</span>
                    <span>{t.duration}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-baloo text-2xl font-bold text-gray-800 mb-4">
              Quick Tips for Parents
            </h2>
            <ul className="space-y-3">
              {quickTips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-baloo text-2xl font-bold text-gray-800 mb-4">
              Play-Based Learning Benefits
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Cognitive Development</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Social Skills</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Emotional Growth</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full w-2/3"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Physical Coordination</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCenter;
