import React from 'react';
import { Code } from '../../../Atoms/Code/index';

interface Props {
  htmlCode: string;
  cssCode: string;
}

export const CodeArea: React.FC<Props> = ({ htmlCode, cssCode }) => {
  return (
    <>
      <Code language="html" code={htmlCode} />
      <Code language="css" code={cssCode} />
    </>
  );
};
