import styles from "../../../styles/home/welcomeFeature.module.css";
import Image from "next/image";

const WelcomeFeature = ({ img, name, url, ...props }) => (
  <div {...props}>
    <div className={styles.welcome_feature}>
      <a href={url}>
        <Image src={img} alt={name} className={styles.welcome_feature_img} />
      </a>
      <div className={styles.welcome_feature_text}>{name}</div>
    </div>
  </div>
);

export default WelcomeFeature;
