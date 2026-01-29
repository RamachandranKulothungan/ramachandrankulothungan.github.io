import { Briefcase, Dumbbell,  Tv } from "lucide-react";
import { NowTabs } from "@/components/now/NowTabs";
import { data } from "@/config/data";

export default function NowPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            What I'm doing now
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {data.now.lastUpdated}
          </p>
        </div>

        <NowTabs />
      </div>
    </div>
  );
}
