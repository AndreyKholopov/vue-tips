<template>
  <div ref="glitch" :title="text" v-bind:class="{ glitch: glitch && !click }">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      defaulf: "Glitch text",
    },
    color: {
      type: String,
      default: "rgb(0, 0, 0)",
    },
    fontSize: {
      type: Number,
      default: 20,
    },
    glitch: {
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
      // glitch effect on click
      if (this.check) {
        this.check = false

        const element = this.$refs.glitch
        element.classList.remove("glitch")
      } else {
        this.check = true

        const element = this.$refs.glitch
        element.classList.add("glitch")
      }
    },
  },
  mounted() {
    // animation on click
    if (this.click) {
      this.$refs.glitch.addEventListener("click", this.startAnimation)
    }

    // set fontSize and color
    this.$refs.glitch.style.fontSize = `${this.fontSize}px`
    this.$refs.glitch.style.setProperty("--main-text-color", `${this.color}`)
  },
}
</script>

<style scoped>
div {
  display: inline-block;
  color: var(--main-text-color);
  font-size: 40px;
}

.glitch {
  animation: glitch 1s linear infinite;
}

@keyframes glitch {
  2%,
  64% {
    transform: translate(2px, 0) skew(0deg);
  }
  4%,
  60% {
    transform: translate(-2px, 0) skew(0deg);
  }
  62% {
    transform: translate(0, 0) skew(5deg);
  }
}

.glitch:before,
.glitch:after {
  content: attr(title);
  position: absolute;
  left: 0;
}

.glitch:before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {
  2%,
  64% {
    transform: translate(2px, -2px);
  }
  4%,
  60% {
    transform: translate(0, 0);
  }
  62% {
    transform: translate(13px, -1px) skew(-13deg);
  }
}

.glitch:after {
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom {
  2%,
  64% {
    transform: translate(-2px, 0);
  }
  4%,
  60% {
    transform: translate(0, 0);
  }
  62% {
    transform: translate(-22px, 5px) skew(21deg);
    color: red;
  }
}
</style>
