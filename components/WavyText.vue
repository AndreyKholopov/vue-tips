<template>
  <div ref="wrapper" class="text-wrapper">
    <span
      ref="letter"
      class="text-letter"
      v-bind:class="{ wavy: wavy && !click }"
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
      defaulf: "Wavy text",
    },
    color: {
      type: String,
      default: "rgb(0, 0, 0)",
    },
    fontSize: {
      type: Number,
      default: 15,
    },
    wavy: {
      type: Boolean,
      default: false,
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
      // wavy effect on click
      if (this.wavy) {
        if (this.check) {
          this.check = false

          for (let i = 0; i < this.$refs.letter.length; i++) {
            const element = this.$refs.letter[i]
            element.classList.remove("wavy")
          }
        } else {
          this.check = true

          for (let i = 0; i < this.$refs.letter.length; i++) {
            const element = this.$refs.letter[i]
            element.classList.add("wavy")
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

/* wavy effect */

.text-wrapper .text-letter.wavy {
  animation: wavy-animate 1s ease-in-out infinite;
  animation-delay: calc(0.1s * var(--delay));
}

@keyframes wavy-animate {
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(-20px);
  }
  40%,
  100% {
    transform: translateY(0px);
  }
}
</style>
