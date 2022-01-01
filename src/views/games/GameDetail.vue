<template>
<div class="pt-28">
  <div v-for="game in filteredGame(slug)" :key="game.id">
    <carousel :paginationPosition="'bottom-overlay'" :paginationActiveColor="'#FF0099'" :paginationColor="'#4CB7EB'" :per-page="1" :autoplay="true" :autoplayTimeout="4000" :loop="true" :mouse-drag="false">
      <slide v-for="slide in game.sliders" :key="slide.id">
        <div class="bg-center bg-cover h-80 md:h-108" :style="{ backgroundImage: 'url(' + slide.slide + ')' }"></div>
      </slide>
    </carousel>
    <div class="container relative px-4 py-10 mx-auto text-black md:px-0">
      <div class="grid grid-cols-6 gap-4 auto-cols-max">
        <div class="relative">
          <router-link :to="`/${$i18n.locale}/games/`" class="absolute top-0 right-0 w-16 mb-8 md:mr-6">
            <svg class="w-10 h-10 ml-4 md:w-16 md:h-16 md:ml-0 fill-cur-blue" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 15a85 85 0 1 0 85 85 84.93 84.93 0 0 0-85-85Zm0 150a65 65 0 1 1 65-65 64.87 64.87 0 0 1-65 65Zm16.5-107.5a9.67 9.67 0 0 0-14 0L74 86a19.92 19.92 0 0 0 0 28.5l28.5 28.5a9.9 9.9 0 0 0 14-14l-28-29L117 71.5c3.5-3.5 3.5-10-.5-14Z"/>
            </svg>
          </router-link>
        </div>
        <div class="col-span-5 mb-8 text-2xl font-semibold md:text-6xl"><p v-html="game.title"></p></div>
        <div class="col-span-6 md:col-span-3 md:col-start-2 md:font-thin">
          <h2 class="mb-8 text-xl font-semibold md:text-3xl">About game</h2>
          <div class="text-black about" v-html="game.about"></div>
        </div>
        <div class="col-span-6 md:col-span-2 md:text-right">
          <h2 class="mb-8 text-xl font-semibold md:text-3xl">Specifications</h2>
          <div class="grid grid-cols-2 gap-4 md:font-thin">
            <div v-if="game.date" class="text-gray-800">Release Date</div><div class="text-gray-500">{{game.date}}</div>
            <div v-if="game.type" class="text-gray-800">Game type</div><div class="text-gray-500">{{game.type}}</div>
            <div v-if="game.mobile" class="text-gray-800">Mobile</div><div class="text-gray-500">{{game.mobile}}</div>
            <div v-if="game.rng" class="text-gray-800">RNG Certified</div><div class="text-gray-500">{{game.rng}}</div>
            <div v-if="game.resolution" class="text-gray-800">Game resolution</div><div class="text-gray-500">{{game.resolution}}</div>
            <div v-if="game.duration" class="text-gray-800">Race Duration</div><div class="text-gray-500">{{game.duration}}</div>

            <!-- <div v-if="game.rtp" class="text-gray-800">RTP</div><div class="text-gray-500">{{game.rtp}}</div>
            <div v-if="game.paylines" class="text-gray-800">Paylines</div><div class="text-gray-500">{{game.paylines}}</div>
            <div v-if="game.volatility" class="text-gray-800">Volatility</div><div class="text-gray-500">{{game.volatility}}</div>
            <div v-if="game.exposure" class="text-gray-800">Maximum exposure</div><div class="text-gray-500">{{game.exposure}}</div> -->
          </div>
        </div>
        <div class="col-span-6 mt-24 md:col-start-2" v-if="game.video">
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
</template>

<script>
  import json from '../../assets/data/games.json'
  import { Carousel, Slide } from 'vue-carousel';
  export default {
    props: ['slug' ],
    components: {
      Carousel,
      Slide
    },
    data() {
      return {
        games: json.games,
        plyroptions: {
          controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
        },
      }
    },
    methods: {
      filteredGame(slug) {
        return this.games.filter(game => game.slug === slug)
      }
    },
    mounted() {
      window.scrollTo(0, 0)
      this.$nextTick().then(() => document.body.classList.add('gamepage'))
    },
    metaInfo: {
      title: `Game Detail`,
      titleTemplate: 'Curious Games - %s',
    }
  }
</script>
<style lang="scss">
  @import url('../../../node_modules/vue-plyr/dist/vue-plyr.css');
  .about p {
    @apply mb-4;
  }
  .VueCarousel-pagination--bottom-overlay{
    bottom: 1rem !important;
  }
  .VueCarousel-dot {
    width: 30px !important;
    height: 5px !important;
    border-radius: 0 !important;
  }
  #color1 {
  stop-color: red
}
#color2 {
  stop-color: blue
}
</style>
