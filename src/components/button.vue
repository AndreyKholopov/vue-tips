<template>
   <div ref="wrapper" class="wrapper__button">
      <button class="button">{{ text }}</button>
   </div>
</template>

<script>
export default {
   props: {
      text: String,
      width: Number,
      height: Number
   },
   mounted() {
      this.$refs.wrapper.style.width = `${this.width}px`
      this.$refs.wrapper.style.height = `${this.height}px`
   }
};
</script>

<style scoped>
.button {
   width: 100%;
   height: 100%;

   padding: 22px 28px 18px 28px;
   margin: 0;

   border-bottom: 8px solid #06669e;
   border-radius: 8px;
   outline: none;

   font-size: 16px;
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
</style>
