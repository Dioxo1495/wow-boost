<template>
  <div class="border rounded p-3 max-w-sm bg-cover" :style="{backgroundImage: src ? `url(${src})` : undefined}">
    <slot></slot>
  </div>
</template>

<script setup>
const {src} = defineProps(['src']);
</script>
