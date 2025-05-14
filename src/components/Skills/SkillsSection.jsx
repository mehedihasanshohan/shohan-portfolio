/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiMongodb,
//   SiExpress,
//   SiNextdotjs,
// } from "react-icons/si";

// const frontendSkills = [
//   { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
//   { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
//   { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
//   { name: "React", icon: FaReact, color: "text-cyan-400" },
//   { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
//   { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
// ];

// const backendSkills = [
//   { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
//   { name: "Express", icon: SiExpress, color: "text-gray-300" },
//   { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
//   { name: "SQL", icon: FaDatabase, color: "text-blue-400" },
// ];

// const SkillCard = ({ title, skills, titleColor }) => (
//   <div className="relative p-8 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10">
//     <h2 className={`text-center text-2xl font-bold ${titleColor} mb-6 uppercase tracking-wide relative z-10`}>
//       {title}
//     </h2>
//     <ul className="grid grid-cols-2 gap-6 relative z-10">
//       {skills.map(({ name, icon: Icon, color }) => (
//         <li key={name} className="flex items-center gap-4 text-white">
//           <Icon className={`text-3xl ${color}`} />
//           <span className="text-lg font-medium">{name}</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const SkillsSection = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-b from-[#1e293b] to-[#111827] px-4 py-16 flex items-center justify-center relative overflow-hidden">
//       {/* Swimming tech icons in the background */}
//       <div className="absolute inset-0 z-0 flex items-center justify-center space-x-16 opacity-30"
//         data-aos="fade-right"
//         data-aos-duration="1500">
//         {frontendSkills.map(({ icon: Icon, color }, index) => (
//           <Icon
//             key={index}
//             className={`text-4xl ${color} animate-swim${(index % 4) + 1} absolute`}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDuration: `${Math.random() * 15 + 10}s`,
//             }}
//           />
//         ))}
//         {backendSkills.map(({ icon: Icon, color }, index) => (
//           <Icon
//             key={index}
//             className={`text-4xl ${color} animate-swim${(index % 4) + 1} absolute`}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDuration: `${Math.random() * 15 + 10}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full z-10 relative"
//       data-aos="fade-left"
//       data-aos-duration="1500">
//         <div className="text-center text-3xl font-bold text-white mb-8 col-span-2">
//           <h1>My Skills</h1>
//         </div>
//         <SkillCard title="Frontend" skills={frontendSkills} titleColor="text-indigo-300" />
//         <SkillCard title="Backend" skills={backendSkills} titleColor="text-green-300" />
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;




// import Aos from "aos";
// import { useEffect } from "react";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiMongodb,
//   SiExpress,
//   SiNextdotjs,
// } from "react-icons/si";

// // Skill Data
// const frontendSkills = [
//   { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
//   { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
//   { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
//   { name: "React", icon: FaReact, color: "text-cyan-400" },
//   { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
//   { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
// ];

// const backendSkills = [
//   { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
//   { name: "Express", icon: SiExpress, color: "text-gray-300" },
//   { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
//   { name: "SQL", icon: FaDatabase, color: "text-blue-400" },
// ];

// const SkillCard = ({ title, skills, titleColor, animationData }) => (
//   <div
//     data-aos={animationData}
//     className="relative p-8 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
//   >
//     <h2 className={`text-center text-2xl font-bold ${titleColor} mb-6 uppercase tracking-wide relative z-10`}>
//       {title}
//     </h2>
//     <ul className="grid grid-cols-2 gap-6 relative z-10">
//       {skills.map(({ name, icon: Icon, color }) => (
//         <li key={name} className="flex items-center gap-4 text-white">
//           <Icon className={`text-3xl ${color}`} />
//           <span className="text-lg font-medium">{name}</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const SkillsSection = () => {
//   // Initialize AOS
//   useEffect(() => {
//     Aos.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true, // Only trigger the animation once
//     });
//   }, []);

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-[#1e293b] to-[#111827] px-4 py-16 flex items-center justify-center relative overflow-hidden">
//       {/* Swimming tech icons in the background */}
//       <div className="absolute inset-0 z-0 flex items-center justify-center space-x-16 opacity-30">
//         {frontendSkills.map(({ icon: Icon, color }, index) => (
//           <Icon
//             key={index}
//             className={`text-4xl ${color} animate-swim${(index % 4) + 1} absolute`}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDuration: `${Math.random() * 15 + 10}s`,
//             }}
//           />
//         ))}
//         {backendSkills.map(({ icon: Icon, color }, index) => (
//           <Icon
//             key={index}
//             className={`text-4xl ${color} animate-swim${(index % 4) + 1} absolute`}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDuration: `${Math.random() * 15 + 10}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full z-10 relative">
//         <div className="text-center text-3xl font-bold text-white mb-8 col-span-2">
//           <h1>My Skills</h1>
//         </div>
//         <SkillCard
//           title="Frontend"
//           skills={frontendSkills}
//           titleColor="text-indigo-300"
//           animationData="fade-left"
//         />
//         <SkillCard
//           title="Backend"
//           skills={backendSkills}
//           titleColor="text-green-300"
//           animationData="fade-right"
//         />
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;











// 4cards skills section

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
} from "react-icons/si";
import {
  FaGitAlt,
  FaNpm,
  FaFigma,
  FaChrome,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaComments
} from "react-icons/fa";
import {
  SiPostman,
  SiVite,
  SiGoogledocs
} from "react-icons/si";

