import MyButton from '../components/Button.vue'

export default {
	title: 'Common components/Button',
	component: MyButton,
	argTypes: {
		onClick: {},
		fontSize: {
			control: {
				type: 'text'
			}
		},
		width: {
			control: {
				type: 'text'
			}
		},
		color: {
			description: 'Can use only rgb or hex'
		}
	},
}

const Template = (args) => ({
	components: { MyButton },

	setup() {
		return { args };
	},

	template: '<my-button v-bind="args" />',
})

export const Button = Template.bind({})
Button.args = {
	text: 'Button'
}

export const DisabledButton = Template.bind({})
DisabledButton.args = {
	text: 'Button',
	disabled: true,
}

export const LoadingButton = Template.bind({})
LoadingButton.args = {
	text: 'Button',
	loading: true,
}

export const RoundButton = Template.bind({})
RoundButton.args = {
	text: 'Button',
	round: true,
}

export const RippledButton = Template.bind({})
RippledButton.args = {
	text: 'Button',
	ripple: true,
}
