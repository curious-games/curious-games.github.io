<template>

</template>

<script>
import { useMeta } from 'vue-meta'
export default {
  
  mounted () {
    window.scrollTo(0, 0)
    this.$nextTick().then(() => document.body.classList.remove('gamepage'))
    
  },
  setup () {
    useMeta({
      title: 'Pixi Demo',
      script: [
        { src: '/js/bundle.js', async: true, defer: true }
      ],
    })
  }
}
</script>
