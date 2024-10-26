export type Todo = {
  id: number
  text: string
  completed: boolean
  priority: Priority
  category: string
}

export type Filter = 'all' | 'active' | 'completed'
export type Priority = 'low' | 'medium' | 'high'
