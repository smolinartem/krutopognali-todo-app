import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '@/redux/todos/todos-slice'
import { RootState } from '@/redux/store'

export default function TodoFilters() {
  const dispatch = useDispatch()
  const { filter } = useSelector((state: RootState) => state.todos)
  return (
    <div className='flex gap-2'>
      <Button
        className={cn(filter === 'all' && 'border-blue-600')}
        variant='outline'
        onClick={() => dispatch(setFilter('all'))}
      >
        All
      </Button>
      <Button
        className={cn(filter === 'active' && 'border-blue-600')}
        variant='outline'
        onClick={() => dispatch(setFilter('active'))}
      >
        Active
      </Button>
      <Button
        className={cn(filter === 'completed' && 'border-blue-600')}
        variant='outline'
        onClick={() => dispatch(setFilter('completed'))}
      >
        Completed
      </Button>
    </div>
  )
}
