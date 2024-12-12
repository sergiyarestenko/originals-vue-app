<script setup lang="ts">
import {  ChartBarIcon, QueueListIcon } from '@heroicons/vue/24/outline'

</script>

<template>

<div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1">Click</div>
  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><ChartBarIcon/> Board</li>
    <li><QueueListIcon/> List</li>
  </ul>
</div>
</template>
