<template>
  <div ref="wrapper" class="text-wrapper">
    <span
      ref="letter"
      class="text-letter"
      v-bind:class="{ clowing: clowing && !click }"
      v-for="(letter, index) in text"
      :key="index"
      :style="`--delay: ${index}`"
    >
      {{ letter }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      defaulf: "Clowing text",
    },
    color: {
      type: String,
      default: "rgb(0, 0, 0)",
    },
    fontSize: {
      type: Number,
      default: 15,
    },
    clowing: {
      type: Boolean,
      default: false,
    },
    clowingColor: {
      type: String,
      default: "#00b3ff",
    },
    click: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      check: false,
    }
  },
  methods: {
    startAnimation() {
      if (this.clowing) {
        if (this.check) {
          this.check = false

          for (let i = 0; i < this.$refs.letter.length; i++) {
            const element = this.$refs.letter[i]
            element.classList.remove("clowing")
          }
        } else {
          this.check = true

          for (let i = 0; i < this.$refs.letter.length; i++) {
            const element = this.$refs.letter[i]
            element.classList.add("clowing")
          }
        }
      }
    },
  },
  mounted() {
    // animation on click
    if (this.click) {
      this.$refs.wrapper.addEventListener("click", this.startAnimation)
    }

    for (let i = 0; i < this.$refs.letter.length; i++) {
      const element = this.$refs.letter[i]

      // set space
      if (element.textContent === " ") {
        element.style.minWidth = "0.5em"
      }

      // set fontSize and color
      element.style.fontSize = `${this.fontSize}px`
      element.style.setProperty("--main-text-color", `${this.color}`)

      // clowing effect
      if (this.clowing) {
        element.style.setProperty(
          "--clowing-text-color",
          `${this.clowingColor}`
        )
        if (this.click) {
          element.style.color = "transparent"
        }
      }
    }
  },
}
</script>

<style scoped>
.text-wrapper {
  position: relative;
  display: inline-block;
}

.text-wrapper .text-letter {
  position: relative;
  display: inline-block;

  font-size: 1em;

  color: var(--main-text-color);
}

/* clowing effect */

.text-wrapper .text-letter.clowing {
  color: transparent;

  animation: clowing-animate 2s linear infinite;
  animation-delay: calc(0.1s * var(--delay));
}

@keyframes clowing-animate {
  0%,
  100% {
    color: transparent;
    filter: blur(0.05em);
    text-shadow: 0 0 10px var(--clowing-text-color),
      0 0 20px var(--clowing-text-color), 0 0 40px var(--clowing-text-color),
      0 0 80px var(--clowing-text-color), 0 0 120px var(--clowing-text-color),
      0 0 200px var(--clowing-text-color), 0 0 300px var(--clowing-text-color),
      0 0 400px var(--clowing-text-color);
  }
  5%,
  95% {
    color: var(--main-text-color);
    filter: blur(0);
    text-shadow: 0 0 10px none;
  }
}
</style>
