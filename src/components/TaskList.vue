<script setup lang="ts">
import { computed } from 'vue'
import type { ITaskStatus } from '@/interfaces'
import { useTasksStore } from '@/stores/tasks'


import TaskCard from './TaskCard.vue'

interface Props {
  status: ITaskStatus
}

const props = defineProps<Props>()

const tasksStore = useTasksStore()

const statusName = {
  todo: 'TODO',
  inProgress: 'In progress',
  done: 'Done',
}

const tasksList = computed(() => tasksStore[props.status])

</script>

<template>
  <div class="card bg-base-100 w-full shadow-xl h-fit">
    <div class="card-body">
      <h2 class="card-title"
      :class="tasksList.length ? 'mb-3': ''">{{ statusName[props.status] }}</h2>
      <TaskCard v-for="task in tasksList" :key="task.id" :task="task" :status="props.status" />
    </div>
  </div>
</template>
