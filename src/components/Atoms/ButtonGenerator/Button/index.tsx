import React from 'react';

import { Button } from './style';
import { ButtonCardDataProps } from '../../../../../type/index';

export interface Props {
  styleObj: ButtonCardDataProps['styleObj'];
  hoverStyle?: ButtonCardDataProps['hoverStyle'];
  activeStyle?: ButtonCardDataProps['activeStyle'];
}

export const GenerateButton: React.FC<Props> = ({ styleObj, hoverStyle, activeStyle }) => {
  const buttonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <Button
      onClick={buttonClick}
      className="button-style"
      href="#"
      styleObj={styleObj}
      hoverStyle={hoverStyle}
      activeStyle={activeStyle}
    >
      ボタン
    </Button>
  );
};
