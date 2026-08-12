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
      <div class="p-homepage__content__img-wrapper">
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLGa5r4TzH_OZoTsFrse-EQ0mZZAC8nlmr"
          frameborder="10"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
        <img src="../assets/undraw_summer_u79u.svg" />
      </div>
      <div class="p-homepage__links">
        <div
          class="p-homepage__links__subcategories"
          v-for="(categoryItems, key) in data[category]"
          :key="key"
        >
          <div class="p-homepage__links__subcategories__subcategory">
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
  </div>
</template>

<style lang="css">
.p-homepage {
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
  }
}

.p-homepage__content {
  display: flex;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;

  @media (max-width: 480px) {
    flex-direction: column;
    row-gap: 20px;
  }
}

.p-homepage__content::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url(../assets/undraw_nature_yf30.svg);
  background-size: cover;
  background-position: start;
  background-repeat: no-repeat;
  opacity: 0.1;
  z-index: -1;
}

.p-homepage__content__img-wrapper {
  width: 40%;
  display: flex;
  position: relative;

  @media (max-width: 480px) {
    width: 100%;
  }
}

.p-homepage__content__img-wrapper iframe {
  position: absolute;
  right: 0;
  border-radius: 10px;
  width: 40%;
}

.p-homepage__content__img-wrapper img {
  width: 100%;
  object-fit: fill;
  z-index: 200;
  align-self: end;
}

.p-homepage__links {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  height: 100%;
  width: 60%;
  max-height: 100%;
  overflow-y: auto;
  padding: 0px 20px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 0px 10px;
    max-height: inherit;
  }
}

.p-homepage__links__subcategories__subcategory {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
  background-color: var(--code-bg);
  padding: 20px 20px 30px;
  border-radius: 10px;
  box-shadow: var(--shadow);
}

.p-homepage__links__subcategories__subcategory h2 {
  font-size: 1.5rem;
}

.p-homepage__links__subcategories__subcategory > div {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.p-homepage__links__subcategories:last-of-type {
  padding-bottom: 50px;
}
</style>
