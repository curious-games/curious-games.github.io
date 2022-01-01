<template>
  <div>
    <div class="container px-8 pt-40 mx-auto text-black lg:px-60">
      <h2 class="inline-block text-6xl border-b-8 border-gradient-r-curious">Partners</h2>
      <p class="mt-5 text-lg md:font-thin">At Curious Games we understand the important of seamless game integration that is why we provide all our partners tailored customer support services and powerful automated development environments for testing at each stage of integration, including full API documentation.</p>
      <p class="mt-5 text-lg md:font-thin">To learn more about integration to our Curious Games Remote Gaming Server (RGS), please contact us.</p>
      <div class="grid grid-cols-3 gap-12 my-5">
        <div class="col-span-3 md:col-span-1">
          <p class="text-center"><img src="/gfx/star.png" class="inline-block h-20 md:h-10" /></p>
          <div class="mt-5 text-lg md:font-thin">The integrations portal contains everything required to integrate and operate full suite of games and bonusing tools</div>
        </div>
        <div class="col-span-3 md:col-span-1">
          <p class="text-center"><img src="/gfx/circle.png" class="inline-block h-20 md:h-10" /></p>
          <div class="mt-5 text-lg md:font-thin">Development environments and the testing processes at each stage of integration are automatically generated within the portal</div>
        </div>
        <div class="col-span-3 md:col-span-1">
          <p class="text-center"><img src="/gfx/document.png" class="inline-block h-20 md:h-10" /></p>
          <div class="mt-5 text-lg md:font-thin">All knowledge developers need to complete the integration is available inside the application, including full API documentation</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
    this.$nextTick().then(() => document.body.classList.remove('gamepage'))
  },
    metaInfo: {
      title: `Partners`,
      titleTemplate: 'Curious Games - %s',
    }
}
</script>
