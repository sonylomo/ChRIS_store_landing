import styles from "../../../styles/home/welcome.module.css";
import WelcomeFeature from "../Welcome/WelcomeFeature"
import freesurferLogo from "../../../public/plugins/freesurfer_90.png"
import infantLogo from "../../../public/plugins/infant_90.png"
import biomediaLogo from "../../../public/plugins/biomedia_90.png"
import antLogo from "../../../public/plugins/ant_90.png"
import civetLogo from "../../../public/plugins/civet_90.png"

const WelcomePage = () => {
  return (
    <div className={styles.welcome}>
      <h1>ChRIS Store</h1>
      <h3>
        Accessible medical imaging using the latest research innovations, backed
        by cloud-based computing power.
      </h3>
      <div className={styles.welcome_featured_container}>
        <WelcomeFeature
          name="Fastsurfer"
          img={freesurferLogo}
          url="https://chrisstore.co/plugin/44"
        />
        <WelcomeFeature
          name="Infant-FreeSurfer"
          img={infantLogo}
          url="https://chrisstore.co/plugin/78"
        />
        <WelcomeFeature
          name="IRTK reconstruction"
          img={biomediaLogo}
          url="https://chrisstore.co/plugin/85"
        />
        <WelcomeFeature
          name="N4 Bias Field Correction"
          img={antLogo}
          url="https://chrisstore.co/plugin/77"
        />
        <WelcomeFeature
          name="Civet"
          img={civetLogo}
          url="https://chrisstore.co/plugin/2"
        />
      </div>
    </div>
  );
};

export default WelcomePage