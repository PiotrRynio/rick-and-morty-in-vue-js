<template>
  <header class="globalHeaderBar">

    <div class="globalHeaderBar__container">
      <img class="globalHeaderBar__logo" alt="Vue logo" src="../../atoms/assets/imgs/logo.png">
      <nav class="globalHeaderBar__nav">
        <button class="globalHeaderBar__button globalHeaderBar__button--activated">New message</button>
        <button class="globalHeaderBar__button">History</button>
      </nav>
    </div>

    <div class="globalHeaderBar__stripe"></div>
  </header>
</template>

<script>
export default {
  name: "GlobalHeaderBar"
}

</script>

<style scoped lang="scss">
.globalHeaderBar {
  $stripe-height: 24px;

  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: $globalHeaderBar-height-sm;
  width: 100vw;
  flex-flow: column nowrap;
  align-items: center;
  background: white;

  &__container {
    display: flex;
    height: $globalHeaderBar-height-sm - $stripe-height;
    width: 100%;
    max-width: 1040px;
    padding: 0 20px;
    flex-grow: 1;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  &__stripe {
    height: $stripe-height;
    width: 100%;
    background: $primary-color;
  }

  &__logo {
    height: 100%;
    width: auto;
    padding: 16px 0;
  }

  &__nav {
    align-self: flex-end;
  }

  &__button {
    padding: 8px 16px;
    border: none 0;
    line-height: 100%;
    background-color: $secondary-color;
    color: $opposite-secondary-color;
    font-family: $primary-font-family;
    font-size: $regular-font-size;
  }

  &__button--activated {
    background-color: $primary-color;
    color: $opposite-primary-color;
  }

  &__button:hover {
    background-color: $primary-color;
  }

  @media (min-width: $md-width) {
    height: $globalHeaderBar-height-md;

    &__container {
      height: $globalHeaderBar-height-md - $stripe-height;
    }
  }
}
</style>