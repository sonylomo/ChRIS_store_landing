import { Nav } from "react-bootstrap";
import styles from "../../../styles/submit_plugins/side_bar.module.css";

const SideBar = ({ children }) => {
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
      <div className={styles.submit_plugins_main}>{children}</div>
    </div>
  );
};

export default SideBar;
