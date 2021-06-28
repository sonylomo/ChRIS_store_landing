import { Button } from "react-bootstrap";
import styles from "../../../styles/welcomeDevelopers.module.css";
import Image from "next/image";
import Brainy from "../../../public/img/brainy_welcome-pointer.png";

const WelcomeDevelopers = () => {
  return (
    <div className={styles.welcomeDevelopers}>
      <h1>Expand the reach of your image processing software</h1>
      <div className={styles.welcomeDevelopers_text}>
        <div className={styles.welcomeDevelopers_text_left}>
          <Image src={Brainy} alt="brainy pointer" />
        </div>
        <div className={styles.welcomeDevelopers_text_right}>
          <p>
            ChRIS is an open source platform for medical analytics in the cloud,
            democratizing the development and usage of image processing software
            within an ecosystem following common standards..
          </p>
          <p>
            A ChRIS developer account enables you to share your analysis
            workflows as containerized software with the ChRIS community of
            researchers and clinicians. Join us!
          </p>
          <Button variant="primary" style={{width: "40%"}} >Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDevelopers;
