<script setup lang="ts">
import { ref } from "vue";
import data from "./data.ts";
import Modal from "./components/Modal.vue";
import Header from "./components/Header.vue";

const search = ref("");
const isModalOpen = ref(false);
const searchResults = ref<
  Array<{
    section: string;
    category: string;
    title: string;
    link: string;
    desc?: string;
  }>
>([]);

const handleModalOpen = (isOpen: boolean) => {
  isModalOpen.value = isOpen;
};

const handleSearch = (event: SubmitEvent) => {
  searchResults.value = [];
  const formData = new FormData(event.target as HTMLFormElement);

  isModalOpen.value = true;

  const s = formData.get("search") as string;

  search.value = s;

  const q = s.toLowerCase().trim();
  if (!q) return [];

  for (const [section, categories] of Object.entries(data)) {
    for (const [category, items] of Object.entries(categories)) {
      for (const item of items) {
        const matches =
          item.title.toLowerCase().includes(q) ||
          item.desc?.toLowerCase().includes(q);

        if (matches) {
          searchResults.value.push({ ...item, section, category });
        }
      }
    }
  }
};
</script>

<template>
  <Header :handleSearch="handleSearch" />
  <main class="koda-app">
    <RouterView />

    <Modal :handleModalOpen="handleModalOpen" :isModalOpen="isModalOpen">
      <div v-if="searchResults.length > 0" class="search-results">
        <span
          >Results for
          <span class="search-results__search">{{ search }}</span></span
        >
        <div class="search-results__item" v-for="res in searchResults">
          <a target="_blank" :href="res.link"
            ><h3>{{ res.title }}</h3>
          </a>
          <p>{{ res.desc }}</p>
        </div>
      </div>
      <div v-if="searchResults.length === 0"></div>
    </Modal>
  </main>
</template>

<style lang="css">
.koda-app {
  height: calc(100vh - var(--header-height));
  display: flex;
  width: 100%;
  min-height: 100%;
}

.search-results {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.search-results__search {
  font-weight: 700;
  color: var(--accent);
}

.search-results__item {
  background-color: var(--code-bg);
  padding: 15px 20px;
  border-radius: 5px;
}

.search-results__item p {
  color: var(--text);
  font-size: 13px;
}

@media (max-width: 480px) {
  .koda-app {
    flex-direction: column;
    row-gap: 20px;
  }
}
</style>
