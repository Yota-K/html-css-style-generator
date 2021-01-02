import React, { useContext } from 'react';
import styled from 'styled-components';

import { styleGenerate } from './CodeGenerate';
import { AppContext } from '../../../Templates/CreateButtonView/index';

export const Code = () => {
  const { state } = useContext(AppContext);

  return (
    <CodePre>
      <code>{styleGenerate('button-style', state)}</code>
      <code>{state.hoverStyles && styleGenerate('button-style:hover', state)}</code>
      <code>{state.activeStyles && styleGenerate('button-style:active', state)}</code>
    </CodePre>
  );
};

const CodePre = styled.pre`
  margin: 20px 0px;
  padding: 14px;
  border: 1px solid rgb(221, 221, 221);
  background: rgb(39, 44, 52);
  color: rgb(255, 255, 255);
  line-height: 160%;
}
`;
