import React from 'react';
import Typography from '@material-ui/core/Typography';
import { TypographyProps } from '@material-ui/core/Typography';

interface Props {
  variant: TypographyProps['variant'];
  text?: string;
  linkComponent?: React.ReactNode;
}

export const AppTypography: React.FC<Props> = ({ variant, text, linkComponent }) => {
  return (
    <Typography variant={variant}>
      {text && text}
      {/* ヘッダーのアプリケーションのタイトル部分で使用 */}
      {linkComponent && linkComponent}
    </Typography>
  );
};
