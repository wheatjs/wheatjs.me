<script setup lang="ts">
import { ref } from 'vue'
import { useTypedJS } from '~/composables'

const target = ref()

useTypedJS(target, {
  typeSpeed: 125,
  backSpeed: 100,
  smartBackspace: false,
  startDelay: 100,
  backDelay: 1500,
  showCursor: false,
  loop: true,
  strings: ['Hello,', 'こんにちは,', 'Hola,', '你好,', 'नमस्ते,', 'Bonjour,'],
})
</script>

<template>
  <div text="5xl" h="18">
    <div ref="target">
    </div>
  </div>
</template>
