
import img from '../../assets/2.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 border-t border-cyan-500/20 shadow-[0_-2px_15px_#0ff4]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left: Name & Image */}
        <div className="flex items-center gap-4 text-sm md:text-base">
          <img
            src={img}
            alt="Mehedi Hasan Shohan"
            className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_10px_#0ff4]"
          />
          <span className="text-white font-semibold tracking-wide drop-shadow-[0_1px_1px_#0ff4]">
            Mehedi Hasan Shohan
          </span>
        </div>

        {/* Center: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="text-cyan-400 hover:text-white transition cursor-pointer text-3xl bounce-arrow"
          aria-label="Back to Top"
        >
          ⮝
        </button>

        {/* Right: Copyright */}
        <div className="text-xs text-gray-500 text-center md:text-right tracking-wide">
          <span className="block text-gray-400 hover:text-cyan-400 transition">
            © 2025 Mehedi Hasan Shohan
          </span>
          <span className="block text-gray-500">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
