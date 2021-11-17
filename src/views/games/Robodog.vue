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

<style>
  .gameslink {
    @apply text-transparent bg-clip-text bg-gradient-to-r from-cur-pink to-cur-blue;
  }

  /* extra */
  .vjs-default-skin .vjs-volume-control { display: none; }
  

  .vjs-custom-skin > .video-js {
    width: 100%;
  }

  .vjs-custom-skin > .video-js .vjs-menu-button-inline.vjs-slider-active,.vjs-custom-skin > .video-js .vjs-menu-button-inline:focus,.vjs-custom-skin > .video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline {
    width: 10em
  }

  .vjs-custom-skin > .video-js .vjs-controls-disabled .vjs-big-play-button {
    display: none!important
  }

  .vjs-custom-skin > .video-js .vjs-control {
    width: 3em
  }

  .vjs-custom-skin > .video-js .vjs-control.vjs-live-control{
    width: auto;
    padding-left: .5em;
    letter-spacing: .1em;
  }

  .vjs-custom-skin > .video-js .vjs-menu-button-inline:before {
    width: 1.5em
  }

  .vjs-menu-button-inline .vjs-menu {
    left: 3em
  }

  .vjs-paused.vjs-has-started.vjs-custom-skin > .video-js .vjs-big-play-button,.video-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button {
    display: block
  }

  .vjs-custom-skin > .video-js .vjs-load-progress div,.vjs-seeking .vjs-big-play-button,.vjs-waiting .vjs-big-play-button {
    display: none!important
  }

  .vjs-custom-skin > .video-js .vjs-mouse-display:after,.vjs-custom-skin > .video-js .vjs-play-progress:after {
    padding: 0 .4em .3em
  }

  .video-js.vjs-ended .vjs-loading-spinner {
    display: none;
  }

  .video-js.vjs-ended .vjs-big-play-button {
    display: block !important;
  }

  .video-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button,.vjs-paused.vjs-has-started.vjs-custom-skin > .video-js .vjs-big-play-button {
    display: block
  }

  .vjs-custom-skin > .video-js .vjs-big-play-button {
    top: 50%;
    left: 50%;
    margin-left: -1.5em;
    margin-top: -1em
  }

  .vjs-custom-skin > .video-js .vjs-big-play-button {
    background-color: rgba(0,0,0,0.45);
    font-size: 3.5em;
    /*border-radius: 50%;*/
    height: 2em !important;
    line-height: 2em !important;
    margin-top: -1em !important
  }

  .video-js:hover .vjs-big-play-button,.vjs-custom-skin > .video-js .vjs-big-play-button:focus,.vjs-custom-skin > .video-js .vjs-big-play-button:active {
    /* background-color: rgba(36,131,213,0.9) */
    @apply bg-cur-pink;
  }

  .vjs-custom-skin > .video-js .vjs-loading-spinner {
    /* border-color: rgba(36,131,213,0.8) */
    @apply bg-cur-blue;
  }

  .vjs-custom-skin > .video-js .vjs-control-bar2 {
    background-color: #000000
  }

  .vjs-custom-skin > .video-js .vjs-control-bar {
    /*background-color: rgba(0,0,0,0.3) !important;*/
    color: #ffffff;
    font-size: 14px
  }

  .vjs-custom-skin > .video-js .vjs-play-progress,.vjs-custom-skin > .video-js  .vjs-volume-level {
    /* background-color: #2483d5 */
    @apply bg-cur-pink;
  }

  .vjs-custom-skin > .video-js .vjs-play-progress:before {
    top: -0.3em;
  }

  .vjs-custom-skin > .video-js .vjs-progress-control:hover .vjs-progress-holder {
    font-size: 1.3em;
  }

  .vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu {
    left: 0em;
  }

  .vjs-custom-skin > .video-js .vjs-menu li {
    padding: 0;
    line-height: 2em;
    font-size: 1.1em;
  }

  .vjs-custom-skin > .video-js .vjs-time-tooltip,
  .vjs-custom-skin > .video-js .vjs-mouse-display:after, 
  .vjs-custom-skin > .video-js .vjs-play-progress:after {
    border-radius: 0;
    font-size: 1em;
    padding: 0;
    width: 3em;
    height: 1.5em;
    line-height: 1.5em;
    top: -3em;
  }

  .vjs-custom-skin > .video-js .vjs-menu-button-popup .vjs-menu {
    width: 5em;
    left: -1em;
  }

  .vjs-custom-skin > .video-js .vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu {
    left: 0;
  }

  .vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button .vjs-menu {
    /*order: 4;*/
  }

  /*排序顺序*/
  .vjs-custom-skin > .video-js .vjs-control-bar .vjs-play-control {
    order: 0;
  }

  .vjs-custom-skin > .video-js .vjs-control-bar .vjs-time-control {
    min-width: 1em;
    padding: 0;
    margin: 0 .1em;
    text-align: center;
    display: block;
    order: 1;
  }

  .vjs-custom-skin > .video-js .vjs-control-bar .vjs-playback-rate .vjs-playback-rate-value{
    font-size: 1.2em;
    line-height: 2.4;
  }

  .vjs-custom-skin > .video-js .vjs-progress-control.vjs-control {
    order: 2;
  }

  .vjs-custom-skin > .video-js .vjs-control-bar .vjs-volume-menu-button {
    order: 3;
  }

  .vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button {
    order: 4;
  }

  .vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button .vjs-resolution-button-label {
    display: block;
    line-height: 3em;
  }

  .vjs-custom-skin > .video-js .vjs-control-bar .vjs-playback-rate {
    order: 5;
  }

  .vjs-custom-skin > .video-js .vjs-control-bar .vjs-fullscreen-control {
    order: 6;
  }
</style>