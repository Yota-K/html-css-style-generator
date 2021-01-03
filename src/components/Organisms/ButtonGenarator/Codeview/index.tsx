import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../../../Templates/CreateButtonView/index';
import { AppTypography } from '../../../Atoms/Typography/index';
import { CodeArea } from '../../../Molecules/ButtonGenerator/CodeArea/index';
import { styleGenerate } from '../../../../../helpers/ButtonGenerator/index';

interface Props {
  htmlCode: string;
}

export const ButtonCodeView: React.FC<Props> = ({ htmlCode }) => {
  const { state } = useContext(AppContext);
  const cssCode = styleGenerate(state);

  return (
    <>
      <AppTypography variant="h2" text="コード" />
      <CodeView>
        <CodeArea language="html" code={htmlCode} />
        <CodeArea language="css" code={cssCode} />
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
