import React from 'react';

import { AppTypography } from '../../../Atoms/Typography/index';
import { Edit } from '../../../Molecules/ButtonGenerator/Edit/index';

export const ButtonEditView = () => {
  return (
    <>
      <AppTypography variant="h3" text="スタイルの編集" />
      <Edit heading="padding（上下）" />
      <Edit heading="padding（左右）" />
    </>
  );
};
