import styles from "../../styles/footer.module.css"
import Image from "next/image";
import chrisLogo from "../../public/img/chris_logo-white.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_row}>
        <div className={styles.footer_logo}>
          <Image src={chrisLogo} alt="ChRIS Plugin Store" />
        </div>
        <div className={styles.footer_body}>
          <div className={styles.footer_desc}>
            ChRIS is developed by Boston Children{"'"}s Hospital in partnership
            with Red Hat, the Massachusetts Open Cloud (MOC), and Boston
            University.
          </div>
          <div className={styles.footer_links}>
            <div className={styles.footer_link}>
              <a href="https://chrisproject.org">About ChRIS</a>
            </div>
            <div className={styles.footer_link}>
              <a href="/quickstart">Submit your plugin</a>
            </div>
            <div className={styles.footer_link}>
              <a href="mailto:dev@babyMRI.org?subject=Contact from ChRIS Store">
                Contact Us
              </a>
            </div>
            <div className={styles.footer_link}>
              <a href="https://github.com/FNNDSC/ChRIS_store_ui/issues/new">
                Report an Issue
              </a>
            </div>
            <div className={styles.footer_link}>
              <a href="https://github.com/FNNDSC/ChRIS_store_ui">Contribute</a>
            </div>
            <div className={styles.footer_link}>
              <a href="mailto:dev@babyMRI.org?subject=ChRIS Store Plugin Request">
                Request a plugin
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_copyight}>
        © 2018 - {new Date().getFullYear()} Boston Children{"'"}s Hospital, Red
        Hat, Massachusetts Open Cloud, Boston University. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
