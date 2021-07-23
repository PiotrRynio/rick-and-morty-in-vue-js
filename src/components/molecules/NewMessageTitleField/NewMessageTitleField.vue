<template>

  <div class="newMessageTitleField">
    <form-label :title="title" :is-incorrect="isIncorrect" :input-id="inputId"/>
    <input
        class="newMessageTitleField__input"
        :class="{'newMessageTitleField__input--incorrect': isIncorrect}"
        v-model="messageTitle"
        placeholder="Enter the title"
        :id="inputId"
    />
    <form-helper-text :text="formHelperTextMessage"/>
  </div>
</template>

<script>
import FormLabel from "@/components/atoms/FormLabel/FormLabel";
import FormHelperText from "@/components/atoms/FormHelperText/FormHelperText"

export default {
  name: "NewMessageTitleField",
  components: {
    FormLabel,
    FormHelperText
  },
  props: ['inputId'],
  data() {
    return {
      title: "Title",
      isIncorrect: false,
      messageTitle: "",
      formHelperTextMessage: ""
    }
  },
  watch: {
    messageTitle() {
      this.inputValidate();
    }
  },

  mounted() {
    this.emitState();
  },

  methods: {
    inputValidate() {
      const format = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
      this.isIncorrect = true;
      this.formHelperTextMessage = "";
      if (this.messageTitle.trim() === "") this.formHelperTextMessage = "Please enter the title";
      else if (format.test(this.messageTitle)) this.formHelperTextMessage = "Please enter no special characters";
      else if (this.messageTitle.length < 3) this.formHelperTextMessage = "Please enter min 3 characters title";
      else if (this.messageTitle.length > 32) this.formHelperTextMessage = "Please enter max 32 characters title";
      else this.isIncorrect = false
      this.emitState()
    },
    emitState() {
      this.$emit('newState',
          {
            id: this.inputId,
            value: this.messageTitle,
            isIncorrect: this.isIncorrect,
            validate: () => this.inputValidate()
          })
    }
  },
}
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