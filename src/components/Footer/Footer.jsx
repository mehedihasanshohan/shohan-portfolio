import { useState, useRef, useEffect } from "react";
import { toPng } from "html-to-image";
import img from "../../assets/2.png";
import {
  FiX,
  FiDownload,
  FiMail,
  FiGlobe,
  FiPhone,
} from "react-icons/fi";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Download Business Card
const downloadCard = async (e) => {
  e.stopPropagation();
  if (!cardRef.current) return;

  try {
    const dataUrl = await toPng(cardRef.current, {
      cacheBust: true,
      pixelRatio: 3,
      backgroundColor: "#0f172a",
    });

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "Mehedi_Hasan_Shohan_Card.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (err) {
    console.error("Download error:", err);
    alert("Download failed");
  }
};



  return (
    <footer className="relative bg-[#0b1120] text-gray-400 py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* Open Modal */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-4 cursor-pointer bg-[#1e293b]/30 p-2 pr-6 rounded-full border border-white/10 hover:border-cyan-400 transition"
        >
          <img
            src={img}
            crossOrigin="anonymous"
            alt="Shohan"
            className="w-11 h-11 rounded-full border-2 border-cyan-400"
          />
          <span className="text-cyan-400 font-semibold">
            Mehedi Hasan Shohan
            <br />
            <p className="text-[10px] text-white">click to download photocard</p>
          </span>
        </div>

        <p className="text-xs">© 2026 All rights reserved</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div onClick={(e) => e.stopPropagation()}>

            {/* Card */}
            <div
              ref={cardRef}
              data-export-card
              className="relative bg-[#0f172a] p-8 rounded-3xl w-full max-w-[340px] mx-auto text-center border border-white/10"
            >
              {/* Close */}
              <button
                className="no-export absolute top-4 right-4 text-gray-500 hover:text-white"
                onClick={() => setIsModalOpen(false)}
              >
                <FiX size={22} />
              </button>

              <img
                src={img}
                crossOrigin="anonymous"
                alt="Shohan"
                className="w-28 h-28 mx-auto rounded-2xl border border-cyan-400/40 mb-5"
              />

              <h2 className="text-white text-2xl font-bold">
                Mehedi Hasan Shohan
              </h2>
              <p className="text-cyan-400 text-xs tracking-widest uppercase mb-6">
                MERN Stack Developer
              </p>

              <div className="space-y-3 text-left text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <FiMail className="text-cyan-400" />
                  mhshohan01@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <FiGlobe className="text-cyan-400" />
                  http://portfolio-shohan.netlify.app
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone className="text-cyan-400"></FiPhone>
                  01774767981
                </div>
              </div>

              <button
                onClick={downloadCard}
                className="no-export w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-xl font-bold text-sm"
              >
                <FiDownload /> DOWNLOAD
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
