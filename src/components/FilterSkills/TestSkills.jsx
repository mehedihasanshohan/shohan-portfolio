import { useState } from "react";
import { projects } from '../../data/Projects.js';
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function TestSkills() {
  const [filter, setFilter] = useState("vanilla");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(p => p.category === filter);

  return (
    <section className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">🧪 Test Skills</h2>

      {/* Radio Filters */}
      <div className="flex gap-4 mb-6">
        {["tailwind", "vanilla", "react"].map(cat => (
          <label key={cat} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={filter === cat}
              onChange={() => setFilter(cat)}
            />
            <span className="capitalize">{cat} Projects</span>
          </label>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onShowDetails={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
