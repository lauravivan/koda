<script setup lang="ts">
import { ref } from "vue";
import Search from "./icons/Search.vue";
import Sun from "./icons/Sun.vue";
import Moon from "./icons/Moon.vue";
import System from "./icons/System.vue";

const theme = ref<"light" | "dark" | "system">("system");

const showForm = ref(false);

const props = defineProps<{
  handleSearch: (e: SubmitEvent) => void;
}>();

const handleShowForm = () => {
  showForm.value = !showForm.value;
};

const switchTheme = () => {
  if (theme.value === "light") theme.value = "dark";
  else if (theme.value === "dark") theme.value = "system";
  else theme.value = "light";

  document.body.className = theme.value;
};
</script>

<template>
  <header class="c-header">
    <div>
      <div class="c-header__logo">
        <RouterLink to="/" class="c-header__logo__logo">
          <img src="../assets/mascot.svg" />
          <span>Koda</span>
        </RouterLink>
      </div>
      <RouterLink to="/about" class="c-header__about"> About </RouterLink>
      <button class="c-header__search-btn" @click="handleShowForm">
        <Search />
      </button>
      <button class="c-header__theme-btn" @click="switchTheme">
        <Sun v-if="theme === 'light'" />
        <Moon v-if="theme === 'dark'" />
        <System v-if="theme === 'system'" />
      </button>
    </div>
    <form
      class="c-header__search-form"
      method="get"
      @submit.prevent="handleSearch"
      :class="{ 'show-form': showForm }"
    >
      <input name="search" id="search" placeholder="Search..." />
      <Search />
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
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.c-header__theme-btn {
  all: unset;
  cursor: pointer;
}

.c-header__theme-btn:hover svg {
  transform: scale(1.1);
}

.c-header__theme-btn svg {
  height: 30px;
  width: 30px;

  @media (max-width: 480px) {
    height: 20px;
    width: 20px;
  }
}

.c-header__theme-btn svg path {
  fill: var(--text);
}

.c-header__logo__logo {
  all: unset;
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

  @media (max-width: 480px) {
    height: 30px;
    width: 30px;
    right: -30px;
  }
}

.c-header__logo span {
  font-size: 1.8rem;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
}

.c-header__search-form {
  display: flex;
  border: 1px solid var(--border);
  padding: 5px 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
}

.c-header__search-form input {
  all: unset;
}

.c-header__search-form svg {
  height: 20px;
  width: 20px;
}

.c-header__search-form svg path {
  fill: var(--text);
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
