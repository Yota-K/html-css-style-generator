import React, { useState } from 'react';
import styled from 'styled-components';

import { ChromePicker } from 'react-color'

export const ColorPicker: React.FC = () => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState<boolean>(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <>
      <PickColor onClick={handleClick}>BG</PickColor>
      {displayColorPicker ? (
        <div onClick={handleClose}>
          <ChromePicker />
        </div>
      ) : null}
    </>
  );
};

const PickColor = styled.span`
  background: red;
  width: 30px;
  height: 30px;
`;
