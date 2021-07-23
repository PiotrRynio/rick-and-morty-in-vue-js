<template>
  <label class="formLabel" :class="{ 'formLabel--incorrect': isIncorrect }" :for="inputId">
    {{ title }}
  </label>
</template>

<script>
export default {
  name: 'FormLabel',
  props: {
    title: String,
    isIncorrect: Boolean,
    inputId: String,
  },
};
</script>

<style scoped lang="scss">
.formLabel {
  display: block;
  width: 100%;
  line-height: 100%;
  text-align: left;
  font-size: 14px;
  font-family: $primary-font-family;
  font-weight: $regular-font-weight;
  color: $primary-text-color;
}

.formLabel--incorrect {
  color: $primary-incorrect-color;
}

@media (min-width: $md-screen-width) {
  .formLabel {
    font-size: 16px;
  }
}
</style>
