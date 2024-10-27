import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SettingsState {
  priorityOn: boolean
  categoryOn: boolean
  filtersOn: boolean
  countActiveOn: boolean
  clearCompletedOn: boolean
  searchOn: boolean
}

const initialState: SettingsState = {
  priorityOn: false,
  categoryOn: false,
  filtersOn: true,
  countActiveOn: false,
  clearCompletedOn: false,
  searchOn: false,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleOption: (state, action: PayloadAction<keyof SettingsState>) => {
      state[action.payload] = !state[action.payload]
    },
    toggleSearch: (state) => {
      state.searchOn = !state.searchOn
    },
  },
})

export const { toggleOption, toggleSearch } = settingsSlice.actions
export default settingsSlice.reducer
