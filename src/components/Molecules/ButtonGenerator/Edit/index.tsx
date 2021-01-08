import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { AppTypography } from '../../../Atoms/Typography/index';
import { InputSlider } from '../../../Atoms/InputSlider/index';

interface Props {
  heading: string;
  editType: string;
  max: number;
}

const useStyles = makeStyles({
  root: {
    width: 250,
  },
});

export const Edit: React.FC<Props> = ({ heading, editType, max }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppTypography variant="h4" text={heading} />
      <InputSlider max={max} editType={editType} />
    </div>
  );
};
