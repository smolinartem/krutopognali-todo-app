import { Todo } from '@/types/index.types'

import TodoItem from './todo-item'
import { AnimatePresence } from 'framer-motion'

interface Props {
  todos: Todo[]
  toggleComplete: (id: number) => void
  deleteTodo: (id: number) => void
  editTodo: (id: number, newText: string) => void
}
export default function TodoList({ todos, toggleComplete, deleteTodo, editTodo }: Props) {
  return (
    <ul className='flex flex-col gap-4'>
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </AnimatePresence>
    </ul>
  )
}
