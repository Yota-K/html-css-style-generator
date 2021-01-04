import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TypographyProps } from '@material-ui/core/Typography';

interface Props {
  variant: TypographyProps['variant'];
  text?: string;
  linkComponent?: React.ReactNode;
}

const useStyles = makeStyles({
  root: {
    margin: '12px 0',
  },
});

export const AppTypography: React.FC<Props> = ({ variant, text, linkComponent }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.root} variant={variant}>
      {text && text}
      {/* ヘッダーのアプリケーションのタイトル部分で使用 */}
      {linkComponent && linkComponent}
    </Typography>
  );
};
