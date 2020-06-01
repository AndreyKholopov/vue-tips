<template>
   <button @click.self="click" :disabled="disabled" ref="button" class="button" v-bind:class="{ loading: loading }">
      {{ text }}
      <div v-if="loading" class="loader-wrapper">
         <myLoading />
      </div>
   </button>
</template>

<script>
import myLoading from "@/components/loading.vue";

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
   },
   mounted() {
      this.$refs.button.style.fontSize = `${this.fontSize}px`;
      this.$refs.button.style.maxWidth = `${this.width}px`;
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
   margin: 5px 0 0 0;

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

.button[disabled]:active {
   margin: 0;

   background: rgb(13, 199, 240);
   background: linear-gradient(
      180deg,
      rgba(2, 53, 116, 1) 0%,
      rgba(13, 199, 240, 1) 140%
   );
   border-bottom: 8px solid #06669e;
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

   border-bottom: 8px solid #06669e;
   border-radius: 8px;
   outline: none;

   background: rgb(13, 199, 240);
   background: linear-gradient(
      180deg,
      rgba(2, 53, 116, 1) 0%,
      rgba(13, 199, 240, 1) 140%
   );
}

.button.loading {
   cursor: auto;
}

.button.loading:hover,
.button.loading:focus {
   background: rgb(13, 199, 240);
   background: linear-gradient(
      180deg,
      rgba(2, 53, 116, 1) 0%,
      rgba(13, 199, 240, 1) 140%
   );
   border-color: #06669e;
}

.button.loading:active {
   margin: 0;

   background: rgb(13, 199, 240);
   background: linear-gradient(
      180deg,
      rgba(2, 53, 116, 1) 0%,
      rgba(13, 199, 240, 1) 140%
   );
   border-bottom: 8px solid #06669e;
}
</style>
