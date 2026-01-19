/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const DecryptedText = ({
  text,
  speed = 100,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  animateOn = 'hover', // 'hover' or 'view'
  ...props
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let interval;
    let currentIteration = 0;

    const startAnimation = () => {
      interval = setInterval(() => {
        setDisplayText((prevText) =>
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (isRevealed || currentIteration >= maxIterations) return text[index];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        currentIteration++;
        if (currentIteration >= maxIterations) {
          setIsRevealed(true);
          clearInterval(interval);
        }
      }, speed);
    };

    if (animateOn === 'view' && !hasAnimated) {
        // Simple Intersection Observer for 'view' animation
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            setHasAnimated(true);
            observer.disconnect();
          }
        });
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }

    if (animateOn === 'hover' && isHovering) {
      startAnimation();
    } else if (animateOn === 'hover' && !isHovering) {
      setDisplayText(text);
      setIsRevealed(false);
    }

    return () => clearInterval(interval);
  }, [isHovering, text, speed, maxIterations, characters, animateOn, isRevealed, hasAnimated]);

  return (
    <span
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
};

export default DecryptedText;