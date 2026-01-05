
import React from "react";
import Tilt from "react-parallax-tilt";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <Tilt

      glareEnable
      glareMaxOpacity={0.05}
      scale={1.02}
      transitionSpeed={400}
      className="rounded-2xl h-full cursor-pointer"
    >
      <div
        data-aos="fade-up"
        onClick={handleCardClick}
        className="group relative h-full flex flex-col overflow-hidden rounded-xl bg-white/2 border
         border-white/10 backdrop-blur-xl transition-all duration-300"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium text-sm px-4 py-2 border border-white/20 rounded-full backdrop-blur-sm">
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-slate-400 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies/Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies?.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] uppercase tracking-wider text-blue-300
                 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies?.length > 3 && (
              <span className="text-[10px] text-gray-500 italic">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Bottom Links */}
          <div className="flex justify-between items-center pt-5 mt-auto">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Card click event off kore
              className="text-sm  hover:text-cyan-400 flex items-center gap-1.5 transition-colors z-10"
            >
              <FiExternalLink /> Live
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Card click event off kore
              className="text-sm text-white hover:text-cyan-400 flex items-center gap-1.5 transition-colors z-10"
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