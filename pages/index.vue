<template>
  <div
    h="full"
    p="y-4"
    gap="4 md:8 lg:16"
    grid="~ md:cols-2"
  >
    <div
      flex="~ col"
      justify="center"
    >
      <Hello />
      <div text="dark:(white opacity-75)">
        <About class="mx-0" />
      </div>
    </div>
    <div
      grid="~"
      gap="4"
      content="center"
    >
      <Card label="Notes" to="/notes">
        <template #icon>
          <ph-note />
        </template>
        Take a look out some of my short notes.
      </Card>
      <Card label="Projects" to="/projects">
        <template #icon>
          <ri-git-repository-line />
        </template>
        Check out my personal projects that I've been working on.
      </Card>
    </div>
  </div>
</template>
