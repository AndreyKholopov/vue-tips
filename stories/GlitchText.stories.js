import MyGlitchText from '../components/GlitchText.vue'

export default {
  title: 'Text components/GlitchText',
  component: MyGlitchText,
  args: {
    text: 'Glitch text',
    glitch: true
  }
}

export const GlitchText = (args) => ({
  components: { MyGlitchText },

  setup() {
    return { args };
  },

  template: '<MyGlitchText v-bind="args"/>'
})