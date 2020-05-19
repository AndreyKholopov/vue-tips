<template>
   <button @click="click" :disabled="disabled" ref="button" class="button">
      {{ text }}
   </button>
</template>

<script>
export default {
   props: {
      text: String,
      fontSize: Number,
      width: Number,
      height: Number,
      disabled: Boolean,
      click: Function,
   },
   mounted() {
      this.$refs.button.style.fontSize = `${this.fontSize}px`;
      this.$refs.button.style.width = `${this.width}px`;
      this.$refs.button.style.height = `${this.height}px`;
   },
};
</script>

<style scoped>
.button {
   padding: 22px 28px 18px 28px;
   margin: 0;

   border-bottom: 8px solid #06669e;
   border-radius: 8px;
   outline: none;

   text-transform: uppercase;

   background: rgb(13, 199, 240);
   background: linear-gradient(
      180deg,
      rgba(2, 53, 116, 1) 0%,
      rgba(13, 199, 240, 1) 140%
   );
   color: #ffffff;

   cursor: pointer;
}

/* Focused, hovered */

.button:hover,
.button:focus {
   background: rgb(254, 133, 110);
   background: linear-gradient(
      0deg,
      rgba(254, 133, 110, 1) 0%,
      rgba(167, 29, 115, 1) 100%
   );
   border-color: #d45270;
}

/* Active */

.button:active {
   margin: 5px 0 -5px 0;

   background: rgb(254, 133, 110);
   background: linear-gradient(
      0deg,
      rgba(254, 133, 110, 1) 0%,
      rgba(167, 29, 115, 1) 100%
   );
   border-bottom: 3px solid #d45270;
}

/* Disabled */

.button[disabled] {
   opacity: 0.75;
   cursor: auto;
}

.button[disabled]:hover,
.button[disabled]:focus {
   background: rgb(13, 199, 240);
   background: linear-gradient(
      180deg,
      rgba(2, 53, 116, 1) 0%,
      rgba(13, 199, 240, 1) 140%
   );
   border-color: #06669e;
}
</style>
