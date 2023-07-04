<template>
  <div v-html="icon" class="icon"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { icons } from "../support/socialIcons";

const props = defineProps<{
  icon: string;
}>();

const icon = computed(() => {
  if (props.icon) {
    return icons[props.icon];
  }

  return "";
});
</script>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
  aspect-ratio: 1;
  margin-right: 1ch;
  fill: currentColor;
}
</style>
