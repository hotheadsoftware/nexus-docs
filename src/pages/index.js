import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      /* Customize in src/pages/index.module.css */
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            From Idea to App in Under 5 Minutes ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Saas Launchpad`}
      description="Nexus Saas Launchpad Documentation">
      <HomepageHeader />
      <main>
        <div style={{ textAlign: 'center', marginTop: '3em' }}>
            <h3>
                Nexus integrates the following components. No endorsement is implied on their behalf:
            </h3>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
