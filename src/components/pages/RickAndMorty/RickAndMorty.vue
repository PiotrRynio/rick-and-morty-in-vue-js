<template>
  <div class="rickAndMorty">
    <GlobalHeaderBar/>
    <NewMessageSection class="rickAndMorty__section"/>
  </div>
</template>

<script>
import GlobalHeaderBar from '../../organisms/GlobalHeaderBar/GlobalHeaderBar.vue'
import NewMessageSection from '../../organisms/NewMessageSection/NewMessageSection'

export default {
  name: "RickAndMorty",
  components: {
    GlobalHeaderBar,
    NewMessageSection
  }
}
</script>

<style scoped lang="scss">
.rickAndMorty {
  &__section {
    margin: $globalHeaderBar-height-sm auto 0;
  }
}

@media (min-width: $md-width) {
  .rickAndMorty {
    &__section {
      margin-top: $globalHeaderBar-height-md;
    }
  }
}
</style>