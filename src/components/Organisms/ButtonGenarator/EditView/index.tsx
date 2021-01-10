import React, { useContext } from 'react';

import { AppContext } from '../../../Templates/CreateButtonView/index';
import { AppTypography } from '../../../Atoms/Typography/index';
import { Edit } from '../../../Molecules/Edit/index';

export const ButtonEditView = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <AppTypography variant="h3" text="スタイルの編集" />
      <Edit text="padding (Top, Bottom)" editType="paddingX" styleSize={state.customStyles.paddingX} max={35} />
      <Edit text="padding (Left, Right)" editType="paddingY" styleSize={state.customStyles.paddingY} max={75} />
    </>
  );
};
