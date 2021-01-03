import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface Props {
  heading: string;
}

const useStyles = makeStyles({
  heading: {
    fontSize: 18,
    margin: '10px 0',
  },
});

export const CardHeading: React.FC<Props> = ({ heading }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.heading} variant="h3">
      {heading}
    </Typography>
  );
};
