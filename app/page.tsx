import Image from "next/image";
import Link from "next/link";
import { Skills3D } from "@/components/home/Skills3D";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { data } from "@/config/data";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center max-w-6xl mx-auto">
        {/* Left: Intro */}
        <div className="order-2 md:order-1 flex flex-col items-start text-left">
          <span className="text-xl md:text-2xl font-medium text-muted-foreground mb-2 block">
            Hey, I am
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
            <span className="text-foreground">
              {data.personal.name.split(" ")[0]}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-8 max-w-lg">
            {data.personal.description}
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Link href="/projects">
                View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl border hover:bg-secondary/50 transition-all duration-300">
              <Link href={data.personal.resume} target="_blank">
                View Resume
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Right: Image */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 relative">
           <Image
            src="/me.png"
            alt={data.personal.name}
            width={400}
            height={400}
            className="rounded-[2rem] w-80 h-80 md:w-[28rem] md:h-[28rem] object-cover relative z-10 transition-all duration-500 hover:scale-[1.02]"
            priority
          />
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-card dark:bg-card/40 backdrop-blur-sm rounded-3xl p-4 md:p-10 border border-border/50 shadow-sm">
          <h2 className="text-3xl font-bold mb-10 text-foreground flex items-center gap-4">
             Work Experience
          </h2>
          <div className="space-y-8">
            {data.experience.map((job, index) => (
              <div 
                key={index}
                className="group relative pl-4 md:pl-0"
              >
                <div className="bg-card hover:bg-secondary/30 p-6 rounded-xl border border-border/50 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
                    <div>
                      <h3 className="font-bold text-xl text-foreground">
                        {job.role}
                      </h3>
                      <p className="text-primary font-medium text-lg">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-sm font-mono text-muted-foreground py-1 px-3 bg-secondary rounded-md w-fit">
                       {job.duration}
                    </div>
                  </div>
                  <ul className="text-muted-foreground space-y-3 leading-relaxed list-disc list-outside ml-4 marker:text-foreground/50">
                    {job.description.map((item, i) => (
                       <li key={i} className="pl-1">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <div className="bg-card dark:bg-card/40 backdrop-blur-sm rounded-3xl p-4 md:p-10 border border-border/50 shadow-sm">
          <h2 className="text-3xl font-bold mb-12 text-foreground inline-flex items-center gap-4 justify-center">
            Core Skills
          </h2>
          
          <div className="relative">
            {/* Background decoration removed */}
            <Skills3D />
            <p className="text-sm text-muted-foreground mt-4 opacity-0 animate-fade-in delay-1000">
              Interactive 3D View • Drag to Rotate
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="max-w-6xl mx-auto mb-20 scroll-mt-24">
        <div className="bg-card dark:bg-card/40 backdrop-blur-sm rounded-3xl p-4 md:p-10 border border-border/50 shadow-sm">
          <h2 className="text-3xl font-bold mb-12 text-foreground inline-flex items-center gap-4 justify-center w-full">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {data.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
