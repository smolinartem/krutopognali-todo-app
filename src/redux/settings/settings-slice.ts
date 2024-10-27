import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SettingsState {
  priorityOn: boolean
  categoryOn: boolean
  filtersOn: boolean
  countActiveOn: boolean
  clearCompletedOn: boolean
}

const initialState: SettingsState = {
  priorityOn: false,
  categoryOn: false,
  filtersOn: true,
  countActiveOn: false,
  clearCompletedOn: false,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleOption: (state, action: PayloadAction<keyof SettingsState>) => {
      state[action.payload] = !state[action.payload]
    },
  },
})

export const { toggleOption } = settingsSlice.actions
export default settingsSlice.reducer
