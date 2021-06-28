import styles from "../../../styles/welcomeCTA.module.css"

const WelcomeCTA = () => {
  return (
    <div className={styles.welcomeCTA}>
    <div className={styles.welcomeCTA_focus}>
      <h2>Focus on your data. Not the tools.</h2>
      <p>
        You need to run analyses on data, view the results, create
        visualizations, collaborate on your findings. Not build an
        infrastructure and become a software developer.<br/>
         The ChRIS platform provides a common infrastructure to which you can
        deploy...
      </p>
      </div>
      <div className={styles.welcomeCTA_youtube}>
       <iframe
            title="ChRIS video"
            src="https://www.youtube-nocookie.com/embed/dyFQD87jU68"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <p>
            {'"'}Creating ChRIS{'"'} is an upcoming video series by Red Hat films that
            focuses on the ChRIS project - its purpose, development, milestones.
          </p></div>
      <div className={styles.welcomeCTA_chris}>
        <h2>What is ChRIS?</h2>
        <p>
          ChRIS is an open source framework that utilizes cloud technologies to
          democratize medical analytics application development and enables
          healthcare organizations to keep owning their data while benefiting
          from public cloud processing capabilities.
        </p>
        <p>
          ChRIS uses Docker/containers, Kubernetes/OpenShift, and a set of other
          technologies to standardize healthcare application development.
          <a href="http://chrisproject.org/"> Learn More</a>
        </p>
      </div>
    </div>
  );
};

export default WelcomeCTA;
