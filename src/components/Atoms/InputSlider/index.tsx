import React, { useEffect, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

import { AppContext } from '../../Templates/CreateButtonView/index';

interface Props {
  editType: 'paddingX' | 'paddingY';
  styleSize: string;
  max: number;
}

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export const InputSlider: React.FC<Props> = ({ editType, styleSize, max }) => {
  const classes = useStyles();

  // スライダーのメモリの部分
  const [value, setValue] = React.useState<number>(Number(styleSize));
  const { state, dispatch } = useContext(AppContext);

  // valueが変更された時に再レンダリングを行う
  useEffect(() => {
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
          [editType]: value,
        },
      },
    });
  }, [value]);

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
          <Slider
            value={Number(styleSize)}
            onChange={handleSliderChange}
            onChangeCommitted={handleSliderChange}
            aria-labelledby="input-slider"
            max={max}
          />
        </Grid>
        <Grid item xs>
          {`${styleSize} px`}
        </Grid>
      </Grid>
    </div>
  );
};
