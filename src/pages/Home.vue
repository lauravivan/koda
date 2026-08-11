<script setup lang="ts">
import { ref } from "vue";
import data from "../data";
import Aside from "../components/Aside.vue";
import Card from "../components/Card.vue";

const category = ref("books");

const selectMenuItem = (item: string) => {
  category.value = item;
};
</script>

<template>
  <div class="p-homepage">
    <Aside :selectMenuItem="selectMenuItem" :selectedCategory="category" />
    <div class="p-homepage__content">
      <div
        class="p-homepage__content__subcategories"
        v-for="(categoryItems, key) in data[category]"
        :key="key"
      >
        <div class="p-homepage__content__subcategories__subcategory">
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
  </div>
</template>

<style lang="css">
.p-homepage {
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    row-gap: 20px;
  }
}

.p-homepage__content {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-left: var(--aside-size);
  width: calc(100% - var(--aside-size));
  padding: 0px 30px;
  height: 100%;

  @media (max-width: 480px) {
    width: 100%;
    padding: 0px 10px;
  }
}

.p-homepage__content__subcategories__subcategory {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
}

.p-homepage__content__subcategories__subcategory h2 {
  background-color: var(--code-bg);
  font-size: 22px;
  padding: 12px 15px;
  border-radius: 7px;
}

.p-homepage__content__subcategories__subcategory > div {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.p-homepage__content__subcategories:last-of-type {
  padding-bottom: 50px;
}

@media (max-width: 480px) {
  .p-homepage__content {
    margin-left: 0;
    width: 100%;
  }
}
</style>
