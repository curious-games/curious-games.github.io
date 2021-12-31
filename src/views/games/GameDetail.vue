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
        <router-link :to="`/${$i18n.locale}/games/`" class="mb-8 text-2xl font-semibold md:text-6xl md:text-right md:mr-6">
          <span class="border-b-8 border-gradient-r-curious">＜</span>
        </router-link>
        <div class="col-span-5 mb-8 text-2xl font-semibold md:text-6xl"><p v-html="game.title"></p></div>
        <div class="col-span-6 md:col-span-3 md:col-start-2 md:font-thin">
          <h2 class="mb-8 text-xl font-semibold md:text-3xl">About game</h2>
          <div class="about" v-html="game.about"></div>
        </div>
        <div class="col-span-6 md:col-span-2 md:text-right">
          <h2 class="mb-8 text-xl font-semibold md:text-3xl">Specifications</h2>
          <div class="grid grid-cols-2 gap-4 md:font-thin">
            <div class="text-gray-600">Release Date</div><div class="">{{game.date}}</div>
            <div class="text-gray-600">Game type</div><div class="">{{game.type}}</div>
            <div class="text-gray-600">Mobile</div><div class="">{{game.mobile}}</div>
            <div class="text-gray-600">RTP</div><div class="">{{game.rtp}}</div>
            <div class="text-gray-600">Game resolution</div><div class="">{{game.resolution}}</div>
            <div class="text-gray-600">Paylines</div><div class="">{{game.paylines}}</div>
            <div class="text-gray-600">Volatility</div><div class="">{{game.volatility}}</div>
            <div class="text-gray-600">Maximum exposure</div><div class="">{{game.exposure}}</div>
          </div>
        </div>
        <div class="col-span-6 md:col-start-2 mt-24">
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
    props: ['slug'],
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
    },
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
</style>
