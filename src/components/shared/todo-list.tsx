import TodoItem from './todo-item'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function TodoList() {
  const { todos, filter } = useSelector((state: RootState) => state.todos)
  const searchQuery = useSelector((state: RootState) => state.todos.searchQuery).toLowerCase()

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === 'active') return !todo.completed
      if (filter === 'completed') return todo.completed
      return true
    })
    .filter((todo) => todo.text.toLowerCase().includes(searchQuery))

  return (
    <ul className='flex flex-col gap-4'>
      <AnimatePresence>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </AnimatePresence>
    </ul>
  )
}
