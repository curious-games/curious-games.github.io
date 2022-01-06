<template>
<div class="relative">
  <section class="h-screen bg-black">
    <div class="relative w-full h-screen mt-4">
      <video autoplay muted loop class="absolute z-0 object-cover w-full h-full">
        <source src="/mov/CockroachRacers.mp4" type="video/mp4" />
      </video>
      <div class="relative z-10 w-screen">
        <div class="flex items-center justify-center h-screen">
          <p class="p-2 font-thin text-8xl md:text-9xl">
            <span class="block md:mr-20">curious</span> <span class="block ml-0 md:ml-20">games</span>
            <ScrollDownIcon />
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="h-screen bg-black">
    <div class="relative w-full h-screen">
      <img class="absolute z-0 object-cover w-full h-full" src="/img/home/Cars.jpg" alt="">
      <div class="relative z-10 w-screen">
        <div class="container flex items-end justify-start h-screen mx-auto md:px-40">
          <div class="max-w-md pt-4 border-t-2 border-gradient-r-curious">
            <p class="p-2 text-xl bg-black bg-opacity-50 rounded-md">Curious Games is the world’s first virtual sports publisher dedicated to alternative virtual contests.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="h-screen bg-black">
    <div class="relative w-full h-screen">
      <img class="absolute z-0 object-cover w-full h-full" src="/img/home/Cockroach.jpg" alt="">
      <div class="relative z-10 w-screen">
        <div class="container flex items-end justify-end h-screen pb-10 mx-auto md:px-40">
          <div class="max-w-md pt-4 border-t-2 border-gradient-r-curious">
            <p class="p-2 text-xl bg-black bg-opacity-50 rounded-md">Delivering the highest quality content with real time data driven AI markets for the most intuitive of gaming experiences.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="h-screen bg-black">
    <div class="relative w-full h-screen">
      <img class="absolute z-0 object-cover w-full h-full" src="/img/home/Dune.jpg" alt="">
      <div class="relative z-10 w-screen">
        <div class="container flex items-center justify-center h-screen mx-auto md:px-40">
          <div class="max-w-md pt-4 border-t-2 border-gradient-r-curious">
            <p class="p-2 text-xl bg-black bg-opacity-50 rounded-md">Dynamic in game assets produced by Oscar and Bafta award winning VFX artists and interactive entertainment industry veterans.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="h-screen bg-black">
    <div class="relative w-full h-screen">
      <img class="absolute z-0 object-cover w-full h-full" src="/img/home/RobotDog.jpg" alt="">
      <div class="relative z-10 w-screen">
        <div class="container flex items-center justify-start h-screen mx-auto md:px-40">
          <div class="max-w-md pt-4 border-t-2 border-gradient-r-curious">
            <p class="p-2 text-xl bg-black bg-opacity-50 rounded-md">Our virtual contests can be streamed seamlessly with mobile optimisation or locally rendered to the venue of your choice. Available through one single API with no additional integration.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="h-screen bg-black">
    <div class="relative w-full h-screen">
      <img class="absolute z-0 object-cover w-full h-full" src="/img/home/Bikers.jpg" alt="">
      <div class="relative w-screen z-1">
        <div class="container flex items-center justify-end h-screen mx-auto md:px-40">
          <div class="max-w-md pt-4 border-t-2 border-gradient-r-curious">
            <p class="p-2 text-xl bg-black bg-opacity-50 rounded-md">The game logic behind each of our virtual contests are fully customisable to meet specific content or regulatory requirements including market localisation and branded or sponsored content.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
  import ScrollDownIcon from "../components/ScrollDownIcon.vue";
  export default {
    components: {
      ScrollDownIcon
    },
    mounted() {
      this.$nextTick().then(() => document.body.classList.remove('gamepage'))
    },
    metaInfo: {
      title: `Home`,
      titleTemplate: 'Curious Games - %s',
    }
  };
</script>
