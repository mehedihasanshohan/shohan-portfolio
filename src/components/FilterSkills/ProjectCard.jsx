// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";

// export default function ProjectCard({ project, onShowDetails }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03, rotate: 0.5 }}
//       className="bg-white shadow-lg rounded-xl overflow-hidden p-4 transition-transform duration-300 hover:shadow-2xl"
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-48 object-cover rounded-md mb-4"
//       />
//       <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//       <p className="text-gray-600 text-sm mb-3">{project.description}</p>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.tech.map((tech, index) => (
//           <span
//             key={index}
//             className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//       <div className="flex justify-between items-center text-sm">
//         <a href={project.live} target="_blank" rel="noreferrer" className="text-blue-600 underline">
//           Live
//         </a>
//         <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-700 underline">
//           GitHub
//         </a>
//         <button onClick={onShowDetails} className="text-white bg-blue-500 px-2 py-1 rounded hover:bg-blue-600">
//           Show Details
//         </button>
//       </div>
//     </motion.div>
//   );
// }



import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, onShowDetails }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className=" border rounded-xl overflow-hidden shadow-md transition-all duration-300"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-fuchsia-400 text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-200 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-amber-200 px-2 py-1 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links and Details */}
        <div className="flex justify-between items-center pt-4 text-sm">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange-100 hover:underline"
          >
            <ExternalLink size={16} />
            Live
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-800 hover:underline"
          >
            <Github size={16} />
            GitHub
          </a>

          <button
            onClick={onShowDetails}
            className="text-sm bg-emerald-300 px-3 py-1 rounded hover:bg-blue-600"
          >
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
}
