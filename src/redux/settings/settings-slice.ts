import { createSlice } from '@reduxjs/toolkit'

interface SettingsState {
  priorityOn: boolean
  categoryOn: boolean
}

const initialState: SettingsState = {
  priorityOn: false,
  categoryOn: false,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    togglePriority(state) {
      state.priorityOn = !state.priorityOn
    },
    toggleCategory(state) {
      state.categoryOn = !state.categoryOn
    },
  },
})

export const { togglePriority, toggleCategory } = settingsSlice.actions
export default settingsSlice.reducer
