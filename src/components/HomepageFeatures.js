import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Pazari is a simple to use, yet powerful, selling and buying digital assets.
       web3 , decentralized, and secure.
      </>
    ),
  },
  {
    title: 'Goodbye Web2 Publication',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Pazari brings new feaures like selling only one copy exclusive 
       or sell as many as you want powered by blazing fast AVAX network. 
      </>
    ),
  },
  {
    title: 'Powered by Moralis and Avax',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Pazari is powered by Moralis and Avax, which allows us to scale properly.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
