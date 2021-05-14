<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'wheatjs',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <div
    h="full"
    flex="~ col"
    p="x-4"
  >
    <Navigation />
    <main
      flex="1"
      w="full"
      max-w="screen-lg"
      m="x-auto"
      p="t-18"
      text="dark:(light-300) dark-100"
    >
      <router-view />
    </main>
    <Footer />
  </div>
</template>
