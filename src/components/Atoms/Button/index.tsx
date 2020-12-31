import React from 'react';
import Button from '@material-ui/core/Button';
import { ButtonProps } from '@material-ui/core/Button';

interface Props {
  text: string;
  variant?: ButtonProps['variant'];
  color: ButtonProps['color'];
  href?: ButtonProps['href'];
}

export const AppButton: React.FC<Props> = ({ variant, color, href, text }) => {
  return (
    <Button variant={variant} color={color} href={href}>
      {text}
    </Button>
  );
};
