import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Slider from '@material-ui/core/Slider';

import { AppContext } from '../../Templates/CreateButtonView/index';

interface Props {
  editType: string;
  max: number;
}

const useStyles = makeStyles({
  input: {
    width: 42,
  },
});

export const InputSlider: React.FC<Props> = ({ editType, max }) => {
  const classes = useStyles();

  const { dispatch } = useContext(AppContext);

  const [value, setValue] = React.useState<string | number>(0);

  const handleSliderChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  return (
    <div id={editType}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            inputProps={{
              step: 10,
              min: 0,
              max: max,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
