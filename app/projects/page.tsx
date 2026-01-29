import { ProjectCard } from "@/components/projects/project-card";
import { data } from "@/config/data";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 min-h-screen">
      <header className="text-center py-16 md:py-24 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-gradient-x">
             Projects
          </span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          A showcase of my work in Agentic AI, Full Stack Development, and Machine Learning.
        </p>
      </header>

      <section className="pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {data.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
