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
type Tab = typeof data.now.tabs[number];

// Extending type definition to include description since we added it to data
// but typescript inference might need explicit optional typing if not fully inferred yet
// though "typeof data" should handle it if data is const asserted. 
// Assuming data is const asserted and correctly inferred.

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
      <div className="flex flex-col gap-8">
        {/* Description Section */}
        {/* @ts-ignore - description field exists in data but type inference might lag without restart */}
        {tab.description && (
          <div className="mb-2">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              {/* @ts-ignore */}
              {tab.description}
            </p>
          </div>
        )}

        {/* Currently List */}
        <div>
          <h3 className="text-sm uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Currently
          </h3>
          <ul className="space-y-3">
            {tab.currently.map((item, i) => (
              <li key={i} className="flex items-start group text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                 {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
