<script setup lang="ts">
import { ref } from "vue";
import Aside from "./components/Aside.vue";
import Card from "./components/Card.vue";
import data from "./data.ts";
import About from "./components/About.vue";
import Modal from "./components/Modal.vue";

type ViewType = "LINKS" | "ABOUT";

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
const view = ref<ViewType>("LINKS");

const category = ref("books");

const selectMenuItem = (item: string) => {
  category.value = item;
};

const handleView = (v: ViewType) => {
  view.value = v;
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

const handleModalOpen = (isOpen: boolean) => {
  isModalOpen.value = isOpen;
};
</script>

<template>
  <header class="header">
    <div class="header__logo" v-on:click="handleView('LINKS')">
      <img src="./assets/mascot.svg" />
      <span>Koda</span>
    </div>
    <button @click="handleView('ABOUT')">About</button>
    <form method="get" @submit.prevent="handleSearch">
      <input name="search" id="search" placeholder="Search..." />
    </form>
  </header>
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
.header {
  display: flex;
  column-gap: 20px;
  padding: 20px;
  justify-content: space-between;
}

.header button {
  all: unset;
  cursor: pointer;
}

.header button:hover {
  text-decoration: underline;
}

.header__logo {
  width: min-content;
  position: relative;
  cursor: pointer;
}

.header__logo:hover span {
  transform: scale(1.1);
}

.header__logo img {
  right: -50px;
  bottom: 0;
  position: absolute;
  width: 50px;
  height: 50px;
}

.header__logo span {
  font-size: 30px;
  font-weight: 700;
}

.header form input {
  all: unset;
  border: 1px solid var(--border);
  padding: 5px 10px;
  border-radius: 10px;
}

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
  margin-left: 20%;
  width: calc(100% - 20%);
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
</style>
