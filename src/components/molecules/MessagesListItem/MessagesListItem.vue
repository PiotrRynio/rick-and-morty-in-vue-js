<template>
  <div class="messagesListItem">
    <header
      class="messagesListItem__header"
      v-on:click="() => showingMessageFunction(messageState.id)"
    >
      <h3 class="messagesListItem__title">{{ messageState.title }}</h3>
      <img
        src="@/components/atoms/assets/icons/arrow.png"
        class="messagesListItem__arrow"
        :class="{ 'messagesListItem__arrow--reverse': isShown }"
      />
    </header>

    <section class="messagesListItem__body" :class="{ 'messagesListItem__body--shown': isShown }">
      <div class="messagesListItem__details">
        <img v-bind:src="characterData.image" class="messagesListItem__recipientPhoto" />
        <div class="messagesListItem__detailsItemsBox">
          <div class="messagesListItem__detailsItemsGroup">
            <span class="messagesListItem__detailsItem messagesListItem__detailsItem"
              >Sent to: {{ characterData.name }}</span
            >
            <span class="messagesListItem__detailsItem"> Date: {{ getDateText() }} </span>
            <span class="messagesListItem__detailsItem"> At: {{ getTimeText() }} </span>
          </div>

          <div class="messagesListItem__detailsItemsGroup">
            <span
              class="messagesListItem__detailsItem messagesListItem__detailsItem--quickpost"
              :class="{ 'messagesListItem__detailsItem--hidden': !messageState.isConditionChecked }"
            >
              <img
                src="@/components/atoms/assets/icons/check.png"
                class="messagesListItem__checkIcon"
              />
              Using Quickpost™
            </span>
          </div>
        </div>
      </div>
      <article
        class="messagesListItem__content"
        :class="{ 'messagesListItem__content--shown': isShown }"
      >
        {{ messageState.message }}
      </article>
    </section>
  </div>
</template>

<script>
import { RickAndMortyApi } from '@/restapi/rick-and-morty/RickAndMortyApi';

export default {
  name: 'MessagesListItem',
  props: {
    messageState: {
      characterId: String,
      message: String,
      date: Date,
      title: String,
      isConditionChecked: Boolean,
    },
    isShown: Boolean,
    showingMessageFunction: Function,
  },
  mounted() {
    this.fetchCharacterFromApi();
  },
  data() {
    return {
      characterData: '',
    };
  },
  methods: {
    async fetchCharacterFromApi() {
      this.characterData = await RickAndMortyApi().getCharacter(this.messageState.characterId);
    },
    getDateText() {
      const getDay = () => new Date(this.messageState.date).getDate();
      const getMonth = () => new Date(this.messageState.date).getMonth() + 1;
      const getFullYear = () => new Date(this.messageState.date).getFullYear();

      const day = getDay() < 10 ? `0${getDay()}` : getDay();
      const month = getMonth() < 10 ? `0${getMonth()}` : getMonth();
      const year = getFullYear();

      return `${day}.${month}.${year}`;
    },
    getTimeText() {
      const getHours = () => new Date(this.messageState.date).getHours();
      const getMinutes = () => new Date(this.messageState.date).getMinutes();

      const hours = getHours() < 10 ? `0${getHours()}` : getHours();
      const minutes = getMinutes() < 10 ? `0${getMinutes()}` : getMinutes();

      return `${hours}:${minutes}`;
    },
  },
};
</script>

<style scoped lang="scss">
.messagesListItem {
  border-bottom: #e0e0e0 solid 1px;
  font-size: 14px;
  font-family: $primary-font-family;
  color: $primary-text-color;

  &__header {
    display: flex;
    height: 50px;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  &__title {
    font-weight: $bold-font-weight;
  }

  &__arrow {
    display: block;
    width: 12px;
  }

  &__arrow--reverse {
    transform: rotate(180deg);
  }

  &__body {
    height: 0;
    overflow: hidden;
  }

  &__body--shown {
    height: auto;
  }

  &__details {
    display: flex;
    flex-flow: nowrap row;
    border-left: #e0e0e0 solid 1px;
  }

  &__recipientPhoto {
    height: 48px;
    min-width: 48px;
    border-radius: 50%;
    margin: 0 6px;
    background-color: #ccc;
  }

  &__detailsItemsBox {
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  &__detailsItemsGroup {
    display: flex;
    flex-flow: nowrap column;
    justify-content: space-between;
  }

  &__detailsItem {
    display: block;
    line-height: 10px;
  }

  &__detailsItem--quickpost {
    display: flex;
    align-items: center;
  }

  &__detailsItem--hidden {
    display: none;
  }

  &__checkIcon {
    height: 13.43px;
    width: 17px;
    margin-right: 4px;
  }

  &__content {
    padding: 24px 0 21px;
  }

  &__content--shown {
    animation-duration: 0.5s;
    animation-name: showing-messages-list-item-content-animation;
    animation-fill-mode: both;
  }
}

@media (min-width: $md-screen-width) {
  .messagesListItem {
    &__content {
      font-size: 16px;
    }
  }
}

@keyframes showing-messages-list-item-content-animation {
  0% {
    transform: scaleY(0);
    transform-origin: 50% 0;
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
