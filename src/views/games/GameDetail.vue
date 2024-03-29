<template>
<div class="pt-20 md:pt-26">
  <div v-for="game in filteredGame(slug)" :key="game.id">
    <carousel :autoplay="3000">
      <slide v-for="slide in game.sliders" :key="slide.id" 
      class="bg-center bg-cover h-80 md:h-108" 
      :style="{ backgroundImage: 'url(' + slide.slide + ')' }"
      :settings="slidersettings"
      >
      </slide>
      <template #addons="{ slidesCount }">
        <Pagination v-if="slidesCount > 1" />
      </template>
    </carousel>
    <div class="container relative py-10 mx-auto text-black md:px-0">
      <div class="grid grid-cols-6 gap-4 mx-4 md:mx-0 auto-cols-max">
        <div class="relative mb-10 md:mb-0">
          <router-link :to="`/en/games/`" class="absolute top-0 right-0 w-16 pl-2 mb-8 md:mr-6">
            <svg class="w-10 h-10 ml-2 md:w-16 md:h-16 md:ml-0 fill-cur-blue" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 15a85 85 0 1 0 85 85 84.93 84.93 0 0 0-85-85Zm0 150a65 65 0 1 1 65-65 64.87 64.87 0 0 1-65 65Zm16.5-107.5a9.67 9.67 0 0 0-14 0L74 86a19.92 19.92 0 0 0 0 28.5l28.5 28.5a9.9 9.9 0 0 0 14-14l-28-29L117 71.5c3.5-3.5 3.5-10-.5-14Z"/>
            </svg>
          </router-link>
        </div>
        <div class="grid col-span-6 md:col-span-5 md:pl-6">
          <div class="col-span-5 mb-8 text-2xl font-semibold md:text-6xl">
            <h1 v-html="game.title"></h1>
          </div>
          <div class="col-span-5 col-start-1 pr-4 md:px-4 md:col-span-3 md:font-thin md:pl-0" v-if="game.about">
            <h2 class="mb-8 text-xl font-semibold md:text-3xl">About game</h2>
            <div class="text-black about" v-html="game.about"></div>
          </div>
          <div class="col-span-6 md:col-span-2 md:text-right" v-if="game.about">
            <h2 class="mb-8 text-xl font-semibold md:text-3xl md:px-0">Specifications</h2>
            <div class="grid grid-cols-2 gap-4 p-6 bg-gray-100 rounded-lg bg-opacity-70 md:font-thin">
              <div v-if="game.date" class="text-gray-800">Release Date</div><div class="text-gray-500">{{game.date}}</div>
              <div v-if="game.type" class="text-gray-800">Game type</div><div class="text-gray-500">{{game.type}}</div>
              <div v-if="game.mobile" class="text-gray-800">Mobile</div><div class="text-gray-500">{{game.mobile}}</div>
              <div v-if="game.rng" class="text-gray-800">RNG Certified</div><div class="text-gray-500">{{game.rng}}</div>
              <div v-if="game.resolution" class="text-gray-800">Game resolution</div><div class="text-gray-500">{{game.resolution}}</div>
              <div v-if="game.duration" class="text-gray-800">Race Duration</div><div class="text-gray-500">{{game.duration}}</div>
            </div>
          </div>
          <div class="col-span-6 px-4 mt-6 md:px-0 md:mt-24 md:col-start-1" v-if="game.video">
            <vue-plyr :options="plyroptions">
              <video
                playsinline
                :data-poster="game.poster"
              >
                <source
                  :src="game.video"
                  type="video/mp4"
                />
              </video>
            </vue-plyr>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import { useMeta } from 'vue-meta'
  import {mapState} from 'vuex'
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination } from 'vue3-carousel';
  export default {
    props: ['slug'],
    components: {
      Carousel,
      Slide,
      Pagination
    },
    data() {
      return {
        plyroptions: {
          controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
        },
        slidersettings: {
          pauseAutoplayOnHover: false
        }
      }
    },
    methods: {
      filteredGame(slug) {
        return this.games.filter(game => game.slug === slug)
      },
    },
    mounted() {
      this.$store.dispatch('loadGames'),
      window.scrollTo(0, 0)
      this.$nextTick().then(() => document.body.classList.add('gamepage'))
    },
    computed: {
      ...mapState([
        'games'
      ])
    },
    setup () {
      useMeta({
        title: 'Curious Games - Game Detail'
      })
    }
  }
</script>

<style lang="scss">
  @import url('../../../node_modules/vue-plyr/dist/vue-plyr.css');
  .about p {
    @apply mb-4;
  }
  .carousel {
    position: relative
  }
  .carousel__pagination {
    width: 100%;
    position: absolute;
    bottom: 1.5rem;
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
