// src/components/Hero.jsx
import './Hero.css';
import profileImg from '../assets/profile.jpg'; // replace with your image path

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="hero-name">Mehedi Hasan Shohan</h1>
        <h2 className="hero-title">Frontend Developer</h2>
        <p className="hero-description">
          I build responsive and modern web applications with clean UI, animations, and performance in mind.
        </p>
      </div>
      <div className="hero-right">
        <div className="photo-card">
          <img src={profileImg} alt="Mehedi Hasan Shohan" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
