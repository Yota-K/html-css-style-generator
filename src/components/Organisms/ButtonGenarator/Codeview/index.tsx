import React from 'react';

import { AppTypography } from '../../../Atoms/Typography/index';
import { Code } from '../../../Atoms/ButtonGenerator/Code/index';

export const ButtonCodeView = () => {
  return (
    <>
      <AppTypography variant="h2" text="コード" />
      <Code />
    </>
  );
};
