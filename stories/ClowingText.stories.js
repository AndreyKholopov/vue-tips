import MyClowingText from '../components/ClowingText.vue'

export default {
  title: 'Text components/ClowingText',
  component: MyClowingText,
  args: {
    text: 'Clowing text',
    clowing: true
  }
}

export const ClowingText = (args) => ({
  components: { MyClowingText },

  setup() {
    return { args };
  },

  template: '<MyClowingText v-bind="args"/>'
})