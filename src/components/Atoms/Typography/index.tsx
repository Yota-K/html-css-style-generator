import React from 'react';
import Typography from '@material-ui/core/Typography';
import { TypographyProps } from '@material-ui/core/Typography';

interface Props {
  variant: TypographyProps['variant'];
  text: string;
}

export const AppTypography: React.FC<Props> = ({ variant, text }) => {
  return (
    <Typography variant={variant}>{ text }</Typography>
  );
}
