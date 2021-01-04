import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface Props {
  language: string;
  code: string;
}

export const Code: React.FC<Props> = ({ language, code }) => {
  return (
    <SyntaxHighlighter className={`${language}-code`} language={language}>
      {code}
    </SyntaxHighlighter>
  );
};
