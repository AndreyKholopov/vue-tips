import MyDivide from '../components/Divide.vue'

export default {
  title: 'Common components/Divide',
  component: MyDivide
}

const Template = (args) => ({
  components: { MyDivide },

  setup() {
    return { args }
  },

  template: '<MyDivide v-bind="args"/>'
})

export const Divide = Template.bind({})

export const VerticalDivide = Template.bind({})
VerticalDivide.args = {
  vertical: true,
  height: 100
}