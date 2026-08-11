<script setup lang="ts">
import Book from "./icons/Book.vue";
import type { Component } from "vue";
import Bookmark from "./icons/Bookmark.vue";

const props = defineProps<{
  title: string;
  desc?: string;
  href: string;
  category: string;
}>();

const categoryIcons: {
  [category: string]: Component;
} = {
  books: Book,
};
</script>

<template>
  <article class="c-card">
    <a target="_blank" :href="props.href">
      <component :is="categoryIcons[props.category]" />
      <div class="c-card__content">
        <h3>{{ props.title }}</h3>
        <p>{{ props.desc }}</p>
      </div>
    </a>
    <div class="c-card__bookmark">
      <Bookmark />
    </div>
  </article>
</template>

<style lang="css">
.c-card {
  display: flex;
  border-radius: 10px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  position: relative;
  background-color: var(--bg);
}

.c-card:hover {
  background-color: var(--code-bg);
}

.c-card a {
  flex: 1;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.9rem;
  line-height: 1.5;
  padding: 10px 20px 10px;
  text-decoration: none;
}

.c-card__content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.c-card__content p {
  color: var(--text);
  font-size: 0.7rem;
}

.c-card a svg {
  flex: none;
  height: 30px;
  width: 30px;
}

.c-card__bookmark svg path,
.c-card a svg path {
  fill: var(--text);
}

.c-card__bookmark {
  position: absolute;
  right: 0;
  top: -2px;
}

.c-card__bookmark svg {
  height: 30px;
  width: 30px;
}
</style>
