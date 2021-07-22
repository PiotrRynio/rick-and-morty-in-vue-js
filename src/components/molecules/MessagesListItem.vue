<template>
  <article class="messagesListItem">

    <header class="messagesListItem__header">
      <h3 class="messagesListItem__title"> {{ messageState.title }}</h3>
      <img src="@/components/atoms/assets/icons/arrow.png" class="messagesListItem__arrow"/>
    </header>

    <section
        class="messagesListItem__body"
        :class='{"messagesListItem__body--shown":isShown}'>
      xxx
      <!--      <h3 class="messagesListItem__title"> {{ messageState.title }}</h3>-->
      <!--      <img src="@/components/atoms/assets/icons/arrow.png" class="messagesListItem__arrow"/>-->
    </section>


  </article>


</template>

<script>

// class="messagesListItem__"

export default {
  name: "MessagesListItem",
  props: ['messageState', 'isShown']


}
</script>

<style scoped lang="scss">
.messagesListItem {
  border-bottom: #E0E0E0 solid 1px;

  &__header {
    display: flex;
    height: 50px;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-family: $primary-font-family;
    font-size: 14px;
    color: $primary-text-color;
  }

  &__title {
    font-weight: $bold-font-weight;
  }

  &__arrow {
    display: block;
    width: 12px;
  }

  &__body {
    display: none;
  }

  &__body--shown {
    display: block;
  }

  &__details {
  }

  &__recipientPhoto {
  }

  &__details {
  }

  &__detailsItem {
  }

  &__detailsItemContainer {
  }

  &__detailsItem--recipient {
  }

  &__detailsItem--date {
  }

  &__detailsItem--time {
  }

  &__detailsItem--quickpost {
  }

  &__content {
  }
}
</style>