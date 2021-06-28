import { Nav } from "react-bootstrap";
import styles from "../../styles/submit_plugins/submit_plugins.module.css";
import Step_Card from "./Steps/Step_Card";

const Submit_Plugins = () => {
  return (
    <div className={styles.submit_plugins}>
      <div className={styles.submit_plugins_sidebar}>
        {/* fix active link 
            change link color */}
        <Nav
          defaultActiveKey="/submit-plugins/step-0"
          className="flex-column justify-content-center"
        >
          <Nav.Link
            eventKey="link-0"
            href="/submit-plugins/step-0"
            className={styles.submit_plugins_sidebar_link}
          >
            0. Setting Up ChRIS Environment for Development
          </Nav.Link>
          <Nav.Link
            eventKey="link-1"
            href="/submit-plugins/step-1"
            className={styles.submit_plugins_sidebar_link}
          >
            1. Create a ChRIS plugin
          </Nav.Link>
          <Nav.Link
            eventKey="link-2"
            href="/submit-plugins/step-2"
            className={styles.submit_plugins_sidebar_link}
          >
            2. Register a Plugin to ChRIS Store
          </Nav.Link>
          <Nav.Link
            eventKey="link-3"
            href="/submit-plugins/step-3"
            className={styles.submit_plugins_sidebar_link}
          >
            3. Add a Plugin From ChRIS store to ChRIS
          </Nav.Link>
          <Nav.Link
            eventKey="link-4"
            href="/submit-plugins/step-4"
            className={styles.submit_plugins_sidebar_link}
          >
            4. Architecture of ChRIS.
          </Nav.Link>
        </Nav>
      </div>
      <div className={styles.submit_plugins_main}>
        <h1>
          <span>Get Started: </span>Learn how ChRIS works
        </h1>
        <p>
          Welcome to ChRIS Store! The goal of this tutorial is to guide you
          through getting up and running with ChRIS. Along the way, you'll learn
          how to create a plugin in ChRIS Store, as well as some general web
          development topics.
        </p>
        <hr style={{ width: "90%", marginBottom: "2.5rem" }} />
        <div className={styles.submit_plugins_steps}>
          <Step_Card Title="0. Setting Up ChRIS Environment for Development" Pagelink="step-0" />
          <Step_Card Title="1. Create a ChRIS plugin" Pagelink="step-1" />
          <Step_Card Title="2. Register a Plugin to ChRIS Store" Pagelink="step-2" />
          <Step_Card Title="3. Add a Plugin From ChRIS store to ChRIS" Pagelink="step-3" />
          <Step_Card Title="4. Architecture of ChRIS." Pagelink="step-4" />
        </div>
      </div>
    </div>
  );
};

export default Submit_Plugins;
