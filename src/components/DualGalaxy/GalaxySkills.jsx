import { useState } from "react";

const frontendSkills = [
  { name: "HTML", emoji: "🌐" },
  { name: "CSS", emoji: "🎨" },
  { name: "JavaScript", emoji: "📜" },
  { name: "React", emoji: "⚛️" },
  { name: "Tailwind", emoji: "💨" },
];

const backendSkills = [
  { name: "Node.js", emoji: "🌳" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "Express", emoji: "🚂" },
  { name: "SQL", emoji: "🗃️" },
  { name: "Firebase", emoji: "🔥" },
];

export default function GalaxySkills() {
  const [isFrontend, setIsFrontend] = useState(true);
  const skills = isFrontend ? frontendSkills : backendSkills;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none starry-bg" />

      {/* Toggle Button */}
      <div className="absolute z-20 top-5 left-5">
        <button
          onClick={() => setIsFrontend(!isFrontend)}
          className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-gray-300"
        >
          {isFrontend ? "Show Backend" : "Show Frontend"}
        </button>
      </div>

      {/* Sun */}
      <div className="absolute z-10 top-1/2 left-1/2 w-28 h-28 bg-yellow-400 rounded-full shadow-[0_0_60px_rgba(255,255,0,0.8)] flex items-center justify-center font-bold text-black text-sm transform -translate-x-1/2 -translate-y-1/2">
        {isFrontend ? "Frontend" : "Backend"}
      </div>

      {/* Planets with orbits */}
      {skills.map((skill, index) => {
        const orbitRadius = 100 + index * 70;
        const rotationTime = 12 + index * 4;

        return (
          <div
            key={skill.name}
            className="absolute top-1/2 left-1/2"
            style={{
              width: `${orbitRadius * 2}px`,
              height: `${orbitRadius * 2}px`,
              marginLeft: `-${orbitRadius}px`,
              marginTop: `-${orbitRadius}px`,
              animation: `spin ${rotationTime}s linear infinite`,
            }}
          >
            {/* Orbit Ring */}
            <div
              className="absolute w-full h-full border border-white/10 rounded-full"
              style={{
                boxShadow: "0 0 4px 1px rgba(255,255,255,0.05)",
              }}
            ></div>

            {/* Planet */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center text-sm animate-pulse">
                <div className="text-3xl">{skill.emoji}</div>
                <span className="text-xs mt-1">{skill.name}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
