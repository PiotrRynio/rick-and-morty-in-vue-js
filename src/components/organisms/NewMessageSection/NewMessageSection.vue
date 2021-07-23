<template>
  <section class="newMessageSection">
    <SectionTitle class="newMessageSection__title" titleText="Send a new message" />
    <MessageTitleInput
      class="newMessageSection__inputField"
      @newState="setNewInputState"
      :input-id="inputId.title"
    />
    <NewMessageTextField
      class="newMessageSection__inputField"
      @newState="setNewInputState"
      :input-id="inputId.text"
    />
    <NewMessageCharacterField
      class="newMessageSection__inputField"
      @newState="setNewInputState"
      :input-id="inputId.characterId"
    />
    <NewMessageConditionField
      class="newMessageSection__inputField"
      @newState="setNewInputState"
      :input-id="inputId.condition"
    />
    <button class="newMessageSection__button" @click="onClickButton">Send</button>
  </section>
</template>

<script>
import SectionTitle from '../../atoms/SectionTitle/SectionTitle.vue';
import MessageTitleInput from '../../molecules/NewMessageTitleField/NewMessageTitleField';
import NewMessageTextField from '../../molecules/NewMessageTextField/NewMessageTextField';
import NewMessageCharacterField from '@/components/molecules/NewMessageCharacterField/NewMessageCharacterField';
import NewMessageConditionField from '@/components/molecules/NewMessageConditionField/NewMessageConditionField';
import router from '@/router/router';
import { DatabaseApi } from '@/database-connection/database-api';

export default {
  name: 'NewMessageSection',
  components: {
    SectionTitle,
    MessageTitleInput,
    NewMessageTextField,
    NewMessageCharacterField,
    NewMessageConditionField,
  },
  data() {
    return {
      inputId: {
        title: 'newMessageTitleField',
        text: 'newMessageTextField',
        characterId: 'newMessageCharacterField',
        condition: 'newMessageConditionField',
      },
      inputsStates: {},
    };
  },

  methods: {
    onClickButton() {
      if (this.isValidationCorrect()) this.sendForm();
    },
    isValidationCorrect() {
      let isAllCorrect = true;
      for (const key in this.inputsStates) {
        const { isIncorrect, isValueBoolean, validate, value } = this.inputsStates[key];
        validate();
        const isAllIncorrect = isIncorrect || (!value && !isValueBoolean);
        if (isAllIncorrect) isAllCorrect = false;
      }
      return isAllCorrect;
    },
    sendForm() {
      const { inputsStates, inputId } = this;
      const { characterId, text, title, condition } = inputId;
      const newData = {
        title: inputsStates[title].value,
        message: inputsStates[text].value,
        characterId: inputsStates[characterId].value,
        isConditionChecked: inputsStates[condition].value,
        date: new Date(),
      };
      DatabaseApi().postMessage(newData);
      router.replace('/history/success');
    },
    setNewInputState(newInputState) {
      this.inputsStates[newInputState.id] = newInputState;
    },
  },
};
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

  @media (min-width: $md-screen-width) {
    padding: 32px 0 0;
  }
}
</style>
