import { Input } from '../ui/input'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setSearchQuery } from '@/redux/todos/todos-slice'

export default function TodoSearch() {
  const dispatch = useDispatch()
  const searchQuery = useSelector((state: RootState) => state.todos.searchQuery)

  return (
    <Input
      type='text'
      placeholder='Search the task...'
      value={searchQuery}
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      onBlur={() => dispatch(setSearchQuery(''))}
      autoFocus
    />
  )
}
