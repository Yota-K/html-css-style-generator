import styled from 'styled-components';

import { Props } from './index';

export const Button = styled.a<Props>`
  ${(props) => props.styleObj.display}
  ${(props) => props.styleObj.textDecoration}
  ${(props) => props.styleObj.padding}
  ${(props) => props.styleObj.fontSize}
  ${(props) => (props.styleObj.fontWeight ? props.styleObj.fontWeight : '')}
  ${(props) => (props.styleObj.background ? props.styleObj.background : '')}
  ${(props) => (props.styleObj.color ? props.styleObj.color : '')}
  ${(props) => (props.styleObj.border ? props.styleObj.border : '')}
  ${(props) => (props.styleObj.borderTop ? props.styleObj.borderTop : '')}
  ${(props) => (props.styleObj.borderBottom ? props.styleObj.borderBottom : '')}
  ${(props) => (props.styleObj.borderLeft ? props.styleObj.borderLeft : '')}
  ${(props) => (props.styleObj.borderRight ? props.styleObj.borderRight : '')}
  ${(props) => (props.styleObj.borderRadius ? props.styleObj.borderRadius : '')}
  ${(props) => (props.styleObj.transition ? props.styleObj.transition : '')}

  &:hover {
    ${(props) => (props.hoverStyle?.background ? props.hoverStyle.background : '')}
    ${(props) => (props.hoverStyle?.color ? props.hoverStyle.color : '')}
  }

  &:active {
    ${(props) => (props.activeStyle?.transform ? props.activeStyle.transform : '')}
    ${(props) => (props.activeStyle?.borderBottom ? props.activeStyle.borderBottom : '')}
  }
`;
