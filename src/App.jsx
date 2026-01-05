import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import SkillsSection from './components/Skills/SkillsSection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import AboutMe from './components/About/AboutMe';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <Toaster position='top-right'></Toaster>
      {/* <div className="min-h-screen bg-gradient-to-br from-[#1e293b] to-[#0f172a]"> */}
         {/* <Navbar /> */}
        <section className=''><Navbar></Navbar></section>
        <section id="home" className=""><Hero></Hero></section>
        <section><AboutMe></AboutMe></section>
        <section id="skills" className=""><SkillsSection></SkillsSection></section>
        <section id="projects" className=""><Projects></Projects></section>
        <section id="experience" className=" "><Education></Education></section>
        <section id="contact" className=" "><Contact></Contact></section>
        <section id='footer'><Footer></Footer></section>
      {/* </div> */}
    </>
  )
}

export default App
