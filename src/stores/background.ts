import { defineStore } from 'pinia'


export const useBackgroundStore = defineStore('backgroundStore', () => {
  const backgroundList = ['light', 'river', 'sea']

  const currentBackground = backgroundList[2]

  const currentBackgroundPath = `@/assets/backgrounds/${currentBackground}.webp`

  return { currentBackgroundPath }
})
