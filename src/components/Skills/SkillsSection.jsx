/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiVercel,
} from "react-icons/si";
import {
  FaGitAlt,
  FaNpm,
  FaFigma,
  FaChrome,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaComments,
} from "react-icons/fa";
import { SiPostman, SiVite, SiGoogledocs } from "react-icons/si";

// frontend Skill Data
const frontendSkills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
    topics: [
      "Semantic Tags",
      "Forms",
      "SEO & Meta Tags",
      "Canvas",
      "Accessibility",
      "Forms & Validation",
      "Web Storage",
    ],
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500",
    topics: [
      "Flexbox & Grid",
      "Animations & KeyFrame",
      "Responsive Designs(RWD)",
    ],
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-sky-400",
    topics: [
      "Utility-First Architecture",
      "Custom Themes & Config",
      "Responsive Design",
      "Dark Mode",
      "Animations",
    ],
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-400",
    topics: [
      "ES6+ Features",
      "Asynchronous Programming",
      "DOM Manipulation",
      "Fetch API",
      "Promises",
      "Async/Await",
      "Closure & Scoping",
    ],
  },
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
    topics: [
      "Hooks(State, Effect, Ref)",
      "Custom Hooks",
      "Context API",
      "Performance Optimization",
      "React Router & Auth",
    ],
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
    topics: [
      "SSR",
      "Routing",
      "API Routes",
      "App Dir",
      "SEO",
      "Server Actions",
      "Middleware",
      "Incremental Static Regeneration",
    ],
  },
];

// backend skills data
const backendSkills = [
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-400",
    topics: [
      "Event Architecture",
      "RESTful API Design",
      "JWT Authentication",
      "NPM & Package Mgmt",
      "Environment Config",
    ],
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "text-gray-300",
    topics: [
      "MVC Architecture",
      "Custom Middlewares",
      "Error Handling",
      "Security (Helmet/CORS)",
      "Route Optimization",
    ],
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
    topics: [
      "Schema Design & Mongoose",
      "Aggregation Pipeline",
      "Indexing & Performance",
      "Relational Modeling",
      "CRUD Operations",
    ],
  },
];

// tools data
const toolSkills = [
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    color: "text-orange-500",
    topics: [
      "Branching Strategy",
      "Pull Requests",
      "Merge Conflicts",
      "GitHub Actions",
    ],
  },
   {
    name: "Deployment",
    icon: SiVercel,
    color: "text-white",
    topics: ["Vercel", "Netlify", "Firebase"],
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-300",
    topics: ["API Testing", "Collections", "Environment Variables"],
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "text-pink-400",
    topics: ["UI/UX Design", "Prototyping", "Design Systems"],
  },
  {
    name: "Chrome DevTools",
    icon: FaChrome,
    color: "text-blue-300",
    topics: ["Performance Audit", "Network Debugging", "Lighthouse", "Memory Profiling"],
  },
  {
    name: "Vite & NPM",
    icon: SiVite,
    color: "text-purple-400",
    topics: ["Fast HMR", "Package Management", "Build Optimization", "Scripts"],
  }
];

// softskills
const softSkills = [
  {
    name: "Collaborative Work",
    icon: FaUsers,
    color: "text-purple-400",
    topics: ["Agile/Scrum", "Code Reviews", "Cross-team Sync"],
  },
  {
    name: "Problem Solving",
    icon: FaLightbulb,
    color: "text-yellow-400",
    topics: ["Critical Thinking", "Troubleshooting", "Efficiency Analysis"],
  },
  {
    name: "Time Management",
    icon: FaClock,
    color: "text-green-400",
    topics: ["Priority Management", "Sprint Planning", "Timely Delivery"],
  },
  {
    name: "Documentation",
    icon: SiGoogledocs,
    color: "text-blue-400",
    topics: ["Technical Writing", "README Best Practices", "Clean Code Docs"],
  },
  {
    name: "Adaptability",
    icon: FaComments,
    color: "text-cyan-300",
    topics: ["Quick Learning", "Open to Feedback", "Tool Versatility"],
  },
];

const SkillCard = ({
  title,
  skills,
  titleColor,
  animationData,
  onClickIcon,
}) => (
  <div
    data-aos={animationData}
    className="relative p-5 rounded-2xl md:p-8 bg-white/2
              backdrop-blur-lg border border-white/20
              shadow-lg hover:shadow-xl transition-shadow
              duration-300 z-10"
  >
    <h2
      className={`text-center text-2xl font-bold ${titleColor} mb-6 uppercase tracking-wide relative z-10`}
    >
      {title}
    </h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6
     relative z-10">
      {/* section start */}
      {skills.map(({ name, icon: Icon, color, topics }) => (
        <li
          key={name}
          className="group flex items-center gap-4 text-white
                      cursor-pointer hover:text-cyan-300"
          onClick={() => onClickIcon({ name, Icon, color, topics })}
        >
          <Icon className={`text-3xl ${color}`} />
          <div className="flex flex-col">
            <span className="text-lg font-medium">{name}</span>
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cyan-200">
              Click for more details
            </span>
          </div>
        </li>
      ))}
      {/* section ends */}
    </ul>
  </div>
);

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const closeModal = () => setSelectedSkill(null);

  return (
    <section className="min-h-screen  bg-[#0f172a] px-4 py-16 flex items-center justify-center relative overflow-hidden">
      {/* Background floating icons */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {[...Array(4)]
          .flatMap(() => [...frontendSkills, ...backendSkills])
          .map(({ icon: Icon, color }, index) => (
            <Icon
              key={index}
              className={`text-4xl ${color} absolute ${
                [
                  "animate-swim1",
                  "animate-swim2",
                  "animate-swim3",
                  "animate-swim4",
                ][index % 4]
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
      </div>

      {/* Main content */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full z-10 relative">
        <div className="text-center text-3xl font-bold text-white mb-8 col-span-2">
          <h1>My Skills</h1>
        </div>

        {/* frontend cards */}
        <SkillCard
          title="Frontend"
          skills={frontendSkills}
          titleColor="text-indigo-300"
          animationData="fade-left"
          onClickIcon={setSelectedSkill}
        />

        {/* backend cards */}
        <SkillCard
          title="Backend"
          skills={backendSkills}
          titleColor="text-green-300"
          animationData="fade-right"
          onClickIcon={setSelectedSkill}
        />

        {/* toools cards */}
        <SkillCard
          title="Tools"
          skills={toolSkills}
          titleColor="text-yellow-300"
          animationData="fade-up"
          onClickIcon={setSelectedSkill}
        />

        {/* softskills */}
        <SkillCard
          title="Soft Skills"
          skills={softSkills}
          titleColor="text-pink-300"
          animationData="fade-down"
          onClickIcon={setSelectedSkill}
        />
      </div>

      {/* Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white/10 border border-white/20
          rounded-2xl p-6 max-w-md w-full text-white relative shadow-xl backdrop-blur-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-white text-xl font-bold"
            >
              ×
            </button>
            <div className="flex items-center gap-3 mb-4">
              <selectedSkill.Icon
                className={`text-3xl ${selectedSkill.color}`}
              />
              <h2 className="text-2xl font-bold">{selectedSkill.name}</h2>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-cyan-400">
              {" "}
              What I've Learned in {selectedSkill.name}
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {selectedSkill.topics?.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
