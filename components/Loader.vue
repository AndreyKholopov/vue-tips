<template>
  <div class="tips-loader">
    <div :style="style"></div>
    <div :style="style"></div>
    <div :style="style"></div>
    <div :style="style"></div>
  </div>
</template>

<script>
import { reactive, computed } from "vue"

export default {
  props: {
    color: {
      default: "#000",
      type: String,
    },
  },

  setup(props) {
    props = reactive(props)

    return {
      style: computed(() => ({
        backgroundColor: props.color,
      })),
    }
  },
}
</script>

<style scoped>
.tips-loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 13px;
}
.tips-loader div {
  position: absolute;
  top: 0;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #000;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.tips-loader div:nth-child(1) {
  left: 8px;
  animation: loader1 0.6s infinite;
}
.tips-loader div:nth-child(2) {
  left: 8px;
  animation: loader2 0.6s infinite;
}
.tips-loader div:nth-child(3) {
  left: 32px;
  animation: loader2 0.6s infinite;
}
.tips-loader div:nth-child(4) {
  left: 56px;
  animation: loader3 0.6s infinite;
}
@keyframes loader1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loader3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loader2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
