<template>
  <section class="h-screen bg-black">
    <div class="relative w-full h-screen">
      <video autoplay muted loop class="absolute z-0 object-cover w-full h-full">
          <source src="/mov/CockroachRacers.mp4" type="video/mp4" />
      </video>
      <div class="relative z-10 w-screen">
        <div class="flex items-center justify-center h-screen">
          <p class="p-2 font-thin text-8xl md:text-9xl">
            <span class="block md:mr-20">curious</span> <span class="block ml-0 md:ml-20">games</span>
            <ScrollDownIcon />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import ScrollDownIcon from "../components/ScrollDownIcon.vue";
  /* eslint-disable */
  export default {

    components: {
      ScrollDownIcon
    },
    mounted() {
      this.$nextTick().then(() => document.body.classList.remove('gamepage'))

    },
    metaInfo: {
      title: `Home`,
      titleTemplate: 'Curious Games - %s',
    }
  };
</script>
