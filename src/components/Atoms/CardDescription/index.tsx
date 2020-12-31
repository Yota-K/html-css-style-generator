import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface Props {
  description: string;
}

const useStyles = makeStyles({
  cardDescription: {
    fontSize: 14,
    margin: '12px 0',
  },
});

export const CardDescription: React.FC<Props> = ({ description }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.cardDescription} variant="body2">
      {description}
    </Typography>
  );
};
