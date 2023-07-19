<template>
  <main class="grid gap-3">
    <div class="md:container mx-auto grid gap-10 p-3 text-white text-center">
      <h2 class="mt-5 text-4xl text-center lg:font-semibold text-shadow">Popular Services:</h2>
      <div class="flex gap-5 p-3 justify-around">
        <div class="flex flex-col justify-end border border-gray-400 rounded p-3 max-w-sm w-60 h-80 p-3 bg-cover hover:scale-110 transition-transform" style="background-image: url(http://localhost:5173/img/popular-cardbg-1.png);">
          <h3 class="text-2xl font-bold">Mythic+ Keys</h3>
          <ul class="list-disc list-inside text-left">
            <li>Timed</li>
            <li>From +10 to + 21 key lvl</li>
            <li>Equip from 415 to 431 ilvl</li>
          </ul>
        </div>
        <div class="flex flex-col justify-end border border-gray-400 rounded p-3 max-w-sm w-60 h-80 p-3 bg-cover hover:scale-110 transition-transform" style="background-image: url(http://localhost:5173/img/popular-cardbg-2.png);">
          <h3 class="text-2xl font-bold">Keystone Master</h3>
          <ul class="list-disc list-inside text-left">
            <li class="">FoS achievement</li>
            <li class="">2 loot traders for free</li>
            <li class="">At least 2000 Mythic+ points</li>
          </ul>
        </div>
        <div class="flex flex-col justify-end border border-gray-400 rounded p-3 max-w-sm w-60 h-80 p-3 bg-cover hover:scale-110 transition-transform" style="background-image: url(http://localhost:5173/img/popular-cardbg-3.png);">
          <h3 class="text-2xl font-bold">Keystone Hero</h3>
          <ul class="list-disc list-inside text-left">
            <li class="">FoS achievement</li>
            <li class="">Teleport unlock</li>
            <li class="">2500+ Mythic score</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="p-5 bg-white text-black">
      <div class="md:container mx-auto flex flex-col gap-10">
        <h2 class="text-4xl text-center">EASY STEPS TO CONTACT US FAST AND EASY</h2>
        <div class="grid grid-cols-3 gap-5">
          <div class="flex flex-col gap-5">
            <img src="/img/arrow-1.png" class="pl-8 w-28 mx-auto">
            <img src="/img/discord.png" class="w-20 mx-auto">
            <h1 class="text-center uppercase">Join our discord</h1>
          </div>
          <div class="flex flex-col gap-5">
            <img src="/img/arrow-2.png" class="pl-8 w-28 mx-auto">
            <img src="/img/ticket.png" class="w-20 mx-auto">
            <h1 class="text-center uppercase">Open a ticket</h1>
          </div>
          <div class="flex flex-col gap-5">
            <img src="/img/arrow-3.png" class="w-14 mx-auto">
            <img src="/img/support.png" class="w-20 mx-auto">
            <h1 class="text-center uppercase">Wait for our team <br> to contact you</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5">
      <h2 class="text-2xl text-red-600">Services</h2>
      <div class="grid grid-cols-[1fr_auto] gap-5">
        <ul class="list-disc list-inside">
          <li>Powerleveling</li>
          <li>Mythic+ keys</li>
          <li>Specific item farming in dungeons</li>
          <li>Gearing toons with armor stack</li>
          <li>Archievements</li>
          <li>Low pvp boosting (like 0-1200)</li>
          <li>Some normal and heroic raid (not full clear)</li>
          <li>Keystone Master (KSM)</li>
          <li>Keystone Hero (KSH)</li>
          <li>New Valor farm</li>
          <li>If you want something else, just feel free to ask!</li>
        </ul>
        <div class="grid grid-cols-2 gap-5">
          <div class="aspect-square w-32 bg-cover border-8 border-black rounded flex flex-col justify-end" style="background-image: url(/img/boost.png);">
            <span class="text-center pt-1 bg-neutral-900/50">
              Mythic+
            </span>
          </div>
          <div class="aspect-square w-32 bg-cover border-8 border-black rounded flex flex-col justify-end text-shadow" style="background-image: url(/img/power-lvl.png);">
            <span class="text-center pt-1 bg-neutral-900/50">
              Power Lvling
            </span>
          </div>
          <div class="aspect-square w-32 bg-cover border-8 border-black rounded flex flex-col justify-end text-shadow" style="background-image: url(/img/quest.png);">
            <span class="text-center pt-1 bg-neutral-900/50">
              Questing
            </span>
          </div>
          <div class="aspect-square w-32 bg-cover border-8 border-black rounded flex flex-col justify-end text-shadow" style="background-image: url(/img/mount.png);">
            <span class="text-center pt-1 bg-neutral-900/50">
              Mounts
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5 bg-sky-700">
      <div class="flex flex-col gap-5 mx-auto max-w-md p-5 rounded-lg bg-cover text-shadow" style="background-image: linear-gradient(#0008, #0008), url(/img/contact-us.png);">
        <h2 class="text-2xl">Join Discord</h2>
        <div>
          We want to create a community in discord, where our customers can empathize and share game experiences, where they can chat, have fun, share memes and feel comfortable Where they have the ease and speed of being able to contact us and contract any of our services
        </div>
        <div class="flex justify-center">
          <a href="<discord>" class="flex gap-2 bg-[#5865f2] py-2 px-3 rounded-full">
            JOIN NOW
            <svg viewBox="0 0 34 34" class="w-6">
              <g transform="translate(1.5 0)">
                <path fill="currentColor" d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
