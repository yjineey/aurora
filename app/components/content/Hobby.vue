<script setup lang="ts"></script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      <ContentSlot :use="$slots.title" />
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      <ContentSlot :use="$slots.subtitle" />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div class="flex flex-col gap-3 grid grid-cols-1 sm:grid-cols-3 sm:items-center sm:justify-between">
      <AboutProfilePicture />
      <AboutProfilePicture />
      <AboutProfilePicture />
      <AboutProfilePicture />
      <AboutProfilePicture />
      <AboutProfilePicture />
    </div>
  </section>
</template>
