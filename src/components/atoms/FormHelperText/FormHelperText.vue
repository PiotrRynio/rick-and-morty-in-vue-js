<template>
  <p class="formHelperText">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "FormHelperText",
  props: {
    text: String,
  }
}
</script>

<style scoped lang="scss">
.formHelperText {
  display: block;
  width: 100%;
  min-height: 10px;
  line-height: 100%;
  text-align: left;
  font-size: 12px;
  font-family: $primary-font-family;
  font-weight: $regular-font-width;
  color: rgba($primary-incorrect-color, 0.6);
}
</style>