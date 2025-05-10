import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with React and TailwindCSS showcasing my skills and projects.",
    image: "https://via.placeholder.com/600x400?text=Portfolio",
    live: "https://yourportfolio.netlify.app",
    code: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A modern weather app using OpenWeatherMap API with real-time forecasts and stylish UI.",
    image: "https://via.placeholder.com/600x400?text=Weather+App",
    live: "https://yourweatherapp.netlify.app",
    code: "https://github.com/yourusername/weather-app",
  },
  {
    id: 3,
    title: "Image Editor",
    description: "A browser-based image editor with filters, cropping, and downloading features.",
    image: "https://via.placeholder.com/600x400?text=Image+Editor",
    live: "https://yourimageeditor.netlify.app",
    code: "https://github.com/yourusername/image-editor",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-[#0f172a] text-white px-4" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 mb-12">Some of my recent work</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-xl font-medium transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl font-medium transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
