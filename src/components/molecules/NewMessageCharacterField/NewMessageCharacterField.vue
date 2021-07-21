<template>
  <div class="newMessageCharacterField">
    <form-label :title="title" :is-incorrect="isIncorrect" :input-id="inputId"/>

    <select
        class="newMessageCharacterField__input"
        :class="{'newMessageCharacterField__input--incorrect': isIncorrect}"
        v-model="selected">
      <option disabled value="">Pick a character</option>
      <option v-for="character in characters" v-bind:key="character.id" v-bind:value="character.id">{{
          character.title
        }}
      </option>
    </select>

    <form-helper-text :text="formHelperTextMessage"/>

  </div>
</template>

<script>
import FormLabel from "@/components/atoms/FormLabel/FormLabel";
import FormHelperText from "@/components/atoms/FormHelperText/FormHelperText";

export default {
  name: "NewMessageCharacterField",
  components: {
    FormLabel,
    FormHelperText
  },
  data() {
    return {
      title: "Character",
      inputId: "NewMessageCharacterField",
      formHelperTextMessage: "",
      selected: '',
      isIncorrect: false,
      characters: [
        {id: 1, title: "Json"},
        {id: 2, title: "Brzuszek"},
        {id: 3, title: "Milkiway"},
        {id: 4, title: "Czeko"},
        {id: 5, title: "Latka"},
        {id: 6, title: "Kayumanis"},
        {id: 7, title: "Tulinek"},
        {id: 8, title: "Baton"},
        {id: 9, title: "OdP"},
      ]
    }
  },

  watch: {
    selected() {
      this.inputValidate()
    }
  },
  mounted() {
    this.emitState();
  },
  methods: {
    inputValidate: function () {
      this.isIncorrect = true;
      this.formHelperTextMessage = "";
      console.log(this.selected)
      // console.log(this."selected")
      if (this.selected === "") this.formHelperTextMessage = "Please enter the character";
      else this.isIncorrect = false
      this.emitState()
    },
    emitState() {
      this.$emit('newState',
          {
            id: this.inputId,
            value: this.selected,
            isIncorrect: this.isIncorrect,
            validate: () => this.inputValidate()
          })
    }
  }
}
</script>

<style scoped lang="scss">
.newMessageCharacterField {
  display: flex;
  flex-flow: nowrap column;

  &__input {
    @include basic-text-input;
  }
}
</style>