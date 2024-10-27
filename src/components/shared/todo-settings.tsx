import { RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { toggleOption, SettingsState } from '@/redux/settings/settings-slice'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'

export default function TodoSettings() {
  const dispatch = useDispatch()
  const settings = useSelector((state: RootState) => state.settings)

  return (
    <div className='p-4 shadow-md'>
      <h2 className='text-lg font-bold mb-2'>Настройки</h2>
      {Object.entries(settings).map(([key, value]) => (
        <div key={key} className='flex items-center mb-2'>
          <Switch
            id={key}
            checked={value}
            onCheckedChange={() => dispatch(toggleOption(key as keyof SettingsState))}
            className='mr-2'
          />
          <Label htmlFor={key}>{key}</Label>
        </div>
      ))}
    </div>
  )
}
