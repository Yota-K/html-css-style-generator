import React, { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from '../../../Templates/CreateButtonView/index';
import { AppTypography } from '../../../Atoms/Typography/index';
import { GenerateButton } from '../../../Atoms/ButtonGenerator/Button/index';

export const ButtonPreview = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <AppTypography variant="h3" text="プレビュー" />
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 180px;
`;
