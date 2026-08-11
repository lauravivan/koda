<script setup lang="ts">
import data from "../data";

const props = defineProps<{
  selectMenuItem: (item: string) => void;
  selectedCategory: string;
}>();
</script>

<template>
  <aside class="c-aside">
    <ul v-for="dt in Object.keys(data)">
      <li
        v-on:click="props.selectMenuItem(dt)"
        :class="{ active: props.selectedCategory === dt }"
      >
        {{ dt }}
      </li>
    </ul>
  </aside>
</template>

<style lang="css">
.c-aside {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: var(--code-bg);
  padding: 30px 20px;
  height: fit-content;
  flex: 1;
  position: absolute;
  z-index: 100;

  @media (max-width: 480px) {
    position: inherit;
    width: 100%;
    height: fit-content;
  }
}

.c-aside ul {
  list-style: none;
}

.c-aside ul li {
  font-weight: 700;
}

.c-aside ul li:hover {
  color: var(--accent);
  cursor: pointer;
}

.c-aside .active {
  color: var(--accent);
  text-decoration: underline;
}
</style>
