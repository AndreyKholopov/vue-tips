<template>
  <section class="page">
    <myButton :click="click" :text="'button'" :fontSize="30" :width="500" />
    <p>{{ counter }}</p>
    <myCheckbox v-model="checked" :change="changeCheck" :fontSize="30" :text="'checkbox'" />
    <p>{{ changeCount }}</p>
    <p>{{ checked }}</p>
  </section>
</template>

<script>
import myButton from '@/components/button.vue'
import myCheckbox from '@/components/checkbox/checkbox.vue'

export default {
  name: 'app',
  components: {
    myButton,
    myCheckbox
  },
  data () {
    return {
      counter: 0,
      changeCount: 0,
      checked: false    
    }
  },
  methods: {
    click() {
      this.counter++
    },
    changeCheck() {
      this.changeCount++
    }
  }
}
</script>

<style>
  body {
    margin: 0;
  }

  .page {
    margin: 15px;
  }
</style>
