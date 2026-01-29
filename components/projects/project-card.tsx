
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    award?: string;
    tags: readonly { name: string; color: string }[];
    links: readonly { name: string; url: string; icon: string }[];
  };
}

const IconMap = {
  Github: Github,
  ExternalLink: ExternalLink,
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col h-full bg-card dark:bg-card/40 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden">
      
      {/* Premium Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

      <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {project.title}
          </h3>
          {project.award && (
            <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full shrink-0 ml-2 animate-pulse-slow">
               Award
            </span>
          )}
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed grow">
          {project.description}
        </p>

        {project.award && (
            <p className="text-primary font-semibold mb-4 text-sm bg-primary/10 w-fit px-3 py-1 rounded-md">
            {project.award}
            </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={cn(
                "text-xs font-medium px-2.5 py-0.5 rounded-full border border-transparent transition-colors",
                // Using a more subtle, consistent styling for tags instead of hardcoded colors to maintain theme safety
                "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">
          {project.links.map((link) => {
            const Icon = IconMap[link.icon as keyof typeof IconMap] || ExternalLink;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
