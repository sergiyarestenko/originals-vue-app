<script setup lang="ts">
import { computed } from 'vue'
import type { ITaskStatus } from '@/interfaces'
import { useTasksStore } from '@/stores/tasks'

interface Props {
  status: ITaskStatus
}

const props = defineProps<Props>()

const tasksStore = useTasksStore()

const statusName ={
  todo: "TODO",
  inProgress: 'In progress',
  done: 'Done'
}


const tasksList = computed(() => tasksStore[props.status])
</script>

<template>
  <div class="card bg-base-100 w-full shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{{ statusName[props.status] }}</h2>
      <p>{{ tasksList }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>
