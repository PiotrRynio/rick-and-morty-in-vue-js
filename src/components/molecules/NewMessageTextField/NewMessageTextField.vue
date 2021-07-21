<template>

  <div class="newMessageTextField">
    <form-label :title="title" :is-incorrect="isIncorrect" :input-id="inputId"/>
    <textarea
        class="newMessageTextField__input"
        :class="{'newMessageTextField__input--incorrect': isIncorrect}"
        v-model="message"
        placeholder="Enter the title"
        :id="inputId"
        type="text"
    />
    <form-helper-text :text="formHelperTextMessage"/>
  </div>
</template>

<script>
import FormLabel from "@/components/atoms/FormLabel/FormLabel";
import FormHelperText from "@/components/atoms/FormHelperText/FormHelperText"

export default {
  name: "NewMessageTextField",
  components: {
    FormLabel,
    FormHelperText
  },
  data() {
    return {
      title: "Message",
      isIncorrect: false,
      inputId: "newMessageTextInput",
      message: "",
      formHelperTextMessage: ""
    }
  },


  watch: {
    message() {
      this.inputValidate();
    }
  },

  mounted() {
    this.emitState();
  },

  methods: {
    inputValidate() {
      this.isIncorrect = true;
      this.formHelperTextMessage = "";
      if (this.message.trim() === "") this.formHelperTextMessage = "Please enter the message";
      else if (this.message.length > 256) this.formHelperTextMessage = "Please enter max 256 characters";
      else this.isIncorrect = false
      this.emitState()
    },

    emitState() {
      this.$emit('newState',
          {
            id: this.inputId,
            value: this.message,
            isIncorrect: this.isIncorrect,
            validate: () => this.inputValidate()
          })
    }
  }
}
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