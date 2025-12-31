import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl mb-4">Project not found.</h2>
        <Link to="/" className="text-blue-400 hover:underline">Return Home</Link>
      </div>
    );
  }

  const renderList = (data, bulletColor = "text-gray-300") => {
    if (Array.isArray(data)) {
      return (
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {data.map((item, index) => (
            <li key={index} className="leading-relaxed">
              <span className={`relative -left-2 ${bulletColor}`}>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    return <p className="text-gray-300 leading-relaxed">{data}</p>;
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition-colors group">
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <div className="relative group overflow-hidden rounded-2xl mb-10 border border-white/10 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-72 md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-gray-400 italic">"{project.description}"</p>
            </header>

            <section>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4 border-b border-blue-400/20 pb-2">
                Project Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.longDescription}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenges */}
              <section className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-red-400/30 transition-colors">
                <h2 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">Challenges</h2>
                {renderList(project.challenges)}
              </section>

              {/* Solutions */}
              <section className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-green-400/30 transition-colors">
                <h2 className="text-xl font-semibold text-green-400 mb-4">Solutions</h2>
                {renderList(project.solutions)}
              </section>
            </div>

            <section className="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
              <h2 className="text-xl font-semibold text-yellow-500 mb-4">Key Learnings & Insights</h2>
              {renderList(project.learning)}
            </section>
          </div>

          <div className="space-y-8">
            <div className="sticky top-8 space-y-6">
              <div className="flex flex-col gap-4">
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">
                  <FiExternalLink /> Live Preview
                </a>
                <a href={project.code} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white/10 text-white py-4 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/10">
                  <FiGithub /> View Source Code
                </a>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-[0.2em]">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map(tech => (
                    <span key={tech} className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-4 py-1.5 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;