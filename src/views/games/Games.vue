<template>
  <div class="mt-16 md:mt-29">
    <div class="relative h-80 md:h-108" v-for="game in games" :key="game.id">
      <div class="absolute inset-0 z-0 bg-center bg-cover" v-bind:style="{ backgroundImage: 'url(' + game.image + ')' }"></div>
      <router-link :to="`/en/games/` + game.slug + `/`" class="absolute inset-0 z-10 flex items-center justify-center text-4xl font-semibold text-white duration-300 md:text-6xl md:opacity-0 md:bg-black/50 hover:opacity-100 ">
      <div class="md:w-2/5">
        <p v-html="game.title"></p>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { useMeta } from 'vue-meta'
  import {mapState} from 'vuex'
  export default {
    mounted() {
      this.$store.dispatch('loadGames'),
      window.scrollTo(0, 0)
    },
    computed: {
      ...mapState([
        'games'
      ])
    },
    setup () {
      useMeta({
        title: 'Curious Games - Games'
      })
    }
  }
</script>
