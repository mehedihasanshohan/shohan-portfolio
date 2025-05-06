import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
  { icon: <FaJs className="text-yellow-300" />, label: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, label: "React" },
  { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
  { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
  { icon: <SiMongodb className="text-green-400" />, label: "MongoDB" },
];

export default function SkillGalaxy() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex items-center justify-center">

      {/* Starry Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(120)].map((_, i) => {
          const size = Math.random() * 2 + 1.5;
          return (
            <div
              key={i}
              className="absolute rounded-full animate-star blur-sm"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: "white",
                opacity: 0.4,
                animationDuration: `${4 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>

      {/* Central Sun */}
      <div className="z-10 w-28 h-28 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl border-4 border-white border-opacity-20">
        <span className="text-black font-bold text-lg">WEB</span>
      </div>

      {/* Orbits + Planets */}
      {skills.map((skill, i) => {
        const orbitWidth = 160 + i * 70; // wider spacing
        const orbitHeight = 140 + i * 70;
        const rotationDuration = 20 + i * 4;
        const delay = i * 2.5;

        return (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${orbitWidth}px`,
              height: `${orbitHeight}px`,
              animation: `rotateOrbit ${rotationDuration}s linear infinite`,
              animationDelay: `-${delay}s`,
            }}
          >
            {/* Orbit Ring */}
            <div
              className="absolute border border-dashed border-white border-opacity-10 rounded-full"
              style={{
                width: `${orbitWidth}px`,
                height: `${orbitHeight}px`,
                borderWidth: "0.3px",
              }}
            ></div>

            {/* Planet */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ top: 0 }}
            >
              <div className="flex flex-col items-center text-white space-y-1">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30 shadow-md">
                  {skill.icon}
                </div>
                <span className="text-xs">{skill.label}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
