import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Agentic Job Application Drafter",
    description:
      "Polls RSS feeds for job links and executes a LangChain workflow per job link using Browser Use Agent to extract form XPaths, attaching field values using LLMs, and auto-fill applications through a browser extension.",
    tags: [
        { name: "LangChain", color: "bg-blue-50 text-blue-700" },
        { name: "Browser Use", color: "bg-green-50 text-green-700" },
        { name: "FastAPI", color: "bg-purple-50 text-purple-700" },
        { name: "Next.js", color: "bg-indigo-50 text-indigo-700" },
    ],
    links: [
      { name: "GitHub", url: "https://github.com/rudraksh97/AutoApply", icon: Github },
    ],
  },
  {
    title: "Agentic Trip Planner",
    description:
      "Created an agentic AI vacation planner using LangGraph and Grok LLMs, integrating Google Maps APIs, currency conversion, and calculation tools to automate personalized itineraries and cut planning time.",
    tags: [
      { name: "LangGraph", color: "bg-blue-50 text-blue-700" },
      { name: "OpenRouter", color: "bg-green-50 text-green-700" },
      { name: "Streamlit", color: "bg-red-50 text-red-700" },
    ],
    links: [
        { name: "GitHub", url: "https://github.com/RamachandranKulothungan/AI_Trip_Planner", icon: Github },
    ],
  },
  {
    title: "EmailWhiz - Bulk Cold Emailer",
    description:
      "A Django based Web Application, enables users to send 100+ personalized cold emails and follow-ups directly without Gmail redirection.",
    tags: [
        { name: "Django", color: "bg-green-50 text-green-700" },
        { name: "React", color: "bg-blue-50 text-blue-700" },
        { name: "Tailwind CSS", color: "bg-indigo-50 text-indigo-700" },
        { name: "MongoDB", color: "bg-yellow-50 text-yellow-700" },
        { name: "GCP", color: "bg-orange-50 text-orange-700" },
    ],
    links: [
        { name: "GitHub", url: "https://github.com/RamachandranKulothungan/EmailWhizV3", icon: Github },
    ],
  },
  {
    title: "Lighthouse Free Medical Clinic App",
    description:
      "Developed a web application to provide optimal insurance recommendations for uninsured patients. Utilized OpenAI models, Next.js, and FastAPI to streamline decision-making for medical professionals.",
    award: "🏆 Winner of UB AI Hackathon",
    tags: [
        { name: "Next.js", color: "bg-blue-50 text-blue-700" },
        { name: "FastAPI", color: "bg-green-50 text-green-700" },
        { name: "OpenAI", color: "bg-purple-50 text-purple-700" },
    ],
    links: [
        { name: "GitHub", url: "https://github.com/RamachandranKulothungan/lighthouse", icon: Github },
        { name: "Demo", url: "https://devpost.com/software/beacon-1j8itz?ref_content=my-projects-tab&ref_feature=my_projects", icon: ExternalLink },
    ],
  },
  {
    title: "Anime Recommendation System",
    description:
      "Built a machine learning-based recommendation system for personalized anime suggestions. Utilized Scikit-learn, Pandas, Django, and Streamlit to analyze 5M+ user ratings and suggest relevant anime. Implemented a hybrid approach using collaborative filtering and content-based similarity.",
    tags: [
        { name: "Scikit-learn", color: "bg-orange-50 text-orange-700" },
        { name: "Pandas", color: "bg-blue-50 text-blue-700" },
        { name: "Django", color: "bg-green-50 text-green-700" },
        { name: "Streamlit", color: "bg-red-50 text-red-700" },
    ],
    links: [
        { name: "GitHub", url: "https://github.com/AnsariSaad83299/Anime-Recommendation", icon: Github },
    ],
  },
  {
    title: "Doodle Recognition Web App",
    description:
      "Created an interactive web app for handwritten doodle recognition. Built with a Resnet18 model trained in PyTorch with MNIST dataset, integrated with a user-friendly front-end. Hosted on Huggingface spaces for easy access and deployment.",
    tags: [
        { name: "PyTorch", color: "bg-red-50 text-red-700" },
        { name: "ResNet18", color: "bg-purple-50 text-purple-700" },
        { name: "MNIST", color: "bg-yellow-50 text-yellow-700" },
        { name: "Huggingface", color: "bg-pink-50 text-pink-700" },
    ],
    links: [
        { name: "GitHub", url: "https://huggingface.co/spaces/ramachandrankulothungan/digit_doodle_recognition/tree/main", icon: Github },
        { name: "Try it out", url: "https://huggingface.co/spaces/ramachandrankulothungan/digit_doodle_recognition", icon: ExternalLink },
    ],
  },
  {
    title: "Sorting Algorithm Visualizer",
    description:
      "Developed a React + TypeScript application to visualize sorting algorithms. Used Chart.js for real-time graph updates and deployed the app using GitHub Pages. Helps users understand sorting concepts interactively through visual representation.",
    tags: [
        { name: "React", color: "bg-blue-50 text-blue-700" },
        { name: "TypeScript", color: "bg-indigo-50 text-indigo-700" },
        { name: "Chart.js", color: "bg-green-50 text-green-700" },
    ],
    links: [
        { name: "GitHub", url: "https://github.com/RamachandranKulothungan/viewsort", icon: Github },
        { name: "Try it out", url: "https://ramachandrankulothungan.github.io/viewsort/", icon: ExternalLink },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <header className="container mx-auto text-center py-16 px-6">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of my work showcasing machine learning, web development,
          and software engineering projects
        </p>
      </header>

      <section className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group flex flex-col"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  {project.award && (
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full shrink-0 ml-2">
                       Award Winner
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed grow">
                  {project.description}
                </p>
                 {project.award && (
                     <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                        {project.award}
                     </p>
                 )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={cn(
                        "text-xs font-medium px-3 py-1 rounded-full",
                        tag.color
                      )}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      <link.icon className="w-5 h-5" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
