import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

import type { IUser } from '@/interfaces'

const createId = () => Math.random().toString(36).substr(2, 9)

const mudryk: IUser = {
  fullName: 'Mykhailo Mudryk',
  position: 'Midfielder',
}

const zinchenko: IUser = {
  fullName: 'Oleksandr Zinchenko',
  position: 'Midfielder',
}
const dovbyk: IUser = {
  fullName: 'Artem Dovbyk',
  position: 'Attakers',
}

const zabarnyi: IUser = {
  fullName: 'Illia Zabarnyi',
  position: 'Defender',
}

export const useTasksStore = defineStore('tasksStore', () => {
  const users = ref<IUser[]>([])

  function createUser(user: Omit<IUser, 'id'>) {
    const newUser: IUser = {
      ...user,
      id: createId(),
    }

    addUser(newUser)
  }

  function addUser(user: IUser) {
    users.value.push(user)
  }

  return {
    users,
  }
})
