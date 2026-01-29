import Image from "next/image";
import Link from "next/link";
import { Skills3D } from "@/components/home/Skills3D";
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-gradient-x">
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
            <Button asChild variant="outline" size="lg" className="rounded-xl border-2 hover:bg-background/80 backdrop-blur-sm transition-all duration-300">
              <Link href={data.personal.resume} target="_blank">
                View Resume
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Right: Image */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 relative group">
          {/* Primary Blue Glow */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
          {/* Secondary Purple Glow for Premium Feel */}
          <div className="absolute -bottom-10 -left-10 w-full h-full bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow delay-700"></div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2.5rem] rotate-6 scale-95 opacity-20 group-hover:rotate-12 group-hover:scale-100 transition-all duration-500"></div>
             <Image
              src="/me.png"
              alt={data.personal.name}
              width={400}
              height={400}
              className="rounded-[2.5rem] w-80 h-80 md:w-[28rem] md:h-[28rem] shadow-2xl object-cover relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-2"
              priority
            />
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-card dark:bg-card/40 backdrop-blur-sm rounded-3xl p-4 md:p-10 border border-border/50 shadow-sm">
          <h2 className="text-3xl font-bold mb-10 text-foreground flex items-center gap-4">
            <span className="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full inline-block shadow-lg shadow-blue-500/20"></span>
            Work Experience
          </h2>
          <div className="space-y-8">
            {data.experience.map((job, index) => (
              <div 
                key={index}
                className="group relative pl-4 md:pl-0"
              >


                <div className="bg-background/50 hover:bg-background p-6 rounded-2xl border border-transparent hover:border-border/50 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
                    <div>
                      <h3 className="font-bold text-xl text-foreground group-hover:text-blue-600 transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-primary font-medium text-lg">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground py-1 px-3 bg-secondary/50 rounded-full w-fit">
                       {job.duration}
                    </div>
                  </div>
                  <ul className="text-muted-foreground space-y-3 leading-relaxed list-disc list-outside ml-4 marker:text-blue-500/50">
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
        <h2 className="text-3xl font-bold mb-12 text-foreground inline-flex items-center gap-4 justify-center">
          <span className="w-1.5 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full inline-block shadow-lg shadow-purple-500/20"></span>
          Core Skills
        </h2>
        
        <div className="relative">
          {/* Background decoration for the 3D element */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl rounded-full -z-10"></div>
          <Skills3D />
          <p className="text-sm text-muted-foreground mt-4 opacity-0 animate-fade-in delay-1000">
            Interactive 3D View • Drag to Rotate
          </p>
        </div>
      </div>
    </div>
  );
}
