<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/outline'
import { useTemplateRef } from 'vue'

const createDialog = useTemplateRef('create-dialog')

function closeModal() {
  createDialog.close()
}
</script>
<template>
  <div class="flex w-full bg-custom-header text-neutral-800 px-5">
    <div class="flex items-center">
      <h1 class="text-2xl">Example</h1>
      <StarIcon class="w-6 mx-3 mt-1" />
    </div>
    <div class="flex p-5 items-center">
      <button class="btn" onclick="create.showModal()">Create task</button>
      <dialog ref="create-dialog" id="create" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box text-neutral-50">
          <h3 class="text-lg font-bold">Hello!</h3>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="modal-action">
            <div method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn" @click="closeModal">Close</button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  </div>
</template>
