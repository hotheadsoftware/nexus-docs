import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: 'Laravel 10+',
    Svg: require('@site/static/img/laravel.svg').default,
    description: (
      <>
          Based on the latest version of <Link to={"https://laravel.com"}>Laravel</Link>, Nexus gives you the benefit
          of using a massive open-source project as the foundation. A broad and
          deep ecosystem is at your fingertips.
      </>
    ),
  },
  {
    title: 'Filament 3',
    Svg: require('@site/static/img/filament.svg').default,
    description: (
      <>
          We provide 3 <Link to={"https://filamentphp.com"}>Filament</Link> panels out of the box to cover the most
          common Saas use-case: management, subscription, and operation.
          Our light-touch philosophy means Nexus is easy to extend.
      </>
    ),
  },
  {
    title: 'Tenancy For Laravel',
    Svg: require('@site/static/img/tenancyforlaravel.svg').default,
    description: (
      <>
           Take <Link to={"https://tenancyforlaravel.com"}>multi-tenancy</Link> to the next level by automatically creating
           and managing new tenant databases for each. This provides total
           data isolation and security for your clients and makes moving
           them to dedicated hardware a much easier lift.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
