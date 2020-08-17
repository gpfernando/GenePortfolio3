import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(7),
    },
  },
  image: {
    minHeight: 400,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  textWhite: {
    color: 'white',
  },
  // title: {
  //   fontWeight: 'bold',
  // },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
  },
  disableGutter: {
    marginBottom: 0,
  },
  title: {
    fontWeight: 'bold',
  },
  cta: {
    marginLeft: theme.spacing(1),
    '&:first-child': {
      marginLeft: theme.spacing(0),
    },
  },
  img: {
    width:'100%',
    margin: '0 auto',
    maxWidth: 160,
    // transform: 'translate3d(0, -50%, 0)',
    boxShadow: '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    borderRadius: '50% !important',
    [theme.breakpoints.down('sm')]: {
      height: '140px',
    },
  },
  description: {
    margin: '0 auto',
    maxWidth: '75%'
  }
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Image
        src="/images/background/bokeh.jpg"
        srcSet="/images/background/bokeh.jpg 2x"
        alt="About"
        className={classes.image}
      />
      <Section className={classes.section}>
        <Grid
          container
          spacing={5}
          data-aos={'fade-up'}
          className={clsx(
            'section-header',
            classes.disableGutter,
            className,
          )}
          {...rest}
        >
          <Grid
            item
            xs={12}
            className="section-header__title-wrapper"
            align="center"
          >
            <img
              src="/images/mypic.971afaf5.jpg"
              alt="my pic"
              className={clsx(classes.img)}
            />
          </Grid>

          <Grid item xs={12} className="section-header__title-wrapper">
            <Typography
              variant={'h4'}
              align={'center'}
              className={clsx('section-header__title', classes.title, {})}
              color="textPrimary"
              {...{
                className: clsx(classes.title, classes.textWhite),
                variant: 'h3',
              }}
            >
              Gene Fernando
            </Typography>
          </Grid>
          <Grid item xs={12} className="section-header__subtitle-wrapper">
            <Typography
              variant={'h4'  }
              align={'center'}
              color={'textSecondary'}
              className="section-header__subtitle"
              {...{
                className: classes.textWhite,
              }}
            >
              Full Stack Web Developer
            </Typography>
          </Grid>

          <Grid item xs={12} className="section-header__subtitle-wrapper">
            <div className={classes.description}>
              <Typography
                variant={'h5'}
                align={'center'}
                color={'textSecondary'}
                className="section-header__subtitle"
                {...{
                  className: classes.textWhite,
                }}
              >
                An accomplished leader with expert technical skills in Web
                Development and extensive experience in Program Management
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;

