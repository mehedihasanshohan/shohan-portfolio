// import { useState } from "react";
// import { projects } from "../../data/Projects.js";
// import ProjectCard from "./ProjectCard";
// import ProjectModal from "./ProjectModal";

// export default function TestSkills() {
//   const [filter, setFilter] = useState("vanilla");
//   const [selectedProject, setSelectedProject] = useState(null);

//   const filteredProjects = projects.filter(p => p.category === filter);

//   return (
//     <section className="w-full bg-gradient-to-br from-[#1e293b] to-[#0f172a]  p-4 max-w-6xl mx-auto">
//       <h2 className="text-3xl text-cyan-300 font-bold mb-6 text-center">🧪 Test Skills</h2>

//       {/* Category Filter */}
//       <div className="flex justify-center gap-6 mb-8">
//         {["tailwind", "vanilla", "react"].map(cat => (
//           <label key={cat} className="flex items-center gap-2 cursor-pointer text-lg">
//             <input
//               type="radio"
//               name="category"
//               value={cat}
//               checked={filter === cat}
//               onChange={() => setFilter(cat)}
//               className="accent-blue-500"
//             />
//             <span className="capitalize text-rose-300">{cat} Projects</span>
//           </label>
//         ))}
//       </div>

//       {/* Project Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProjects.map(project => (
//           <ProjectCard
//             key={project.id}
//             project={project}
//             onShowDetails={() => setSelectedProject(project)}
//           />
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <ProjectModal
//           project={selectedProject}
//           onClose={() => setSelectedProject(null)}
//         />
//       )}
//     </section>
//   );
// }



