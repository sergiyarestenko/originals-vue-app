<script setup lang="ts">
import { RouterView } from 'vue-router'

//it`s mock - preload users and some tasks

import type { IUser, ITask } from '@/interfaces'

import { onBeforeMount, nextTick } from 'vue'
import { useUsersStore } from '@/stores/users'
import { useTasksStore } from '@/stores/tasks'

// preload users

const zinchenko: Omit<IUser, 'id'> = {
  fullName: 'Oleksandr Zinchenko',
  position: 'Midfielder',
}
const dovbyk: Omit<IUser, 'id'> = {
  fullName: 'Artem Dovbyk',
  position: 'Attakers',
}

const zabarnyi: Omit<IUser, 'id'> = {
  fullName: 'Illia Zabarnyi',
  position: 'Defender',
}

const mudryk: Omit<IUser, 'id'> = {
  fullName: 'Mykhailo Mudryk',
  position: 'Midfielder',
}

const usersStore = useUsersStore()

const users: Omit<IUser, 'id'>[] = [zinchenko, dovbyk, zabarnyi, mudryk]

const tasksStore = useTasksStore()

function createFirstTask(creatorId: string, developerId: string) {
  const firstTask: Omit<ITask, 'id'> = {
    name: 'To score a goal',
    description:
      'Get the ball in the center of the field to pass all the defenders. to enter the square gate.',
    creatorId: creatorId,
    developerId: developerId,
    status: 'todo',
    priority: 'Normal',
  }
  tasksStore.createTask(firstTask)
}

// // function getSomeUserId (num) {
//   console.log()
// }

onBeforeMount(() => {
  users.forEach((user: Omit<IUser, 'id'>) => usersStore.createUser(user))

  nextTick(() => {
    createFirstTask(usersStore.activeUsers[0].id, usersStore.activeUsers[1].id)
  })
})
</script>

<template>
  <RouterView />
</template>
