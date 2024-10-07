import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const errorMiddleware = (store) => next => action => {
    const { dispatch } = store;


    if (isPending(action)) {
        dispatch({ type: 'loading/setLoading', payload: true });
    }

    if (isRejected(action)) {
        dispatch({ type: 'loading/setLoading', payload: false });
        toast.error(action.payload?.data?.error || 'An error occurred!');
    }

    if (isFulfilled(action)) {
        dispatch({ type: 'loading/setLoading', payload: false });
        toast.success(action.payload?.message || 'Action completed successfully!');
    }

    return next(action);
};

export default errorMiddleware;