import styled from 'styled-components';
import { Props } from './index';

export const Button = styled.a<Props>`
  ${(props) => props.defaultStyles.display}
  ${(props) => props.defaultStyles.textDecoration}
  ${(props) => props.defaultStyles.padding}
  ${(props) => props.defaultStyles.fontSize}
  ${(props) => (props.defaultStyles.fontWeight ? props.defaultStyles.fontWeight : '')}
  ${(props) => (props.defaultStyles.background ? props.defaultStyles.background : '')}
  ${(props) => (props.defaultStyles.color ? props.defaultStyles.color : '')}
  ${(props) => (props.defaultStyles.border ? props.defaultStyles.border : '')}
  ${(props) => (props.defaultStyles.borderTop ? props.defaultStyles.borderTop : '')}
  ${(props) => (props.defaultStyles.borderBottom ? props.defaultStyles.borderBottom : '')}
  ${(props) => (props.defaultStyles.borderLeft ? props.defaultStyles.borderLeft : '')}
  ${(props) => (props.defaultStyles.borderRight ? props.defaultStyles.borderRight : '')}
  ${(props) => (props.defaultStyles.borderRadius ? props.defaultStyles.borderRadius : '')}
  ${(props) => (props.defaultStyles.transition ? props.defaultStyles.transition : '')}

  &:hover {
    ${(props) => (props.hoverStyles?.background ? props.hoverStyles.background : '')}
    ${(props) => (props.hoverStyles?.color ? props.hoverStyles.color : '')}
  }

  &:active {
    ${(props) => (props.activeStyles?.transform ? props.activeStyles.transform : '')}
    ${(props) => (props.activeStyles?.borderBottom ? props.activeStyles.borderBottom : '')}
  }
`;
