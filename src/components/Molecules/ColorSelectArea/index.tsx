import React from 'react';

import { ColorPicker } from '../../Atoms/ColorPicker/index';
import { State } from '../../../../reducers/ButtonGenerator/index';

interface Props {
  state: State;
}

export const ColorSelectArea: React.FC<Props> = ({ state }) => {
  return (
    <>
      <ColorPicker currentColor={state.customStyle.background} />
      <ColorPicker currentColor={state.customStyle.color} />
    </>
  );
};
