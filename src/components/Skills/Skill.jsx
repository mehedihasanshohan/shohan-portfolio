import React from 'react';

const Skill = ({ name, icon, orbitDuration, color, distance }) => {
  return (
    <div
      className={`absolute ${color} w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-white text-xl`}
      style={{
        animation: `orbit ${orbitDuration} infinite linear`,
        top: `calc(50% - ${distance}px)`,
        left: `calc(50% - ${distance}px)`,
      }}
    >
      <i className={`fab fa-${icon} text-2xl`} />
    </div>
  );
};

export default Skill;
