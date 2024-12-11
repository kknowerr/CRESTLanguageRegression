import styles from "./style";
import { Navbar, InputForm, Output, Preloader, Footer, Hero } from "./components";

const App = () => (
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
    
    {/* Description Section */}
    <section className={`${styles.paddingY} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} flex flex-col items-center`}>
        <h2 className="font-visuletpro font-semibold text-[32px] text-black leading-[40px] text-center mb-5">
          About this Application
        </h2>
        <p className="text-center max-w-[700px] text-[18px] leading-[28px] text-black">
          The application accepts two input languages in the form of word lists and employs linguistic processes to break 
          the words into their constituent phonemes. Using historical linguistic patterns and methods, it reconstructs 
          proto-phonemes, which are then compiled into proto-words. Finally, the app generates and returns the proto-language 
          derived from this analysis.
        </p>
      </div>
    </section>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <InputForm />
        <Output />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;