<template>
  <header class="sectionTitle">
    <h2 class="sectionTitle__text">{{ titleText }}</h2>
  </header>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: { titleText: String },
};
</script>

<style scoped lang="scss">
.sectionTitle {
  width: 175px;
  text-align: left;
  color: $primary-text-color;

  &__text {
    font-size: 24px;
    font-family: $primary-font-family;
    font-weight: $light-font-weight;
  }
}

@media (min-width: $md-screen-width) {
  .sectionTitle {
    width: 100%;
    text-align: center;

    &__text {
      font-size: 32px;
    }
  }
}
</style>
