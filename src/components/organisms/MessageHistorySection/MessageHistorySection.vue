<template>
  <section class="messageHistorySection">

    <SectionTitle
        class="messageHistorySection__alert"
        :class="{'messageHistorySection__alert--shown': isAlertShown}"
        titleText="Message sent successfully"/>
    <SectionTitle class="messageHistorySection__title" titleText="Message history"/>

    <ul class="messageHistorySection__messagesList">
      <li class="messageHistorySection__messagesListItem"
          v-for="message in messages"
          v-bind:key="message.id">
        <MessagesListItem
            :messageState="message"
            :isShown="shownMessageId===message.id"
            v-on:click="()=>toggleShownMessageId(message.id)"/>
      </li>
    </ul>

  </section>
</template>

<script>
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import router from "@/router/router";
import MessagesListItem from "@/components/molecules/MessagesListItem";

export default {
  name: "MessageHistorySection",
  components: {
    SectionTitle,
    MessagesListItem,
  },
  methods: {
    toggleShownMessageId(newMessageId) {
      if (this.shownMessageId === newMessageId) this.shownMessageId = "";
      else this.shownMessageId = newMessageId;
    },

  },
  data() {
    return {
      isAlertShown: router.currentRoute.value.params.information === "success",
      shownMessageId: "0b692f91sc-67e87842ea30",
      messages: [
        {
          character: 15,
          date: "2021-07-22T21:30:00.763Z",
          id: "111",
          isConditionChecked: true,
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie sagittis lorem, ac posuere sem bibendum vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sit amet facilisis justo, nec imperdiet ex. Vestibulum facilisis hendrerit ipsum, et ultricies urna dapibus a. Curabitur viverra odio mollis magna commodo imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mauris a nibh sollicitudin luctus vitae sed neque.",
          title: "To Mr. Meeseeks"
        },
        {
          character: 3,
          date: "2021-07-22T21:30:00.763Z",
          id: "0b692f91-b8ba-415f-861c-67e87842ea30",
          isConditionChecked: true,
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie sagittis lorem, ac posuere sem bibendum vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sit amet facilisis justo, nec imperdiet ex. Vestibulum facilisis hendrerit ipsum, et ultricies urna dapibus a. Curabitur viverra odio mollis magna commodo imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mauris a nibh sollicitudin luctus vitae sed neque.",
          title: "My latest message title"
        },
        {
          character: 5,
          date: "2021-07-22T21:30:00.763Z",
          id: "0b692f91sc-67e87842ea30",
          isConditionChecked: false,
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie sagittis lorem, ac posuere sem bibendum vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sit amet facilisis justo, nec imperdiet ex. Vestibulum facilisis hendrerit ipsum, et ultricies urna dapibus a. Curabitur viverra odio mollis magna commodo imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mauris a nibh sollicitudin luctus vitae sed neque.",
          title: "To my buddy Rick"
        },
        {
          character: 7,
          date: "2021-07-22T21:30:00.763Z",
          id: "444",
          isConditionChecked: false,
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie sagittis lorem, ac posuere sem bibendum vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sit amet facilisis justo, nec imperdiet ex. Vestibulum facilisis hendrerit ipsum, et ultricies urna dapibus a. Curabitur viverra odio mollis magna commodo imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mauris a nibh sollicitudin luctus vitae sed neque.",
          title: "My first message"
        },
      ]
    }
  }
}
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
    color: #50C878;
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