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
        <section><Navbar></Navbar></section>
        <section id="home"><Hero></Hero></section>
        <section id="projects"><Projects></Projects></section>
        <section id="skills"><SkillsSection></SkillsSection></section>
        <section id="experience"><Education></Education></section>
        <section id='about'><AboutMe></AboutMe></section>
        <section id="contact"><Contact></Contact></section>
        <section id='footer'><Footer></Footer></section>
    </>
  )
}

export default App
