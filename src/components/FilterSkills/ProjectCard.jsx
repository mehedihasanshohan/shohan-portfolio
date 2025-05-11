import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function ProjectCard({ project, onShowDetails }) {
  const tiltRef = useRef();

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  return (
    <div ref={tiltRef} className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-all">
      <img src={project.image} alt={project.title} className="rounded-md mb-3" />
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-xs mb-2">
        {project.tech.map((tech, idx) => (
          <span key={idx} className="bg-gray-100 px-2 py-1 rounded">{tech}</span>
        ))}
      </div>
      <div className="flex justify-between text-sm mt-2">
        <a href={project.live} target="_blank" className="text-blue-500 hover:underline">Live</a>
        <a href={project.github} target="_blank" className="text-gray-700 hover:underline">GitHub</a>
        <button onClick={onShowDetails} className="text-green-600 hover:underline">Details...</button>
      </div>
    </div>
  );
}
