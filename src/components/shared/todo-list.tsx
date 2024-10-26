import { Todo } from '@/types/index.types'
import { Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  todos: Todo[]
  toggleComplete: (id: number) => void
  deleteTodo: (id: number) => void
}
export default function TodoList({ todos, toggleComplete, deleteTodo }: Props) {
  return (
    <ul className='flex flex-col gap-4'>
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className='border pl-2 flex items-center justify-between gap-2'
          >
            <span
              className={cn(
                todo.completed && 'line-through',
                'cursor-pointer block text-neutral-600'
              )}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <Button
              onClick={() => deleteTodo(todo.id)}
              className='shrink-0'
              variant='ghost'
              size='icon'
            >
              <Trash2 />
            </Button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}
