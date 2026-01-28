"use client";

import { useState } from "react";
import { Briefcase, Dumbbell, Tv } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "work", label: "Work", icon: Briefcase, color: "text-blue-500" },
  { id: "fitness", label: "Fitness", icon: Dumbbell, color: "text-green-500" },
  { id: "anime", label: "Anime", icon: Tv, color: "text-purple-500" },
];

export function NowTabs() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-6 py-3 font-semibold transition-colors border-b-2",
              activeTab === tab.id
                ? `border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400`
                : "border-transparent text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "work" && (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-200">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                  <Briefcase className="w-6 h-6 mr-3 text-blue-500" />
                  Work
                </h2>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Currently
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Learning C++ for microservices development and networking technologies",
                      "Applying for full time roles in software development",
                      "Exploring agentic systems with langgraph",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">
                          •
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Completed
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Working at TBPL lab at UB on a research project to improve resolution in OCT images",
                      "Preparing with k8s and robot framework for my internship",
                      "DDIM-based Inpainting Model on MNIST Dataset",
                      "Lighthouse Free Medical Clinic App (Winner of UB AI Hackathon)",
                      "Anime Recommendation System",
                      "Doodle Recognition Web App",
                      "Sorting Algorithm Visualizer",
                      "Deep learning mini projects with fine tuning pre trained LLMs",
                      "Deep learning mini projects with Autoencoders",
                      "PintOS Alarm Clock, MLFQS implementation",
                      "Deep learning mini projects with LSTMs and RNNs",
                      "CNN mini projects for image classification",
                      "Applying for SDE/SDET roles for summer internships",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="line-through text-gray-400 dark:text-gray-500 text-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "fitness" && (
            <motion.div
              key="fitness"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-200">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                  <Dumbbell className="w-6 h-6 mr-3 text-green-500" />
                  Fitness
                </h2>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Currently
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Training to get a sub 20 5k",
                      "Getting better at freestyle football",
                      "Learning to swim",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="text-green-500 dark:text-green-400 mr-3 mt-1">
                          •
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Completed
                  </h3>
                  <div className="space-y-2">
                    <div className="line-through text-gray-400 dark:text-gray-500 text-sm">
                      Regular workout routine and fitness activities
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "anime" && (
            <motion.div
              key="anime"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-200">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                  <Tv className="w-6 h-6 mr-3 text-purple-500" />
                  Anime
                </h2>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Currently
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "One Piece",
                      "100 Meters",
                      "Akamoto Days",
                      "Urek Mazino",
                      "Hajime no Ippo",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="text-purple-500 dark:text-purple-400 mr-3 mt-1">
                          •
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Completed
                  </h3>
                  <div className="space-y-2">
                     {[
                        "Ao Ashi",
                        "Haikyuu",
                        "Run with the Wind",
                        "Giant Killing"
                     ].map((item, i) => (
                        <div key={i} className="line-through text-gray-400 dark:text-gray-500 text-sm">
                            {item}
                        </div>
                     ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
