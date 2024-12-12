export type IUser = {
  id: string
  fullName: string
  position: string
}

export type ITaskStatus = 'todo' | 'inProgress' | 'done'
export type IPriority = 'Hight' | 'Normal' | 'Low'

export type ITask = {
  id: string
  name: string
  description: string
  creatorId: IUser['id']
  developerId: IUser['id']

  status: ITaskStatus
  priority: IPriority
}
