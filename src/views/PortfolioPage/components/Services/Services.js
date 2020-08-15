import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Button,
  colors,
  TextField,
} from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Services = props => {
  const classes = useStyles();
  const { data, className, ...rest } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <SectionHeader
        title="Skills"
        subtitle="I am an accomplished leader with expert technical skills in Web
        Development and extensive experience in program management.
        I effectively design and maintain IT processes, infrastructure and
        applications. My web application designs focus on a memorable
        user experience. I specialize in creating effective user
        interaction using React and Material-UI."
        subtitleProps={{
          variant: 'h6',
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
          <Button variant="contained" size="large" color="primary" onClick={handleClickOpen}>
            hire me
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To inquire about retaining my services, please enter your email address here. I will in touch with you shortly.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
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
