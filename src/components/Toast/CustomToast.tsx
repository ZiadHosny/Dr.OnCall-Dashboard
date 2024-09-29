// CustomToast.js
import React from 'react';

type ToastProps = {
    message: string
}

export const SuccessToast = ({ message }: ToastProps) => (
    <div className="toast-success">
        {/* <h4>Success!</h4> */}
        <p>{message}</p>
    </div>
);

export const ErrorToast = ({ message }: ToastProps) => (
    <div className="toast-error">
        {/* <h4>Error!</h4> */}
        <p>{message}</p>
    </div>
);
