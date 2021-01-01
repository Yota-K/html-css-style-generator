import styled from 'styled-components';
import { Props } from './index';

export const Button = styled.a<Props>`
  display: inline-block;
  padding: 4px 12px;
  font-size: 16px;
  text-decoration: none;
  ${(props) => (props.defaultStyles.fontWeight ? getProperty('font-weight', props.defaultStyles.fontWeight) : '')}
  ${(props) => (props.defaultStyles.background ? getProperty('background', props.defaultStyles.background) : '')}
  ${(props) => (props.defaultStyles.color ? getProperty('color', props.defaultStyles.color) : '')}
  ${(props) => (props.defaultStyles.border ? getProperty('border', props.defaultStyles.border) : '')}
  ${(props) => (props.defaultStyles.borderTop ? getProperty('border-top', props.defaultStyles.borderTop) : '')}
  ${(props) => (props.defaultStyles.borderBottom ? getProperty('border-bottom', props.defaultStyles.borderBottom) : '')}
  ${(props) => (props.defaultStyles.borderLeft ? getProperty('border-left', props.defaultStyles.borderLeft) : '')}
  ${(props) => (props.defaultStyles.borderRight ? getProperty('border-right', props.defaultStyles.borderRight) : '')}
  ${(props) => (props.defaultStyles.borderRadius ? getProperty('border-radius', props.defaultStyles.borderRadius) : '')}
  ${(props) => (props.defaultStyles.transition ? getProperty('transition', props.defaultStyles.transition) : '')}

  &:hover {
    ${(props) => (props.hoverStyles?.background ? getProperty('background', props.hoverStyles.background) : '')}
    ${(props) => (props.hoverStyles?.color ? getProperty('color', props.hoverStyles.color) : '')}
  }

  &:active {
    ${(props) => (props.activeStyles?.transform ? getProperty('transform', props.activeStyles.transform) : '')}
    ${(props) =>
      props.activeStyles?.borderBottom ? getProperty('border-bottom', props.activeStyles.borderBottom) : ''}
  }
`;

// プロパティの生成
const getProperty = (property: string, value: string) => `${property}: ${value};`;
