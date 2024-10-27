import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './settings/settings-slice'
import todoReducer from './todos/todos-slice'

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    todos: todoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
