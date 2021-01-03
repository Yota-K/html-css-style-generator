import React from 'react';

import { Button } from './style';
import { ButtonCardDataProps } from '../../../../../type/index';

export interface Props {
  defaultStyles: ButtonCardDataProps['defaultStyles'];
  hoverStyles?: ButtonCardDataProps['hoverStyles'];
  activeStyles?: ButtonCardDataProps['activeStyles'];
}

export const GenerateButton: React.FC<Props> = ({ defaultStyles, hoverStyles, activeStyles }) => {
  return (
    <Button
      className="button-style"
      href="#"
      defaultStyles={defaultStyles}
      hoverStyles={hoverStyles}
      activeStyles={activeStyles}
    >
      ボタン
    </Button>
  );
};
