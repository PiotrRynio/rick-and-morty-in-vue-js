<template>
  <section class="messageHistorySection">
    <SectionTitle
      class="messageHistorySection__alert"
      :class="{ 'messageHistorySection__alert--shown': isAlertShown }"
      titleText="Message sent successfully"
    />
    <SectionTitle class="messageHistorySection__title" titleText="Message history" />

    <ul class="messageHistorySection__messagesList">
      <li
        class="messageHistorySection__messagesListItem"
        v-for="message in messages"
        v-bind:key="message.id"
      >
        <MessagesListItem
          :messageState="message"
          :isShown="shownMessageId === message.id"
          :showingMessageFunction="toggleShownMessageId"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import SectionTitle from '@/components/atoms/SectionTitle/SectionTitle';
import router from '@/router/router';
import MessagesListItem from '@/components/molecules/MessagesListItem';
import { DatabaseApi } from '@/database-connection/database-api';

export default {
  name: 'MessageHistorySection',
  components: {
    SectionTitle,
    MessagesListItem,
  },
  methods: {
    toggleShownMessageId(newMessageId) {
      if (this.shownMessageId === newMessageId) this.shownMessageId = '';
      else this.shownMessageId = newMessageId;
    },
    loadStorageMessage() {
      return DatabaseApi().getAllMessages();
    },
  },
  data() {
    return {
      isAlertShown: router.currentRoute.value.params.information === 'success',
      shownMessageId: '',
      messages: this.loadStorageMessage().reverse(),
    };
  },
};
</script>

<style scoped lang="scss">
.messageHistorySection {
  display: flex;
  width: 100%;
  padding: 24px 20px 0;
  flex-flow: column nowrap;

  &__alert {
    display: none;
    margin-bottom: 24px;
    color: #50c878;
  }

  &__alert--shown {
    display: block;
  }

  &__title {
    margin-bottom: 32px;
  }

  &__messagesList {
    list-style: none;
  }
}
</style>
