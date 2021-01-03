import React, { useContext } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { styleGenerate } from './CodeGenerate';
import { AppContext } from '../../../Templates/CreateButtonView/index';

export const Code = () => {
  const { state } = useContext(AppContext);

  // 表示されているページのパスを取得
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <CodePre>
        <code>{`<a class="button-style">ボタン</a>`}</code>
      </CodePre>
      {path.match(/create-button/) && (
        <CodePre>
          <code>{styleGenerate('button-style', state)}</code>
          <code>{state.hoverStyles && styleGenerate('button-style:hover', state)}</code>
          <code>{state.activeStyles && styleGenerate('button-style:active', state)}</code>
        </CodePre>
      )}
    </>
  );
};

const CodePre = styled.pre`
  margin: 20px 0px;
  padding: 14px 32px;
  border: 1px solid rgb(221, 221, 221);
  background: rgb(39, 44, 52);
  color: rgb(255, 255, 255);
  line-height: 160%;
}
`;
