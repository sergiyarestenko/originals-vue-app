<script setup lang="ts">
import {  Cog8ToothIcon } from '@heroicons/vue/24/outline'

</script>
<template>
<div class="dropdown dropdown-left	">
  <div tabindex="0" role="button" class="btn m-1"> <Cog8ToothIcon class="w-5"/></div>
  <div
    tabindex="0"
    class="dropdown-content card card-compact bg-primary text-primary-content z-[1] w-64 p-2 shadow">
    <div class="card-body">
      <h3 class="card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div>
  </div>
</div>
</template>


