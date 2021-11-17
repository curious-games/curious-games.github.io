<template>
  <div class="pt-28">
    <div class="relative h-80 md:h-108">
      <div class="absolute inset-0 z-0 bg-center bg-cover" style="background-image: url('/img/games/Robodog.png')"></div>
    </div>
    <div class="container relative px-4 py-10 mx-auto text-black md:px-0">
      <div class="grid grid-cols-6 gap-4 auto-cols-max">
        <router-link :to="`/${$i18n.locale}/games/`" class="mb-8 text-2xl font-semibold md:text-6xl md:text-right md:mr-6">
          <span class="border-b-8 border-gradient-r-curious">＜</span>
        </router-link>
        <div class="col-span-5 mb-8 text-2xl font-semibold md:text-6xl"><p><span class="border-b-8 border-gradient-r-curious">Machina Races</span> - K9 Edition</p></div>
        <div class="col-span-6 md:col-span-3 md:col-start-2">
          <h2 class="mb-8 text-xl font-semibold md:text-3xl">About game</h2>
          <p class="mb-4">Prepare yourself for the worlds first photorealistic rendered cock roach race contest. Pick your roach and watch them compete to finish line glory (well for the roaches, that make it of course!).</p>
          <p class="mb-4">The virtual race is live rendered with digital 3D action and RNG based. </p>
          <p class="mb-4">Our contests support all the established markets (including Win, Forecast, Reverse Forecast, Tricast and Reverse Tricast).</p>
          <p class="mb-4">Our virtual contests are high frequency, with a new race every 2 to 3 minutes, a 24/7 dedicated channel and seamless odds integration. The game logic behind each virtual race is fully adaptable to regulatory frameworks.</p>
        </div>
        <div class="col-span-6 md:col-span-2 md:text-right">
          <h2 class="mb-8 text-xl font-semibold md:text-3xl">Specifications</h2>
          <div class="grid grid-cols-2 gap-4 ">
            <div class="text-gray-600">Release Date</div><div class="">09.02.2022</div>
            <div class="text-gray-600">Game type</div><div class="">Video slot</div>
            <div class="text-gray-600">Mobile</div><div class="">Yes</div>
            <div class="text-gray-600">RTP</div><div class="">96.20%</div>
            <div class="text-gray-600">Game resolution</div><div class="">16:9</div>
            <div class="text-gray-600">Paylines</div><div class="">Fixed 20</div>
            <div class="text-gray-600">Volatility</div><div class="">High</div>
            <div class="text-gray-600">Maximum exposure</div><div class="">666,600</div>
          </div>
        </div>
        <div class="mt-24 cols-span-6 md:col-span-5 md:col-start-2">
          <video-player  class="vjs-custom-skin"
            ref="videoPlayer"
            :options="playerOptions"
            :playsinline="true"
            :volume="0"
            :volumeControl="false"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
            @ended="onPlayerEnded($event)"
            @loadeddata="onPlayerLoadeddata($event)"
            @waiting="onPlayerWaiting($event)"
            @playing="onPlayerPlaying($event)"
            @timeupdate="onPlayerTimeupdate($event)"
            @canplay="onPlayerCanplay($event)"
            @canplaythrough="onPlayerCanplaythrough($event)"
            @ready="playerReadied"
            @statechanged="playerStateChanged($event)">
          </video-player>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  require('@/assets/css/detail.css')
  export default {
    data() {
      return {
        playerOptions: {
          // videojs options
          muted: false,
          language: 'en',
          height: '600',
          volumeControl: false,
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "/mov/CockroachRacers.mp4"
          }],
          poster: "/mov/CockroachRacers.jpg",
        }
      }
    },
    mounted () {
      window.scrollTo(0, 0)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    }
  }
</script>
