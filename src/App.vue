<script setup lang="ts">
import { ref } from "vue";
import Aside from "./components/Aside.vue";
import Card from "./components/Card.vue";
import data from "./data.ts";
import About from "./components/About.vue";
import Modal from "./components/Modal.vue";
import Header from "./components/Header.vue";
import type { AppView } from "./types/AppView.ts";

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
const view = ref<AppView>("LINKS");

const category = ref("books");

const selectMenuItem = (item: string) => {
  category.value = item;
};

const handleView = (v: AppView) => {
  view.value = v;
};

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
  <Header :handleView="handleView" :handleSearch="handleSearch" />
  <main class="koda-app">
    <template v-if="view === 'LINKS'">
      <Aside :selectMenuItem="selectMenuItem" />
      <div class="koda-app__content">
        <div
          class="koda-app__content__subcategories"
          v-for="(categoryItems, key) in data[category]"
          :key="key"
        >
          <div class="koda-app__content__subcategories__subcategory">
            <h2>{{ key }}</h2>
            <div>
              <Card
                v-for="categoryItem in categoryItems"
                :title="categoryItem.title"
                :href="categoryItem.link"
                :category="category"
                :desc="categoryItem.desc"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="view === 'ABOUT'">
      <About />
    </template>

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
  height: 100%;
  display: flex;
  width: 100%;
  min-height: 100%;
}

.koda-app__content {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-left: var(--aside-size);
  width: calc(100% - var(--aside-size));
  padding: 0px 30px 30px;
  height: 100%;
}

.koda-app__content__subcategories__subcategory {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
}

.koda-app__content__subcategories__subcategory h2 {
  background-color: var(--code-bg);
  font-size: 22px;
  padding: 12px 15px;
  border-radius: 7px;
}

.koda-app__content__subcategories__subcategory > div {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

  .koda-app__content {
    margin-left: 0;
    width: 100%;
  }
}
</style>
