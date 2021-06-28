import { CardGroup } from "react-bootstrap";
import styles from "../../../../styles/welcomeCategories.module.css";
import sampleCategories from "../WelcomeCategory/SampleCategories";
import WelcomeCategory from "../WelcomeCategory/WelcomeCategory";

const WelcomeCategories = () => {
  return (
    <div className={styles.welcomeCategories}>
      <h2>Browse our catalog of tools ready to deploy to ChRIS</h2>
      {/* <div className={styles.welcomeCategories_container}> */}
      <CardGroup className={styles.welcomeCategories_container}>
        {sampleCategories.map((category) => (
          <WelcomeCategory category={category} key={category.name} />
        ))}
      </CardGroup>
      {/* </div> */}
    </div>
  );
};

export default WelcomeCategories;
