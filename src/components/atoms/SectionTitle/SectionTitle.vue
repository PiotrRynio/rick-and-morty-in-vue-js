<template>

  <header class="sectionTitle">
    <h2 class="sectionTitle__text">Send a new message</h2>
  </header>

</template>

<script>
export default {
  name: "SectionTitle"
}
</script>

<style scoped lang="scss">
.sectionTitle {
  width: 175px;
  text-align: left;

  &__text {
    font-size: 24px;
    font-family: $primary-font-family;
    font-weight: $light-font-width;
    color: $primary-text-color;
  }
}

@media (min-width: $md-width) {
  .sectionTitle {
    width: 100%;
    text-align: center;

    &__text {
      font-size: 32px;
    }
  }
}
</style>