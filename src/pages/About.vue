<template>
  <div class="p-about">
    <div class="p-about__img-wrapper">
      <img loading="lazy" src="../assets/about.svg" />
    </div>

    <div class="p-about__info">
      <p>Hi, I’m Laura.</p>
      <p>
        Welcome to my library of references in Web Development, Tech World and
        some other stuff
      </p>
    </div>
  </div>
</template>

<style lang="css">
.p-about {
  display: flex;
  column-gap: 30px;
  height: 100%;
  width: 100%;
  padding: 20px 20px 0px;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 40px 20px;
  }
}

.p-about__info {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: var(--code-bg);
  border-radius: 10px;
  width: max-content;
  height: max-content;

  @media (max-width: 480px) {
    width: auto;
    height: auto;
    margin-bottom: 20px;
  }
}

.p-about__info {
  padding: 40px;
}

.p-about__img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}
</style>
