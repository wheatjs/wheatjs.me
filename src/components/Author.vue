<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  name: string
  gravatar: string
  twitter: string
}>()
</script>

<template>
  <div flex="~ row" items="center" space="x-2">
    <img border="rounded-full" :src="`https://secure.gravatar.com/avatar/${gravatar}?size=42`" />
    <div flex="~ col">
      <span text="dark:(light-900 opacity-70)">{{ name }}</span>
      <a
        :href="`https://twitter.com/${twitter}`"
        class="text-pink-500 text-sm"
      >@{{ twitter }}</a>
    </div>
  </div>
</template>
