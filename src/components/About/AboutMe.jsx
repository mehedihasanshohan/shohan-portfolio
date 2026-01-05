/* eslint-disable no-useless-escape */
import { useState, useEffect } from "react";
import {
  FaBookOpen,
  FaUsers,
  FaTerminal,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";


const TerminalCode = () => {
  const [text, setText] = useState("");
  const fullText = `
// Initialize Developer Profile
const developer = {
  name: "Mehedi Hasan",
  role: "MERNStack Developer",
  projectsCompleted: "30+",
  fullStackProjects: 3,
  mission: "Build Scalable Systems",
};

if (developer.passion > developer.sleep) {
  developer.status = "Building something legendary...";
  console.log("Magic in progress");
}

// Current Mood: Always Learning.
export default developer;
  `;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-sm sm:text-base leading-relaxed">
      <pre className="whitespace-pre-wrap">
        {text
          .split(/(\/\/.*|\bconst\b|\bif\b|\bconsole\b|\".*?\"|'.*?')/g)
          .map((part, index) => {
            if (part.startsWith("//"))
              return (
                <span key={index} className="text-slate-500 italic">
                  {part}
                </span>
              );
            if (["const", "if"].includes(part))
              return (
                <span key={index} className="text-purple-400">
                  {part}
                </span>
              );
            if (part?.startsWith('"') || part?.startsWith("'"))
              return (
                <span key={index} className="text-emerald-400">
                  {part}
                </span>
              );
            if (part === "console")
              return (
                <span key={index} className="text-blue-400">
                  {part}
                </span>
              );
            return (
              <span key={index} className="text-slate-200">
                {part}
              </span>
            );
          })}
        <span className="inline-block w-2 h-5 bg-indigo-500 animate-pulse ml-1 align-middle" />
      </pre>
    </div>
  );
};

export default function AboutMe() {
  return (
    <section className="py-24 bg-[#0f172a] text-white px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: Polished Content */}
          <div className="lg:col-span-6 space-y-10" data-aos="fade-right">
            <div>
              <h2 className="text-4xl mb-4 font-bold">
                CRAFTING SCALABLE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">
                  SOLUTIONS
                </span>{" "}
                THROUGH CLEAN CODE
              </h2>
            </div>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                My programming journey started with curiosity and frustration in
                equal measure. I wrote my first lines of code trying to
                understand how things work behind the screen—and broke them more
                times than I can count. Over time, that trial-and-error mindset
                turned into a passion for problem-solving, debugging, and
                building real-world applications that people can actually use.
              </p>

              <p>
                What excites me most is working on systems where logic,
                performance, and user experience intersect. I enjoy transforming
                vague ideas into structured, scalable solutions—whether it’s
                optimizing APIs, designing clean component architectures, or
                improving application performance.
              </p>
            </div>

            {/* Hobby Section with better styling */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/2 border border-white/10 flex flex-col gap-3">
                <FaBookOpen className="text-indigo-400 text-xl" />
                <div>
                  <h4 className="font-medium text-sm">Deep Reading</h4>
                  <p className="text-xs text-slate-500">
                    Sharpening the mind outside the terminal.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/2 border border-white/10 flex flex-col gap-3">
                <FaUsers className="text-indigo-400 text-xl" />
                <div>
                  <h4 className="font-medium text-sm">Family Roots</h4>
                  <p className="text-xs text-slate-500">
                    Quality time is my fuel for creativity.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/2 border border-white/10 flex flex-col gap-3">
                <GiTeacher className="text-indigo-400 text-xl" />
                <div>
                  <h4 className="font-medium text-sm">Teaching</h4>
                  <p className="text-xs text-slate-500">
                    Sharing knowledge to lift others up.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: TERMINAL */}
          <div className="lg:col-span-6 lg:mt-6" data-aos="zoom-in">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-[2rem] blur opacity-15 group-hover:opacity-30 transition duration-1000"></div>

              <div className="relative bg-white/2 border border-white/10 rounded-[2rem] overflow-hidden shadow-xl">
                <div className="bg-white/5 border-b border-white/10 px-8 py-5 flex items-center justify-between">
                  <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-500">
                    <FaTerminal className="text-cyan-500" /> main.js — 16 lines
                  </div>
                </div>

                <div className="p-10 min-h-[400px] bg-gradient-to-br from-indigo-500/[0.02] to-transparent backdrop-blur-3xl">
                  <TerminalCode />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
