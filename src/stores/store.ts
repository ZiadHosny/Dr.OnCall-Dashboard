import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './darkModeSlice'
import mainReducer from './mainSlice'
import { apiSlice } from './storeApi'
import { loadingReducer } from './loadingSlice'
import requestMiddleware from './middlewares/requestMiddleware'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    darkMode: darkModeReducer,
    loading: loadingReducer,
    main: mainReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(requestMiddleware),
  devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
