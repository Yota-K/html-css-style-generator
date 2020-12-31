import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import { CardHeading } from '../../Atoms/CardHeading/index';
import { CardDescription } from '../../Atoms/CardDescription/index';
import { AppButton } from '../../Atoms/Button/index';

interface Props {
  heading: string;
  description: string;
  path: string;
}

const useStyles = makeStyles({
  root: {
    width: '30%',
    minWidth: 275,
    margin: 12,
  },
});

export const AppCard: React.FC<Props> = ({ heading, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardHeading heading={heading} />
        <CardDescription description={description} />
        <CardActions>
          <AppButton variant="outlined" color="primary" text="使ってみる" />
        </CardActions>
      </CardContent>
    </Card>
  );
};
