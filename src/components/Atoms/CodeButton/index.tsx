import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import Tooltip from '@material-ui/core/Tooltip';

export const CodeButton = () => {
  return (
    <Tooltip title="Copy" placement="left">
      <IconButton>
        <CodeIcon />
      </IconButton>
    </Tooltip>
  );
};
