<template>
  <main class="grid gap-3 bg-cover" style="background-image: url(/img/welcome.png); min-height: calc(100vh - var(--vp-nav-height));">
    <div class="md:container mx-auto flex flex-col justify-center gap-7 px-5 text-white text-center">
      <h1 class="text-5xl lg:font-semibold tails-preview drop-shadow-md text-shadow">Welcome to</h1>
      <h1 class="text-6xl font-bold drop-shadow-2xl text-shadow">Red Diamond Boost!</h1>
      <div class="mt-3 text-center">
        <a href="/services/" class="py-3 px-5 rounded-full border border-[var(--vp-button-brand-border)] text-[var(--vp-button-brand-text)] bg-[var(--vp-button-brand-bg)]">
          Get Started
        </a>
      </div>
      <div class="grid md:grid-cols-3 gap-3 mt-10">
        <div class="flex flex-col gap-3 rounded rouded-lg bg-neutral-900/70 p-3">
          <h1 class="text-left text-2xl font-bold">
            Competitive prices
          </h1>
          <p class="text-left">
            We are constantly striving to bring the best market prices without losing the quality of our services.
          </p>
        </div>
        <div class="flex flex-col gap-3 rounded rouded-lg bg-neutral-900/70 p-3">
          <h1 class="text-left text-2xl font-bold">
            Service quality
          </h1>
          <p class="text-left">
            We work with the best boosters in order to offer the highest quality and professionalism
          </p>
        </div>
        <div class="flex flex-col gap-3 rounded rouded-lg bg-neutral-900/70 p-3">
          <h1 class="text-left text-2xl font-bold">
            Intuitive discord server
          </h1>
          <p class="text-left">
            We have an user friendly customer service which handles all requests through a practical ticket system
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
