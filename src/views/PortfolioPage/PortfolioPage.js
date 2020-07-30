import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Features, Folio, Gallery, Hero, Services } from './components';

import { folio, services, features, gallery } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const PortfolioPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Section id="my-company">
        <Folio data={folio} />
      </Section>
      <SectionAlternate id="my-skills">
        <Services data={services} />
      </SectionAlternate>
      <Section id="projects">
        <Features data={features} />
      </Section>
      <Section id="education">
        <Gallery data={gallery} />
      </Section>
      <Divider />
    </div>
  );
};

export default PortfolioPage;
