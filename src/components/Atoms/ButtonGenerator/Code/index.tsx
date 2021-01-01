import React from 'react';
import styled from 'styled-components';

export const Code = () => {
  return (
    <CodePre>
      Test
    </CodePre>
  );
}

const CodePre = styled.pre`
  margin: 20px 0px;
  padding: 14px;
  border: 1px solid rgb(221, 221, 221);
  background: rgb(39, 44, 52);
  color: rgb(255, 255, 255);
  line-height: 160%;
}
`;
