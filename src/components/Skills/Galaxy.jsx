import React from 'react';
import Skill from './Skill';

const skillsData = [
  { name: 'HTML', icon: 'html5', orbitDuration: '15s', color: 'bg-orange-500', distance: 150 },
  { name: 'CSS', icon: 'css3-alt', orbitDuration: '20s', color: 'bg-blue-500', distance: 200 },
  { name: 'JavaScript', icon: 'js-square', orbitDuration: '25s', color: 'bg-yellow-500', distance: 250 },
  { name: 'React', icon: 'react', orbitDuration: '30s', color: 'bg-cyan-400', distance: 300 },
  { name: 'MongoDB', icon: 'database', orbitDuration: '35s', color: 'bg-green-500', distance: 350 },
];

const Galaxy = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Sun (Web) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 w-32 h-32 rounded-full shadow-xl animate-pulse"></div>

      {/* Planets (Skills) */}
      {skillsData.map((skill, index) => (
        <Skill
          key={index}
          name={skill.name}
          icon={skill.icon}
          orbitDuration={skill.orbitDuration}
          color={skill.color}
          distance={skill.distance}
        />
      ))}

      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 150 }).map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 100 + 50}s`,
              animationDelay: `${Math.random() * 100}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Galaxy;
