import { useState } from 'react'
import { Button } from '../ui/button'
import { Search, Settings } from 'lucide-react'
// --redux--
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllCompleted } from '@/redux/todos/todos-slice'
import { RootState } from '@/redux/store'
// --components--
import TodoFilters from './todo-filters'
import TodoSettings from './todo-settings'
import TodoForm from './todo-form'
import TodoList from './todo-list'

export default function TodoApp() {
  const dispatch = useDispatch()
  const { todos } = useSelector((state: RootState) => state.todos)
  const { filtersOn, countActiveOn, clearCompletedOn } = useSelector(
    (state: RootState) => state.settings
  )

  const [showSettings, setShowSettings] = useState(false)

  const activeTodosCount = todos.filter((todo) => !todo.completed).length

  console.log(todos)

  return (
    <div className='w-full max-w-screen-sm px-4 mx-auto font-mono flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <h1 className='text-blue-600 lowercase text-xl sm:text-2xl text-center'>
          krutopognali-todo-app
        </h1>
        <Button
          className='shrink-0'
          onClick={() => setShowSettings(!showSettings)}
          size='icon'
          variant='outline'
        >
          <Settings />
        </Button>
        <Button className='shrink-0' size='icon' variant='outline'>
          <Search />
        </Button>
      </div>

      {showSettings && <TodoSettings />}

      <TodoForm />

      {filtersOn && <TodoFilters />}
      {countActiveOn && <span className='block'>Active tasks: {activeTodosCount}</span>}
      {clearCompletedOn && (
        <Button onClick={() => dispatch(deleteAllCompleted())}>Clear completed</Button>
      )}
      {todos.length > 0 ? (
        <TodoList />
      ) : (
        <div className='text-neutral-600 border py-8 flex flex-col'>
          <span className='text-center'>No tasks yet.</span>
          <span className='text-center'>Start by adding a new task.</span>
        </div>
      )}
    </div>
  )
}
