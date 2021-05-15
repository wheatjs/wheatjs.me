<script setup lang="ts">
import { defineProps, computed } from 'vue'
import type { RouteRecordNormalized } from 'vue-router'
import { formatDate } from '~/logic'

const props = defineProps<{
  note: RouteRecordNormalized
}>()

const info = computed(() => (props.note.meta as any).frontmatter)
</script>

<template>
  <div bg="dark:dark-900 light-300" overflow="hidden" shadow="~ lg" border="rounded">
    <router-link :to="note.path">
      <div class="aspect-ratio-9/16" position="relatie">
        <img
          v-if="info.cover"
          class="object-fit-cover"
          position="absolute inset-0"
          h="full"
          w="full"
          :src="info.cover"
        />
      </div>
      <div flex="~ col" p="4">
        <span>{{ info.title }}</span>
        <span text="sm dark:(light-900 opacity-50) dark-100 opacity-70">{{ formatDate(info.date) }}</span>
        <span m="t-2" text="dark:(light-900 opacity-60) dark-100 opacity-80">
          {{ info.description }}
        </span>
      </div>
    </router-link>
  </div>
</template>
