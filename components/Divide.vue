<template>
  <div class="divide" ref="divide"></div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    margin: {
      type: Number,
      default: 8,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "#000",
    },
  },
  mounted() {
    if (this.vertical) {
      this.$refs.divide.style.height = `${this.height}px`
      if (!this.width) {
        this.$refs.divide.style.width = "2px"
      }
      this.$refs.divide.style.width = `${this.width}px`

      this.$refs.divide.style.marginLeft = `${this.margin}px`
      this.$refs.divide.style.marginRight = `${this.margin}px`
    } else {
      this.$refs.divide.style.width = `${this.width}px`
      if (!this.height) {
        this.$refs.divide.style.height = "2px"
      }
      this.$refs.divide.style.height = `${this.height}px`

      this.$refs.divide.style.marginTop = `${this.margin}px`
      this.$refs.divide.style.marginBottom = `${this.margin}px`
    }

    this.$refs.divide.style.background = this.color

    if (this.rounded) {
      this.$refs.divide.style.borderRadius = "50%"
    }
  },
}
</script>
