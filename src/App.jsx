import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Galaxy from './components/Skills/Galaxy';
import './index.css'
import '../src/App.css'
function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
    <Navbar />

    <section id="home" className="h-screen text-white p-10"><Hero></Hero></section>
    <section id="skills" className="h-screen text-white p-10"><Galaxy></Galaxy></section>
    {/* <section id="projects" className="h-screen text-white p-10">Projects Section</section> */}
    {/* <section id="contact" className="h-screen text-white p-10">Contact Section</section> */}
  </div>

  )
}

export default App
