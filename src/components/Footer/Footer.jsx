import img from '../../assets/2.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Name & Image */}
        <div className="flex items-center gap-3 text-sm md:text-base">
          <img
            src={img}
            alt="Mehedi Hasan Shohan"
            className="w-10 h-10 rounded-full object-cover border border-cyan-400"
          />
          <span className="text-white font-medium">Mehedi Hasan Shohan</span>
        </div>

        {/* Center: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="text-cyan-400 hover:text-white transition text-lg"
          aria-label="Back to Top"
        >
          <span className="text-2xl">⮝</span>
        </button>

        {/* Right: Copyright */}
        <div className="text-xs text-gray-500 text-center md:text-right">
          © 2025 Mehedi Hasan Shohan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
