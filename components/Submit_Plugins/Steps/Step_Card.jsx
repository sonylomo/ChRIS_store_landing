import { Card } from "react-bootstrap";
import styles from "../../../styles/submit_plugins/step_card.module.css";
import Link from "next/link";
import { ArrowRightAlt } from "@material-ui/icons";

const StepCard = ({ Title, Body, Pagelink, ...props }) => {
  return (
    <div {...props}>
      <Card style={{ width: "22rem" }} className={styles.step_card}>
        <Card.Body>
          <Link href={`/submit-plugins/${Pagelink}`}>
            <Card.Title>
              <Card.Link className={styles["card-link"]}>{Title} <ArrowRightAlt /></Card.Link> 
            </Card.Title>
          </Link>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepCard;
