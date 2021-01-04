import React from 'react';

import styled from 'styled-components';

import { Code } from '../../../Atoms/Code/index';
import { CodeButton } from '../../../Atoms/CodeButton/index';

interface Props {
  language: string;
  code: string;
}

export const CodeArea: React.FC<Props> = ({ language, code }) => {
  return (
    <CodeAreaDiv>
      <CodeButton code={code} />
      <Code language={language} code={code} />
    </CodeAreaDiv>
  );
};

const CodeAreaDiv = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 8px;
    right: 16px;
  }
`;
