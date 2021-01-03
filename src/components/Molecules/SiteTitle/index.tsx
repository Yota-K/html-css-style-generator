import React from 'react';
import { AppTypography } from '../../Atoms/Typography/index';
import { AppLink } from '../../Atoms/Link/index';

interface Props {
  title: string;
}

export const SiteTitle: React.FC<Props> = ({ title }) => {
  return (
    <AppTypography variant="h1" linkComponent={<AppLink href="/" color="inherit" underline="none" text={title} />} />
  );
};
