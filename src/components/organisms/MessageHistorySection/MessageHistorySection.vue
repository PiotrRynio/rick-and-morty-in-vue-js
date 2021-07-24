<template>
  <section class="messageHistorySection">
    <SectionTitle
      class="messageHistorySection__alert"
      :class="{ 'messageHistorySection__alert--shown': isAlertShown }"
      titleText="Message sent successfully"
    />

    <SectionTitle class="messageHistorySection__title" titleText="Message history" />

    <router-link to="/" class="messageHistorySection__router">
      <SectionTitle
        class="messageHistorySection__alert"
        :class="{ 'messageHistorySection__alert--shown': messages.length === 0 }"
        titleText="Empty list - add new message!"
      />
    </router-link>

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
import MessagesListItem from '@/components/molecules/MessagesListItem/MessagesListItem';
import { DatabaseApi } from '@/database-connection/database-api';
import { ref } from '@vue/runtime-core';

export default {
  name: 'MessageHistorySection',
  components: {
    SectionTitle,
    MessagesListItem,
  },
  setup() {
    const isAlertShown = ref(router.currentRoute.value.params.information === 'success');
    const shownMessageId = ref('');
    const loadStorageMessage = () => DatabaseApi().getAllMessages();
    const messages = ref(loadStorageMessage().reverse());

    const toggleShownMessageId = (newMessageId) =>
      (shownMessageId.value = shownMessageId.value === newMessageId ? '' : newMessageId);

    return {
      isAlertShown,
      shownMessageId,
      messages,
      toggleShownMessageId,
      loadStorageMessage,
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

  &__router {
    display: block;
    text-decoration: none;
  }

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
