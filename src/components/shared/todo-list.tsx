import TodoItem from './todo-item'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function TodoList() {
  const { todos, filter } = useSelector((state: RootState) => state.todos)

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

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
