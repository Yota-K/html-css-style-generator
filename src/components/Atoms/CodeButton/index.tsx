import React, { useMemo, useState } from 'react';

import Alert from '@material-ui/lab/Alert';
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';

import { copyToClipboard } from '../../../../helpers/copyToClicpBoard';

interface Props {
  code: string;
}

export interface State extends SnackbarOrigin {
  open: boolean;
}

export const CodeButton: React.FC<Props> = ({ code }) => {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
  });

  const handleClick = () => {
    setState({ ...state, open: true });
    copyToClipboard(code);
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return useMemo(() => {
    return (
      <>
        <Snackbar
          open={state.open}
          anchorOrigin={{
            vertical: state.vertical,
            horizontal: state.horizontal,
          }}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
        >
          <Alert severity="success">コードをコピーしました！</Alert>
        </Snackbar>
        <IconButton>
          <Tooltip title="Copy" placement="left">
            <CodeIcon onClick={handleClick} />
          </Tooltip>
        </IconButton>
      </>
    );
  }, [state.open]);
};
