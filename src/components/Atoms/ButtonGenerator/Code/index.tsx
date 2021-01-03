import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { styleGenerate } from './CodeGenerate';
import { AppContext } from '../../../Templates/CreateButtonView/index';

interface Props {
  htmlCode: string;
}

export const Code: React.FC<Props> = ({ htmlCode }) => {
  const { state } = useContext(AppContext);

  // 表示されているページのパスを取得
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <SyntaxHighlighter language="html">{htmlCode}</SyntaxHighlighter>
      {path.match(/create-button/) && <SyntaxHighlighter language="css">{styleGenerate(state)}</SyntaxHighlighter>}
    </>
  );
};
