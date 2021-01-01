import React from 'react';
import styled from 'styled-components';

import { ButtonCardDataProps } from '../../../../../type/index';

interface Props {
  defaultStyles: ButtonCardDataProps['defaultStyles'];
  hoverStyles?: ButtonCardDataProps['hoverStyles'];
  activeStyles?: ButtonCardDataProps['activeStyles'];
}

export const GenerateButton: React.FC<Props> = ({ defaultStyles, hoverStyles, activeStyles }) => {
  return (
    <Button href="#" defaultStyles={defaultStyles} hoverStyles={hoverStyles} activeStyles={activeStyles}>
      ボタン
    </Button>
  );
};

const Button = styled.a<Props>`
  display: inline-block;
  padding: 4px 12px;
  font-size: 16px;
  text-decoration: none;
  ${(props) => (props.defaultStyles.background ? getProperty('background', props.defaultStyles.background) : '')}
  ${(props) => (props.defaultStyles.color ? getProperty('color', props.defaultStyles.color) : '')}
  ${(props) => (props.defaultStyles.border ? getProperty('border', props.defaultStyles.border) : '')}
  ${(props) => (props.defaultStyles.borderBottom ? getProperty('border-bottom', props.defaultStyles.borderBottom) : '')}
  ${(props) => (props.defaultStyles.borderRadius ? getProperty('border-radius', props.defaultStyles.borderRadius) : '')}
  ${(props) => (props.defaultStyles.transition ? getProperty('transition', props.defaultStyles.transition) : '')}

  &:hover {
    ${(props) => (props.hoverStyles?.background ? getProperty('background', props.hoverStyles.background) : '')}
    ${(props) => (props.hoverStyles?.color ? getProperty('color', props.hoverStyles.color) : '')}
  }

  &:active {
    ${(props) => (props.activeStyles?.transform ? getProperty('transform', props.activeStyles.transform) : '')}
    ${(props) => (props.activeStyles?.borderBottom ? getProperty('border-bottom', props.activeStyles.borderBottom) : '')}
  }
`;

// プロパティの生成
const getProperty = (property: string, value: string) => `${property}: ${value};`;
