<script setup lang="ts"></script>

<template>
  <div class="flex justify-center">
    <SpotlightCard
      mode="after"
      from="rgba(255,255,255,0.1)"
      :size="400"
      class="group hidden w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:flex"
    >
      <div class="relative">
        <NuxtImg
          width="256"
          src="/assets/hobby/climbing5.PNG"
          class="size-64 rounded-xl object-cover transition-all duration-300"
          alt="aurora Profile Picture"
          aria-label="aurora Profile Picture"
        />
      </div>
    </SpotlightCard>
    <SpotlightCard
      mode="after"
      from="rgba(255,255,255,0.1)"
      :size="400"
      class="group w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:hidden"
    >
      <NuxtImg
        width="256"
        src="/assets/hobby/climbing5.PNG"
        class="size-64 rounded-xl object-cover transition-all duration-300"
        alt="Aurora Profile Picture"
        aria-label="Aurora Profile Picture"
      />
    </SpotlightCard>
  </div>
</template>

<style scoped></style>
