// Hero component
import React from "react";
import clsx from "clsx";
import styles from "../style";
import { logobig } from "../assets"; 

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col ${styles.paddingY} ${styles.flexCenter} h-1/2`}>
      <div className={`header__circle-1`}></div>
      <div className={`header__circle header__circle-2`}></div>
      {/* <img src={logobig} alt="logobig" className={clsx("w-[400px] h-auto",  "floatAnimation")} /> */}
      <h1 className="font-visuletpro font-semibold text-[52px] text-black leading-[75px] text-center mt-8">
        <span className="text-gradient">Historical Linguistics App</span>{" "}
      </h1>

      <h1 className={clsx("font-visuletpro font-semibold text-[52px] text-black leading-[75px] text-center mt-8", "colorChange")}>
        Cognate Finder
      </h1>
      <p className={`${styles.paragraph} max-w-[60%] mt-5 text-center`}>
        An innovative tool for finding cognates and reconstructing proto-languages using advanced machine learning algorithms. This application is designed to accelerate linguistic studies and give researchers insights into the evolution of languages.
      </p>
    </section>
  );
};

export default Hero;

