import { useState } from 'react'
import { Todo } from '@/types/index.types'
import TodoForm from './todo-form'

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false }
    setTodos([...todos, newTodo])
  }

  return (
    <div className='w-full max-w-screen-sm px-4 font-mono flex flex-col gap-4'>
      <h1 className='text-blue-600 uppercase text-2xl text-center'>Todo</h1>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}
