<template>
<div class="w-full h-full" style="background-color: #ee4a0d;">
  <div id="game" style="width: 100%;height: 100%;text-align: center; display: inline-block; "></div></div>
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
