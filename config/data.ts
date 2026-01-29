
export const data = {
    personal: {
        name: "Ramachandran Kulothungan",
        tagline: "Software Engineer | Backend Systems & AI",
        description: "Upcoming Software Engineer at Nokia. Specialized in Backend Systems and Agentic AI Development, with a strong foundation in DevOps and Test Automation. Recently graduated with a Master's in Computer Science from University at Buffalo (AI/ML track).",
        email: "ramachandran.kulothungan@gmail.com",
        linkedin: "https://www.linkedin.com/in/ramachandran-kulothungan",
        github: "https://github.com/RamachandranKulothungan",
        location: "Buffalo, NY",
        resume: "/resume.pdf"
    },
    experience: [
        {
            role: "Software Dev Cloud Intern",
            company: "Nokia Bell Labs",
            location: "Chicago",
            duration: "June 2025 – December 2025",
            description: [
                "Built cloud-native lifecycle automation for Nokia CMM across Kubernetes environments (NCS, OpenShift) using NCOM, enabling reliable deployment, scaling, and upgrade workflows.",
                "Developed an extensible Python library exposing 30+ standardized API and logging abstractions, enabling programmatic integration across automation and orchestration workflows using Jenkins.",
                "Automated CMM re-installation workflows for T-Mobile (TMO) using Python and NCOM+ tooling, to reduce manual re-installation time from ~9 hours."
            ]
        },
        {
            role: "Software Development Engineer",
            company: "Dassault Systèmes",
            location: "",
            duration: "August 2020 – August 2024",
            description: [
                "Built a scalable Python-based internal automation framework adopted by 40+ teams to orchestrate UI and API-driven workflows and CI/CD execution using goCD and Github Actions, significantly reducing manual operational effort.",
                "Led a platform decentralization initiative by modularizing shared libraries, defining versioned packaging patterns, and automating artifact publishing to Artifactory using GitHub Actions, enabling team-owned repositories and independent releases.",
                "Worked on cloud infrastructure migration and optimization on AWS, designing reusable Terraform modules and rightsizing EC2 resources to achieve ~60% cost reduction and faster environment provisioning.",
                "Engineered and deployed an internal developer productivity tool (Django, AWS, Kubernetes) to index and search library keywords across 10+ repositories, improving discoverability and onboarding efficiency.",
                "Implemented centralized observability and analytics using structured logging and Sumo Logic dashboards to provide real-time visibility into test pipeline health for 30+ teams.",
                "Led data validation for a production AWS DMS migration (MySQL → PostgreSQL) by building automated Ruby/SQL integrity checks, ensuring data correctness and reducing manual validation effort by ~90%.",
                "Recognized with 2 company awards for engineering contributions that reduced system execution time by ~50% and improved reliability and scalability across organization-wide platforms."
            ]
        }
    ],
    education: [
        {
            university: "University at Buffalo",
            degree: "Master of Science in Computer Science",
            location: "Buffalo, NY, USA",
            duration: "August 2024 - December 2025",
            coursework: "Algorithms, Computer Security, Computer Vision, Deep Learning, Operating Systems"
        },
        {
            university: "Malaviya National Institute of Technology",
            degree: "Bachelor of Technology",
            location: "Jaipur, India",
            duration: "July 2016 - June 2020",
            coursework: ""
        }
    ],
    projects: [
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
                { name: "GitHub", url: "https://github.com/rudraksh97/AutoApply", icon: "Github" },
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
                { name: "GitHub", url: "https://github.com/RamachandranKulothungan/AI_Trip_Planner", icon: "Github" },
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
                { name: "GitHub", url: "https://github.com/RamachandranKulothungan/EmailWhizV3", icon: "Github" },
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
                { name: "GitHub", url: "https://github.com/RamachandranKulothungan/lighthouse", icon: "Github" },
                { name: "Demo", url: "https://devpost.com/software/beacon-1j8itz?ref_content=my-projects-tab&ref_feature=my_projects", icon: "ExternalLink" },
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
                { name: "GitHub", url: "https://github.com/AnsariSaad83299/Anime-Recommendation", icon: "Github" },
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
                { name: "GitHub", url: "https://huggingface.co/spaces/ramachandrankulothungan/digit_doodle_recognition/tree/main", icon: "Github" },
                { name: "Try it out", url: "https://huggingface.co/spaces/ramachandrankulothungan/digit_doodle_recognition", icon: "ExternalLink" },
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
                { name: "GitHub", url: "https://github.com/RamachandranKulothungan/viewsort", icon: "Github" },
                { name: "Try it out", url: "https://ramachandrankulothungan.github.io/viewsort/", icon: "ExternalLink" },
            ],
        },
    ],
    now: {
        lastUpdated: "January 2026",
        tabs: [
            {
                id: "work",
                label: "Work",
                icon: "Briefcase",
                color: "text-blue-500",
                title: "Work",
                currently: [
                    "Learning C++ for microservices development and networking technologies",
                    "Exploring agentic systems with langgraph"
                ],
                completed: [
                    "Applying for full time roles in software development",
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
                    "Applying for SDE/SDET roles for summer internships"
                ]
            },
            {
                id: "fitness",
                label: "Fitness",
                icon: "Dumbbell",
                color: "text-green-500",
                title: "Fitness",
                currently: [
                    "Training to get a sub 20 5k",
                    "Getting better at freestyle football",
                    "Learning to swim"
                ],
                completed: [
                    "Regular workout routine and fitness activities"
                ]
            },
            {
                id: "anime",
                label: "Anime",
                icon: "Tv",
                color: "text-purple-500",
                title: "Anime",
                currently: [
                    "One Piece",
                    "Sakamoto Days",
                    "Urek Mazino",
                    "Hajime no Ippo",
                    "Chainsaw Man",
                    "Kagurabachi"
                ],
                completed: [
                    "Ao Ashi",
                    "Haikyuu",
                    "Run with the Wind",
                    "Giant Killing",
                    "Bleach",
                    "Naruto",
                    "One Punch Man",
                    "Attack on Titan",
                    "100 Meters",
                ]
            }
        ]
    }
} as const;
