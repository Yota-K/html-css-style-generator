import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { AppContext } from '../../../Templates/CreateButtonView/index';
import { styleGenerate } from './CodeGenerate';

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
      <SyntaxHighlighter className="html-code" language="html">
        {htmlCode}
      </SyntaxHighlighter>
      {path.match(/create-button/) && (
        <SyntaxHighlighter className="css-code" language="css">
          {styleGenerate(state)}
        </SyntaxHighlighter>
      )}
    </>
  );
};
