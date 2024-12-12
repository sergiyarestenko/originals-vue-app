<script setup lang="ts">
import { StarIcon, LockClosedIcon } from '@heroicons/vue/24/outline'
import ViewSwitcher from '@/components/ViewSwitcher.vue'
import TheSettings from '@/components/TheSettings.vue'
</script>
<template>
  <div class="flex justify-between w-full bg-custom-header py-5">
    <div class="flex">
      <div class="flex">
        <h1>Example</h1>
        <StarIcon class="w-5" />
      </div>
      <div class="flex">
        <LockClosedIcon class="w-5" />
        <p>Private</p>
      </div>
      <ViewSwitcher />
    </div>
    <div class="flex border border-black">
      <TheSettings />
    </div>
  </div>
</template>
