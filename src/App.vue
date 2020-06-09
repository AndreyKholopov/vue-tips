<template>
  <section class="page">
    <myButton
      ripple
      :click="click"
      text="button"
      color="#000"
      :fontSize="30"
      :width="500"
    />
    <p>{{ counter }}</p>
    <myDivide rounded color="#999" />

    <myCheckbox
      v-model="checked"
      :change="changeCheck"
      :fontSize="30"
      :text="'checkbox'"
    />
    <p>{{ changeCount }}</p>
    <p>{{ checked }}</p>
    <myDivide rounded color="#999" />

    <myAnimateText wavy click text="simple text" color="#000" :fontSize="30" />
    <myDivide rounded color="#999" />

    <myAnalogClock width="200" faceColor="#cc3333" />
    <myDivide rounded color="#999" />

    <myGlitchText glitch click text="simple text" />
    <myDivide rounded color="#999" />
  </section>
</template>

<script>
import myButton from "./components/button.vue";
import myCheckbox from "./components/checkbox/checkbox.vue";
import myDivide from "./components/divide.vue";
import myAnimateText from "./components/animateText.vue";
import myAnalogClock from "./components/analogClock/analogClock.vue";
import myGlitchText from "./components/glitchText.vue";

export default {
  name: "app",
  components: {
    myButton,
    myCheckbox,
    myDivide,
    myAnimateText,
    myAnalogClock,
    myGlitchText,
  },
  data() {
    return {
      counter: 0,
      changeCount: 0,
      checked: false,
    };
  },
  methods: {
    click() {
      this.counter++;
    },
    changeCheck() {
      this.changeCount++;
    },
  },
};
</script>

<style>
@import "./components/mainCss.css";
</style>
