import { Todo } from '@/types/index.types'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  todos: Todo[]
  toggleComplete: (id: number) => void
  deleteTodo: (id: number) => void
}
export default function TodoList({ todos, toggleComplete, deleteTodo }: Props) {
  return (
    <ul className='flex flex-col gap-4'>
      {todos.map((todo) => (
        <li key={todo.id} className='border pl-2 flex items-center justify-between gap-2'>
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
        </li>
      ))}
    </ul>
  )
}
