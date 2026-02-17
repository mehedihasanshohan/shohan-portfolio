// import { useState, useRef, useEffect } from "react";
// import { toPng } from "html-to-image";
// import img from "../../assets/mhshohan.png";
// import {
//   FiX,
//   FiDownload,
//   FiMail,
//   FiGlobe,
//   FiPhone,
// } from "react-icons/fi";

// const Footer = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const cardRef = useRef(null);

//   // Lock body scroll when modal open
//   useEffect(() => {
//     document.body.style.overflow = isModalOpen ? "hidden" : "auto";
//     return () => (document.body.style.overflow = "auto");
//   }, [isModalOpen]);

//   // Close on ESC
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") setIsModalOpen(false);
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   // Download Business Card
// const downloadCard = async (e) => {
//   e.stopPropagation();
//   if (!cardRef.current) return;

//   try {
//     const dataUrl = await toPng(cardRef.current, {
//       cacheBust: true,
//       pixelRatio: 3,
//       backgroundColor: "#0f172a",
//     });

//     const link = document.createElement("a");
//     link.href = dataUrl;
//     link.download = "Mehedi_Hasan_Shohan_Card.png";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

//   } catch (err) {
//     console.error("Download error:", err);
//     alert("Download failed");
//   }
// };

//   return (
//     <footer className="relative bg-[#0b1120] text-gray-400 py-10 px-6 border-t border-white/5">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">

//         {/* Open Modal */}
//         <div
//           onClick={() => setIsModalOpen(true)}
//           className="flex items-center gap-4 cursor-pointer bg-[#1e293b]/30 p-2 pr-6 rounded-full border border-white/10 hover:border-cyan-400 transition"
//         >
//           <img
//             src={img}
//             crossOrigin="anonymous"
//             alt="Shohan"
//             className="w-11 h-11 rounded-full border-2 border-cyan-400"
//           />
//           <span className="text-cyan-400 font-semibold">
//             Mehedi Hasan Shohan
//             <br />
//             <p className="text-[10px] sm:mt-2 text-white">click to download photocard</p>
//           </span>
//         </div>

//         <p className="text-xs">© 2026 All rights reserved</p>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           onClick={() => setIsModalOpen(false)}
//           className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
//         >
//           <div onClick={(e) => e.stopPropagation()}>

//             {/* Card */}
//             <div
//               ref={cardRef}
//               data-export-card
//               className="relative bg-[#0f172a] p-8 rounded-3xl w-full max-w-[340px] mx-auto text-center border border-white/10"
//             >
//               {/* Close */}
//               <button
//                 className="no-export absolute top-4 right-4 text-gray-500 hover:text-white"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 <FiX size={22} />
//               </button>

//               <img
//                 src={img}
//                 crossOrigin="anonymous"
//                 alt="Shohan"
//                 className="w-32 h-32 mx-auto rounded-full border border-cyan-400/40 scale-110 mb-5"
//               />

//               <h2 className="text-white text-2xl font-bold">
//                 Mehedi Hasan
//               </h2>
//               <p className="text-cyan-400 text-xs tracking-widest uppercase mb-6">
//                 MERN Stack Developer
//               </p>

//               <div className="space-y-3 text-left text-sm text-gray-300 mb-6">
//                 <div className="flex items-center gap-2">
//                   <FiMail className="text-cyan-400" />
//                   mhshohan04@gmail.com
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FiGlobe className="text-cyan-400" />
//                   https://portfolio-mhshohan23.netlify.app
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FiPhone className="text-cyan-400"></FiPhone>
//                   +8801774767981
//                 </div>
//               </div>

//               <button
//                 onClick={downloadCard}
//                 className="no-export w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-xl font-bold text-sm"
//               >
//                 <FiDownload /> DOWNLOAD
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </footer>
//   );
// };

// export default Footer;





// eslint-disable-next-line no-unused-vars
import { useState, useRef, useEffect } from "react";
import { toPng } from "html-to-image";
import img from "../../assets/mhshohan.png";
import { FiX, FiDownload, FiMail, FiGlobe, FiPhone } from "react-icons/fi";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);

  const downloadCard = async (e) => {
    e.stopPropagation();
    if (!cardRef.current) return;

    const filter = (node) => {
      return !node.classList?.contains("no-export");
    };

    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: "#0f172a",
        filter: filter,
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `Mehedi_Hasan_Shohan_Card.png`;
      link.click();
    } catch (err) {
      console.error("Download error:", err);
    }
  };

  return (
    <footer className="relative bg-[#0b1120] text-gray-400 py-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Profile/Trigger Section */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center gap-4 cursor-pointer bg-[#1e293b]/30 p-2 pr-6
           rounded-full border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
        >
          <div className="relative">
            <img
              src={img}
              alt="Shohan"
              className="w-11 h-11 rounded-full border-2 border-cyan-400 object-cover"
            />
            <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20 group-hover:hidden"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-cyan-400 font-semibold leading-tight">
              Mehedi Hasan
            </span>
            <span className="text-[10px] text-gray-500 group-hover:text-white transition-colors">
              Click to download photocard
            </span>
          </div>
        </div>

        <p className="text-sm opacity-80">
          © 2026 <span className="text-cyan-400">Mehedi Hasan</span>  • All rights reserved
        </p>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[350px]"
          >
            <div
              ref={cardRef}
              className="relative bg-[#0f172a] p-8 rounded-[2.5rem] text-center border border-white/10 shadow-2xl"
            >
              {/* Close Button - marked as no-export */}
              <button
                className="no-export absolute top-5 right-5 text-gray-500 hover:text-white transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <FiX size={24} />
              </button>

              <div className="relative inline-block mb-6">
                <img
                  src={img}
                  alt="Shohan"
                  className="w-32 h-32 mx-auto rounded-full border-2 border-cyan-400/30 p-1 object-cover scale-110"
                />
                <div className="absolute -bottom-2 right-2 bg-cyan-500 w-6 h-6 rounded-full border-4 border-[#0f172a]"></div>
              </div>

              <h2 className="text-white text-2xl font-bold tracking-tight">
                Mehedi Hasan
              </h2>
              <p className="text-cyan-400 text-[10px] tracking-[0.2em] uppercase font-medium mb-2">
                Frontend-Focused MERN Developer <br />
              </p>
              <p className="text-white text-sm font-medium mb-8">React.js Node.js MongoDB</p>

              <div className="space-y-4 text-left text-sm text-gray-300 mb-2 px-2">
                <a
                  href="mailto:mhshohan04@gmail.com"
                  className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
                >
                  <FiMail className="text-cyan-400 shrink-0" />
                  <span className="truncate">mhshohan04@gmail.com</span>
                </a>
                <a
                  href="https://portfolio-mhshohan23.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
                >
                  <FiGlobe className="text-cyan-400 shrink-0" />
                  <span className="truncate">
                    portfolio-mhshohan23.netlify.app
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <FiPhone className="text-cyan-400 shrink-0" />
                  <span>+880 1774-767981</span>
                </div>
              </div>

              {/* Download Button - marked as no-export */}
              <button
                onClick={downloadCard}
                className="no-export w-full flex items-center justify-center cursor-pointer gap-2 bg-cyan-600 hover:bg-cyan-500 text-white py-4 rounded-2xl font-bold text-sm shadow-lg shadow-cyan-900/20 active:scale-95 transition-all"
              >
                <FiDownload size={18} /> DOWNLOAD CARD
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
