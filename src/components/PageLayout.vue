<template>
  <div
    class="sea-bg relative flex flex-col flex-nowrap w-full min-h-dvh bg-cover bg-center bg-no-repeat"
  >
    <header v-if="$slots.header" class="w-full sticky top-0">
      <slot name="header" />
    </header>
    <main class="w-full">
      <slot />
    </main>
  </div>
</template>
<style scoped>
.sea-bg {
  background-image: url('@/assets/backgrounds/river.webp');
}
</style>
