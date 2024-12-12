<script setup lang="ts">
import PageLayout from '../components/PageLayout.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheBoard from '@/components/TheBoard.vue'
</script>

<template>
  <PageLayout>
    <template #header>
      <TheHeader />
    </template>
    <TheBoard />
  </PageLayout>
</template>
