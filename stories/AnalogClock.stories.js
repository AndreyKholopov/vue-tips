import MyAnalogClock from '../components/AnalogClock.vue'

export default {
  title: 'Common components/AnalogClock',
  component: MyAnalogClock
}

export const AnalogClock = (args) => ({
  components: { MyAnalogClock },

  setup() {
    return { args }
  },

  template: '<MyAnalogClock v-bind="args"/>'
})