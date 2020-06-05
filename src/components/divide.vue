<template>
  <div class="divide" ref="divide"></div>
</template>

<script>
export default {
  props: {
    width: Number,
    height: Number,
    margin: Number,
    rounded: Boolean,
    vertical: Boolean,
    color: String,
  },
  mounted() {
    if (this.vertical) {
      this.$refs.divide.style.height = `${this.height}px`;
      if (!this.width) {
        this.$refs.divide.style.width = "2px";
      }
      this.$refs.divide.style.width = `${this.width}px`;

      this.$refs.divide.style.marginLeft = `${this.margin ? this.margin : 8}px`;
      this.$refs.divide.style.marginRight = `${
        this.margin ? this.margin : 8
      }px`;
    } else {
      this.$refs.divide.style.width = `${this.width}px`;
      if (!this.height) {
        this.$refs.divide.style.height = "2px";
      }
      this.$refs.divide.style.height = `${this.height}px`;

      this.$refs.divide.style.marginTop = `${this.margin ? this.margin : 8}px`;
      this.$refs.divide.style.marginBottom = `${
        this.margin ? this.margin : 8
      }px`;
    }

    this.$refs.divide.style.background = this.color;

    if (this.rounded) {
      this.$refs.divide.style.borderRadius = "50%";
    }
  },
};
</script>

<style scoped>
.divide {
  background: #000;
}
</style>
