<script setup lang="ts">
import { ref } from "vue";
import Aside from "./components/Aside.vue";
import Card from "./components/Card.vue";
import data from "./data.ts";
import About from "./components/About.vue";

type ViewType = "LINKS" | "ABOUT";

const view = ref<ViewType>("LINKS");

const category = ref("books");

const selectMenuItem = (item: string) => {
  category.value = item;
};

const handleView = (v: ViewType) => {
  view.value = v;
};
</script>

<template>
  <header class="header">
    <div class="header__logo" v-on:click="handleView('LINKS')">
      <img src="./assets/mascot.svg" />
      <span>Koda</span>
    </div>
    <button v-on:click="handleView('ABOUT')">About</button>
    <form>
      <input placeholder="Search..." />
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
</style>
