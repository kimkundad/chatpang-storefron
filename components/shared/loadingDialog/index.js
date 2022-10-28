import { CircularProgress, Dialog, DialogContent, DialogContentText, DialogTitle, ThemeProvider } from '@mui/material';
import React from 'react';
import LoadingDialogStyle from './style';
import color from '../../../styles/variables/color';

const DialogLoading = React.forwardRef((props, ref) => {
  return (
    <LoadingDialogStyle>
      <Dialog maxWidth={'sm'} open={props.open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogContent className="space-loading text-center">
          <CircularProgress
            variant={props.value === undefined ? 'indeterminate' : 'determinate'}
            value={props.value ? props.value : undefined}
            thickness={4.5}
            size={75}
            color="primary"
            className="block-dialog"
          />

          <div className="text-center">Please wait... {props.value !== undefined && `${props.value}%`}</div>
        </DialogContent>
      </Dialog>
    </LoadingDialogStyle>
  );
});

export default DialogLoading;
