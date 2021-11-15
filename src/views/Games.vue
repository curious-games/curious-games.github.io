<template>
  <div class="pt-28">
    <div class="relative h-80 md:h-108">
      <div class="absolute inset-0 z-0 bg-center bg-cover" style="background-image: url('/img/games/CockroachRacers.png')"></div>
      <router-link :to="`/${$i18n.locale}/games/cockroachracers/`" class="absolute inset-0 z-10 flex items-center justify-center text-4xl font-semibold text-white duration-300 md:text-6xl md:opacity-0 md:bg-black/50 hover:opacity-100 ">
      <p><span class="border-b-8 border-gradient-r-curious">Virtual Roa</span>ch Races</p>
      </router-link>
    </div>
    <div class="relative h-80 md:h-108">
      <div class="absolute inset-0 z-0 bg-center bg-cover" style="background-image: url('/img/games/Robodog.png')"></div>
      <router-link :to="`/${$i18n.locale}/games/robodog/`" class="absolute inset-0 z-10 flex items-center justify-center text-4xl font-semibold text-white duration-300 md:text-6xl md:opacity-0 md:bg-black/50 hover:opacity-100 "><p>Machina Races<br><span class="border-b-8 border-gradient-r-curious">K9 Edition&nbsp;&nbsp;</span></p></router-link>
    </div>
    <div class="relative h-80 md:h-108">
      <div class="absolute inset-0 z-0 bg-center bg-cover" style="background-image: url('/img/games/CyberRace.png')"></div>
      <router-link :to="`/${$i18n.locale}/games/cyberrace/`" class="absolute inset-0 z-10 flex items-center justify-center text-4xl font-semibold text-white duration-300 md:text-6xl md:opacity-0 md:bg-black/50 hover:opacity-100"><p>Machina Races<br><span class="border-b-8 border-gradient-r-curious">CyberRaces</span></p></router-link>
    </div>
    <div class="relative h-80 md:h-108">
      <div class="absolute inset-0 z-0 bg-center bg-cover" style="background-image: url('/img/games/TronBikers.png')"></div>
      <router-link :to="`/${$i18n.locale}/games/tronbikers/`" class="absolute inset-0 z-10 flex items-center justify-center text-4xl font-semibold text-white duration-300 md:text-6xl md:opacity-0 md:bg-black/50 hover:opacity-100"><p>Machina Races<br><span class="border-b-8 border-gradient-r-curious">Tron Bikers</span></p></router-link>
    </div>
    <div class="relative h-80 md:h-108">
      <div class="absolute inset-0 z-0 bg-center bg-cover" style="background-image: url('/img/games/CatchACrab.png')"></div>
      <router-link :to="`/${$i18n.locale}/games/catchacrab/`" class="absolute inset-0 z-10 flex items-center justify-center text-4xl font-semibold text-white duration-300 md:text-6xl md:opacity-0 md:bg-black/50 hover:opacity-100"><p><span class="border-b-8 border-gradient-r-curious">Chase A Cr</span>ab</p></router-link>
    </div>
  </div>
</template>
