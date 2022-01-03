<template>
  <div class="w-screen mx-auto">
    <section class="w-screen">
      <div class="max-w-full p-16 font-bold text-white">
        <div class="container grid mx-auto md:px-40 mt-landing mb-mega floater place-content-center">
          <div class="max-w-md">
            <p class="p-2 font-thin text-8xl md:text-9xl">
              <span class="block md:mr-20">curious</span> <span class="block ml-0 md:ml-20">games</span>
              </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {

    mounted() {
      this.$nextTick().then(() => document.body.classList.remove('gamepage'))

    },
    metaInfo: {
      title: `Home`,
      titleTemplate: 'Curious Games - %s',
    }
  };
</script>

<style scoped lang="scss">

</style>
