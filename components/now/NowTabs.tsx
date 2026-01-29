"use client";

import { useState } from "react";
import { Briefcase, Dumbbell, Tv } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "@/config/data";

const iconMap = {
  Briefcase,
  Dumbbell,
  Tv,
} as const;

type TabId = typeof data.now.tabs[number]["id"];

export function NowTabs() {
  const [activeTab, setActiveTab] = useState<TabId>(data.now.tabs[0].id);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div 
        role="tablist" 
        className="flex justify-start mb-8 border-b border-gray-200 dark:border-gray-700 w-full overflow-x-auto"
        aria-label="Filter activities"
      >
        {data.now.tabs.map((tab) => {
          const Icon = iconMap[tab.icon as keyof typeof iconMap];
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-3 font-semibold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-t-sm",
                isActive
                  ? `border-blue-500 dark:border-blue-400 text-gray-900 dark:text-gray-100` // Removed the colored text for active state as per "calm" critique, just simple active state
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              )}
            >
              <Icon className={cn("w-4 h-4", isActive ? "text-blue-500" : "text-gray-400")} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {data.now.tabs.map((tab) => {
             if (activeTab !== tab.id) return null;
             
             return (
              <motion.div
                key={tab.id}
                role="tabpanel"
                id={`panel-${tab.id}`}
                aria-labelledby={`tab-${tab.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full focus:outline-none"
                tabIndex={0}
              >
                <CategoryPanel tab={tab} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CategoryPanel({ tab }: { tab: typeof data.now.tabs[number] }) {
  const Icon = iconMap[tab.icon as keyof typeof iconMap];
  
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl p-0 transition-colors duration-200">
      {/* We removed the redundant header inside the card as the tab itself serves as context, 
          but if we want to keep the icon branding we can keep a subtle header 
          or just go straight to content for a cleaner look. 
          The critique asked for "Information density vs scannability".
          Removing the big redundant H2 inside the card to reduce noise, 
          since the user already clicked the tab.
      */}
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-sm uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Currently
          </h3>
          <ul className="space-y-4">
            {tab.currently.map((item, i) => (
              <li key={i} className="flex items-start group text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                 {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
           <h3 className="text-sm uppercase tracking-wide font-semibold text-gray-400 dark:text-gray-500 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
            Completed
          </h3>
          <ul className="space-y-3">
            {tab.completed.map((item, i) => (
              <li key={i} className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                 {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
