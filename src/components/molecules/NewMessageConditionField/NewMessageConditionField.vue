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
export default {
  name: 'NewMessageConditionField',
  props: ['inputId'],
  data() {
    return {
      labelText: `I want to use InterGalaxy Quickpost\u2122`,
      isChecked: false,
    };
  },
  watch: {
    isChecked() {
      this.emitState();
    },
  },
  mounted() {
    this.emitState();
  },
  methods: {
    emitState() {
      this.$emit('newState', {
        id: this.inputId,
        value: this.isChecked,
        isValueBoolean: true,
        isIncorrect: false,
        validate: () => function () {},
      });
    },
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
