<template>
  <section class="page">
    <myButton ripple :click="click" :text="'button'" color="#000" :fontSize="30" :width="500" />
    <p>{{ counter }}</p>
    <myDivide rounded color='#999' />

    <myCheckbox
      v-model="checked"
      :change="changeCheck"
      :fontSize="30"
      :text="'checkbox'"
    />
    <p>{{ changeCount }}</p>
    <p>{{ checked }}</p>
    <myDivide rounded color='#999' />
    
  </section>
</template>

<script>
import myButton from "./components/button.vue";
import myCheckbox from "./components/checkbox/checkbox.vue";
import myDivide from "./components/divide.vue";

export default {
  name: "app",
  components: {
    myButton,
    myCheckbox,
    myDivide
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
@import './components/mainCss.css';

body {
  margin: 0;
}

.page {
  margin: 15px;
}
</style>
