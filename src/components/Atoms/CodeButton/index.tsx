import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';

import { copyToClipboard } from '../../../../helpers/copyToClicpBoard';

interface Props {
  code: string;
}

export const CodeButton: React.FC<Props> = ({ code }) => {
  const handleClick = () => {
    copyToClipboard(code);
  };

  return (
    <IconButton>
      <CodeIcon onClick={handleClick} />
    </IconButton>
  );
};
