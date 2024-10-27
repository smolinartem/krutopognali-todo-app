import { Priority, Todo } from '@/types/index.types'
import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

interface TodoState {
  todos: Todo[]
  filter: 'all' | 'active' | 'completed'
  searchQuery: string
}

const initialState: TodoState = {
  todos: [],
  filter: 'all',
  searchQuery: '',
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload)
      },
      prepare: (text: string, priority: Priority, category: string) => ({
        payload: {
          id: nanoid(),
          text,
          completed: false,
          priority,
          category,
        } as Todo,
      }),
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload)
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id)
      if (todo) todo.text = action.payload.text
    },
    deleteAllCompleted: (state) => {
      state.todos = state.todos.filter((t) => !t.completed)
    },
    setFilter: (state, action: PayloadAction<'all' | 'active' | 'completed'>) => {
      state.filter = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
  },
})

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  deleteAllCompleted,
  setFilter,
  setSearchQuery,
} = todoSlice.actions

export default todoSlice.reducer
