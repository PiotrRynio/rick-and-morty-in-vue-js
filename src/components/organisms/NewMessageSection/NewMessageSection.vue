<template>
  <section class="newMessageSection">
    <form>
      <SectionTitle class="newMessageSection__title" titleText="Send a new message"/>
      <MessageTitleInput class="newMessageSection__inputField"/>
      <NewMessageTextField class="newMessageSection__inputField"/>
      <NewMessageCharacterField class="newMessageSection__inputField"/>
    </form>
  </section>
</template>

<script>
import SectionTitle from '../../atoms/SectionTitle/SectionTitle.vue'
import MessageTitleInput from '../../molecules/NewMessageTitleField/NewMessageTitleField'
import NewMessageTextField from '../../molecules/NewMessageTextField/NewMessageTextField'
import NewMessageCharacterField from "@/components/molecules/NewMessageCharacterField/NewMessageCharacterField";

export default {
  name: "NewMessageSection",
  components: {
    SectionTitle,
    MessageTitleInput,
    NewMessageTextField,
    NewMessageCharacterField
  }
}
</script>

<style scoped lang="scss">
.newMessageSection {
  display: flex;
  width: 100%;
  padding: 24px 20px 0;
  flex-flow: column nowrap;

  &__title {
    margin-bottom: 32px;
  }

  &__inputField {
    margin-bottom: 14px;
  }

  @media (min-width: $md-width) {
    padding: 32px 0 0;
  }
}
</style>