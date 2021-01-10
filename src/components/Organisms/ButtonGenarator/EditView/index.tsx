import React, { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import { AppContext } from '../../../Templates/CreateButtonView/index';
import { AppTypography } from '../../../Atoms/Typography/index';
import { Edit } from '../../../Molecules/Edit/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editArea: {
      [theme.breakpoints.down('xs')]: {
        display: 'block',
      },
    },
    edit: {
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
      },
    },
  })
);

export const ButtonEditView = () => {
  const classes = useStyles();

  const { state } = useContext(AppContext);

  return (
    <>
      <AppTypography variant="h3" text="スタイルの編集" />
      <Grid className={classes.editArea} container>
        <Grid className={classes.edit} item>
          <Edit text="padding (Top, Bottom)" editType="paddingX" styleSize={state.customStyles.paddingX} max={35} />
        </Grid>
        <Grid className={classes.edit} item>
          <Edit text="padding (Left, Right)" editType="paddingY" styleSize={state.customStyles.paddingY} max={75} />
        </Grid>
      </Grid>
    </>
  );
};
