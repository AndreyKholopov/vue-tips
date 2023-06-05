<template>
  <button
    @click.self="onClick"
    :disabled="disabled"
    ref="refButton"
    class="button"
    :style="style"
    v-bind:class="{ loading: loading }"
  >
    {{ loading ? "" : text }}

    <myLoader v-if="loading" :color="loadingColor" />
  </button>
</template>

<script>
import { reactive, computed, ref, onMounted } from "vue"
import myLoader from "./Loader.vue"

export default {
  components: {
    myLoader,
  },

  props: {
    text: {
      default: "",
      type: String,
    },
    fontSize: {
      default: "1em",
      type: [Number, String],
    },
    width: {
      default: "auto",
      type: [Number, String],
    },
    color: {
      default: "rgb(0, 0, 0)",
      type: String,
    },
    hoverColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    ripple: {
      default: false,
      type: Boolean,
    },
    round: {
      default: false,
      type: Boolean,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props)
    const refButton = ref(null)
    let colorRGB

    if (!!props.color.match(/#[a-f0-9]{6}\b|#[a-f0-9]{3}\b/gi))
      colorRGB = hexToRgb(props.color)
    else colorRGB = getRGBColorMeanings(props.color)

    function hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b
      })

      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null
    }

    function getRGBColorMeanings(color) {
      const startColorMeanings = color.indexOf("(", 0)
      const colorMeanings = color
        .slice(startColorMeanings + 1, color.length - 1)
        .split(", ")
      return {
        r: colorMeanings[0],
        g: colorMeanings[1],
        b: colorMeanings[2],
      }
    }

    function getHoverColor(color) {
      if (props.hoverColor) return props.hoverColor
      else
        return `rgb(${Math.min(color.r + 25, 255)},
                        ${Math.min(color.g + 25, 255)},
                        ${Math.min(color.b + 25, 255)})`
    }

    function getTextColor(color) {
      if (props.textColor) return props.textColor

      // Luma = (red * 0.2126 + green * 0.7152 + blue * 0.0722) / 255
      const luma =
        (color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722) / 255
      // recomended 0.5 - 0.6
      const threshold = 0.5
      return `hsl(0, 0%, calc((${luma} - ${threshold}) * -10000000%))`
    }

    function rippleOnButton(e) {
      let x = e.clientX - e.target.offsetLeft
      let y = e.clientY - e.target.offsetTop

      let ripples = document.createElement("div")

      ripples.style.left = x + "px"
      ripples.style.top = y + "px"

      refButton.value.appendChild(ripples).classList.add("ripples")

      setTimeout(() => {
        ripples.remove()
      }, 1000)
    }

    onMounted(() => {
      refButton.value.style.height = props.round
        ? refButton.value.clientWidth + "px"
        : "100%"

      if (props.ripple)
        refButton.value.addEventListener("click", rippleOnButton)
    })

    return {
      refButton,

      loadingColor: computed(() => getTextColor(colorRGB)),

      style: computed(() => ({
        "--main-button-color": props.color,
        "--hover-button-color": getHoverColor(colorRGB),
        "--text-button-color": getTextColor(colorRGB),
        fontSize: !isNaN(props.fontSize)
          ? props.fontSize + "px"
          : props.fontSize,
        width: !isNaN(props.width) ? props.width + "px" : props.width,
        borderRadius: props.round ? "50%" : "",
      })),

      onClick() {
        emit("click")
      },
    }
  },
}
</script>

<style>
/* ripples */
.button .ripples {
  position: absolute;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: #ffffff;

  pointer-events: none;
  animation: animate-ripples 1s linear infinite;
}

@keyframes animate-ripples {
  0% {
    width: 0;
    height: 0;

    opacity: 0.5;
  }
  100% {
    width: 500px;
    height: 500px;

    opacity: 0;
  }
}
</style>

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

  background: var(--main-button-color);
  color: var(--text-button-color);

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
  opacity: 0.5;
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
