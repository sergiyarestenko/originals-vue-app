<script setup lang="ts">
import { computed } from 'vue'
import { useUsersStore } from '@/stores/users'
import { useTasksStore } from '@/stores/tasks'

import type { ITask, ITaskStatus } from '@/interfaces'

interface Props {
  task: ITask
  status: ITaskStatus
}

const props = defineProps<Props>()

const statusName = {
  todo: {
    name: 'TODO',
    next: 'inProgress',
  },
  inProgress: {
    name: 'In progress',
    next: 'done',
  },
  done: {
    name: 'Done',
    next: '',
  },
}

const badgeClass = {
  hight: 'badge-warning',
  normal: 'badge-success',
  low: 'badge-info',
}

const currentBadgeClass = computed(() => badgeClass[props.task.priority])

const usersStore = useUsersStore()

const userName = (userId: string) => usersStore.users.find((user) => user.id === userId)?.fullName

const nextStatusName = computed(() => {
  const nextStatus: string = statusName[props.status].next
  return statusName[nextStatus].name
})

const tasksStore = useTasksStore()
</script>
<template>
  <div class="collapse bg-base-200 border">
    <input type="radio" :name="props.status" />
    <div class="collapse-title text-xl font-medium flex gap-3 items-center">
      <div class="badge badge-xs" :class="currentBadgeClass"></div>

      <p class="flex">{{ task.name }}</p>
    </div>
    <div class="collapse-content">
      <p>
        {{ task.description }}
      </p>
      <p>Creator: {{ userName(task.creatorId) }}</p>
      <p v-if="task.developerId">Developer: {{ userName(task.developerId) }}</p>
      <button class="btn btn-ghost btn-sm">Change task</button>
      <button
        v-if="statusName[props.status].next"
        class="btn btn-ghost btn-sm"
        :disabled="!task.developerId"
        @click="tasksStore.changeStatus(task.id, statusName[props.status].next)"
      >
        Move to {{ nextStatusName }}
      </button>
    </div>
  </div>
</template>
