import styles from "../../styles/submit_plugins/submit_plugins.module.css";
import Step_Card from "./Steps/Step_Card";
// import SideBar from "./Steps/Side_Bar";
import SideTab from "./Steps/SideTab";

const Submit_Plugins = () => {
  return (
    <div>
      <h1 className={styles.submit_plugins_main_title}>
        <span>Get Started: </span>Learn how ChRIS works
      </h1>
      <p className={styles.submit_plugins_main_text}>
        Welcome to ChRIS Store! The goal of this tutorial is to guide you
        through getting up and running with ChRIS. Along the way, you'll learn
        how to create a plugin in ChRIS Store, as well as some general web
        development topics.
      </p>
      <hr style={{ width: "90%", marginBottom: "2.5rem" }} />
      <div className={styles.submit_plugins_right}>
        <div className={styles.submit_plugins_steps}>
          <Step_Card
            Title="0. Setting Up ChRIS Environment for Development"
            Pagelink="step-0"
          />
          <Step_Card Title="1. Create a ChRIS plugin" Pagelink="step-1" />
          <Step_Card
            Title="2. Register a Plugin to ChRIS Store"
            Pagelink="step-2"
          />
          <Step_Card
            Title="3. Add a Plugin From ChRIS store to ChRIS"
            Pagelink="step-3"
          />
          <Step_Card Title="4. Architecture of ChRIS." Pagelink="step-4" />
        </div>
      </div>
    </div>
  );
};

export default Submit_Plugins;
