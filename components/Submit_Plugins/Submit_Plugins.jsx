import { Nav } from "react-bootstrap";
import styles from "../../styles/submit_plugins/submit_plugins.module.css"
import Step_Card from "./Steps/Step_Card";

const Submit_Plugins = () => {
  return (
    <div className={styles.submit_plugins}>
      <div className={styles.submit_plugins_sidebar}>
          {/* fix active link 
            change link color */}
        <Nav defaultActiveKey="link-0" className="flex-column"> 
          <Nav.Link  eventKey="link-0" href="/step-0">Step 0</Nav.Link>
          <Nav.Link eventKey="link-1" href="/step-1">Step 1</Nav.Link>
          <Nav.Link eventKey="link-2" href="/step-2">Step 2</Nav.Link>
          <Nav.Link eventKey="link-3" href="/step-3">Step 3</Nav.Link>
          <Nav.Link eventKey="link-4" href="/step-4">Step 4</Nav.Link>
        </Nav>
      </div>
      <div className={styles.submit_plugins_steps}>
          All steps go here:
          <Step_Card />
      </div>
    </div>
  );
};

export default Submit_Plugins;
