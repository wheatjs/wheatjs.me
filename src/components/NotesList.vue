<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes()
  .filter(i => i.path.startsWith('/notes') && (i.meta as any).frontmatter.date)
  .sort((a, b) => +new Date((b.meta as any).frontmatter.date) - +new Date((a.meta as any).frontmatter.date))

</script>

<template>
  <div grid="~ md:cols-2" gap="8">
    <NoteItem
      v-for="route in routes"
      :key="route.path"
      :note="route"
    />
  </div>
</template>
