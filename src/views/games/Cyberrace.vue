<template>
  <div class="pt-28">
    <div class="relative h-80 md:h-108">
      <div class="absolute inset-0 z-0 bg-center bg-cover" style="background-image: url('/img/games/CyberRace.png')"></div>
    </div>
    <div class="container relative px-4 py-10 mx-auto text-black md:px-0">
      <div class="grid grid-cols-6 gap-4 auto-cols-max">
        <router-link :to="`/${$i18n.locale}/games/`" class="mb-8 text-2xl font-semibold md:text-6xl md:text-right md:mr-6">
          <span class="border-b-8 border-gradient-r-curious">＜</span>
        </router-link>
        <div class="col-span-5 mb-8 text-2xl font-semibold md:text-6xl"><p><span class="border-b-8 border-gradient-r-curious">Machina Races</span> - CyberRaces</p></div>
        <div class="col-span-6 md:col-span-3 md:col-start-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste fugiat sit at asperiores earum, nemo est nihil esse delectus ratione veniam aliquid temporibus placeat, laboriosam repellat? Sapiente, cumque porro!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste fugiat sit at asperiores earum, nemo est nihil esse delectus ratione veniam aliquid temporibus placeat, laboriosam repellat? Sapiente, cumque porro!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste fugiat sit at asperiores earum, nemo est nihil esse delectus ratione veniam aliquid temporibus placeat, laboriosam repellat? Sapiente, cumque porro!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste fugiat sit at asperiores earum, nemo est nihil esse delectus ratione veniam aliquid temporibus placeat, laboriosam repellat? Sapiente, cumque porro!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste fugiat sit at asperiores earum, nemo est nihil esse delectus ratione veniam aliquid temporibus placeat, laboriosam repellat? Sapiente, cumque porro!!</p>
        </div>
        <div class="col-span-6 md:col-span-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste fugiat sit at asperiores earum, nemo est nihil esse delectus ratione veniam aliquid temporibus placeat, laboriosam repellat? Sapiente, cumque porro!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste fugiat sit at asperiores earum, nemo est nihil esse delectus ratione veniam aliquid temporibus placeat, laboriosam repellat? Sapiente, cumque porro!</p>
        </div>
        <div class="col-span-5 col-start-2">
          Video
        </div>
      </div>
    </div>
  </div>
</template>
