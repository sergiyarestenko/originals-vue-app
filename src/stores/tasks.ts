import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

import type { ITask } from '@/interfaces'

const createId = () => Math.random().toString(36).substr(2, 9)

const changeProp = (
  id: string,
  key: 'status' | 'priority' | 'developerId',
  value: string,
  task: ITask,
) => {
  return task.id === id ? { ...task, [key]: value } : task
}

export const useTasksStore = defineStore('tasksStore', () => {
  const tasks = ref<ITask[]>([])

  function createTask(task: Omit<ITask, 'id'>) {
    const newTask: ITask = {
      ...task,
      id: createId(),
      developerId: task.developerId || '',
      status: task.status || 'TODO',
      priority: task.priority || 'Normal',
    }

    addTask(newTask)
  }

  function addTask(task: ITask) {
    tasks.value.push(task)
  }

  function changeStatus(id: string, statusValue: string, developerId: string) {
    if (!developerId) return

    tasks.value = tasks.value.map((task) => changeProp(id, 'status', statusValue, task))
  }

  function changePriority(id: string, priorityValue: string) {
    tasks.value = tasks.value.map((task) => changeProp(id, 'priority', priorityValue, task))
  }

  function changeDeveloper(id: string, developerIdValue: string) {
    tasks.value = tasks.value.map((task) => changeProp(id, 'developerId', developerIdValue, task))
  }

  const todoTasks = computed(() => tasks.value.filter((task) => (task.status === 'TODO')))

  const inProgressTasks = computed(() =>
    tasks.value.filter((task) => (task.status === 'In progress')),
  )

  const doneTasks = computed(() => tasks.value.filter((task) => (task.status === 'Done')))

  return {
    createTask,
    changeStatus,
    changePriority,
    changeDeveloper,
    todoTasks,
    inProgressTasks,
    doneTasks,
  }
})
