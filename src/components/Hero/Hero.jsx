import { Typewriter } from 'react-simple-typewriter';
import img from '../../assets/2.png';

export default function Hero() {
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
          <a
            href="/2.pdf"
            download="Mehedi-Hasan_shohan-cv.pdf" target='_blank'
            className="inline-block relative px-8 py-3 text-cyan-300 font-bold tracking-wide border border-cyan-300 rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-cyan-500/20 blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300 animate-pulse"></span>
            <span className="relative z-10">Download CV</span>
            <span className="absolute top-0 left-0 w-full h-full border-2 border-cyan-400 rounded-lg animate-spin-slow group-hover:animate-none"></span>
          </a>
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

      </div>
    </section>
  );
}
