import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import Tooltip from '@material-ui/core/Tooltip';

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
      <Tooltip title="Copy" placement="left">
        <CodeIcon onClick={handleClick} />
      </Tooltip>
    </IconButton>
  );
};
