import React from 'react';
import styled from 'styled-components';

import { ButtonCardDataProps } from '../../../../../type/index';

interface Props {
  defaultStyles: ButtonCardDataProps['defaultStyles'];
  activeStyles?: ButtonCardDataProps['activeStyles'];
}

export const GenerateButton: React.FC<Props> = ({ defaultStyles, activeStyles }) => {
  return (
    <Button href="#" defaultStyles={defaultStyles} activeStyles={activeStyles}>
      ボタン
    </Button>
  );
};

const Button = styled.a<Props>`
  display: inline-block;
  padding: 4px 12px;
  font-size: 16px;
  ${(props) => (props.defaultStyles.color ? getProperty('color', props.defaultStyles.color) : '')}
  ${(props) => (props.defaultStyles.border ? getProperty('border', props.defaultStyles.border) : '')}
  ${(props) => (props.defaultStyles.borderRadius ? getProperty('border-radius', props.defaultStyles.borderRadius) : '')}
  ${(props) => (props.defaultStyles.transition ? getProperty('transition', props.defaultStyles.transition) : '')}

  &:hover {
    ${(props) => (props.activeStyles?.background ? getProperty('background', props.activeStyles.background) : '')}
    ${(props) => (props.activeStyles?.color ? getProperty('color', props.activeStyles.color) : '')}
  }
`;

// プロパティの生成
const getProperty = (property: string, value: string) => `${property}: ${value};`;
