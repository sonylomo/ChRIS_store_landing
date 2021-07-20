import Step0 from "components/Submit_Plugins/Steps/step-0";
import Step1 from "components/Submit_Plugins/Steps/step-1";
import Step2 from "components/Submit_Plugins/Steps/step-2";
import Step3 from "components/Submit_Plugins/Steps/step-3";
import Step4 from "components/Submit_Plugins/Steps/step-4";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import styles from "../../../styles/submit_plugins/submit_plugins.module.css";
import Submit_Plugins from "../Submit_Plugins";
import Docs1 from "../Steps/step-0.mdx";

const SideTab = () => {
  return (
    <>
      <Tab.Container defaultActiveKey="submitplugin">
        <Row>
          <Col sm={3}>
            <Nav className={`flex-column ${styles.tabbar}`} style={{paddingTop: "2.5rem", paddingLeft: "2.5rem"}}>
              <Nav.Item className={styles.tabbar_title}>
                <Nav.Link eventKey="submitplugin" >Get Started</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="step0">
                  0. Setting Up ChRIS Environment for Development
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="step1">1. Create a ChRIS plugin</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="step2">
                  2. Register a Plugin to ChRIS Store
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="step3">
                  3. Add a Plugin From ChRIS store to ChRIS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="step4">4. Architecture of ChRIS.</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className={styles.submit_plugins_main}>
              <Tab.Pane eventKey="submitplugin">
                <Submit_Plugins />
              </Tab.Pane>
              <Tab.Pane eventKey="step0">
                <Docs1 />
              </Tab.Pane>
              <Tab.Pane eventKey="step1">
                <Step1 />
              </Tab.Pane>
              <Tab.Pane eventKey="step2">
                <Step2 />
              </Tab.Pane>
              <Tab.Pane eventKey="step3">
                <Step3 />
              </Tab.Pane>
              <Tab.Pane eventKey="step4">
                <Step4 />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default SideTab;
