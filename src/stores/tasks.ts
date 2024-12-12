import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

import type { ITask } from '@/interfaces'

const createId = () => Math.random().toString(36).substr(2, 9)

const changeProp = (id: string, key: string, value: string, task: ITask) => {
  return task.id === id ? { ...task, [key]: value } : task
}

export const useTasksStore = defineStore('tasksStore', () => {
  const tasks = ref<ITask[]>([])

  function createTask(task: Omit<ITask, 'id'>) {
    const newTask: ITask = {
      ...task,
      id: createId(),
      developerId: task.developerId || '',
      status: task.status || 'todo',
      priority: task.priority || 'normal',
    }

    addTask(newTask)
  }

  function addTask(task: ITask) {
    tasks.value.push(task)
  }

  function updateTask(id: string, updatedTask: Omit<ITask, 'id'>) {
    for (const key in updatedTask) {
      tasks.value = tasks.value.map((task) => changeProp(id, key, updatedTask[key], task))
    }
  }

  const todo = computed(() => tasks.value.filter((task) => task.status === 'todo'))

  const inProgress = computed(() => tasks.value.filter((task) => task.status === 'inProgress'))

  const done = computed(() => tasks.value.filter((task) => task.status === 'done'))

  return {
    createTask,

    updateTask,
    todo,
    inProgress,
    done,
  }
})
