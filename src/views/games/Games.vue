<template>
  <div class=" mt-29">
    <div class="relative h-80 md:h-108" v-for="game in games" :key="game.id">
      <div class="absolute inset-0 z-0 bg-center bg-cover" v-bind:style="{ backgroundImage: 'url(' + game.image + ')' }"></div>
      <router-link :to="`/${$i18n.locale}/games/` + game.slug + `/`" class="absolute inset-0 z-10 flex items-center justify-center text-4xl font-semibold text-white duration-300 md:text-6xl md:opacity-0 md:bg-black/50 hover:opacity-100 ">
      <div class="md:w-2/5">
        <p v-html="game.title"></p>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import json from '../../assets/data/games.json'
  export default {
    data() {
      return {
        games: json.games,
      }
    },
    mounted() {
      window.scrollTo(0, 0)
    },
    metaInfo: {
      title: `Games`,
      titleTemplate: 'Curious Games - %s',
    }
  }
</script>
