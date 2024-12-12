<script setup lang="ts">
import { ref } from 'vue'

import { StarIcon } from '@heroicons/vue/24/outline'

import CreateUpdateTask from './CreateUpdateTask.vue';

const isModal = ref(false)

function closeModal() {
  isModal.value = false
}



</script>
<template>
  <div class="flex w-full bg-custom-header text-neutral-800 px-5 py-2">
    <div class="flex items-center">
      <h1 class="text-2xl">Example</h1>
      <StarIcon class="w-6 mx-3 mt-1" />
    </div>
    <div class="flex px-5 items-center">
      <button class="btn" @click="isModal = true">Create task</button>
    </div>
    <Teleport to="body">
      <CreateUpdateTask v-if="isModal" @close-modal="closeModal" creating></CreateUpdateTask>
    </Teleport>
  </div>
</template>
