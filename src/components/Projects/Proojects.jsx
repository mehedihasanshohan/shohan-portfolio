// import React from "react";
// import img1 from '../../assets/image-editor.PNG';
// import img2 from '../../assets/cv-js.PNG';

// const projects = [
//   {
//     id: 1,
//     title: "Image Editor",
//     description: "A browser-based image editor with filters, cropping, and downloading features.",
//     image: img1,
//     live: "https://image-editor-vanilla-js-shohan.netlify.app/",
//     code: "https://github.com/mehedihasanshohan/image-editor-javascript",
//   },
//   {
//     id: 2,
//     title: "CV builder JS",
//     description: "A browser-based image editor with filters, cropping, and downloading features.",
//     image: img2,
//     live: "https://cv-builder-js.netlify.app/",
//     code: "https://github.com/mehedihasanshohan/cv-builder-app-javascript",
//   },
//   {
//     id: 3,
//     title: "Weather App",
//     description: "A modern weather app using OpenWeatherMap API with real-time forecasts and stylish UI.",
//     image: "https://via.placeholder.com/600x400?text=Image+Editor",
//     live: "https://yourimageeditor.netlify.app",
//     code: "https://github.com/yourusername/image-editor",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="py-20 bg-[#0f172a] text-white px-6" id="projects">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-4">Projects</h2>
//         <p className="text-gray-400 mb-12">Some of my recent futuristic work</p>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="relative group rounded-2xl border border-white/20 backdrop-blur-lg bg-white/10 overflow-hidden shadow-lg hover:shadow-cyan-400/50 transition-transform transform hover:scale-[1.03] duration-300"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover mt-4 rounded-2xl"
//               />
//               <div className="p-5">
//                 <h3 className="text-2xl font-semibold mb-1 group-hover:text-cyan-400 transition duration-300">
//                   {project.title}
//                 </h3>
//                 <p className="text-sm text-gray-300 mb-4">{project.description}</p>
//                 <div className="flex justify-between items-center">
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition-all text-sm font-medium"
//                   >
//                     Live Demo
//                   </a>
//                   <a
//                     href={project.code}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 rounded-full bg-cyan-400 hover:bg-gray-700 transition-all text-sm font-medium"
//                   >
//                     Code
//                   </a>
//                 </div>
//               </div>
//               <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




// tilt cards effects
import React from "react";
import ProjectCard from "./ProjectCard"; // update path accordingly
import img1 from "../../assets/image-editor.PNG";
import img2 from "../../assets/cv-js.PNG";

const projects = [
  {
    id: 1,
    title: "Image Editor",
    description: "Browser-based image editor with filters & downloads.",
    image: img1,
    live: "https://image-editor-vanilla-js-shohan.netlify.app/",
    code: "https://github.com/mehedihasanshohan/image-editor-javascript",
  },
  {
    id: 2,
    title: "CV Builder JS",
    description: "Build your CV in-browser with live preview.",
    image: img2,
    live: "https://cv-builder-js.netlify.app/",
    code: "https://github.com/mehedihasanshohan/cv-builder-app-javascript",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-white px-6" id="projects">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 mb-12">Some of my latest work</p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
