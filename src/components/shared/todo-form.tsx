import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

interface Props {
  addTodo: (text: string) => void
}

export default function TodoForm({ addTodo }: Props) {
  const [value, setValue] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value.trim()) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <Input
        type='text'
        placeholder='Add a new task...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className='shrink-0' size='icon' type='submit'>
        <Plus />
      </Button>
    </form>
  )
}
