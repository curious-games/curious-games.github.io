<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ content }}
    </template>
  </metainfo>
  <div class="flex flex-col min-h-screen font-sans text-white">
    <div class="fixed z-30 h-29">
      <div class="fixed z-50 w-screen h-20 bg-black border-b border-gray-600 md:h-29"></div>
      <header class="fixed z-50 w-full">
        <nav class="container relative px-8 pt-8 pb-5 mx-auto lg:flex lg:items-center lg:justify-between md:flex-wrap">
          <div class="flex items-center justify-between lg:flex-none">
            <div class="h-20 -mt-2 lg:mt-3 lg:h-32">
              <router-link :to="`/en/`">
                <img
                  src="/gfx/CG_Logo_Black.png"
                  alt="logo"
                  class="w-20 lg:w-32"
                />
              </router-link>
            </div>
            <div class="flex -mt-6 place-content-end lg:hidden">
              <button
                @click="toggleMenu"
                class="right-0 px-3 py-2 border border-gray-500 rounded hover:text-gray-400 hover:border-gray-600"
              >
                <svg
                  class="w-3 h-3 current-color"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                    fill="gray"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="z-50 -mt-6 text-center bg-black lg:border-b lg:-mt-3 lg:border-gradient-r-curious rounded-b-xl">
            <ul class="flex-grow block w-full p-4 font-bold tracking-wide uppercase lg:p-0.5 lg:px-2 lg:pb-1 gap-x-8 lg:flex lg:flex-initial lg:w-auto lg:mt-0" :class="menuOpen ? 'block' : 'hidden'">
              <li class="mb-6 lg:mb-0">
                <router-link
                  @click.native="menuOpen = !menuOpen"
                  :to="`/en/`"
                  class="text-copy-primary hover:text-gray-400"
                  >Home</router-link
                >
              </li>
              <li class="mb-6 lg:mb-0">
                <router-link
                  @click.native="menuOpen = !menuOpen"
                  :to="`/en/games`"
                  class="text-copy-primary hover:text-gray-400 game"
                  >Games</router-link
                >
              </li>
              <!-- <li class="mb-6 lg:mb-0">
                <router-link
                  @click.native="menuOpen = !menuOpen"
                  :to="`/en/partners`"
                  class="text-copy-primary hover:text-gray-400"
                  >Partners</router-link
                >
              </li> -->
              <li class="mb-6 lg:mb-0">
                <router-link
                  @click.native="menuOpen = !menuOpen"
                  :to="`/en/career`"
                  class="text-copy-primary hover:text-gray-400"
                  >Career</router-link
                >
              </li>
              <li class="mb-6 lg:mb-0">
                <router-link
                  @click.native="menuOpen = !menuOpen"
                  :to="`/en/contact`"
                  class="text-copy-primary hover:text-gray-400"
                  >Contact</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div v-if="menuOpen" class="outside" v-on:click="away()"></div>
    </div>
    <div class="flex-grow text-lg">
      <router-view />
    </div>
    <div class="grid clear-both grid-cols-3 text-white bg-black md:mb-0 md:h-36">
      <div class="grid col-span-3 md:col-span-1">
          <p class="self-end p-4 opacity-40 text-xxs">Curious Games is the owner of all software and all other material on this website. All intellectual property rights and any other protected rights vested therein exclusively belong to Curious Games. Any kind of exploitation of Curious Games intellectual property rights requires our written approval.</p>
      </div>
      <div class="grid col-span-3 md:col-span-1">
        <img src="/gfx/footer.png" alt="hello" class="self-end place-self-center h-28" />
      </div>
    </div>
  </div>
</template>

<script>
  import { useMeta } from 'vue-meta'
  export default {
    name: "app",
    data() {
      return {
        menuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      away() {
        this.menuOpen = false;
      }
    },
    setup () {
      useMeta({
        title: 'Curious Games - Welcome'
      })
    }
  };
</script>

<style>
  html {
      overflow-x: hidden;
      width: 100%;
  }
  body {
      overflow-x: hidden;
      width: 100%
  }
  .router-link-exact-active,
  .gamepage .game
  {
    @apply text-transparent bg-clip-text bg-gradient-to-r from-cur-pink to-cur-blue;
  }
</style>
