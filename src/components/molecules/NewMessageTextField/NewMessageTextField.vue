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

export default {
  name: 'NewMessageTextField',
  components: {
    FormLabel,
    FormHelperText,
  },
  props: ['inputId'],
  data() {
    return {
      title: 'Message',
      isIncorrect: false,
      message: '',
      formHelperTextMessage: '',
    };
  },

  watch: {
    message() {
      this.inputValidate();
    },
  },

  mounted() {
    this.emitState();
  },

  methods: {
    inputValidate() {
      const isEmptyMessage = this.message.trim() === '';
      const isTooLongMessage = this.message.length > 256;
      this.isIncorrect = isEmptyMessage || isTooLongMessage;

      this.formHelperTextMessage = '';
      if (isEmptyMessage) this.formHelperTextMessage = 'Please enter the message';
      if (isTooLongMessage) this.formHelperTextMessage = 'Please enter max 256 characters';

      this.emitState();
    },

    emitState() {
      this.$emit('newState', {
        id: this.inputId,
        value: this.message,
        isIncorrect: this.isIncorrect,
        validate: () => this.inputValidate(),
      });
    },
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
