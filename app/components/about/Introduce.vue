<script setup lang="ts">
import introduces from '~/data/about'
</script>

<template>
  <div class="flex flex-col gap-3">
    <h3 class="text-lg text-muted">
      {{ $t("about.introduce") }}
    </h3>
    <div class="flex flex-col gap-4 text-main">
      <div
        v-for="introduce in introduces[$i18n.locale as 'en' | 'fr']"
        :key="introduce.title"
      >
        <h4 class="font-semibold text-main">
          {{ introduce.title }}
        </h4>
        <div class="flex gap-1 text-muted">
          <p>
            {{ introduce.date }}
          </p>
          <span class="mx-1"> / </span>
          <p>
            {{ introduce.company }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
