import React, { useContext } from 'react';

import { AppContext } from '../../../Templates/CreateButtonView/index';
import { AppTypography } from '../../../Atoms/Typography/index';
import { StyleChangeSlider } from '../../../Atoms/Slider/index';

export const ButtonEditView = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <AppTypography variant="h3" text="スタイルの編集" />
      <StyleChangeSlider editType="paddingX" styleSize={state.customStyles.paddingX} max={35} />
      <StyleChangeSlider editType="paddingY" styleSize={state.customStyles.paddingY} max={75} />
    </>
  );
};
