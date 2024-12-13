<script setup lang="ts">
import type { ITaskStatus } from '@/interfaces'
import TaskList from '@/components/TaskList.vue'

const taskStatuses: ITaskStatus[] = ['todo', 'inProgress', 'done']
</script>

<template>
  <div class="flex flex-wrap lg:flex-nowrap w-full p-5 gap-5">
    <div v-for="status in taskStatuses" :key="status" class="flex w-full min-h-full">
      <TaskList :status="status" />
    </div>
  </div>
</template>
