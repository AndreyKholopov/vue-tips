import MyLoader from '../components/Loader.vue'

export default {
  title: 'Common components/Loader',
  component: MyLoader,
  argTypes: {
    color: { control: 'color' },
  },
}

export const Loader = (args) => ({
  components: { MyLoader },

  setup() {
    return { args }
  },

  template: '<MyLoader v-bind="args" />'
})