<template>
  <section class="page">
    <Button :text="'button'" :width="'500'" :height="'100'" />
  </section>
</template>

<script>
import Button from '@/components/button.vue'

export default {
  name: 'app',
  components: {
    Button
  }
  
}
</script>

<style>
  body {
    margin: 0;
  }

  .page {
    margin: 15px;
  }
</style>
