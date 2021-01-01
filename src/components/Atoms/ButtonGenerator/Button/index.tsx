import React from 'react';
import styled from 'styled-components';

interface Props {
  defaultStyles: any;
}

export const GenerateButton: React.FC<Props> = ({ defaultStyles }) => {
  return <Button defaultStyles={defaultStyles}>ボタン</Button>;
};

type StyleTypes = {
  defaultStyles: {
    border: string;
    padding: string;
  };
};

const Button = styled.a<StyleTypes>`
  display: inline-block;
  border: ${(props) => props.defaultStyles.border};
  padding: ${(props) => props.defaultStyles.padding};
`;
