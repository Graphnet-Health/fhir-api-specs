import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Documentation",
    imageUrl: "img/documentation.png",
    target: "/docs",
    description: (
      <>
        Documentation on how to use the FHIR APIs, including authentication and
        the onboarding processes required.
      </>
    ),
  },
  {
    title: "FHIR API",
    imageUrl: "img/apiCloud.png",
    target: "docs/api/apiOverview",
    description: (
      <>
        A description of the specific FHIR APIs that have been implemented as
        part of the Graphnet CareCentic system.
      </>
    ),
  },
  {
    title: "FHIR Profiles",
    imageUrl: "img/profile.png",
    target: "docs/profiles/profileOverview",
    description: (
      <>
        Details of the FHIR profiles that have been used within the Graphnet
        FHIR APIs, including extension and terminology bindings.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img src={siteConfig.themeConfig.navbar.logo.src} />
          <h1 className="hero__title">{siteConfig.title}</h1>

          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}

          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
