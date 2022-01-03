<template>
  <section class="flex items-center justify-center bg-black">
      <p class="p-2 font-thin text-8xl md:text-9xl">
        <span class="block md:mr-20">curious</span> <span class="block ml-0 md:ml-20">games</span>
      </p>
  </section>
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
  section {
  @apply h-screen -mb-52 pt-52;
  }
</style>
