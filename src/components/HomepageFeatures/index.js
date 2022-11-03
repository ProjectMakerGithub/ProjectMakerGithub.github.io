import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Travail d\'équipe !',
    Svg: require('@site/static/img/undraw_teamwork_hpdk.svg').default,
    description: (
      <>
        Besoin d'aide ? Travaillez en équipe pour booster vos projets.
      </>
    ),
  },
  {
    title: 'D\'étendez-vous',
    Svg: require('@site/static/img/undraw_young_and_happy_hfpe.svg').default,
    description: (
      <>
        Concentrez-vous sur ce qui compte. ProjectMaker met en place une documentation pour trouver rapidement les informations dont vous avez le + besoin.
      </>
    ),
  },
  {
    title: 'Un projet au top',
    Svg: require('@site/static/img/undraw_online_collaboration_re_bkpm.svg').default,
    description: (
      <>
        Demandé.e des avis sur votre projet pour pouvoir le faire évoluer.
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
