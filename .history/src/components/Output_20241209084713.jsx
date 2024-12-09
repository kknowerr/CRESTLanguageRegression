// Output component
import React from "react";
import styles from "../style";

const Output = ({ result }) => {
  return (
    <section id="output" className={`${styles.paddingY} ${styles.flexCenter}`}>
      <div className={`flex flex-col items-center w-full max-w-[500px]`}>
        <h2 className="font-visuletpro font-semibold text-[32px] text-black leading-[40px] text-center mb-5">
          Reconstructed Proto-language Word
        </h2>
        <div className="w-full p-4 border border-gray-300 rounded-md text-center bg-gray-100">
          {result || "No result yet"}
        </div>
      </div>
    </section>
  );
};

export default Output;