import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

import type { IUser } from '@/interfaces'

const createId = () => Math.random().toString(36).substr(2, 9)

export const useUsersStore = defineStore('usersStore', () => {
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

  const activeUsers = computed(() => users.value)

  return {
    activeUsers,
    createUser,
  }
})
