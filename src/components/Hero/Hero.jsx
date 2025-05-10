import { Typewriter } from 'react-simple-typewriter';
import img from '../../assets/2.png';
import { useState } from 'react';
import GitHubStats from '../Github/GitHubStats';

export default function Hero() {
  const [showGitModal, setShowGitModal] = useState(false);

  const handleModalShow = () => {
    // alert('openong modal with github stats');
    setShowGitModal(true);

  }
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-6 md:px-16 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-7xl">

        {/* Left Section */}
        <div className="flex-1" data-aos="fade-right">
          <span><h5 className='text-cyan-300 font-bold text-2xl'>Hi, I'm</h5></span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
           <span className="text-rose-400">Mehedi Hasan Shohan</span>
          </h1>

          <h2 className="text-2xl md:text-3xl mb-6 font-semibold text-cyan-300">
            <Typewriter
              words={['Frontend Developer', 'React Enthusiast', 'UI Designer']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-white/80 text-lg leading-relaxed max-w-xl mb-6">
          “Crafting sleek, fast, and future-ready web interfaces with <br /> React and Tailwind CSS. Ready to bring bold ideas to life.”
            {/* I build modern, responsive, and futuristic web interfaces using React and Tailwind CSS. Let's make something amazing together! */}
          </p>

          {/* Futuristic Button */}
          {/* <a
            href="/2.pdf"
            download="Mehedi-Hasan_shohan-cv.pdf" target='_blank'
            className="inline-block relative px-8 py-3 text-cyan-300 font-bold tracking-wide border border-cyan-300 rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-cyan-500/20 blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300 animate-pulse"></span>
            <span className="relative z-10">Download CV</span>
            <span className="absolute top-0 left-0 w-full h-full border-2 border-cyan-400 rounded-lg animate-spin-slow group-hover:animate-none"></span>
          </a>
          <a
            href="/2.pdf"
            download="Mehedi-Hasan_shohan-cv.pdf" target='_blank'
            className="inline-block relative px-8 py-3 text-cyan-300 font-bold tracking-wide border border-cyan-300 rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-cyan-500/20 blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300 animate-pulse"></span>
            <span className="relative z-10">Download CV</span>
            <span className="absolute top-0 left-0 w-full h-full border-2 border-cyan-400 rounded-lg animate-spin-slow group-hover:animate-none"></span>
          </a> */}
          {/*  custom*/}
          <a
  href="/2.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-flex items-center gap-2 px-8 mt-4 py-3 rounded-lg border border-cyan-400 text-cyan-300 font-bold shadow-[0_0_20px_rgba(34,211,238,0.6)] overflow-hidden transition-all duration-300 hover:text-white group"
>
  {/* Smooth fill glow on hover */}
  <span className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>

  {/* Correct download icon */}
  <svg
    className="relative z-10 w-5 h-5 text-cyan-300 group-hover:text-white transition duration-300"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
    />
  </svg>

  {/* Button text */}
  <span className="relative z-10">View CV</span>
</a>


            <a
              href="/2.pdf"
              download="Mehedi-Hasan_Shohan-CV.pdf"
              target="_blank"
              className="relative inline-flex ml-8 items-center gap-2 px-8 py-3 mt-4 rounded-lg border border-cyan-400 text-cyan-300 font-bold shadow-[0_0_20px_rgba(34,211,238,0.6)] overflow-hidden transition-all duration-300 hover:text-white group"
            >
              {/* Glowing background on hover */}
              <span className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>

              {/* Icon */}
              <svg
                className="relative z-10 w-5 h-5 text-cyan-300 group-hover:text-white transition duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
              </svg>

              {/* Text */}
              <span className="relative z-10">Download CV</span>
            </a>
            {/* custom btn ends here */}

            {/* github link section */}
              <div
                    className='mt-6 text-cyan-300 cursor-pointer'
                    onClick={handleModalShow}
                    >
              <btn><i>Show github insights</i></btn></div>


        </div>

        {/* Right Section - Neon Image Card */}
        {/* <div className="flex-1 flex justify-center" data-aos="fade-left">
          <div className="relative group rounded-2xl overflow-hidden w-82 h-120 bg-white/10 border border-cyan-400/20 backdrop-blur-md shadow-[0_0_30px_#00ffff33] hover:shadow-[0_0_60px_#00ffff88] transition duration-500 hover:scale-105 animate-float">
            <img
              src={img}
              alt="Mehedi"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 transition duration-300"></div>
          </div>
        </div> */}
        <div className="flex-1 flex justify-center" data-aos="fade-left">
  <div className="relative group rounded-full overflow-hidden w-82 h-82 bg-white/10 border-4 border-gradient-to-r from-blue-600 via-purple-500 to-pink-500 backdrop-blur-md shadow-[0_0_30px_#00ffff33] hover:shadow-[0_0_60px_#00ffff88] transition duration-500 hover:scale-105 animate-float">
    <img
      src={img}
      alt="Mehedi"
      className="w-full h-full object-contain transition duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-cyan-400/10 opacity-0 transition duration-300 group-hover:opacity-80"></div>
  </div>
</div>

        {/* right side ends */}


        {/* modal section test */}
        {showGitModal && (
  <>
    {/* Prevent background scroll */}
    <style>{`body { overflow: hidden; }`}</style>

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="glass w-full h-screen relative p-6 text-white">
        <button
          onClick={() => setShowGitModal(false)}
          className="absolute top-4 right-5 text-white text-2xl font-bold hover:text-cyan-400 transition"
        >
          &times;
        </button>
        <div className="h-full w-full">
          <GitHubStats />
        </div>
      </div>
    </div>
  </>
)}
        {/* modal section test ends  */}

      </div>
    </section>
  );
}
