import React from "react";
import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import styles from "../../../../styles/welcomeCategory.module.css";

const WelcomeCategory = ({ category, ...props }) => (
  <div {...props}>
    <Card className={styles.welcome_category}>
      <Card.Title className={styles.welcome_category_header}>
        {category.name}
      </Card.Title>
      <Card.Body>
        {category.items.map(({ name, desc, img, tags }) => (
          <div className={styles.welcome_category_item} key={name}>
            <Image
              src={img}
              alt={name}
              className={styles.welcome_category_item_img}
            />
            <div className={styles.welcome_category_item_body}>
              <div className={styles.welcome_category_item_name}>{name}</div>
              <div className={styles.welcome_category_item_desc}>{desc}</div>
              <div className={styles.welcome_category_item_tags}>
                {tags.join(" ")}
              </div>
            </div>
          </div>
        ))}
      </Card.Body>
      <Card.Footer>
        <Button  variant="primary">View More ...</Button>
      </Card.Footer>
    </Card>
  </div>
);

export default WelcomeCategory;
