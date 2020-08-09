import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Features, Folio, Gallery, Hero, Services } from './components';

import { folio, services, features, gallery } from './data';
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import clsx from 'clsx';

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
      <Typography
              className={clsx('section-header__title', classes.title, {})}
              {...{
                className: clsx(classes.title, classes.textWhite),
                variant: 'h3', color: 'textPrimary', align: 'center', gutterBottom: 'true',
              }}
            >
             My Company
            </Typography>
        <Folio data={folio} />
      </Section>
      <SectionAlternate id="my-skills">
        <Services data={services} />
      </SectionAlternate>
      <Section id="education">
        <Features data={features} />
      </Section>
      <Section id="projects">
      <Typography
              className={clsx('section-header__title', classes.title, {})}
              {...{
                className: clsx(classes.title, classes.textWhite),
                variant: 'h3', color: 'textPrimary', align: 'center', gutterBottom: 'true',
              }}
            >
             Experience and Portfolio
            </Typography>
        <Gallery data={gallery} />
      </Section>
      <Divider />
    </div>
  );
};

export default PortfolioPage;
