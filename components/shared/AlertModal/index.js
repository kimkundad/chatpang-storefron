import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import color from '../../../styles/variables/color';
import DoneIcon from '@mui/icons-material/Done';
import WarningIcon from '@mui/icons-material/Warning';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AlertModalStyle from './style';
let theme = {
  success: {
    icon: <DoneIcon style={{ fontSize: 150, color: 'green' }} />,
    message: 'ดำเนินการสำเร็จ',
    subject: 'Success',
    color: 'green',
    textColor: color.BLACK_COLOR,
  },
  error: {
    icon: <WarningIcon style={{ fontSize: 150, color: color.RED_COLOR_1 }} />,
    message: 'พบข้อผิดพลาด',
    subject: 'Error',
    color: color.RED_COLOR_1,
    textColor: color.WHITE_COLOR,
  },
  warning: {
    icon: <PriorityHighIcon style={{ fontSize: 150, color: color.YELLOW_COLOR_2 }} />,
    message: 'ข้อแนะนำ',
    subject: 'Warning',
    color: color.YELLOW_COLOR_2,
    textColor: color.BLACK_COLOR,
  },
};
const AlertModal = React.forwardRef((props, ref) => {
  useEffect(() => {}, [props.open]);
  return (
    <AlertModalStyle>
      <Dialog
        maxWidth={'md'}
        open={props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ display: !(props.error || props.warning || props.success) && 'none' }}>
        <DialogContent className="space-loading text-center alert-modal" style={{ minWidth: 350, minHeight: 100 }}>
          <div>{props.warning ? theme.warning.icon : props.error ? theme.error.icon : props.success ? theme.success.icon : ''}</div>
          <div className="text-center header-txt" style={{ fontSize: 25, fontWeight: 600 }}>
            {props.subject ? props.subject : props.warning ? theme.warning.subject : props.error ? theme.error.subject : props.success ? theme.success.subject : ''}
          </div>
          <div className="text-center content">
            <span>{props.message ? props.message : props.warning ? theme.warning.message : props.error ? theme.error.message : props.success ? theme.success.message : ''}</span>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            className="btn-button"
            onClick={props.onClose}
            variant="contained"
            size="small"
            style={{
              width: '100%',
              background: props.warning ? theme.warning.color : props.error ? theme.error.color : theme.success.color,
              color: props.warning ? theme.warning.textColor : props.error ? theme.error.textColor : theme.success.textColor,
            }}>
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </AlertModalStyle>
  );
});

export default AlertModal;
