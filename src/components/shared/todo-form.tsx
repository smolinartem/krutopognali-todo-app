import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/redux/store'
import { addTodo } from '@/redux/todos/todos-slice'
import type { Priority } from '@/types/index.types'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export default function TodoForm() {
  const dispatch = useDispatch()
  const { priorityOn } = useSelector((state: RootState) => state.settings)
  const { categoryOn } = useSelector((state: RootState) => state.settings)

  const [value, setValue] = useState<string>('')
  const [priority, setPriority] = useState<Priority>('medium')
  const [category, setCategory] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value.trim()) return
    dispatch(addTodo(value.trim(), priorityOn ? priority : 'medium', categoryOn ? category : ''))
    setValue('')
    setCategory('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <fieldset className='w-full flex gap-2'>
        <Input
          type='text'
          placeholder='Add a new task...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className='shrink-0' size='icon' type='submit'>
          <Plus />
        </Button>
      </fieldset>

      {priorityOn && (
        <Select value={priority} onValueChange={(value) => setPriority(value as Priority)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='low'>Low</SelectItem>
            <SelectItem value='medium'>Medium</SelectItem>
            <SelectItem value='high'>High</SelectItem>
          </SelectContent>
        </Select>
      )}

      {categoryOn && (
        <Input
          type='text'
          placeholder='Add the category...'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      )}
    </form>
  )
}
