import React from 'react';

import { AppTypography } from '../../Atoms/Typography/index';
import { StyleChangeSlider } from '../../Atoms/Slider/index';

interface Props {
  text: string;
  editType: 'paddingX' | 'paddingY';
  styleSize: string;
  max: number;
}

export const Edit: React.FC<Props> = ({ text, editType, styleSize, max }) => {
  return (
    <>
      <AppTypography variant="h4" text={text} />
      <StyleChangeSlider editType={editType} styleSize={styleSize} max={max} />
    </>
  );
};
