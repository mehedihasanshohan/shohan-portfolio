export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg font-bold text-red-500"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

        <div className="mb-4 space-y-2">
          <p><strong>Problem:</strong> {project.details.problem}</p>
          <p><strong>Solution:</strong> {project.details.solution}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {project.details.screenshots.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Screenshot ${idx + 1}`}
              className="w-full h-32 object-cover rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
