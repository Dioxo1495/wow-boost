<template>
  <div class="p-3 bg-cover bg-gray-400" :style="{backgroundImage: src ? `url(${src})` : undefined}">
    <slot></slot>
  </div>
</template>

<script setup>
const {src} = defineProps(['src']);
</script>
