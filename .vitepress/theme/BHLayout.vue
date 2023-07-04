<template>
  <div v-if="page.isNotFound">That page couldn't be found!</div>
  <BHSplash v-else-if="frontmatter.layout === 'splash'" />
  <Content v-else />
</template>

<script setup>
import { useData } from "vitepress";
import BHSplash from "./components/BHSplash.vue";

const { page, frontmatter } = useData();
</script>
