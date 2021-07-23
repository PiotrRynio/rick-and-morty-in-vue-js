<template>
  <div class="rickAndMorty">
    <GlobalHeaderBar />
    <router-view class="rickAndMorty__section" />
  </div>
</template>

<script>
import GlobalHeaderBar from '../../organisms/GlobalHeaderBar/GlobalHeaderBar.vue';

export default {
  name: 'RickAndMorty',
  components: {
    GlobalHeaderBar,
  },
};
</script>

<style scoped lang="scss">
.rickAndMorty {
  &__section {
    max-width: 460px;
    margin: $globalHeaderBar-height-sm auto 0;
  }
}

@media (min-width: $md-screen-width) {
  .rickAndMorty {
    &__section {
      margin-top: $globalHeaderBar-height-md;
    }
  }
}
</style>
