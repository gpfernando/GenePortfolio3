import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, colors } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Services = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <SectionHeader
        title="My Skills"
        subtitle="              I am an accomplished leader with expert technical skills in Web
        Development and extensive experience in program management.
        I effectively design and maintain IT processes, infrastructure and
        applications. My web application designs focus on a memorable
        user experience. I specialize in creating effective user
        interaction using React and Material-UI."
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        fadeUp
      />
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={4}
            data-aos="fade-up"
          >
            <DescriptionListIcon
              icon={
                <IconAlternate
                  fontIconClass={item.icon}
                  color={colors.indigo}
                />
              }
              title={item.title}
              subtitle={item.description}
              align="left"
            />
          </Grid>
        ))}
        <Grid item container xs={12} justify="center">
          <Button variant="contained" size="large" color="primary">
            hire us
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Services;
