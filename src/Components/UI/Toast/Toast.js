import React from 'react';


import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Toast = ({open, message, onClose}) => {

    // if(typeof close !== "function"){
    //     close = function() {return false}
    // }

    // className="!bg-primary-600 !py-0 !px-2"

    return (
        <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "center" }} open={open} autoHideDuration={3000} onClose={onClose}>
          <Alert className="!py-0 !px-2" onClose={onClose} severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
    );
}
