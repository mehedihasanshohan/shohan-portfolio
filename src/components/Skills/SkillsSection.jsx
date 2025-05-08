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




import Aos from "aos";
import { useEffect } from "react";
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

// Skill Data
const frontendSkills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
];

const backendSkills = [
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "SQL", icon: FaDatabase, color: "text-blue-400" },
];

const SkillCard = ({ title, skills, titleColor, animationData }) => (
  <div
    data-aos={animationData}
    className="relative p-8 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
  >
    <h2 className={`text-center text-2xl font-bold ${titleColor} mb-6 uppercase tracking-wide relative z-10`}>
      {title}
    </h2>
    <ul className="grid grid-cols-2 gap-6 relative z-10">
      {skills.map(({ name, icon: Icon, color }) => (
        <li key={name} className="flex items-center gap-4 text-white">
          <Icon className={`text-3xl ${color}`} />
          <span className="text-lg font-medium">{name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Only trigger the animation once
    });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1e293b] to-[#111827] px-4 py-16 flex items-center justify-center relative overflow-hidden">
      {/* Swimming tech icons in the background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center space-x-16 opacity-30">
        {frontendSkills.map(({ icon: Icon, color }, index) => (
          <Icon
            key={index}
            className={`text-4xl ${color} animate-swim${(index % 4) + 1} absolute`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          />
        ))}
        {backendSkills.map(({ icon: Icon, color }, index) => (
          <Icon
            key={index}
            className={`text-4xl ${color} animate-swim${(index % 4) + 1} absolute`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full z-10 relative">
        <div className="text-center text-3xl font-bold text-white mb-8 col-span-2">
          <h1>My Skills</h1>
        </div>
        <SkillCard
          title="Frontend"
          skills={frontendSkills}
          titleColor="text-indigo-300"
          animationData="fade-left"
        />
        <SkillCard
          title="Backend"
          skills={backendSkills}
          titleColor="text-green-300"
          animationData="fade-right"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
