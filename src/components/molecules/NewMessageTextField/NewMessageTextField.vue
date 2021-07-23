<template>
  <div class="newMessageTextField">
    <form-label :title="title" :is-incorrect="isIncorrect" :input-id="inputId" />
    <textarea
      class="newMessageTextField__input"
      :class="{ 'newMessageTextField__input--incorrect': isIncorrect }"
      v-model="message"
      placeholder="Enter the title"
      :id="inputId"
      type="text"
    />
    <form-helper-text :text="formHelperTextMessage" />
  </div>
</template>

<script>
import FormLabel from '@/components/atoms/FormLabel/FormLabel';
import FormHelperText from '@/components/atoms/FormHelperText/FormHelperText';
import { onMounted, ref, watch } from '@vue/runtime-core';

export default {
  name: 'NewMessageTextField',
  components: {
    FormLabel,
    FormHelperText,
  },
  props: { inputId: String },
  emits: ['newState'],

  setup(props, { emit }) {
    const title = ref('Message');
    const isIncorrect = ref(false);
    const message = ref('');
    const formHelperTextMessage = ref('');

    const inputValidate = () => {
      const isEmptyMessage = message.value.trim() === '';
      const isTooLongMessage = message.value.length > 256;
      isIncorrect.value = isEmptyMessage || isTooLongMessage;

      formHelperTextMessage.value = '';
      if (isEmptyMessage) formHelperTextMessage.value = 'Please enter the message';
      if (isTooLongMessage) formHelperTextMessage.value = 'Please enter max 256 characters';

      emitState();
    };

    const emitState = () =>
      emit('newState', {
        id: props.inputId,
        value: message.value,
        isIncorrect: isIncorrect.value,
        validate: () => inputValidate(),
      });

    onMounted(() => emitState());

    watch(message, () => inputValidate());

    return {
      title,
      isIncorrect,
      message,
      formHelperTextMessage,
    };
  },
};
</script>

<style scoped lang="scss">
.newMessageTextField {
  display: flex;
  flex-flow: nowrap column;

  &__input {
    @include basic-text-input;
    height: 140px;
    resize: none;
  }
}
</style>
