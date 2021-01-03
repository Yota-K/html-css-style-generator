import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../../../Templates/CreateButtonView/index';
import { AppTypography } from '../../../Atoms/Typography/index';
import { GenerateButton } from '../../../Atoms/ButtonGenerator/Button/index';

export const ButtonPreview = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <AppTypography variant="h2" text="プレビュー" />
      <PreviewArea>
        <GenerateButton
          defaultStyles={state.defaultStyles}
          hoverStyles={state.hoverStyles}
          activeStyles={state.activeStyles}
        />
      </PreviewArea>
    </>
  );
};

const PreviewArea = styled.div`
  background: #f5f2f0;
  padding: 20px;
  text-align: center;
`;