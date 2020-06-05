<template>
  <button
    @click.self="click"
    :disabled="disabled"
    ref="button"
    class="button"
    v-bind:class="{ loading: loading }"
  >
    {{ text }}
    <div v-if="loading" class="loader-wrapper">
      <myLoading />
    </div>
  </button>
</template>

<script>
import myLoading from "../components/loading.vue";

export default {
  components: {
    myLoading,
  },
  props: {
    text: String,
    fontSize: Number,
    width: Number,
    disabled: Boolean,
    click: Function,
    loading: Boolean,
    color: String,
		hoverColor: String,
		ripple: Boolean
  },
	methods: {
		rippleOnButton (e) {
			let x = e.clientX - e.target.offsetLeft
			let y = e.clientY - e.target.offsetTop
			
			let ripples = document.createElement('div')

			ripples.style.left = x + 'px'
			ripples.style.top = y + 'px'

			this.$refs.button.appendChild(ripples).classList.add('ripples')

			setTimeout(() => {
				ripples.remove()
			}, 1000);
		}
	},
  mounted() {
    this.$refs.button.style.fontSize = `${this.fontSize}px`;
		this.$refs.button.style.maxWidth = `${this.width}px`;
		
		if (this.ripple) {
			this.$refs.button.addEventListener('click', this.rippleOnButton)
		}

    this.$refs.button.style.setProperty('--main-button-color', `${this.color ? this.color : 'rgb(13, 199, 240)'}`)
    this.$refs.button.style.setProperty('--hover-button-color', `${this.hoverColor ? this.hoverColor : this.color ? this.color : 'rgb(254, 133, 110)'}`)
  },
};
</script>

<style scoped>
.button {
  position: relative;

  padding: 22px 28px 18px 28px;
  margin: 0;

  width: 100%;
  height: 100%;
  min-width: min-content;

  border-radius: 8px;
	border: none;
	outline: none;
	overflow: hidden;

  text-transform: uppercase;

  background: var(--main-button-color);
  color: #ffffff;

  cursor: pointer;
}

/* Focused, hovered */

.button:hover,
.button:focus {
  background: var(--hover-button-color);
}

/* Active */

.button:active {
  background: var(--hover-button-color);
}

/* Disabled */

.button[disabled] {
  opacity: 0.75;
  cursor: auto;
}

.button[disabled]:hover,
.button[disabled]:focus {
  background: var(--main-button-color);
}

.button[disabled]:active {
  margin: 0;

  background: var(--main-button-color);
}

/* Loader */
.loader-wrapper {
  display: flex;
  position: absolute;
  justify-content: center;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;

  border-radius: 8px;
  outline: none;

  background: var(--main-button-color);
}

.button.loading {
  cursor: auto;
}

.button.loading:hover,
.button.loading:focus {
  background: var(--main-button-color);
}

.button.loading:active {
  margin: 0;

  background: var(--main-button-color);
}
</style>
