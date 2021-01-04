import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { AppCard } from '../../Molecules/Card/index';
import { CardDataProps } from '../../../../type';

interface Props {
  cardData: CardDataProps[];
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const CardList: React.FC<Props> = ({ cardData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {cardData.map((el, i) => (
        <AppCard key={i} heading={el.heading} description={el.description} path={el.path} />
      ))}
    </div>
  );
};
