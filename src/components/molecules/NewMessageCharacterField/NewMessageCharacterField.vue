<template>
  <div class="newMessageCharacterField">
    <form-label :title="title" :is-incorrect="isIncorrect" :input-id="inputId"/>

    <select
        class="newMessageCharacterField__input"
        :class="{'newMessageCharacterField__input--incorrect': isIncorrect}"
        v-model="selected">
      <option disabled value="">Pick a character</option>
      <option v-for="character in characters" v-bind:key="character.id" v-bind:value="character.id">{{
          character.name
        }}
      </option>
    </select>

    <form-helper-text :text="formHelperTextMessage"/>

  </div>
</template>

<script>
import FormLabel from "@/components/atoms/FormLabel/FormLabel";
import FormHelperText from "@/components/atoms/FormHelperText/FormHelperText";
import axios from "axios";

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
      characters: []
    }
  },

  watch: {
    selected() {
      this.inputValidate()
    }
  },
  mounted() {

    this.fetchApi()
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
    },
    fetchApi() {
      axios.get("https://rickandmortyapi.com/api/character")
          .then(response => response.data)
          .then(data => data.results)
          .then(results => this.characters = results)
          .catch(error => console.log(error))
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