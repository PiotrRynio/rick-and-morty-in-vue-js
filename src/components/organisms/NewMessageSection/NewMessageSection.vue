<template>
  <section class="newMessageSection">

    <SectionTitle class="newMessageSection__title" titleText="Send a new message"/>
    <MessageTitleInput class="newMessageSection__inputField" @newState="setNewInputState"/>
    <NewMessageTextField class="newMessageSection__inputField" @newState="setNewInputState"/>
    <NewMessageCharacterField class="newMessageSection__inputField" @newState="setNewInputState"/>
    <NewMessageConditionField class="newMessageSection__inputField" @newState="setNewInputState"/>
    <button class="newMessageSection__button" @click="onClickButton">Send</button>

  </section>
</template>

<script>
import SectionTitle from '../../atoms/SectionTitle/SectionTitle.vue'
import MessageTitleInput from '../../molecules/NewMessageTitleField/NewMessageTitleField'
import NewMessageTextField from '../../molecules/NewMessageTextField/NewMessageTextField'
import NewMessageCharacterField from "@/components/molecules/NewMessageCharacterField/NewMessageCharacterField";
import NewMessageConditionField from "@/components/molecules/NewMessageConditionField/NewMessageConditionField";

export default {
  name: "NewMessageSection",
  components: {
    SectionTitle,
    MessageTitleInput,
    NewMessageTextField,
    NewMessageCharacterField,
    NewMessageConditionField,
  },
  data() {
    return {
      inputsStates: {}
    }
  },

  methods: {
    onClickButton() {
      if (this.isValidationCorrect()) this.sendForm();
      else console.log("Nie wysłano - Zła walidacja")
    },
    isValidationCorrect() {
      let isAllCorrect = true;
      for (const key in this.inputsStates) {
        const inputStateItem = this.inputsStates[key];
        inputStateItem.validate();
        console.log(inputStateItem.isIncorrect)
        console.log(inputStateItem.value)
        const isAllIncorrect = inputStateItem.isIncorrect || (!inputStateItem.value && !inputStateItem.isValueBoolean)
        if (isAllIncorrect) isAllCorrect = false
      }
      return isAllCorrect;
    },
    sendForm() {
 
      console.log("wysłano");
    },

    setNewInputState(newInputState) {
      this.inputsStates[newInputState.id] = newInputState;
      // console.log(this.inputsStates)
    },
  },
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

  &__button {
    align-self: flex-end;
    height: 40px;
    width: 82px;
    margin-bottom: 10px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    font-family: $primary-font-family;
    background-color: $primary-color;
    color: $opposite-primary-color;
  }

  @media (min-width: $md-width) {
    padding: 32px 0 0;
  }
}
</style>