import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import Contact from './components/Contact/Contact';
import { Toaster } from 'react-hot-toast';
import Education from './components/Education/Education';
import SkillsSection from './components/Skills/SkillsSection';
import Footer from './components/Footer/Footer';
import GitHubStats from './components/Github/GitHubStats';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);


  return (
    <>
      <Toaster position='top-right'></Toaster>
      {/* <div className="min-h-screen bg-gradient-to-br from-[#1e293b] to-[#0f172a]"> */}
         {/* <Navbar /> */}
        <section id='home' className=''><Navbar></Navbar></section>
        <section id="home" className=""><Hero></Hero></section>
        <section id="skills" className=""><SkillsSection></SkillsSection></section>
        {/* <section id="projects" className="h-screen text-white p-10">Projects Section</section> */}
        <section id="experience" className=" "><Education></Education></section>
        {/* <section  id='github'><GitHubStats></GitHubStats></section> */}
        <section id="contact" className=" "><Contact></Contact></section>
        <section id='footer'><Footer></Footer></section>
      {/* </div> */}
    </>
  )
}

export default App
