<script setup lang="ts">
import { defineProps } from 'vue'
import { useHead } from '@vueuse/head'
import { formatDate } from '~/logic'

useHead({
  title: 'Notes',
})

interface Note {
  title: string
  date: string
  author: string
  twitter: string
  gravatar: string
  cover: string
}

defineProps<{
  frontmatter: Note
}>()
</script>

<template>
  <div v-if="frontmatter.date">
    <header text="center" border="b-1 dark:dark-200" p="y-10">
      <span text="dark:(light-900 opacity-60)" m="b-2" display="block">{{ formatDate(frontmatter.date) }}</span>
      <h1 text="3xl">
        {{ frontmatter.title }}
      </h1>
      <div class="lg:hidden" text="left" flex="~" m="t-4">
        <Author
          class="mx-auto"
          :name="frontmatter.author"
          :twitter="frontmatter.twitter"
          :gravatar="frontmatter.gravatar"
        />
      </div>
    </header>
    <div grid="~ lg:cols-3" gap="8">
      <aside class="hidden lg:block" m="t-8">
        <Author
          :name="frontmatter.author"
          :twitter="frontmatter.twitter"
          :gravatar="frontmatter.gravatar"
        />

        <router-link
          flex="~ row"
          items="center"
          class="dark:(text-white-900 opacity-60)"
          space="x-2"
          m="t-4"
          to="/notes"
        >
          <carbon-arrow-left />
          <span>
            Back to Notes
          </span>
        </router-link>
      </aside>
      <article col="span-2" m="t-8">
        <img v-if="frontmatter.cover" border="rounded" :src="frontmatter.cover" />
        <div class="prose prose-lg" text="dark:(light-900 opacity-72)">
          <slot />
        </div>
      </article>
    </div>
  </div>
  <div v-else class="prose prose-lg">
    <slot />
  </div>
</template>
