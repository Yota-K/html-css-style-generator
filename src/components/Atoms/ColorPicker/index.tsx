import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { AppContext } from '../../Templates/CreateButtonView/index';
import { ChromePicker, ColorResult } from 'react-color';

interface Props {
  editType: 'background' | 'color';
  currentColor: string;
}

export const ColorPicker: React.FC<Props> = ({ editType, currentColor }) => {
  const { state, dispatch } = React.useContext(AppContext);

  const [color, setColor] = React.useState<string>(currentColor);
  const [displayColorPicker, setDisplayColorPicker] = React.useState<boolean>(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChane = (color: ColorResult) => {
    setColor(color.hex);

    dispatch({
      type: 'GENERATE_STYLE',
      payload: {
        styleObj: {
          ...state.styleObj,
          padding: `padding: ${state.customStyle.paddingX}px ${state.customStyle.paddingY}px;`,
          borderRadius: `border-radius: ${state.customStyle.borderRadius}px;`,
          background: `background: ${state.customStyle.background};`,
          color: `color: ${state.customStyle.color};`,
        },
        hoverStyle: state.hoverStyle,
        activeStyle: state.activeStyle,
        customStyle: {
          ...state.customStyle,
          // MEMO: 返り値がオブジェクトのため（もっといい書き方はありそう）
          [editType]: color.hex,
        },
      },
    });
  };

  return (
    <>
      <PickColor currentColor={currentColor} onClick={handleClick}></PickColor>
      {displayColorPicker ? (
        <CoverDiv onClick={handleClose}>
          <ChromePicker color={color} onChange={handleChane} />
        </CoverDiv>
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

const CoverDiv = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 9999;
`;
