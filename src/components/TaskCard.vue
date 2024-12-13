<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ITask, ITaskStatus } from '@/interfaces'
import { useUsersStore } from '@/stores/users'
import { useTasksStore } from '@/stores/tasks'
import CreateUpdateTask from './CreateUpdateTask.vue'

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

const isModal = ref(false)

function closeModal() {
  isModal.value = false
}
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
      <p class="mt-3">Creator: {{ userName(task.creatorId) }}</p>
      <p v-if="task.developerId">Developer: {{ userName(task.developerId) }}</p>
      <div class="flex mt-3 gap-3">
        <button class="btn btn-neutral btn-sm" @click="isModal = true">Update task</button>
        <button
          v-if="statusName[props.status].next"
          class="btn btn-neutral btn-sm"
          :disabled="!task.developerId"
          @click="tasksStore.changeStatus(task.id, statusName[props.status].next)"
        >
          Move to {{ nextStatusName }}
        </button>
      </div>
    </div>
    <Teleport to="body">
      <CreateUpdateTask v-if="isModal" @close-modal="closeModal" :task="task"></CreateUpdateTask>
    </Teleport>
  </div>
</template>
