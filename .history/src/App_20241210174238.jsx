import React, { useState } from "react";
import styles from "./style";
import { Navbar, InputForm, Output, Preloader, Footer, Hero } from "./components";

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <InputForm onResult={setResult} />
          <Output result={result} />
          <Footer />
        </div>
      </div>
    </div>
  );
};
