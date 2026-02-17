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
    <section className="py-20 bg-[#0f172a] text-white px-6 grid lg:grid-cols-2 gap-6">
      {/* Left Side */}
      <div
        className="space-y-6 rounded-xl p-6 bg-white/2 relative z-20 border border-white/20"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className="text-2xl font-semibold ">Get In Touch</h2>
        <div className="space-y-3">
          <p className="flex items-center gap-2">
            <Phone className="text-cyan-400" size={18} />
            <span className="">
              <a href="tel:01774767981">01774767981</a>
            </span>
            <button
              onClick={() => copyToClipboard("01774767981")}
              className="text-cyan-300 hover:text-cyan-400"
              title="Copy phone number"
            >
              <Copy size={16} />
            </button>
          </p>
          <p className="flex items-center gap-2">
            <MdEmail className="text-cyan-400" size={18} />
            <a href="tel:+8801774767981">+8801774767981</a>

            <a href="mailto:mhshohan04@gmail.com">mhshohan04@gmail.com</a>

            <button
              onClick={() => emailCopyToClipboard("mhshohan04@gmail.com")}
              className="text-cyan-300 hover:text-cyan-400"
              title="Copy my email"
            >
              <Copy size={16} />
            </button>
          </p>
          <p className="flex items-center opacity-80 gap-2">
            <IoLocationSharp className="text-cyan-400" size={18} />
            <span className="">Thana: Goalanda; District: Rajbari</span>
          </p>
        </div>

        <div className="mt-4">
          <iframe
            title="Google Map"
            className="w-full h-48 rounded-xl border border-cyan-400"
            src="https://www.google.com/maps?q=Goalanda,Rajbari&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="border p-2 rounded-xl">
          <div className="font-bold text-xl">Follow Me</div>
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=100007820023284"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <Facebook />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mhshohan01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <Mail />
            </a>

            <a
              href="https://www.linkedin.com/in/mehedi-hasan-1a08b22b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <Linkedin />
            </a>

            <a
              href="https://github.com/mehedihasanshohan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div
        className="bg-white/2 rounded-xl p-6 shadow-xl relative z-10 border border-white/20"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className="text-2xl font-semibold mb-4">Send Message</h2>
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
