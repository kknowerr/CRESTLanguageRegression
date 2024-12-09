import React from "react";
import clsx from "clsx";
import styles from "../style";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-offwhite-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={clsx("font-visuletpro font-semibold text-[40px] text-black leading-[75px] mt-8", "colorChange")}>
        Contact me
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get in touch with me if you have questions, comments, or would like to work with me!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href="mailto:jacobatrevino@example.com" className="rounded-full inline-block bg-blue-700 text-white text-center rounded py-2 px-8 hover:bg-zinc-950	">
        Email Me
      </a>
    </div>
  </section>
);

export default CTA;
