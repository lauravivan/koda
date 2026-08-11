<script setup lang="ts">
import { ref } from "vue";
import type { AppView } from "../types/AppView";
import Search from "./icons/Search.vue";

const showForm = ref(false);

const props = defineProps<{
  handleView: (v: AppView) => void;
  handleSearch: (e: SubmitEvent) => void;
}>();

const handleShowForm = () => {
  showForm.value = !showForm.value;
};
</script>

<template>
  <header class="c-header">
    <div>
      <div class="c-header__logo" v-on:click="props.handleView('LINKS')">
        <img src="../assets/mascot.svg" />
        <span>Koda</span>
      </div>
      <button class="c-header__about" @click="props.handleView('ABOUT')">
        About
      </button>
      <button class="c-header__search-btn" @click="handleShowForm">
        <Search />
      </button>
    </div>
    <form
      class="c-header__search-form"
      method="get"
      @submit.prevent="handleSearch"
      :class="{ 'show-form': showForm }"
    >
      <input name="search" id="search" placeholder="Search..." />
    </form>
  </header>
</template>

<style lang="css">
.c-header {
  display: flex;
  column-gap: 20px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
}

.c-header > div {
  display: flex;
  column-gap: 20px;
  align-items: center;
  width: 100%;
}

.c-header__about {
  all: unset;
  cursor: pointer;
  margin: 0 auto;
}

.c-header__search-btn {
  display: none;
}

.c-header__about:hover {
  text-decoration: underline;
}

.c-header__logo {
  width: min-content;
  position: relative;
  cursor: pointer;
}

.c-header__logo:hover span {
  transform: scale(1.1);
}

.c-header__logo img {
  right: -50px;
  bottom: 0;
  position: absolute;
  width: 50px;
  height: 50px;
}

.c-header__logo span {
  font-size: 30px;
  font-weight: 700;
}

.c-header__search-form input {
  all: unset;
  border: 1px solid var(--border);
  padding: 5px 10px;
  border-radius: 10px;
}

@media (max-width: 480px) {
  .c-header {
    flex-direction: column;
    row-gap: 20px;
  }

  .c-header__search-form {
    display: none;
  }

  .c-header__search-btn {
    all: unset;
    display: flex;
    cursor: pointer;
  }

  .c-header__search-btn svg {
    height: 20px;
    width: 20px;
  }

  .c-header__search-btn svg path {
    fill: var(--text-h);
  }

  .show-form {
    display: flex;
    width: 100%;
  }
}
</style>
