import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../../common/Toast/CustomToast'

const errorMiddleware = () => next => action => {
    if (action.type.endsWith('/rejected')) {
        toast.error(<ErrorToast message={action.payload?.data?.error || 'An error occurred!'} />);
    }

    if (action.type.endsWith('/fulfilled')) {
        toast.error(<SuccessToast message={action.payload?.data?.message || 'Action completed successfully!'} />);
    }

    return next(action);
};

export default errorMiddleware;