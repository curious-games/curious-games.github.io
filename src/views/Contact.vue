<template>
  <div class="container px-8 pt-40 pb-12 mx-auto text-black lg:px-60 mb:pb-0">
    <h2 class="inline-block text-6xl border-b-8 border-gradient-r-curious">Contact Us</h2>
    <p class="mt-16 text-lg md:font-thin">Curious about our games? Get in <a href="mailto:curious@curiousgames.io" class="font-semibold text-transparent border-b-2 border-gradient-r-curious bg-clip-text bg-gradient-to-r from-cur-pink to-cur-blue hover:text-cur-pink">contact</a> with our team and send us a message.</p>
  </div>
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
      title: 'Curious Games - Contact'
    })
  }
}
</script>