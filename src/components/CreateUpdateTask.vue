<script setup lang="ts">
import { defineEmits, computed, ref, onMounted } from 'vue'
import type { ITask, ITaskStatus, IPriority } from '@/interfaces'
import { useUsersStore } from '@/stores/users'
import { useTasksStore } from '@/stores/tasks'

// ITaskStatus

const emit = defineEmits<{ (e: 'close-modal'): void }>()

function closeModal(): void {
  emit('close-modal')
}

const currentName = ref('')
const currentDescription = ref('')
const currentCreatorId = ref('')
const currentDeveloperId = ref('')
const currentStatus = ref<ITaskStatus>('todo')
const currentPriority = ref<IPriority>('normal')

type ICreateUpdateTaskProps = {
  creating: boolean
  task?: ITask
}

const props = withDefaults(defineProps<ICreateUpdateTaskProps>(), {
  creating: false,
})

const submitDisabled = computed(() => {
  if (props.creating) {
    return !currentName.value || !currentDescription.value || !currentCreatorId.value
  } else {
    return (
      !currentName.value ||
      !currentDescription.value ||
      !currentCreatorId.value ||
      !currentDeveloperId.value
    )
  }
})

function onSubmitButtonClick() {
  if (props.creating) {
    createNewTask()
  }
  if (!props.creating) {
    updateCurrentTask()
  }
}

const tasksStore = useTasksStore()

const currentTask = (): Omit<ITask, 'id'> => {
  return {
    name: currentName.value,
    description: currentDescription.value,
    creatorId: currentCreatorId.value,
    developerId: currentDeveloperId.value,
    status: currentStatus.value,
    priority: currentPriority.value,
  }
}

function createNewTask() {

  tasksStore.createTask(currentTask())
  closeModal()
}

function updateCurrentTask() {
  tasksStore.updateTask(props.task!.id, currentTask())

  closeModal()
}

const usersStore = useUsersStore()

const statuses: ITaskStatus[] = ['todo', 'inProgress', 'done']

const statusName = {
  todo: 'TODO',
  inProgress: 'In progress',
  done: 'Done',
}

const priorities: IPriority[] = ['hight', 'normal', 'low']

const priorityName = {
  hight: 'Hight',
  normal: 'Normal',
  low: 'Low',
}

onMounted(() => {
  if (!props.creating) {
    currentName.value = props.task!.name
    currentDescription.value = props.task!.description
    currentCreatorId.value = props.task!.creatorId
    currentDeveloperId.value = props.task!.developerId
    currentStatus.value = props.task!.status
    currentPriority.value = props.task!.priority
  }
})
</script>
<template>
  <div class="fixed inset-0 z-20 flex justify-center items-center">
    <div class="absolute inset-0 bg-neutral-800 opacity-80" @click="closeModal" />

    <div class="flex z-30 card bg-base-100 w-11/12 max-w-xl shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{{ props.creating ? 'Create new ' : 'Update ' }} task</h2>
        <div class="mt-3">
          <p class="text-sm mb-1">Task name</p>
          <input v-model="currentName" type="text" class="input input-bordered w-full" />
        </div>
        <div class="mt-3">
          <p class="text-sm mb-1">Description</p>

          <textarea
            v-model="currentDescription"
            class="textarea textarea-bordered textarea-sm w-full"
          ></textarea>
        </div>
        <div class="mt-2">
          <p class="text-sm mb-1">Creator</p>

          <select class="select select-bordered w-full" v-model="currentCreatorId">
            <option v-for="user in usersStore.users" :key="user.id" :value="user.id">
              {{ user.fullName }}
            </option>
          </select>
        </div>
        <div class="mt-2">
          <p class="text-sm mb-1">Developer</p>

          <select class="select select-bordered w-full" v-model="currentDeveloperId">
            <option v-for="user in usersStore.users" :key="user.id" :value="user.id">
              {{ user.fullName }}
            </option>
          </select>
        </div>
        <div class="mt-2">
          <p class="text-sm mb-1">Status</p>

          <select class="select select-bordered w-full" v-model="currentStatus">
            <option v-for="status in statuses" :key="status" :value="status">
              {{ statusName[status] }}
            </option>
          </select>
        </div>
        <div class="mt-2">
          <p class="text-sm mb-1">Priority</p>

          <select class="select select-bordered w-full" v-model="currentPriority">
            <option v-for="priority in priorities" :key="priority" :value="priority">
              {{ priorityName[priority] }}
            </option>
          </select>
        </div>

        <div class="card-actions justify-center mt-5">
          <button class="btn btn-neutral" :disabled="submitDisabled" @click="onSubmitButtonClick">
            {{ props.creating ? 'Create' : 'Update' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
