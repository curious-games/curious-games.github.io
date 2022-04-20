<template>
<div class="relative">
  <section class="h-screen bg-black">
    <div class="relative w-full h-screen mt-4">
      <video autoplay muted loop playsinline preload="auto" class="absolute z-0 w-full h-full overflow-x-hidden md:object-cover" >
        <source src="/mov/CG_Teaser_720p.mp4" type="video/mp4" />
        <source src="/mov/CG_Teaser_720p.webm" type="video/webm" />
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

  <section class="overflow-hidden bg-black h-half md:min-h-screen" v-for="section in homesections" :key="section.id">
    <div class="relative w-full h-half md:h-screen">
      <carousel :autoplay="2000" :wrap-around="true" class="absolute w-full h-half md:h-screen">
        <slide v-for="img in section.images" :key="img.id" 
        class="z-0 w-full h-full"
        :settings="slidersettings">
          <img class="object-cover w-full h-full opacity-60" :src="img.path" alt="">
        </slide>
        <template #addons="{ slidesCount }">
          <Pagination v-if="slidesCount > 1" />
        </template>
      </carousel>
      <div class="absolute inset-0 z-10 w-screen p-10 md:p-0 ">
        <div 
          class="container flex items-center justify-center mx-auto lg:px-40 h-half md:h-screen" 
          :class="[ 'md:' + section.ver ,'md:' + section.hor , section.padding ]"
          >
          <div class="max-w-md bg-black rounded-md bg-opacity-30">
            <h2 v-if="section.header" 
            class="p-2 text-2xl text-transparent md:px-6 md:py-4 md:text-4xl bg-clip-text bg-gradient-to-r from-cur-pink to-cur-blue"
            v-html="section.header"
            >
            </h2>
            <div class="pt-4 border-t-2 border-gradient-r-curious">
              <p class="p-2 text-xl md:px-6 md:py-4 md:text-3xl">{{section.text}}
              <span v-if="section.buttontext" class="block mt-3">
                <router-link class="inline-block px-4 py-2 mt-2 text-lg text-black rounded-lg bg-cur-blue hover:bg-cur-pink hover:text-white" :to="section.buttonlink">
                  {{section.buttontext}}
                </router-link>
              </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
  import ScrollDownIcon from "../components/ScrollDownIcon.vue";
  import {mapState} from 'vuex'
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination } from 'vue3-carousel';
  export default {
    components: {
      ScrollDownIcon,
      Carousel,
      Slide,
      Pagination
    },
    data() {
      return {
        slidersettings: {
          pauseAutoplayOnHover: false
        }
      }
    },
    mounted() {
      this.$store.dispatch('loadHomeSections'),
      this.$nextTick().then(() => document.body.classList.remove('gamepage'))
    },
    computed: {
      ...mapState([
        'homesections'
      ])
    }
  };
</script>

<style lang="scss">
  .carousel {
    position: relative
  }
  .carousel__pagination {
    width: 100%;
    position: absolute;
    bottom: 7.5rem;
  }
  .carousel__pagination-button {
    background-color: #4CB7EB !important;
    width: 30px !important;
    height: 5px !important;
    border-radius: 0 !important;
  }
  .carousel__pagination-button--active {
    background-color: #FF0099 !important;
  }
  
</style>