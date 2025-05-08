// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaSchool, FaUniversity, FaLaptopCode, FaCode } from "react-icons/fa";

// const educationData = [
//   {
//     title: "SSC",
//     institute: "Goalanda Naziruddin Pilot Govt. High School",
//     section: "Science",
//     gpa: "5.00",
//     year: "2019–2021",
//     icon: <FaSchool />,
//     desc: "Studied core science subjects and built a strong academic foundation.",
//   },
//   {
//     title: "HSC",
//     institute: "Goalanda Kamrul Islam Govt. College",
//     section: "Science",
//     gpa: "4.25",
//     year: "2021–2023",
//     icon: <FaSchool />,
//     desc: "Focused on advanced level physics, chemistry, math, and ICT.",
//   },
//   {
//     title: "BSc in Physics",
//     institute: "Govt. Rajendra College",
//     section: "Physics Department",
//     gpa: "Running",
//     year: "2023–Present",
//     icon: <FaUniversity />,
//     desc: "Currently studying physics with a growing passion for programming and problem solving.",
//   },
//   {
//     title: "Programming Hero Course",
//     institute: "Online Bootcamp",
//     year: "2023",
//     icon: <FaLaptopCode />,
//     desc: "Learned programming fundamentals, HTML, CSS, JavaScript, and practical project building.",
//   },
//   {
//     title: "Learn with Sumit Course",
//     institute: "Online React Course",
//     year: "2024",
//     icon: <FaCode />,
//     desc: "Dived deep into React, component design, hooks, routing, and real-world app development.",
//   },
// ];

// export default function Education() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section
//       id="education"
//       className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
//     >
//       <h2 className="text-4xl font-bold text-center mb-16 text-sky-400">Education & Learning Journey</h2>

//       <div className="relative max-w-5xl mx-auto">
//         {/* vertical line */}
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-indigo-500 z-0"></div>

//         <div className="flex flex-col gap-16 relative z-10">
//           {educationData.map((edu, index) => {
//             const isLeft = index % 2 === 0;
//             return (
//               <div
//                 key={index}
//                 data-aos="fade-up"
//                 className={`w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
//               >
//                 <div className={`w-[90%] md:w-1/2 px-4`}>
//                   <div
//                     className={`bg-gray-800 hover:bg-gray-700 transition-all duration-300 border-l-4 ${
//                       isLeft ? "border-cyan-500" : "border-indigo-500"
//                     } p-6 rounded-lg shadow-xl`}
//                   >
//                     <div className="flex items-center gap-3 text-cyan-400 mb-2 text-xl">
//                       <span>{edu.icon}</span>
//                       <h3 className="font-bold">{edu.title}</h3>
//                     </div>
//                     <p className="text-sm text-gray-300 mb-1">{edu.institute}</p>
//                     {edu.section && <p className="text-sm text-gray-400">Group: {edu.section}</p>}
//                     {edu.gpa && <p className="text-sm text-gray-400">GPA: {edu.gpa}</p>}
//                     <p className="text-xs text-gray-500 mb-2">{edu.year}</p>
//                     <p className="text-gray-300 text-sm">{edu.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }







import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSchool, FaUniversity, FaLaptopCode, FaCode } from "react-icons/fa";

const educationData = [
  {
    title: "SSC",
    institute: "Goalanda Naziruddin Pilot Govt. High School",
    section: "Science",
    gpa: "5.00",
    year: "2019–2021",
    icon: <FaSchool />,
    desc: "Studied core science subjects and built a strong academic foundation.",
  },
  {
    title: "HSC",
    institute: "Goalanda Kamrul Islam Govt. College",
    section: "Science",
    gpa: "4.25",
    year: "2021–2023",
    icon: <FaSchool />,
    desc: "Focused on advanced level physics, chemistry, math, and ICT.",
  },
  {
    title: "BSc in Physics",
    institute: "Govt. Rajendra College",
    section: "Physics Department",
    gpa: "Running",
    year: "2023–Present",
    icon: <FaUniversity />,
    desc: "Currently studying physics with a growing passion for programming and problem solving.",
  },
  {
    title: "Programming Hero Course",
    institute: "Online Bootcamp",
    year: "2023",
    icon: <FaLaptopCode />,
    desc: `Completed an intensive web development bootcamp covering:
- HTML & CSS: Clean, responsive UI design.
- JavaScript: Core concepts, DOM, and logic building.
- React: Components, props, state, and hooks.
- Backend: Node.js, Express, MongoDB fundamentals.
- Authentication: JWT implementation.
- API integration: Using Axios.
- Routing: React Router & dynamic navigation.
- Deployment: Basics of Next.js & modern web app delivery.`,
  },
  {
    title: "Learn with Sumit Course",
    institute: "Online React Course",
    year: "2024",
    icon: <FaCode />,
    desc: "Dived deep into React, component design, hooks, routing, and real-world app development.",
  },
];

export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="education"
      className="py-16 px-4 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-sky-400">
        Education & Learning Journey
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 to-indigo-600 z-0"></div>

        <div className="flex flex-col gap-16 relative z-10">
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            const sideGlow = isLeft
              ? "border-l-4 border-indigo-400"
              : "border-r-4 border-indigo-400";
            const softGlow = "shadow-[0_0_15px_#4f46e533]";

            return (
              <div
                key={index}
                data-aos={isLeft ? "fade-right" : "fade-left"}
                className={`w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
              >
                <div className="w-[90%] md:w-1/2 px-4">
                  <div
                    className={`bg-[#111827] backdrop-blur-sm ${sideGlow} ${softGlow} p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div className="flex items-center gap-4 text-indigo-300 text-2xl mb-3">
                      <span className="text-indigo-400 animate-pulse">{edu.icon}</span>
                      <h3 className="font-bold text-white text-xl">{edu.title}</h3>
                    </div>
                    <p className="text-sm text-gray-300 font-medium">{edu.institute}</p>
                    {edu.section && (
                      <p className="text-sm text-indigo-200">Group: {edu.section}</p>
                    )}
                    {edu.gpa && (
                      <p className="text-sm text-indigo-200">GPA: {edu.gpa}</p>
                    )}
                    <p className="text-xs text-gray-400 mb-3">{edu.year}</p>
                    <p className="text-gray-200 text-sm whitespace-pre-line leading-relaxed tracking-wide">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
