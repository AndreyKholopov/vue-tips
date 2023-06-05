import MyWavyText from '../components/WavyText.vue'

export default {
  title: 'Text components/WavyText',
  component: MyWavyText,
  args: {
    text: 'Wavy text',
    wavy: true
  }
}

export const WavyText = (args) => ({
  components: { MyWavyText },

  setup() {
    return { args };
  },

  template: '<MyWavyText v-bind="args"/>'
})