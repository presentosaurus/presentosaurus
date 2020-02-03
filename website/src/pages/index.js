import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const codeSamples = [
  `<ps-presentation>
  <ps-slide>
    <h1>Presentation Title</h1>
  </ps-slide>
  <ps-slide>
    <h2>Slide Title</h2>
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  </ps-slide>
</ps-presentation>`,
  `# Presentation Title

---

## Slide Title

- First item
- Second item
- Third item

---

## Next Slide`,
  `$ npm install -g @presentosaurus/cli

$ presentosaurus start slides.md`
];

const features = [
  {
    title: <>HTML Presentation Framework</>,
    description: (
      <>
        <pre>
          <code className="language-html">{codeSamples[0]}</code>
        </pre>
      </>
    )
  },
  {
    title: <>Write your Presentation in Markdown</>,
    description: (
      <>
        <pre>
          <code className="language-md">{codeSamples[1]}</code>
        </pre>
      </>
    )
  },
  {
    title: <>Simple Command Line Interface</>,
    description: (
      <>
        <pre>
          <code className="language-shell">{codeSamples[2]}</code>
        </pre>
        <h3>Advantages of HTML Presentations</h3>
        <ul>
          <li>Easy to upload and share presentations</li>
          <li>Optimized for search engines</li>
          <li>Focus on your content instead of styling</li>
          <li>Git version controllable</li>
          <li>Great accessibility</li>
        </ul>
      </>
    )
  }
];

function Feature({ title, description }) {
  return (
    <div className={classnames("col col--4", styles.feature)}>
      <h3>{title}</h3>
      {description}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--primary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/getting-started")}
            >
              Get Started
            </Link>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=presentosaurus&repo=presentosaurus&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="160px"
              height="30px"
            ></iframe>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
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
