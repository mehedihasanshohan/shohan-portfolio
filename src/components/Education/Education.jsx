// import { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   FaSchool,
//   FaUniversity,
//   FaLaptopCode,
//   FaCode,
//   FaGraduationCap,
//   FaCheckCircle,
//   FaTerminal,
// } from "react-icons/fa";

// import certificate from "/ph_certificate_mh.pdf";

// const educationData = [
//   {
//     id: 1,
//     title: "SSC",
//     institute: "Goalanda Naziruddin Govt. High School",
//     result: "GPA 5.00",
//     year: "2015",
//     icon: <FaSchool />,
//     category: "academic",
//     desc: "Studied core science subjects and built a strong academic foundation for future engineering studies.",
//   },
//   {
//     id: 2,
//     title: "HSC",
//     institute: "Goalanda Kamrul Islam Govt. College",
//     result: "GPA 4.25",
//     year: "2017",
//     icon: <FaGraduationCap />,
//     category: "academic",
//     desc: "Focused on advanced level Physics, Chemistry, Mathematics, and Information & Communication Technology (ICT).",
//   },
//   {
//     id: 3,
//     title: "BSc in Physics",
//     institute: "Govt. Rajendra College",
//     result: "Dropout",
//     year: "2017-2020",
//     icon: <FaUniversity />,
//     category: "academic",
//     desc: "Currently pursuing a degree in Physics, which helps me sharpen my analytical thinking and complex problem-solving skills.",
//   },
//   {
//     id: 4,
//     title: "Complete Web Development",
//     institute: "Programming Hero",
//     year: "2025",
//     icon: <FaLaptopCode />,
//     category: "tech",
//     certificate: true,
//     points: [
//       "Full-stack development with MERN (MongoDB, Express, React, Node.js)",
//       "Authentication using Firebase and JWT (JSON Web Tokens)",
//       "State management and API integration using Axios and TanStack Query",
//       "Building responsive and modern UIs with Tailwind CSS and DaisyUI",
//     ],
//     skills: ["React", "Node.js", "MongoDB", "Express", "Next.js"],
//     desc: "An intensive bootcamp focusing on professional web development standards and real-world project building.",
//   },
//   {
//     id: 5,
//     title: "Reactive Accelerator",
//     institute: "Learn With Sumit",
//     year: "2024",
//     icon: <FaCode />,
//     category: "tech",
//     points: [
//       "Advanced React patterns, Render Props, and Higher Order Components (HOC)",
//       "Centralized state management with Redux Toolkit and RTK Query",
//       "Deep dive into React Hooks, Performance Optimization, and Memoization",
//       "Clean architecture and building scalable enterprise-level applications",
//     ],
//     skills: ["Hooks", "Patterns", "Optimization"],
//     desc: "A specialized course designed to master React ecosystem and advanced frontend architecture.",
//   },
// ];

// export default function Education() {
//   const [filter, setFilter] = useState("tech");
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isModalOpen, setIsModalOpen] = useState(false);
// const [selectedCert, setSelectedCert] = useState(null);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: false });
//     const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [filter]);

//   const filteredData = educationData.filter((item) => item.category === filter);

//   const handleDownloadPDF = (imgUrl, title) => {
//     const doc = new jsPDF("landscape", "px", "a4");
//     const img = new Image();
//     img.src = imgUrl;
//     img.crossOrigin = "Anonymous"; // CORS handle korar jonno

//     img.onload = () => {
//       const pageWidth = doc.internal.pageSize.getWidth();
//       const pageHeight = doc.internal.pageSize.getHeight();
//       doc.addImage(img, "JPEG", 0, 0, pageWidth, pageHeight);
//       doc.save(`${title}-Certificate.pdf`);
//     };
//   };

//   return (
//     <section className="py-20 bg-[#0f172a] text-white px-6">
//       {/* Mouse Glow */}
//       <div
//         className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-20"
//         style={{
//           background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.2), transparent 80%)`,
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16" data-aos="fade-down">
//           <h2 className="text-2xl mb-4">Path of Knowledge</h2>

