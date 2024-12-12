<script setup lang="ts">
import TaskList from '@/components/TaskList.vue'

import type { ITaskStatus } from '@/interfaces'

const taskStatuses: ITaskStatus[] = ['todo', 'inProgress', 'done']
</script>

<template>
  <div class="flex flex-nowrap w-full p-5 gap-x-5">
    <TaskList v-for="status in taskStatuses" :key="status" :status="status" />
  </div>
</template>
