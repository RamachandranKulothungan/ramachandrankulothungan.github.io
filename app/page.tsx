import Image from "next/image";
import Link from "next/link";
import { Skills3D } from "@/components/home/Skills3D";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
        {/* Left: Intro */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white leading-tight">
            Hey, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Ramachandran
            </span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Upcoming Software Engineer at Nokia. Specialized in Backend Systems and
            Agentic AI Development, with a strong foundation in DevOps and Test
            Automation. Recently graduated with a Master's in Computer Science
            from University at Buffalo (AI/ML track).
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:translate-y-[-2px] transition-all font-semibold"
            >
              View My Work
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl hover:border-gray-900 dark:hover:border-white transition-colors font-semibold"
            >
              View Resume
            </Link>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10 transform rotate-6 scale-95"></div>
          <Image
            src="/me.png"
            alt="Ramachandran Kulothungan"
            width={384}
            height={384}
            className="rounded-[2.5rem] w-80 h-80 md:w-96 md:h-96 shadow-2xl object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8 dark:text-white flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
          Work Experience
        </h2>
        <div className="space-y-8">
          {/* Recent Role */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div>
                <h3 className="font-bold text-xl dark:text-white">
                  Software Dev Cloud Intern
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  Nokia Bell Labs
                </p>
              </div>
            </div>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed list-disc list-outside ml-4">
              <li>
                Built cloud-native lifecycle automation for Nokia CMM across
                Kubernetes environments (NCS, OpenShift) using NCOM, enabling
                reliable deployment, scaling, and upgrade workflows.
              </li>
              <li>
                Developed an extensible Python library exposing 30+ standardized
                API and logging abstractions, enabling programmatic integration
                across automation and orchestration workflows using Jenkins.
              </li>
              <li>
                Automated CMM re-installation workflows for T-Mobile (TMO) using
                Python and NCOM+ tooling, to reduce manual re-installation time
                from ~9 hours.
              </li>
            </ul>
          </div>

          {/* Previous Role */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow opacity-90 hover:opacity-100">
            <div className="mb-4">
              <h3 className="font-bold text-xl dark:text-white">
                Software Engineer
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                Dassault Systèmes
              </p>
            </div>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed list-disc list-outside ml-4">
              <li>
                Built a scalable Python-based internal automation framework
                adopted by 40+ teams to orchestrate UI and API-driven workflows
                and CI/CD execution using goCD and Github Actions, significantly
                reducing manual operational effort.
              </li>
              <li>
                Led a platform decentralization initiative by modularizing
                shared libraries, defining versioned packaging patterns, and
                automating artifact publishing to Artifactory using GitHub
                Actions, enabling team-owned repositories and independent
                releases.
              </li>
              <li>
                Worked on cloud infrastructure migration and optimization on
                AWS, designing reusable Terraform modules and rightsizing EC2
                resources to achieve ~60% cost reduction and faster environment
                provisioning.
              </li>
              <li>
                Engineered and deployed an internal developer productivity tool
                to index and search library keywords across 10+ repositories,
                improving discoverability and onboarding efficiency.
              </li>
              <li>
                Implemented centralized observability and analytics using
                structured logging and Sumo Logic dashboards to provide
                real-time visibility into test pipeline health for 30+ teams.
              </li>
              <li>
                Led data validation for a production AWS DMS migration (MySQL →
                PostgreSQL) by building automated Ruby/SQL integrity checks,
                ensuring data correctness and reducing manual validation effort
                by ~90%.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 dark:text-white flex items-center gap-3">
          <span className="w-2 h-8 bg-purple-500 rounded-full inline-block"></span>
          Core Skills
        </h2>
        
        <Skills3D />
      </div>
    </div>
  );
}
