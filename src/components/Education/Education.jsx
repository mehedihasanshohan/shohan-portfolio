import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaSchool,
  FaUniversity,
  FaLaptopCode,
  FaCode,
  FaGraduationCap,
  FaCheckCircle,
  FaTerminal,
} from "react-icons/fa";

const educationData = [
  {
    id: 1,
    title: "SSC",
    institute: "Goalanda Naziruddin Govt. High School",
    result: "GPA 5.00",
    year: "2019-2021",
    icon: <FaSchool />,
    category: "academic",
    desc: "Studied core science subjects and built a strong academic foundation for future engineering studies.",
  },
  {
    id: 2,
    title: "HSC",
    institute: "Goalanda Kamrul Islam Govt. College",
    result: "GPA 4.25",
    year: "2015-2017",
    icon: <FaGraduationCap />,
    category: "academic",
    desc: "Focused on advanced level Physics, Chemistry, Mathematics, and Information & Communication Technology (ICT).",
  },
  {
    id: 3,
    title: "BSc in Physics",
    institute: "Govt. Rajendra College",
    result: "Dropuot",
    year: "2017-2019",
    icon: <FaUniversity />,
    category: "academic",
    desc: "Currently pursuing a degree in Physics, which helps me sharpen my analytical thinking and complex problem-solving skills.",
  },
  {
    id: 4,
    title: "Complete Web Development",
    institute: "Programming Hero",
    year: "2025",
    icon: <FaLaptopCode />,
    category: "tech",
    points: [
      "Full-stack development with MERN (MongoDB, Express, React, Node.js)",
      "Authentication using Firebase and JWT (JSON Web Tokens)",
      "State management and API integration using Axios and TanStack Query",
      "Building responsive and modern UIs with Tailwind CSS and DaisyUI",
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "Next.js"],
    desc: "An intensive bootcamp focusing on professional web development standards and real-world project building.",
  },
  {
    id: 5,
    title: "Reactive Accelerator",
    institute: "Learn With Sumit",
    year: "2024",
    icon: <FaCode />,
    category: "tech",
    points: [
      "Advanced React patterns, Render Props, and Higher Order Components (HOC)",
      "Centralized state management with Redux Toolkit and RTK Query",
      "Deep dive into React Hooks, Performance Optimization, and Memoization",
      "Clean architecture and building scalable enterprise-level applications",
    ],
    skills: ["Redux", "Hooks", "Patterns", "Optimization"],
    desc: "A specialized course designed to master React ecosystem and advanced frontend architecture.",
  },
];

export default function Education() {
  const [filter, setFilter] = useState("academic");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [filter]);

  const filteredData = educationData.filter((item) => item.category === filter);

  return (
    <section className="py-20 bg-[#0f172a] text-white px-6">
      {/* Mouse Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-20"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.2), transparent 80%)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl mb-4">Path of Knowledge</h2>

          <div
            className="inline-flex bg-slate-900/80 p-1.5
           rounded-2xl border border-slate-700
            backdrop-blur-md shadow-2xl"
          >
            {["academic", "tech"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-12 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-500 ${
                  filter === tab
                    ? "bg-cyan-400 text-white "
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <div
          className={`grid gap-10 transition-all duration-700
          ${
            filter === "academic"
              ? "grid-cols-1 md:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
          }`}
        >
          {filteredData.map((edu) => (
            <div
              key={edu.id}
              data-aos="zoom-in-up"
              //  data-aos={animationData}
              className="relative p-8 rounded-3xl bg-white/2
              backdrop-blur-lg border border-white/20
              shadow-lg hover:shadow-xl transition-shadow
              duration-300 z-10"
            >
              {/* <div
                className="relative p-8 rounded-3xl
              backdrop-blur-lg border border-white/20
              shadow-lg hover:shadow-xl transition-shadow
              duration-300 z-10"
              > */}

              {/* Decorative Background Element */}
              <div
                className="absolute -right-8
                 -top-8 w-24 h-24 bg-rose-600/60
                rounded-full blur-3xl group-hover:bg-indigo-600/20 transition-all"
              ></div>

              <div className="flex justify-between items-center mb-8">
                <div
                  className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center
                   justify-center text-4xl text-indigo-400 group-hover:scale-110
                    transition-all duration-500"
                >
                  {edu.icon}
                </div>
                <div className="flex flex-col items-end">
                  <span
                    className="text-[10px] font-black py-1 px-4
                     bg-indigo-500/10 rounded-full text-indigo-400 ring-1
                      ring-indigo-500/30 mb-2 uppercase tracking-widest"
                  >
                    {edu.year}
                  </span>
                  {edu.result && (
                    <span className="text-xs text-slate-500 font-mono">
                      {edu.result}
                    </span>
                  )}
                </div>
              </div>

              <h3
                className="text-xl font-bold mb-2 group-hover:text-cyan-400
                transition-colors uppercase"
              >
                {edu.title}
              </h3>
              <p className="text-slate-500 text-sm mb-6 font-medium tracking-wide">
                {edu.institute}
              </p>

              {/* Points for Tech Section */}
              {edu.points ? (
                <ul className="space-y-3 mb-6">
                  {edu.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-400 leading-snug"
                    >
                      <FaTerminal className="mt-1 text-xs text-indigo-500 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className="text-slate-400 text-sm leading-relaxed
                   mb-6 italic border-l-2 border-indigo-500/20 pl-4"
                >
                  {edu.desc}
                </p>
              )}

              {/* Skills Badges */}
              <div className="mt-auto pt-6 border-t border-slate-800/50">
                {edu.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] uppercase tracking-wider text-blue-300
                           bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div
                  className="flex items-center gap-2
                   text-[10px] font-black tracking-[0.2em]
                    uppercase text-slate-500
                     group-hover:text-indigo-400 transition-colors"
                >
                  <FaCheckCircle
                    className={
                      edu.result === "Dropout"
                        ? "text-yellow-500 animate-pulse"
                        : "text-indigo-500"
                    }
                  />
                  <span>
                    {edu.result === "Dropout" ? "Dropout" : "Certified"}
                  </span>
                </div>
              </div>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}
