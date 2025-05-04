// src/components/Hero.jsx
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="overlay" />
      <div className="hero-content">
        <h1>Hello, I’m <span className="highlight">Mehedi Hasan Shohan</span></h1>
        <p className="tagline">Frontend Developer & Lifelong Learner</p>
        <button className="cta-button">View My Work</button>
      </div>
    </section>
  );
};

export default Hero;
