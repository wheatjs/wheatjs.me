<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  primary: boolean
  to: string
  href: string
}>()
</script>

<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    class="!no-underline rounded px-4 py-2 inline-block"
    :class="{'bg-pink-500 !text-pink-900': primary}"
  >
    <slot />
  </component>
</template>
