<template>
  <div class="newMessageCharacterField">
    <form-label :title="title" :is-incorrect="isIncorrect" :input-id="inputId" />

    <select
      class="newMessageCharacterField__input"
      :class="{ 'newMessageCharacterField__input--incorrect': isIncorrect }"
      v-model="selected"
    >
      <option disabled value="">Pick a character</option>
      <option v-for="character in characters" v-bind:key="character.id" v-bind:value="character.id">
        {{ character.name }}
      </option>
    </select>

    <form-helper-text :text="formHelperTextMessage" />
  </div>
</template>

<script>
import FormLabel from '@/components/atoms/FormLabel/FormLabel';
import FormHelperText from '@/components/atoms/FormHelperText/FormHelperText';
import { RickAndMortyApi } from '@/restapi/rick-and-morty/RickAndMortyApi';

export default {
  name: 'NewMessageCharacterField',
  components: {
    FormLabel,
    FormHelperText,
  },
  props: ['inputId'],
  data() {
    return {
      title: 'Character',
      formHelperTextMessage: '',
      selected: '',
      isIncorrect: false,
      characters: [],
    };
  },

  watch: {
    selected() {
      this.inputValidate();
    },
  },
  mounted() {
    this.fetchCharacters();
    this.emitState();
  },
  methods: {
    inputValidate: function () {
      const isCharacterSelected = this.selected === '';
      this.isIncorrect = isCharacterSelected;
      this.formHelperTextMessage = isCharacterSelected ? 'Please enter the character' : '';
      this.emitState();
    },
    emitState() {
      this.$emit('newState', {
        id: this.inputId,
        value: this.selected,
        isIncorrect: this.isIncorrect,
        validate: () => this.inputValidate(),
      });
    },
    async fetchCharacters() {
      this.characters = await RickAndMortyApi().getCharacters();
    },
  },
};
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
