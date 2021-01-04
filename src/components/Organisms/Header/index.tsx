import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import { SiteTitle } from '../../Molecules/SiteTitle/index';

interface Props {
  title: string;
}

const useStyles = makeStyles({
  root: {
    marginBottom: 30,
  },
});

export const AppHeader: React.FC<Props> = ({ title }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <SiteTitle title={title} />
      </Toolbar>
    </AppBar>
  );
};
