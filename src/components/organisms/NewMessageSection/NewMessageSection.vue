<template>
  <section class="newMessageSection">
    <SectionTitle titleText="Send a new message"/>
    <MessageTitleInput titleText="Send a new message"/>
  </section>
</template>

<script>
import SectionTitle from '../../atoms/SectionTitle/SectionTitle.vue'
import MessageTitleInput from '../../molecules/NewMessageTitleField/NewMessageTitleField'

export default {
  name: "NewMessageSection",
  components: {
    SectionTitle,
    MessageTitleInput
  }
}
</script>

<style scoped lang="scss">
.newMessageSection {
  display: flex;
  width: 100%;
  max-width: 1000px;
  padding: 24px 20px 0;
  flex-flow: column nowrap;
  background-color: rgba(100, 100, 100, .2);

  @media (min-width: $md-width) {
    padding: 32px 0 0;
  }
}
</style>