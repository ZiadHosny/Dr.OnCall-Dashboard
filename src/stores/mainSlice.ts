import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserPayloadObject } from '../interfaces'

interface MainState {
  name: string
  email: string
}

const initialState: MainState = {
  /* User */
  name: 'example',
  email: 'example@example.com',
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPayloadObject>) => {
      const user = JSON.parse(localStorage['user']);

      if (action.payload) {
        state.name = action.payload.name
        state.email = action.payload.email
      } else if (user) {
        state.name = user.name
        state.email = user.email
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = mainSlice.actions

export default mainSlice.reducer
