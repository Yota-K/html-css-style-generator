import React from 'react';

import { AppTypography } from '../../../Atoms/Typography/index';
import { Code } from '../../../Atoms/ButtonGenerator/Code/index';

interface Props {
  htmlCode: string;
}

export const ButtonCodeView: React.FC<Props> = ({ htmlCode }) => {
  return (
    <>
      <AppTypography variant="h2" text="コード" />
      <Code htmlCode={htmlCode} />
    </>
  );
};
