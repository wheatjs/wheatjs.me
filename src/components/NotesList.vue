<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes()
  .filter(i => i.path.startsWith('/notes') && i.meta.frontmatter.date)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))

</script>

<template>
  <div>
    Notes List
    {{ routes }}
  </div>
</template>
