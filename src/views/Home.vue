<template>
<div class="relative">
  <section class="h-screen bg-black">
    <div class="relative w-full h-screen mt-4">
      <video autoplay muted loop playsinline preload="auto" class="absolute z-0 object-cover w-full h-full md:object-cover">
        <source src="/mov/CockroachRacers.mp4" type="video/mp4" />
        <source src="/mov/CockroachRacers.webm" type="video/webm" />
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

  <section class="bg-black h-half md:h-screen" v-for="section in sections" :key="section.id">
    <div class="relative w-full h-half md:h-screen">
      <img class="absolute z-0 object-cover w-full h-full" :src="section.img" :alt="section.text">
      <div class="relative z-10 w-screen p-10 md:p-0">
        <div class="container flex items-center justify-center mx-auto h-half md:h-screen md:px-40" 
            :class="[`md:` + section.ver , `md:` + section.hor , `md:` + section.padding]">
          <div class="max-w-md pt-4 border-t-2 border-gradient-r-curious">
            <p class="p-2 text-xl bg-black bg-opacity-50 rounded-md">{{section.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
</template>

<script>
  import ScrollDownIcon from "../components/ScrollDownIcon.vue";
  import json from '../assets/data/sections.json'
  export default {
    components: {
      ScrollDownIcon
    },
    data() {
      return {
        sections: json.sections,
      }
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