//           <div
//             className="inline-flex bg-slate-900/80 p-1.5
//            rounded-2xl border border-slate-700
//             backdrop-blur-md shadow-2xl"
//           >
//             {["tech", "academic", ].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setFilter(tab)}
//                 className={`relative px-12 py-3 rounded-xl font-bold uppercase cursor-pointer tracking-widest text-xs transition-all duration-500 ${
//                   filter === tab
//                     ? "bg-cyan-400 text-white "
//                     : "text-slate-500 hover:text-slate-300"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Dynamic Grid */}
//         <div
//           className={`grid gap-10 transition-all duration-700
//           ${
//             filter === "academic"
//               ? "grid-cols-1 md:grid-cols-3"
//               : "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
//           }`}
//         >
//           {filteredData.map((edu) => (
//             <div
//               key={edu.id}
//               data-aos="zoom-in-up"
//               //  data-aos={animationData}
//               className="relative p-8 rounded-3xl bg-white/2
//               backdrop-blur-lg border border-white/20
//               shadow-lg hover:shadow-xl transition-shadow
//               duration-300 z-10"
//             >
//               {/* <div
//                 className="relative p-8 rounded-3xl
//               backdrop-blur-lg border border-white/20
//               shadow-lg hover:shadow-xl transition-shadow
//               duration-300 z-10"
//               > */}

//               {/* Decorative Background Element */}
//               <div
//                 className="absolute -right-8
//                  -top-8 w-24 h-24 bg-rose-600/60
//                 rounded-full blur-3xl group-hover:bg-indigo-600/20 transition-all"
//               ></div>

//               <div className="flex justify-between items-center mb-8">
//                 <div
//                   className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center
//                    justify-center text-4xl text-indigo-400 group-hover:scale-110
//                     transition-all duration-500"
//                 >
//                   {edu.icon}
//                 </div>
//                 <div className="flex flex-col items-end">
//                   <span
//                     className="text-[10px] font-black py-1 px-4
//                      bg-indigo-500/10 rounded-full text-indigo-400 ring-1
//                       ring-indigo-500/30 mb-2 uppercase tracking-widest"
//                   >
//                     {edu.year}
//                   </span>
//                   {edu.result && (
//                     <span className="text-xs text-slate-500 font-mono">
//                       {edu.result}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <h3
//                 className="text-xl font-bold mb-2 group-hover:text-cyan-400
//                 transition-colors uppercase"
//               >
//                 {edu.title}
//               </h3>
//               <p className="text-slate-500 text-sm mb-6 font-medium tracking-wide">
//                 {edu.institute}
//               </p>

//               {/* Points for Tech Section */}
//               {edu.points ? (
//                 <ul className="space-y-3 mb-6">
//                   {edu.points.map((point, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-3 text-sm text-slate-400 leading-snug"
//                     >
//                       <FaTerminal className="mt-1 text-xs text-indigo-500 shrink-0" />
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p
//                   className="text-slate-400 text-sm leading-relaxed
//                    mb-6 italic border-l-2 border-indigo-500/20 pl-4"
//                 >
//                   {edu.desc}
//                 </p>
//               )}

