import React, { useState } from 'react';
import styled from 'styled-components';

import { ChromePicker } from 'react-color'

interface Props {
  currentColor: string;
}

export const ColorPicker: React.FC<Props> = ({ currentColor }) => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState<boolean>(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <>
      <PickColor currentColor={currentColor} onClick={handleClick}></PickColor>
      {displayColorPicker ? (
        <div onClick={handleClose}>
          <ChromePicker />
        </div>
      ) : null}
    </>
  );
};

type styleType = {
  currentColor: string;
};

const PickColor = styled.span<styleType>`
  display: inline-block;
  background: ${(props) => props.currentColor};
  width: 30px;
  height: 30px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  margin: 0 5px;
  cursor: pointer;
`;
