import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Mode = 'light' | 'dark'

interface DarkModeState {
  mode: Mode
}

const getInitialState = (): DarkModeState => {
  if (typeof window !== 'undefined') {
    const storedValue = localStorage.getItem('darkMode');
    return storedValue === 'dark' ? { mode: 'dark' } : { mode: 'light' };
  } else {
    return { mode: 'light' }
  }
}

const initialState: DarkModeState = getInitialState()


export const styleSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<Mode>) => {
      if (action.payload) {
        state.mode = action.payload
      } else {
        state.mode = state.mode === 'light' ? 'dark' : 'light'
      }

      if (typeof document !== 'undefined') {

        document.body.classList[state.mode === 'dark' ? 'add' : 'remove']('dark-scrollbars')
        document.documentElement.classList[state.mode === 'dark' ? 'add' : 'remove'](
          'dark',
          'dark-scrollbars-compat'
        )
      }

      // You can persist dark mode setting
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('darkMode', state.mode)
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDarkMode } = styleSlice.actions

export default styleSlice.reducer
