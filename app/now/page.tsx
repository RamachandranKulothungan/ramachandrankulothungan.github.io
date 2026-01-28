import { Briefcase, Dumbbell,  Tv } from "lucide-react";
import { NowTabs } from "@/components/now/NowTabs";

export default function NowPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What I'm doing now
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: January 2026
          </p>
        </div>

        <NowTabs />
      </div>
    </div>
  );
}