//               {/* Skills Badges */}
//               <div className="mt-auto pt-6 border-t border-slate-800/50">
//                 {edu.skills && (
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {edu.skills.map((skill) => (
//                       <span
//                         key={skill}
//                         className="text-[10px] uppercase tracking-wider text-blue-300
//                            bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 {/* <div
//                   className="flex items-center gap-2
//                    text-[10px] font-black tracking-[0.2em]
//                     uppercase text-slate-500
//                      group-hover:text-indigo-400 transition-colors"
//                 >
//                   <FaCheckCircle
//                     className={
//                       edu.result === "Dropout"
//                         ? "text-yellow-500 animate-pulse"
//                         : "text-indigo-500"
//                     }
//                   />
//                   <btn className="text-xs cursor-pointer">
//                     {edu.result === "Dropout" ? "Dropout" : "Certified"}
//                   </btn>
//                 </div> */}

// <div
//                   onClick={() => edu.certificateImg && setSelectedCert(edu)}
//                   className={`flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all ${
//                     edu.certificateImg
//                     ? "cursor-pointer text-indigo-400 hover:text-cyan-400"
//                     : "text-slate-500"
//                   }`}
//                 >
//                   <FaCheckCircle className={edu.result === "Dropout" ? "text-yellow-500 animate-pulse" : "text-indigo-500"} />
//                   <span className="text-xs">
//                     {edu.result === "Dropout" ? "Dropout" : edu.certificateImg ? "View Certificate" : "Completed"}
//                   </span>
//                 </div>

//               </div>
//             </div>
//             // </div>
//           ))}
//         </div>
//       </div>

//         {/* Modal for Certificate */}
// {selectedCert && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
//           <div
//             data-aos="zoom-in"
//             className="bg-slate-900 border border-white/20 rounded-2xl max-w-4xl w-full overflow-hidden relative shadow-2xl"
//           >
//             <div className="flex justify-between items-center p-5 border-b border-white/10">
//               <h3 className="text-xl font-bold text-cyan-400">{selectedCert.title}</h3>
//               <button onClick={() => setSelectedCert(null)} className="text-slate-400 hover:text-white transition-colors">
//                 <FaTimes size={24} />
//               </button>
//             </div>

//             <div className="p-4 flex justify-center bg-slate-950">
//               <img
//                 src={selectedCert.certificateImg}
//                 alt="Certificate"
//                 className="max-h-[60vh] object-contain rounded-lg border border-white/5 shadow-inner"
//               />
//             </div>

//             <div className="p-5 flex justify-end bg-slate-900 border-t border-white/10">
//               <button
//                 onClick={() => handleDownloadPDF(selectedCert.certificateImg, selectedCert.title)}
//                 className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95"
//               >
//                 <FaDownload /> Download as PDF
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </section>
//   );
// }



import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { jsPDF } from "jspdf"; // Added missing import
import {
  FaSchool,
  FaUniversity,
  FaLaptopCode,
  FaCode,
  FaGraduationCap,
  FaCheckCircle,
  FaTerminal,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const educationData = [
  {
    id: 1,
    title: "SSC",
    institute: "Goalanda Naziruddin Govt. High School",
    result: "GPA 5.00",
    year: "2015",
    icon: <FaSchool />,
    category: "academic",
    desc: "Studied core science subjects and built a strong academic foundation for future engineering studies.",
  },
  {
    id: 2,
    title: "HSC",
    institute: "Goalanda Kamrul Islam Govt. College",
    result: "GPA 4.25",
    year: "2017",
    icon: <FaGraduationCap />,
    category: "academic",
    desc: "Focused on advanced level Physics, Chemistry, Mathematics, and Information & Communication Technology (ICT).",
  },
  {
    id: 3,
    title: "BSc in Physics",
    institute: "Govt. Rajendra College",
    result: "Dropout",
    year: "2017-2020",
    icon: <FaUniversity />,
    category: "academic",
    desc: "Sharpened analytical thinking and complex problem-solving skills.",
  },
  {
    id: 4,
    title: "Complete Web Development",
    institute: "Programming Hero",
    year: "2025",
    icon: <FaLaptopCode />,
    category: "tech",
    certificateImg: "/phcertificate.PNG",
    points: [
      "Full-stack development with MERN (MongoDB, Express, React, Node.js)",
      "Authentication using Firebase and JWT (JSON Web Tokens)",
      "State management and API integration using Axios and TanStack Query",
      "Building responsive and modern UIs with Tailwind CSS and DaisyUI",
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "Next.js"],
    desc: "An intensive bootcamp focusing on professional web development standards.",
  },
  {
    id: 5,
    title: "Reactive Accelerator",
    institute: "Learn With Sumit",
    year: "2024",
    icon: <FaCode />,
    category: "tech",
    // certificateImg: "/lws_certificate.jpg",
    points: [
      "Advanced React patterns, Render Props, and HOCs",
      "Centralized state management with Redux Toolkit",
      "Deep dive into React Hooks and Performance Optimization",
      "Clean architecture for scalable applications",
    ],
    skills: ["Hooks", "Patterns", "Optimization"],
    desc: "Mastering React ecosystem and advanced frontend architecture.",
  },
];

export default function Education() {
  const [filter, setFilter] = useState("tech");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [filter]);

  const filteredData = educationData.filter((item) => item.category === filter);

  // PDF Download Handler
  const handleDownloadPDF = (imgUrl, title) => {
    const doc = new jsPDF("landscape", "px", "a4");
    const img = new Image();
    img.src = imgUrl;
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      doc.addImage(img, "JPEG", 0, 0, pageWidth, pageHeight);
      doc.save(`${title}-Certificate.pdf`);
    };
  };

  return (
    <section className="py-20 bg-[#0f172a] text-white px-6 relative overflow-hidden">
      {/* Mouse Glow Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-20"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.2), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Path of Knowledge
          </h2>

          <div className="inline-flex bg-white/2 p-1.5 rounded-2xl border border-slate-700 backdrop-blur-md shadow-2xl">
            {["tech", "academic"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-8 md:px-12 py-3 rounded-xl font-bold uppercase cursor-pointer tracking-widest text-xs transition-all duration-500 ${
                  filter === tab
                    ? "bg-cyan-400 text-slate-900 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
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
          className={`grid gap-8 transition-all duration-700 ${
            filter === "academic"
              ? "grid-cols-1 md:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
          }`}
        >
          {filteredData.map((edu) => (
            <div
              key={edu.id}
              data-aos="zoom-in-up"
              className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:border-white/20 transition-all duration-300 flex flex-col group"
            >
              {/* Card Glow */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/20 transition-all" />

              <div className="flex justify-between items-start mb-2">
                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center mb-2 justify-center text-3xl text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                  {edu.icon}
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black py-1 px-3 bg-indigo-500/10 rounded-full text-indigo-400 ring-1 ring-indigo-500/30 uppercase tracking-tighter">
                    {edu.year}
                  </span>
                  {edu.result && (
                    <div className="text-[10px] text-slate-500 font-mono mt-1 font-bold italic">
                      {edu.result}
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors uppercase">
                {edu.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 font-medium">
                {edu.institute}
              </p>

              {/* Content logic */}
              <div className="flex-grow">
                {edu.points ? (
                  <ul className="space-y-3 mb-6">
                    {edu.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-400 leading-snug"
                      >
                        <FaTerminal className="mt-1 text-[10px] text-indigo-500 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 italic border-l-2 border-indigo-500/20 pl-4">
                    {edu.desc}
                  </p>
                )}
              </div>

              {/* Skills & Footer */}
              <div className="mt-auto pt-6 border-t border-slate-800/50">
                {/* {edu.skills && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {edu.skills.map((skill) => (
                      <span key={skill} className="text-[9px] uppercase font-bold tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                )} */}

                {/* Skills Badges */}
                {edu.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] uppercase font-bold tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center">
                  {/* Animated Button Container */}
                  <div
                    onClick={() => edu.certificateImg && setSelectedCert(edu)}
                    className={`relative group/btn p-[2px] rounded-xl overflow-hidden transition-all duration-500 ${
                      edu.certificateImg
                        ? "cursor-pointer active:scale-95 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                        : "opacity-50 cursor-default"
                    }`}
                  >
                    {/* 1. The Spinning Neon Border (Only for certificates) */}
                    {edu.certificateImg && (
                      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#1e293b,#0ea5e9,#1e293b)] animate-[spin_4s_linear_infinite] group-hover/btn:animate-[spin_1.5s_linear_infinite]" />
                    )}

                    {/* 2. Button Inner Body */}
                    <div
                      className={`relative flex items-center gap-3 px-6 py-2.5 rounded-[10px] transition-all duration-300 ${
                        edu.certificateImg
                          ? "bg-[#0f172a] group-hover/btn:bg-[#0f172a]/90"
                          : "bg-slate-800"
                      }`}
                    >
                      {/* 3. Pulsing Radar Icon */}
                      <div className="relative">
                        <FaCheckCircle
                          className={`text-sm z-10 relative ${
                            edu.result === "Dropout"
                              ? "text-yellow-500"
                              : "text-cyan-400"
                          }`}
                        />
                        {edu.certificateImg && (
                          <>
                            <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40" />
                            <span className="absolute -inset-1 rounded-full bg-cyan-400/20 blur-sm animate-pulse" />
                          </>
                        )}
                      </div>

                      {/* 4. Glowing Text */}
                      <span
                        className={`text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${
                          edu.certificateImg
                            ? "text-white group-hover/btn:text-cyan-400 group-hover/btn:tracking-[0.2em] group-hover/btn:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                            : "text-slate-200"
                        }`}
                      >
                        {edu.result === "Dropout"
                          ? "Dropout"
                          : edu.certificateImg
                            ? "View Certificate"
                            : "Completed"}
                      </span>

                      {/* 5. Horizontal Shimmer/Glass Effect on Hover */}
                      {edu.certificateImg && (
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL --- */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div
            data-aos="zoom-in"
            className="bg-white/10 border border-white/20 rounded-2xl max-w-4xl w-full
             overflow-hidden shadow-2xl backdrop-blur-lg relative"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/5 bg-white/10">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {selectedCert.institute}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full
                 bg-white/5 hover:bg-rose-500/20 hover:text-rose-500 transition-all"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-4 bg-white/10 flex justify-center items-center">
              <img
                src={selectedCert.certificateImg}
                alt="Certificate"
                className="max-h-[60vh] w-auto object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-500 font-medium">
                Verify your official certificate document
              </p>
              <button
                onClick={() =>
                  handleDownloadPDF(
                    selectedCert.certificateImg,
                    selectedCert.title,
                  )
                }
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600
                 hover:from-cyan-400 hover:to-blue-500 text-slate-900 px-8 py-3 rounded-xl
                 font-bold transition-all shadow-lg hover:shadow-cyan-500/25 active:scale-95 cursor-pointer"
              >
                <FaDownload /> Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
