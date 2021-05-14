<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  label: string
  to?: string
}>()
</script>

<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to"
    p="4"
    bg="light-200 dark:dark-900"
    border="rounded"
    shadow="~ sm"
    flex="~"
    items="center"
  >
    <div flex="1">
      <div flex="~ 1" text="lg" items="center" space="x-2">
        <span text="dark:white dark-100 opacity-50 xl">
          <slot name="icon" />
        </span>
        <span text="dark:(white opacity-65) dark-100">{{ label }}</span>
      </div>
      <div class="prose prose-sm" p="t-2" text="dark:(white opacity-50) dark-100">
        <slot />
      </div>
    </div>
    <carbon-arrow-right text="2xl white opacity-24" />
  </component>
</template>
