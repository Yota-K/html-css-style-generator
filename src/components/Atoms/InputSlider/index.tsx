import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

import { AppContext } from '../../Templates/CreateButtonView/index';

interface Props {
  editType: 'paddingX' | 'paddingY';
  styleSize: string;
}

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export const InputSlider: React.FC<Props> = ({ editType, styleSize }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState<number>(Number(styleSize));
  const { state, dispatch } = useContext(AppContext);

  // スライダーを動かした時の動作
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
    const convertString = value.toString();

    dispatch({
      type: 'GENERATE_STYLE',
      payload: {
        defaultStyles: {
          ...state.defaultStyles,
          padding: `padding: ${state.customStyles.paddingX}px ${state.customStyles.paddingY}px;`,
        },
        hoverStyles: {
          ...state.hoverStyles,
        },
        activeStyles: {
          ...state.activeStyles,
        },
        customStyles: {
          ...state.customStyles,
          [editType]: convertString,
        },
      },
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider value={value} onChange={handleSliderChange} aria-labelledby="input-slider" max={50} />
        </Grid>
        <Grid item xs>
          {`${styleSize} px`}
        </Grid>
      </Grid>
    </div>
  );
};
