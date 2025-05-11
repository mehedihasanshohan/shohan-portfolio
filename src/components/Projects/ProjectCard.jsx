// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import { FiExternalLink, FiGithub } from "react-icons/fi";

// const ProjectCard = ({ project }) => {
//   return (
//     <Tilt
//       glareEnable={true}
//       glareMaxOpacity={0.2}
//       scale={1.03}
//       transitionSpeed={400}
//       className="rounded-2xl"
//     >
//       <div className="relative overflow-hidden rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-500">
//         {/* Image */}
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-48 object-cover rounded-t-2xl"
//         />

//         {/* Content */}
//         <div className="p-5">
//           <h3 className="text-xl font-bold text-white mb-1">
//             {project.title}
//           </h3>
//           <p className="text-sm text-gray-300 mb-4">{project.description}</p>
//           <div className="flex justify-between items-center">
//             <a
//               href={project.live}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-cyan-400 hover:text-white font-medium flex items-center gap-1"
//             >
//               <FiExternalLink /> Live
//             </a>
//             <a
//               href={project.code}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-cyan-400 hover:text-white font-medium flex items-center gap-1"
//             >
//               <FiGithub /> Code
//             </a>
//           </div>
//         </div>

//         {/* Hover icons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileHover={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="absolute inset-0 flex justify-center items-center gap-6 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
//         >
//           <a href={project.live} target="_blank" rel="noopener noreferrer">
//             <FiExternalLink className="text-white text-3xl hover:text-cyan-400 transition" />
//           </a>
//           <a href={project.code} target="_blank" rel="noopener noreferrer">
//             <FiGithub className="text-white text-3xl hover:text-cyan-400 transition" />
//           </a>
//         </motion.div>
//       </div>
//     </Tilt>
//   );
// };

// export default ProjectCard;


// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import { FiExternalLink, FiGithub } from "react-icons/fi";

// const ProjectCard = ({ project }) => {
//   return (
//     <Tilt
//       glareEnable={true}
//       glareMaxOpacity={0.3}
//       scale={1.05}
//       transitionSpeed={500}
//       className="rounded-2xl"
//     >
//       <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800/30 backdrop-blur-md shadow-xl shadow-gray-700/50 hover:shadow-gray-600/70 transition-all duration-500">
//         {/* Image */}
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-48 object-cover rounded-t-2xl"
//         />

//         {/* Content */}
//         <div className="p-5">
//           <h3 className="text-2xl font-semibold text-white mb-1">{project.title}</h3>
//           <p className="text-sm text-gray-300 mb-4">{project.description}</p>
//           <div className="flex justify-between items-center">
//             <a
//               href={project.live}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-orange-400 hover:text-white font-medium flex items-center gap-1"
//             >
//               <FiExternalLink /> Live
//             </a>
//             <a
//               href={project.code}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-orange-400 hover:text-white font-medium flex items-center gap-1"
//             >
//               <FiGithub /> Code
//             </a>
//           </div>
//         </div>

//         {/* Hover icons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileHover={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="absolute inset-0 flex justify-center items-center gap-6 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
//         >
//           <a href={project.live} target="_blank" rel="noopener noreferrer">
//             <FiExternalLink className="text-white text-3xl hover:text-orange-400 transition" />
//           </a>
//           <a href={project.code} target="_blank" rel="noopener noreferrer">
//             <FiGithub className="text-white text-3xl hover:text-orange-400 transition" />
//           </a>
//         </motion.div>
//       </div>
//     </Tilt>
//   );
// };

// export default ProjectCard;








// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { FiExternalLink, FiGithub } from "react-icons/fi";

// const ProjectCard = ({ project }) => {
//   return (
//     <Tilt
//       glareEnable={true}
//       glareMaxOpacity={0.1}
//       scale={1.02}
//       transitionSpeed={300}
//       className="rounded-2xl"
//     >
//       <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300">
//         {/* Image */}
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-48 object-cover rounded-t-2xl"
//         />

//         {/* Content */}
//         <div className="p-5">
//           <h3 className="text-xl font-bold text-white mb-1">
//             {project.title}
//           </h3>
//           <p className="text-sm text-gray-300 mb-4">{project.description}</p>

//           <div className="flex justify-between items-center">
//             <a
//               href={project.live}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-white font-medium flex items-center gap-1"
//             >
//               <FiExternalLink /> Live
//             </a>
//             <a
//               href={project.code}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-white font-medium flex items-center gap-1"
//             >
//               <FiGithub /> Code
//             </a>
//           </div>
//         </div>
//       </div>
//     </Tilt>
//   );
// };

// export default ProjectCard;




import React from "react";
import Tilt from "react-parallax-tilt";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.05}
      scale={1.02}
      transitionSpeed={400}
      className="rounded-2xl"
    >
      <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]">
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
        />

        {/* Content */}
        <div className="p-5 space-y-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.description}</p>

          {/* Tags (optional, if you add project.tags) */}
          {project.tags && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs text-gray-400 bg-white/10 border border-white/10 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between items-center pt-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white flex items-center gap-1"
            >
              <FiExternalLink /> Live
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white flex items-center gap-1"
            >
              <FiGithub /> Code
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
