import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Facebook,
  Mail,
  Linkedin,
  MapPin,
  Phone,
  User,
  MessageCircle,
  ShieldCheck
} from "lucide-react";

export default function Contact() {
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
      setStatus("❌ Captcha failed. Type 'human' correctly.");
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
        "6zohXLugFlnauyF6x"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "", captcha: "" });
        },
        () => {
          setStatus("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 py-12 flex flex-col md:flex-row gap-10 justify-center items-center">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-cyan-400">Get In Touch</h2>
        <div className="space-y-3 text-sm">
          <p className="flex items-center gap-2">
            <MapPin className="text-cyan-300" size={18} />
            <span>Thana: Goalanda, District: Rajbari</span>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="text-cyan-300" size={18} />
            <span>01985545365</span>
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

        <div className="flex gap-4 mt-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <Facebook />
          </a>
          <a href="mailto:mhshohan01@gmail.com" className="hover:text-cyan-400">
            <Mail />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <Linkedin />
          </a>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2 bg-[#0f172a] rounded-xl p-6 shadow-xl border border-cyan-400">
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">Send Message</h2>
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
              className="w-full pl-10 p-3 rounded-lg bg-[#1e293b] border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
              className="w-full pl-10 p-3 rounded-lg bg-[#1e293b] border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="relative">
            <ShieldCheck className="absolute left-3 top-3 text-cyan-500" size={20} />
            <input
              type="text"
              name="captcha"
              placeholder="Type 'human'"
              value={form.captcha}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-lg bg-[#1e293b] border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 text-cyan-500" size={20} />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full pl-10 p-3 rounded-lg bg-[#1e293b] border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-yellow-300">{status}</p>}
      </div>
    </section>
  );
}
