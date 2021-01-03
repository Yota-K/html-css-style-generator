import React from 'react';
import Link from '@material-ui/core/Link';
import { LinkProps } from '@material-ui/core/Link';

interface Props {
  href: LinkProps['href'];
  color?: LinkProps['color'];
  underline?: LinkProps['underline'];
  text: string;
}

export const AppLink: React.FC<Props> = ({ href, color, underline, text }) => {
  return (
    <Link href={href} color={color} underline={underline}>
      {text}
    </Link>
  );
};
