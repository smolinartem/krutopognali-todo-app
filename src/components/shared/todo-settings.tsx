import { RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCategory, togglePriority } from '@/redux/settings/settings-slice'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'

export default function TodoSettings() {
  const dispatch = useDispatch()
  const { priorityOn } = useSelector((state: RootState) => state.settings)
  const { categoryOn } = useSelector((state: RootState) => state.settings)

  return (
    <div className='p-4 shadow-md'>
      <h2 className='text-lg font-bold mb-2'>Настройки</h2>
      <div className='flex items-center mb-2'>
        <Switch
          id='priority'
          checked={priorityOn}
          onCheckedChange={() => dispatch(togglePriority())}
          className='mr-2'
        />
        <Label htmlFor='priority'>Включить приоритет задач</Label>
      </div>
      <div className='flex items-center mb-2'>
        <Switch
          id='category'
          checked={categoryOn}
          onCheckedChange={() => dispatch(toggleCategory())}
          className='mr-2'
        />
        <Label htmlFor='category'>Включить категории задач</Label>
      </div>
    </div>
  )
}
