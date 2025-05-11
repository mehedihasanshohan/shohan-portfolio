// export default function ProjectModal({ project, onClose }) {
//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-lg font-bold text-red-500"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

//         <div className="mb-4 space-y-2">
//           <p><strong>Problem:</strong> {project.details.problem}</p>
//           <p><strong>Solution:</strong> {project.details.solution}</p>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           {project.details.screenshots.map((src, idx) => (
//             <img
//               key={idx}
//               src={src}
//               alt={`Screenshot ${idx + 1}`}
//               className="w-full h-32 object-cover rounded"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }








// // modal as skill
// export default function ProjectModal({ project, onClose }) {
//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
//       <div className="bg-white/10 border border-white/20 rounded-2xl p-6 max-w-xl w-full text-white relative shadow-xl backdrop-blur-lg">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-3 text-white text-xl font-bold"
//         >
//           ×
//         </button>

//         <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

//         <div className="mb-4 space-y-2">
//           <p>
//             <strong className="text-cyan-400">Problem:</strong> {project.details.problem}
//           </p>
//           <p>
//             <strong className="text-cyan-400">Solution:</strong> {project.details.solution}
//           </p>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           {project.details.screenshots.map((src, idx) => (
//             <img
//               key={idx}
//               src={src}
//               alt={`Screenshot ${idx + 1}`}
//               className="w-full h-32 object-cover rounded-lg border border-white/20"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }









export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="relative w-full h-full max-h-screen overflow-y-auto bg-white/10 border border-white/20 backdrop-blur-lg text-white p-6 md:p-10 rounded-none">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-white text-3xl font-bold z-50"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{project.title}</h2>

        {/* Project Details */}
        <div className="max-w-5xl mx-auto space-y-6">
          <div>
            <h3 className="text-cyan-400 text-xl font-semibold mb-2">Problem</h3>
            <p className="text-white/90">{project.details.problem}</p>
          </div>

          <div>
            <h3 className="text-cyan-400 text-xl font-semibold mb-2">Solution</h3>
            <p className="text-white/90">{project.details.solution}</p>
          </div>

          {/* Screenshots Full View */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {project.details.screenshots.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Screenshot ${idx + 1}`}
                className="w-full h-auto rounded-xl border border-white/20 shadow-lg"
              />
            ))}
          </div>

          {/* Optional: Tech Stack / Links */}
          {project.details.techStack && (
            <div>
              <h3 className="text-cyan-400 text-xl font-semibold mb-2">Tech Stack</h3>
              <ul className="list-disc pl-5">
                {project.details.techStack.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
          )}

          {project.details.links && (
            <div className="flex gap-4 mt-4">
              {project.details.links.live && (
                <a
                  href={project.details.links.live}
                  target="_blank"
                  className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
                >
                  Live Demo
                </a>
              )}
              {project.details.links.github && (
                <a
                  href={project.details.links.github}
                  target="_blank"
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
