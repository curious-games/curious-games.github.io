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
            <span class="block md:mr-20">&nbsp;</span> <span class="block ml-0 md:ml-20">&nbsp;</span>
            <ScrollDownIcon />
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-black h-half md:h-screen" v-for="section in sections" :key="section.id">
    <div class="relative w-full h-half md:h-screen">
      <img class="absolute z-0 object-cover w-full h-full opacity-40" :src="section.img" alt="">
      <div class="relative z-10 w-screen p-10 md:p-0 ">
        <div 
          class="container flex items-center justify-center mx-auto lg:px-40 h-half md:h-screen" 
          :class="[ 'md:' + section.ver ,'md:' + section.hor , section.padding ]"
          >
          <div class="max-w-md bg-black rounded-md bg-opacity-30">
            <h2 v-if="section.header" 
            class="p-2 text-2xl text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-cur-pink to-cur-blue">
            {{section.header}}
            </h2>
            <div class="pt-4 border-t-2 border-gradient-r-curious">
              <p class="p-2 text-xl md:text-3xl">{{section.text}}
              <span v-if="section.buttontext" class="block mt-3">
                <router-link class="inline-block px-4 py-2 mt-2 text-lg text-black rounded-lg bg-cur-blue hover:bg-cur-pink hover:text-white" :to="section.buttonlink">
                  {{section.buttontext}}
                </router-link>
              </span>
              </p>
            </div>
            <div class="md:items-start md:items-center md:items-end md:justify-start md:justify-center md:justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>
</template>

<script>
  import ScrollDownIcon from "../components/ScrollDownIcon.vue";
  import json from '../assets/data/home.json'
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
    }
  };
</script>
