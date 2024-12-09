import React, { useState, useEffect } from 'react';
import './Preloader.css';
import gsap from "gsap";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000); // Extend the animation duration here (in milliseconds)
  
    const progressTimer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(progressTimer);
          
          gsap.to('.preloader__top-block', { y: "-100%", duration: 1, ease: "power3.inOut" });
          gsap.to('.preloader__bottom-block', { y: "100%", duration: 1, ease: "power3.inOut" });
  
          setTimeout(() => {
            gsap.to('#preloader__name', { autoAlpha: 0, duration: 0.5 });
            gsap.to('#preloader__progress', { autoAlpha: 0, duration: 0.5 });
          }, 800); // Delay before name and progress bar disappear
  
          setTimeout(() => {
            setLoading(false); // This will cause the component to re-render and since loading is false, null will be returned, effectively removing the preloader from the DOM
          }, 6000); // Delay before removing the Preloader component (in milliseconds)
  
          return 100;
        }
  
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 30); // Adjust the interval for updating the progress (in milliseconds)
  
    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);
  

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader__top-block"></div>
      <div className="preloader__bottom-block"></div>
      <div id="preloader__wrapper">
        <div id="preloader__name-wrapper">
          <h6 id="preloader__name">JACOB TREVINO</h6>
        </div>
        <div id="preloader__progress">
        <div
  id="preloader__bar"
  style={{ width: `${progress}%`, transformOrigin: 'left center' }}
></div>
          <div className="preloader__track"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
