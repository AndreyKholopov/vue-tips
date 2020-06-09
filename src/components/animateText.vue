<template>
  <div ref="wrapper" class="text-wrapper">
    <span
      ref="letter"
      class="text-letter"
      v-bind:class="{ wavy: wavy && !click, clowing: clowing && !click }"
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
    text: String,
    color: String,
    fontSize: Number,
    wavy: Boolean,
    clowing: Boolean,
    clowingColor: String,
    click: Boolean
  },
  data() {
    return {
      check: false,
    };
  },
  methods: {
    startAnimation() {
      // wavy effect on click
      if (this.wavy) {
        if (this.check) {
          this.check = false;

          for (let i = 0; i < this.$refs.letter.length; i++) {
            const element = this.$refs.letter[i];
            element.classList.remove("wavy");
          }
        } else {
          this.check = true;

          for (let i = 0; i < this.$refs.letter.length; i++) {
            const element = this.$refs.letter[i];
            element.classList.add("wavy");
          }
        }

      // clowing effect on click
      } else if (this.clowing) {
        if (this.check) {
          this.check = false;

          for (let i = 0; i < this.$refs.letter.length; i++) {
            const element = this.$refs.letter[i];
            element.classList.remove("clowing");
          }
        } else {
          this.check = true;

          for (let i = 0; i < this.$refs.letter.length; i++) {
            const element = this.$refs.letter[i];
            element.classList.add("clowing");
          }
        }
      }
    },
  },
  mounted() {
    // animation on click
    if (this.click) {
      this.$refs.wrapper.addEventListener("click", this.startAnimation);
    }

    for (let i = 0; i < this.$refs.letter.length; i++) {
      const element = this.$refs.letter[i];

      // set space
      if (element.textContent === "   ") {
        element.style.minWidth = "0.5em";
      }

      // set fontSize and color
      element.style.fontSize = `${this.fontSize}px`;
      element.style.setProperty(
        "--main-text-color",
        `${this.color ? this.color : "rgb(0, 0, 0)"}`
      );

      // clowing effect
      if (this.clowing) {
        element.style.setProperty(
          "--clowing-text-color",
          `${this.clowingColor ? this.clowingColor : "#00b3ff"}`
        );
        if (this.click) {
          element.style.color = "transparent";
        }
      }
    }
  },
};
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
