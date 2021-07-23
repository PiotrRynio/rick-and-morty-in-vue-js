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
import { onMounted, ref, watch } from '@vue/runtime-core';

export default {
  name: 'NewMessageCharacterField',
  components: {
    FormLabel,
    FormHelperText,
  },
  props: { inputId: String },
  emits: ['newState'],

  setup(props, { emit }) {
    const title = ref('Character');
    const formHelperTextMessage = ref('');
    const selected = ref('');
    const isIncorrect = ref(false);
    const characters = ref([]);

    watch(selected, () => {
      inputValidate();
    });

    const fetchCharacters = async () => {
      characters.value = await RickAndMortyApi().getCharacters();
    };

    const emitState = () => {
      emit('newState', {
        id: props.inputId,
        value: selected,
        isIncorrect: isIncorrect,
        validate: () => inputValidate(),
      });
    };

    const inputValidate = () => {
      const isCharacterSelected = selected.value === '';
      isIncorrect.value = isCharacterSelected;
      formHelperTextMessage.value = isCharacterSelected ? 'Please enter the character' : '';
      emitState();
    };

    onMounted(() => {
      fetchCharacters();
      emitState();
    });

    return {
      title,
      formHelperTextMessage,
      selected,
      isIncorrect,
      characters,
    };
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
