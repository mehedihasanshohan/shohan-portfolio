import toast from "react-hot-toast";
import { Copy } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  User,
  MessageCircle,
  ShieldCheck,
  Github,
} from "lucide-react";
import { Mail } from "lucide-react";

import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Phone number copied!");
  };

  const emailCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Email copied!");
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    captcha: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.captcha.trim().toLowerCase() !== "human") {
      setStatus("Captcha failed. Type 'human' correctly.");
      return;
    }

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs
      .send(
        "service_zy92val",
        "template_sjqetck",
        templateParams,
        "6zohXLugFlnauyF6x",
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", message: "", captcha: "" });
        },
        () => {
          setStatus("Failed to send. Try again.");
        },
      );
  };

  return (
    <section className="py-12 lg:py-20 bg-[#0f172a] text-white px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Side */}
      <div
        className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md border border-white/20 flex flex-col justify-between"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {/* Top Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Get In Touch</h2>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center justify-between bg-[#1e293b] p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400" size={20} />
                <span>01774767981</span>
              </div>
              <button
                onClick={() => copyToClipboard("01774767981")}
                className="hover:text-cyan-400"
              >
                <Copy size={16} />
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between bg-[#1e293b] p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400" size={20} />
                <span>mhshohan04@gmail.com</span>
              </div>
              <button
                onClick={() => emailCopyToClipboard("mhshohan04@gmail.com")}
                className="hover:text-cyan-400"
              >
                <Copy size={16} />
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 bg-[#1e293b] p-4 rounded-xl border border-white/10">
              <IoLocationSharp className="text-cyan-400" size={20} />
              <span>Goalanda, Rajbari</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-3">Let’s Connect</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100007820023284"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#1e293b]
          hover:bg-cyan-600/20 transition border border-white/10 hover:border-cyan-400"
            >
              <Facebook size={18} />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mehedi-hasan-1a08b22b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5
 rounded-xl bg-[#1e293b] hover:bg-cyan-600/20 transition border border-white/10 hover:border-cyan-400"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/mehedihasanshohan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5
         rounded-xl bg-[#1e293b] hover:bg-cyan-600/20 transition
         border border-white/10 hover:border-cyan-400"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            <button
              onClick={() => {
                window.open("mailto:mhshohan04@gmail.com");
              }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#1e293b] hover:bg-cyan-600/20 transition border border-white/10 hover:border-cyan-400"
            >
              <Mail size={18} />
              <span>Email</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div
        className="bg-white/2 rounded-xl p-6 md:p-8 shadow-xl relative z-10 border border-white/20"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className="text-2xl font-semibold mb-3">Send Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-cyan-500" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-lg bg-[#1e293b] border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-cyan-500" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-lg bg-[#1e293b] border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="relative">
            <ShieldCheck
              className="absolute left-3 top-3 text-cyan-500"
              size={20}
            />
            <input
              type="text"
              name="captcha"
              placeholder="Type 'human'"
              value={form.captcha}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-lg bg-[#1e293b] border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="relative">
            <MessageCircle
              className="absolute left-3 top-3 text-cyan-500"
              size={20}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full pl-10 p-3 rounded-lg bg-[#1e293b] border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-700 cursor-pointer mt-4 hover:bg-cyan-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-yellow-300">{status}</p>}
      </div>
    </section>
  );
}
