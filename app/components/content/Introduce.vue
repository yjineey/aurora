<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  introduce: {
    type: Object as PropType<{ title: string, fullname: string, phone: string, email: string, message: string }[]>,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <h3 class="text-lg text-muted">
      {{ $t("global.introduce") }}
    </h3>
    <div class="flex flex-col gap-4 text-main">
      <div
        v-for="intro in introduce"
        :key="intro.title"
      >
        <h4 class="font-semibold  text-main">
       {{ intro.fullname }}
        </h4>
        <div class="flex gap-1 text-muted">
          <p>
            H.P  : {{ intro.phone }}
          </p>
        </div>
        <div class="flex gap-1 text-muted">
          <p>
            E-mail : {{ intro.email }}
          </p>
        </div>
      </div>
      <Divider class="my-8" />
    </div>
  </div>
</template>

<style scoped></style>
