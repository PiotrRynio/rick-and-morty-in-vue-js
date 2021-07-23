<template>
  <div class="newMessageConditionField">
    <input
      class="newMessageConditionField__input"
      :class="{ 'newMessageConditionField__input--checked': isChecked }"
      type="checkbox"
      id="checkbox"
      v-model="isChecked"
    />
    <label class="newMessageConditionField__label" for="checkbox"> {{ labelText }} </label>
  </div>
</template>

<script>
import { onMounted, ref, watch } from '@vue/runtime-core';

export default {
  name: 'NewMessageConditionField',
  props: { inputId: String },
  emits: ['newState'],

  setup(props, { emit }) {
    const labelText = ref(`I want to use InterGalaxy Quickpost\u2122`);
    const isChecked = ref(false);

    const emitState = () =>
      emit('newState', {
        id: props.inputId,
        value: isChecked.value,
        isValueBoolean: true,
        isIncorrect: false,
        validate: () => function () {},
      });

    watch(isChecked, () => emitState());

    onMounted(() => emitState());

    return { labelText, isChecked };
  },
};
</script>

<style scoped lang="scss">
.newMessageConditionField {
  display: flex;
  height: 24px;
  flex-flow: nowrap row;
  align-items: center;

  &__input {
    appearance: none;
    height: 24px;
    width: 24px;
    border: 1px solid #d6dbe4;
    border-radius: 4px;
    cursor: pointer;
  }

  &__input--checked {
    background-color: $primary-color;
  }

  &__input--checked::after {
    content: '';
    display: block;
    height: 20px;
    width: 20px;
    padding: 1px;
    margin: 0;
    clip-path: polygon(18% 59%, 28% 47%, 44% 59%, 78% 14%, 90% 25%, 46% 82%);
    background-color: $opposite-primary-color;
  }

  &__label {
    padding-left: 9px;
    font-size: 14px;
    font-weight: $bold-font-weight;
    font-family: $primary-font-family;
    cursor: pointer;
  }
}
</style>
