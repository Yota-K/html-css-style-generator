import React from 'react';

import styled from 'styled-components';

import { ColorPicker } from '../../Atoms/ColorPicker/index';
import { State } from '../../../../reducers/ButtonGenerator/index';

interface Props {
  state: State;
}

export const ColorSelectArea: React.FC<Props> = ({ state }) => {
  return (
    <ColorsDiv>
      <ColorPicker editType="background" currentColor={state.customStyle.background} />
      <ColorPicker editType="color" currentColor={state.customStyle.color} />
    </ColorsDiv>
  );
};

const ColorsDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  .chrome-picker {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 10000;
  }
`;