// Skill Data
const frontendSkills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
    topics: ["Semantic Tags", "Forms", "SEO", "Canvas", "Accessibility"],
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500",
    topics: ["Flexbox", "Grid", "Animations", "Media Queries"],
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-400",
    topics: ["ES6+", "DOM", "Fetch API", "Promises", "Async/Await"],
  },
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
    topics: ["Hooks", "Context API", "Routing", "Redux", "Optimization"],
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-sky-400",
    topics: ["Utility-First", "Custom Theme", "Responsive", "Plugins"],
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
    topics: ["SSR", "Routing", "API Routes", "App Dir", "SEO"],
  },
];

// backend skills data
const backendSkills = [
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-400",
    topics: ["FS", "http", "Express", "JWT", "dotenv"],
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "text-gray-300",
    topics: ["Middlewares", "Routing", "Validation", "REST API"],
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
    topics: ["CRUD", "Schema", "Aggregation", "Indexes"],
  },
  {
    name: "SQL",
    icon: FaDatabase,
    color: "text-blue-400",
    topics: ["Joins", "Normalization", "Queries", "Stored Procedures"],
  },
];

// tools data
const toolSkills = [
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
    topics: ["Version Control", "Branching", "Merging", "Rebasing"],
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-300",
    topics: ["API Testing", "Collections", "Environment Variables"],
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "text-purple-400",
    topics: ["Lightning Fast Build", "ES Modules", "Hot Module Reloading"],
  },
  {
    name: "NPM",
    icon: FaNpm,
    color: "text-red-500",
    topics: ["Package Management", "Scripts", "Dependencies"],
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "text-pink-400",
    topics: ["UI Design", "Prototyping", "Design Systems"],
  },
  {
    name: "Chrome DevTools",
    icon: FaChrome,
    color: "text-blue-300",
    topics: ["Inspect", "Console", "Network", "Performance"],
  },
];

// softskills
const softSkills = [
  {
    name: "Teamwork",
    icon: FaUsers,
    color: "text-purple-400",
    topics: ["Collaboration", "Responsibility", "Empathy"],
  },
  {
    name: "Problem Solving",
    icon: FaLightbulb,
    color: "text-yellow-400",
    topics: ["Debugging", "Creative Thinking", "Root Cause Analysis"],
  },
  {
    name: "Time Management",
    icon: FaClock,
    color: "text-green-400",
    topics: ["Prioritization", "Task Planning", "Deadlines"],
  },
  {
    name: "Communication",
    icon: FaComments,
    color: "text-cyan-300",
    topics: ["Verbal", "Written", "Team Updates"],
  },
  {
    name: "Documentation",
    icon: SiGoogledocs,
    color: "text-blue-400",
    topics: ["Code Comments", "Project Docs", "README Writing"],
  },
];


const SkillCard = ({ title, skills, titleColor, animationData, onClickIcon }) => (
  <div
    data-aos={animationData}
    className="relative p-8 rounded-3xl bg-white/20
              backdrop-blur-lg border border-white/20
              shadow-lg hover:shadow-xl transition-shadow
              duration-300 z-10"
  >
    <h2 className={`text-center text-2xl font-bold ${titleColor} mb-6 uppercase tracking-wide relative z-10`}>
      {title}
    </h2>
    <ul className="grid grid-cols-2 gap-6 relative z-10">

      {/* section start */}
      {skills.map(({ name, icon: Icon, color, topics }) => (
        <li
           key={name}
           className="group flex items-center gap-4 text-white
                      cursor-pointerhover:text-cyan-300"
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
    <section className="min-h-screen bg-gradient-to-b from-[#1e293b] to-[#111827] px-4 py-16 flex items-center justify-center relative overflow-hidden">
      {/* Background floating icons */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
      {[...Array(2)].flatMap(() => [...frontendSkills, ...backendSkills]).map(({ icon: Icon, color }, index) => (
    <Icon
      key={index}
      className={`text-4xl ${color} absolute ${
        ["animate-swim1", "animate-swim2", "animate-swim3", "animate-swim4"][index % 4]
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
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 max-w-md w-full text-white relative shadow-xl backdrop-blur-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-white text-xl font-bold"
            >
              ×
            </button>
            <div className="flex items-center gap-3 mb-4">
              <selectedSkill.Icon className={`text-3xl ${selectedSkill.color}`} />
              <h2 className="text-2xl font-bold">{selectedSkill.name}</h2>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-cyan-400"> What I've Learned in {selectedSkill.name}</h3>
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
// 4 acrds section final












