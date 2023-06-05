import MyCheckbox from '../components/Checkbox.vue'

export default {
  title: 'Common components/Checkbox',
  component: MyCheckbox
}

const Template = (args) => ({
  components: { MyCheckbox },

  setup() {
    return { args };
  },

  template: '<my-Checkbox v-bind="args" />',
})

export const Checkbox = Template.bind({})

export const ActiveCheckbox = Template.bind({})
ActiveCheckbox.args = {
  value: true,
}

export const DisabledCheckbox = Template.bind({})
DisabledCheckbox.args = {
  disabled: true,
}

export const DisabledActiveCheckbox = Template.bind({})
DisabledActiveCheckbox.args = {
  disabled: true,
  value: true,
}