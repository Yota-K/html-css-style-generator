import React from 'react';

import { AppTypography } from '../../Atoms/Typography/index';
import { StyleChangeSlider } from '../../Atoms/Slider/index';
import { EditType } from '../../../../type/index';

interface Props {
  text: string;
  editType: EditType;
  styleSize: string;
  max: number;
}

export const Edit: React.FC<Props> = ({ text, editType, styleSize, max }) => {
  return (
    <>
      <AppTypography variant="inherit" text={text} />
      <StyleChangeSlider editType={editType} styleSize={styleSize} max={max} />
    </>
  );
};
