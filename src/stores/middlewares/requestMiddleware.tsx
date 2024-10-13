import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import { showSuccess, showError } from '../../common/Toast/CustomToast'

const requestMiddleware = (store) => (next) => (action) => {
  const { dispatch } = store

  if (isPending(action)) {
    dispatch({ type: 'loading/setLoading', payload: true })
  }

  if (isRejected(action)) {
    dispatch({ type: 'loading/setLoading', payload: false })
    showError({ message: action.payload?.data?.error || 'An error occurred!' })
  }

  if (isFulfilled(action)) {
    dispatch({ type: 'loading/setLoading', payload: false })
    if (action.type !== 'api/executeQuery/fulfilled') {
      showSuccess({ message: action.payload?.message || 'Action completed successfully!' })
    }
  }

  return next(action)
}

export default requestMiddleware
