<template>
  <label ref="label" class="check option">
    <input
      @change="change"
      :value="valueInput"
      v-model="model"
      :disabled="disabled"
      class="check__input"
      type="checkbox"
    />
    <span class="check__box"></span>
    {{ text }}
  </label>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Checkbox label",
    },
    fontSize: {
      type: Number,
      default: 12,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    change: {
      type: Function,
    },
    value: {
      type: Boolean,
    },
    valueInput: {
      type: Boolean,
    },
  },
  mounted() {
    this.$refs.label.style.fontSize = `${this.fontSize}px`
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(valueInput) {
        this.$emit("input", valueInput)
      },
    },
  },
}
</script>

<style scoped>
.option {
  display: inline-block;
}

.check {
  padding-left: 1.2em;
}

.check__input {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.check__box {
  position: absolute;
  margin-top: 0.2em;
  margin-left: -1em;
  width: 0.6em;
  height: 0.6em;
  overflow: hidden;
  border-radius: 0.05em;
  background-color: white;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  box-shadow: 0 0 0 0.1em #4a90e2;
}

/* Checked */

.check__input:checked + .check__box {
  background-color: #4a90e2;
  background-image: url(../assets/check.svg);
}

/* Focused, active */

.check__input:active + .check__box,
.check__input:focus + .check__box {
  box-shadow: 0 0 0 0.1em #4a90e2, 0 0 0 0.2em #7ed321;
}

/* Disabled */

.check__input:disabled + .check__box {
  box-shadow: 0 0 0 0.1em #9b9b9b;
}

.check__input:checked:disabled + .check__box {
  background-color: #9b9b9b;
}
</style>
