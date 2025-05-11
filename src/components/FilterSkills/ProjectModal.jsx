export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl">✖</button>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="mb-3 text-gray-700">{project.description}</p>

        <h4 className="font-semibold mt-4 mb-1">Problem:</h4>
        <p className="text-sm text-gray-600">{project.details.problem}</p>

        <h4 className="font-semibold mt-4 mb-1">Solution:</h4>
        <p className="text-sm text-gray-600">{project.details.solution}</p>

        <div className="grid grid-cols-2 gap-2 mt-4">
          {project.details.screenshots.map((src, idx) => (
            <img key={idx} src={src} alt={`screenshot-${idx}`} className="rounded border" />
          ))}
        </div>
      </div>
    </div>
  );
}
