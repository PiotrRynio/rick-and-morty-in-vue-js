<template>
  <div id="app">
    <RickAndMorty/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import RickAndMorty from './components/pages/RickAndMorty/RickAndMorty.vue'


@Component({
  components: {
    RickAndMorty
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
#app {
  background: $secondary-color;
}
</style>
