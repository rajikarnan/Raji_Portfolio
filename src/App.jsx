import styles from "./App.module.css";
import { Gettoknowme } from "./components/GetToKnowMe/GetToKnowMe";
import { Hireme } from "./components/HireMe/Hireme";
import { Work_history } from "./components/Work_history/Work_history";
import { Dev } from "./components/Dev/Dev";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Dev />
      <div
        className={styles.curve}
        style={{ marginBottom: "0px", zIndex: 2, position: "relative" }}
      >
        <svg
          viewBox="0 0 1440 100"
          width="100%"
          height="100"
          preserveAspectRatio="none"
          style={{ transform: "scaleX(-1) scaleY(-1)", display: "block" }}
        >
          <path
            d="M0,100 C480,0 960,100 1440,0 L1440,0 L0,0 Z"
            fill="rgba(12, 12, 12, 0.6)"
          />
        </svg>
      </div>
      <Gettoknowme />
      <div className={styles.curve} style={{ marginBottom: "-1px" }}>
        <svg
          viewBox="0 0 1440 100"
          width="100%"
          height="100"
          preserveAspectRatio="none"
          style={{ transform: "scaleY(1)", display: "block" }}
        >
          <path
            d="M0,100 C480,0 960,100 1440,0 L1440,0 L0,0 Z"
            fill="rgba(12, 12, 12, 0.6)"
          />
        </svg>
      </div>
      <Work_history />
      <Projects />
      <div className={styles.curve} style={{ marginBottom: "-1px" }}>
        <svg
          viewBox="0 0 1440 100"
          width="100%"
          height="100"
          preserveAspectRatio="none"
          style={{ transform: "scaleY(-1)", display: "block" }}
        >
          <path
            d="M0,100 C480,0 960,100 1440,0 L1440,0 L0,0 Z"
            fill="rgba(12, 12, 12, 0.6)"
          />
        </svg>
      </div>
      <Hireme />
    </div>
  );
}

export default App;
