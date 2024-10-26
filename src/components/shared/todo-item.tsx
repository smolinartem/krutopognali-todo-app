import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Pencil, Trash2 } from 'lucide-react'
import { Todo } from '@/types/index.types'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

import { Input } from '../ui/input'

interface Props {
  todo: Todo
  toggleComplete: (id: number) => void
  deleteTodo: (id: number) => void
  editTodo: (id: number, newText: string) => void
}
export default function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [value, setValue] = useState<string>(todo.text)

  useEffect(() => {
    setValue(todo.text)
  }, [todo.text])

  const handleSave = () => {
    if (value.trim()) {
      editTodo(todo.id, value.trim())
    }
    setIsEditing(false)
  }

  const handleEditClick = () => {
    setIsEditing(true)
    setValue(todo.text)
  }

  return (
    <motion.li
      key={todo.id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4 }}
      className='border flex items-center justify-between gap-1'
    >
      {isEditing ? (
        <Input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          className='flex-grow'
          autoFocus
        />
      ) : (
        <span
          className={cn(
            todo.completed && 'line-through',
            'cursor-pointer block text-neutral-600 text-wrap pl-2'
          )}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.text}
        </span>
      )}

      <div>
        {!isEditing && (
          <Button onClick={handleEditClick} className='shrink-0' variant='ghost' size='icon'>
            <Pencil />
          </Button>
        )}
        <Button
          onClick={() => deleteTodo(todo.id)}
          className='shrink-0'
          variant='ghost'
          size='icon'
        >
          <Trash2 />
        </Button>
      </div>
    </motion.li>
  )
}
