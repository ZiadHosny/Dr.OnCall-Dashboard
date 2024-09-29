import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserPayloadObject } from '../interfaces'

interface MainState {
  email: string
  token: null | string
  isFieldFocusRegistered: boolean
}

const initialState: MainState = {
  /* User */
  email: 'doe.doe.doe@example.com',
  token: 'doe.doe.doe@example.com',

  /* Field focus with ctrl+k (to register only once) */
  isFieldFocusRegistered: false,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPayloadObject>) => {
      // state.email = action.payload.email
      state.token = action.payload.token
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = mainSlice.actions

export default mainSlice.reducer
