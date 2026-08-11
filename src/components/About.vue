<template>
  <div class="c-about">
    <div>
      <img src="../assets/about.png" />
    </div>
    <p>
      Hi, I’m Laura. Welcome to my library of references in Web Development,
      Tech World and some other stuff
    </p>
  </div>
</template>

<style lang="css">
.c-about {
  display: flex;
  column-gap: 20px;
  background-color: var(--code-bg);
  width: fit-content;
  max-width: 80%;
  height: fit-content;
  padding: 20px;
  border-radius: 10px;
  margin: auto;
  align-items: center;
}

.c-about div {
  width: 50%;
  max-width: 300px;
  height: auto;
}

.c-about div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>
