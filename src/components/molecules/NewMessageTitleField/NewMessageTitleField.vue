<template>
  <div class="newMessageTitleField">
    <form-label :title="title" :is-incorrect="isIncorrect" :input-id="inputId" />
    <input
      class="newMessageTitleField__input"
      :class="{ 'newMessageTitleField__input--incorrect': isIncorrect }"
      v-model="messageTitle"
      placeholder="Enter the title"
      :id="inputId"
    />
    <form-helper-text :text="formHelperTextMessage" />
  </div>
</template>

<script>
import FormLabel from '@/components/atoms/FormLabel/FormLabel';
import FormHelperText from '@/components/atoms/FormHelperText/FormHelperText';
import { onMounted, ref, watch } from '@vue/runtime-core';

export default {
  name: 'NewMessageTitleField',
  components: {
    FormLabel,
    FormHelperText,
  },
  props: { inputId: String },
  emits: ['newState'],

  setup(props, { emit }) {
    const title = ref('Title');
    const isIncorrect = ref(false);
    const messageTitle = ref('');
    const formHelperTextMessage = ref('');

    const inputValidate = () => {
      const format = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

      const isEmptyMessage = messageTitle.value.trim() === '';
      const isSpecialCharactersInMessage = format.test(messageTitle.value);
      const isTooShortMessage = messageTitle.value.length < 3;
      const isTooLongMessage = messageTitle.value.length > 32;

      isIncorrect.value =
        isEmptyMessage || isSpecialCharactersInMessage || isTooShortMessage || isTooLongMessage;

      formHelperTextMessage.value = '';
      if (isEmptyMessage) formHelperTextMessage.value = 'Please enter the title';
      if (isSpecialCharactersInMessage)
        formHelperTextMessage.value = 'Please enter no special characters';
      if (isTooShortMessage) formHelperTextMessage.value = 'Please enter min 3 characters title';
      if (isTooLongMessage) formHelperTextMessage.value = 'Please enter max 32 characters title';

      emitState();
    };

    const emitState = () =>
      emit('newState', {
        id: props.inputId,
        value: messageTitle.value,
        isIncorrect: isIncorrect.value,
        validate: () => inputValidate(),
      });

    onMounted(() => emitState());

    watch(messageTitle, () => inputValidate());

    return {
      title,
      isIncorrect,
      messageTitle,
      formHelperTextMessage,
    };
  },
};
</script>

<style scoped lang="scss">
.newMessageTitleField {
  display: flex;
  flex-flow: nowrap column;

  &__input {
    @include basic-text-input;
  }
}
</style>
