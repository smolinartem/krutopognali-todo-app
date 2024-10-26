import { useState } from 'react'
import { Todo, Filter } from '@/types/index.types'
import TodoForm from './todo-form'
import TodoList from './todo-list'
import { Button } from '../ui/button'

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<Filter>('all')

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const deleteAllCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const toggleComplete = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const editTodo = (id: number, newText: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)))
  }

  const getFilteredTodos = (): Todo[] => {
    if (filter === 'active') return todos.filter((todo) => !todo.completed)
    if (filter === 'completed') return todos.filter((todo) => todo.completed)
    return todos
  }

  const activeTodosCount = todos.filter((todo) => !todo.completed).length

  return (
    <div className='w-full max-w-screen-sm px-4 mx-auto font-mono flex flex-col gap-4'>
      <h1 className='text-blue-600 uppercase text-2xl text-center'>Todo</h1>
      <TodoForm addTodo={addTodo} />

      {todos.length > 0 ? (
        <>
          <div className='flex gap-2'>
            <Button onClick={() => setFilter('all')}>All</Button>
            <Button onClick={() => setFilter('active')}>Active</Button>
            <Button onClick={() => setFilter('completed')}>Completed</Button>
          </div>

          <div className='flex items-center justify-between'>
            <span className='block'>Active tasks: {activeTodosCount}</span>
            <Button onClick={deleteAllCompleted}>Delete All Completed</Button>
          </div>

          <TodoList
            todos={getFilteredTodos()}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </>
      ) : (
        <div className='text-neutral-600 border py-8 flex flex-col'>
          <span className='text-center'>No tasks yet.</span>
          <span className='text-center'>Start by adding a new task.</span>
        </div>
      )}
    </div>
  )
}
