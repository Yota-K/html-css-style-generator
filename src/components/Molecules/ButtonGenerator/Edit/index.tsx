import React from 'react';

import { AppTypography } from '../../../Atoms/Typography/index';
import { InputSlider } from '../../../Atoms/InputSlider/index';

interface Props {
  heading: string;
}

export const Edit: React.FC<Props> = ({ heading }) => {
  return (
    <>
      <AppTypography variant="h4" text={heading} />
      <InputSlider />
    </>
  );
};
