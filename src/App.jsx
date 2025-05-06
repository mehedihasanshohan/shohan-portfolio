import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import SkillGalaxy from './components/Skills/SkillGalaxy';
import Contact from './components/Contact/Contact';
function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
    <Navbar />

    <section id="home" className="h-screen text-white p-10"><Hero></Hero></section>
    <section id="skills" className="h-screen text-white p-10"><SkillGalaxy></SkillGalaxy></section>
    {/* <section id="projects" className="h-screen text-white p-10">Projects Section</section> */}
    <section id="contact" className="h-screen text-white p-10"><Contact></Contact></section>
  </div>

  )
}

export default App
