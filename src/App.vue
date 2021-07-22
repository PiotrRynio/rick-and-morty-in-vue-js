<template>
  <div id="app">
    <RickAndMorty/>
  </div>
</template>

<script>

import RickAndMorty from "@/components/pages/RickAndMorty/RickAndMorty";

export default {
  name: 'App',
  components: {
    RickAndMorty
  }
}
</script>

<style lang="scss">
#app {
  background: $secondary-color;
}
</style>
