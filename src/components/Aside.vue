<script setup lang="ts">
import data from "../data";

const props = defineProps<{
  selectMenuItem: (item: string) => void;
}>();
</script>

<template>
  <aside class="c-aside">
    <ul v-for="dt in Object.keys(data)">
      <li v-on:click="props.selectMenuItem(dt)">{{ dt }}</li>
    </ul>
  </aside>
</template>

<style lang="css">
.c-aside {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: var(--code-bg);
  padding: 20px;
  height: 80%;
  width: 20%;
  position: fixed;
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
</style>
