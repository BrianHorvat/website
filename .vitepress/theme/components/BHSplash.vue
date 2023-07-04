<script setup lang="ts">
import { useData } from "vitepress";
import BHHero from "./BHHero.vue";

const { frontmatter: fm } = useData();
</script>

<template>
  <BHHero
    v-if="fm.hero"
    class="VPHomeHero"
    :name="fm.hero.name"
    :text="fm.hero.text"
    :tagline="fm.hero.tagline"
    :image="fm.hero.image"
    :actions="fm.hero.actions"
  />
</template>
