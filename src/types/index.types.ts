export type Todo = {
  id: string
  text: string
  completed: boolean
  priority: Priority
  category: string
}

export type Filter = 'all' | 'active' | 'completed'
export type Priority = 'low' | 'medium' | 'high'
