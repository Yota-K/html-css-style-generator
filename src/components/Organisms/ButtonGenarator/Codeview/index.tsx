import React from 'react';
import styled from 'styled-components';

import { AppTypography } from '../../../Atoms/Typography/index';
import { Code } from '../../../Atoms/ButtonGenerator/Code/index';

interface Props {
  htmlCode: string;
}

export const ButtonCodeView: React.FC<Props> = ({ htmlCode }) => {
  return (
    <>
      <AppTypography variant="h2" text="コード" />
      <CodeView>
        <Code htmlCode={htmlCode} />
      </CodeView>
    </>
  );
};

const CodeView = styled.div`
  margin-bottom: 80px;

  .css-code {
    height: 320px;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #fff;
      border: none;
      border-radius: 10px;
      box-shadow: inset 0 0 2px #777;
    }

    &::-webkit-scrollbar-thumb {
      background: #6e7681;
      border-radius: 10px;
      box-shadow: none;
    }
  }
`;
