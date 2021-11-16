<template>
  <div class="relative flex flex-col min-h-screen font-sans text-white">
    <div class="fixed z-30 h-29">
      <div class="fixed z-40 w-screen bg-black border-b border-gray-600 h-29"></div>
      <header class="fixed z-50 w-full">
        <nav class="container relative px-8 pt-8 pb-5 mx-auto lg:flex lg:items-center lg:justify-between md:flex-wrap">
          <div class="flex items-center justify-between lg:flex-none">
            <div class="h-20 -mt-2 lg:mt-3 lg:h-32">
              <router-link :to="`/${$i18n.locale}/`">
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
          <div class="z-40 text-center bg-black lg:border-b lg:-mt-3 lg:border-gradient-r-curious rounded-b-xl">
            <ul class="flex-grow block w-full p-4 font-bold tracking-wide uppercase lg:p-0.5 lg:px-2 lg:pb-1 gap-x-8 lg:flex lg:flex-initial lg:w-auto lg:mt-0" :class="menuOpen ? 'block' : 'hidden'">
              <li class="mb-6 lg:mb-0">
                <router-link
                  :to="`/${$i18n.locale}/`"
                  class="text-copy-primary hover:text-gray-400"
                  >{{ $t('nav.home') }}</router-link
                >
              </li>
              <li class="mb-6 lg:mb-0">
                <router-link
                  :to="`/${$i18n.locale}/games`"
                  class="text-copy-primary hover:text-gray-400"
                  >{{ $t('nav.games') }}</router-link
                >
              </li>
              <li class="mb-6 lg:mb-0">
                <router-link
                  :to="`/${$i18n.locale}/partners`"
                  class="text-copy-primary hover:text-gray-400"
                  >{{ $t('nav.partners') }}</router-link
                >
              </li>
              <li class="mb-6 lg:mb-0">
                <router-link
                  :to="`/${$i18n.locale}/career`"
                  class="text-copy-primary hover:text-gray-400"
                  >{{ $t('nav.career') }}</router-link
                >
              </li>
              <li class="mb-6 lg:mb-0">
                <router-link
                  :to="`/${$i18n.locale}/contact`"
                  class="text-copy-primary hover:text-gray-400"
                  >{{ $t('nav.contact') }}</router-link
                >
              </li>
              <!-- <li class="mb-6 lg:mb-0">
                <modal-login />
              </li>
              <li class="mb-6 lg:mb-0">
                <modal-register />
              </li>
            
              <li>
                <dropdown-menu />
              </li> -->
            </ul>
          </div>
        </nav>
        
      </header>
      <div v-if="menuOpen" class="outside" v-on:click="away()"></div>
    </div>
    <div class="flex-grow -mt-3 text-lg">
      <router-view />
    </div>
    <div class="block grid-flow-col overflow-hidden text-white bg-black md:h-36 md:grid auto-cols-max">
      <div class="inline-block md:table md:h-36">
          <p class="p-4 align-bottom md:h-36 md:table-cell text-xxs">Curious Games ‘Curious Cluster Limited’ is the owner of all software and all other material on this website.<br>All intellectual property rights and any other protected rights vested therein exclusively belong to Curious Games.<br>Any kind of exploitation of Curious Games intellectual property rights requires our written approval.</p>
      </div>
      <div class="inline-block md:table">
        <img src="/gfx/footer.png" alt="hello" class="align-bottom md:table-cell md:h-36" />
      </div>
    </div>
    
  </div>
</template>

<style scoped>
.outside {
  
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
}
</style>

<script>
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
};
</script>


<style scoped>
.router-link-exact-active{
  @apply text-transparent bg-clip-text bg-gradient-to-r from-cur-pink to-cur-blue;
}
</style>
