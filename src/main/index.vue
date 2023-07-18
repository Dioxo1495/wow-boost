<script setup>
import Card from '../.vitepress/components/card.vue';
import Container from '../.vitepress/components/container.vue';
</script>

<template>
  <main class="mt-3 grid gap-3">
    <h1 class="text-4xl">Welcome to Red Diamond Boost!</h1>

    <h2 class="text-2xl">Popular Services:</h2>
    <Container class="flex gap-3">
      <Card src="/img/popular-cardbg-1.png">
        <h3 class="text-xl">Mythic+ Keys</h3>
        <ul class="list-disc list-inside">
          <li>Timed</li>
          <li>From +10 to + 21 key lvl</li>
          <li>Equip from 415 to 431 ilvl</li>
        </ul>
      </Card>
      <Card src="/img/popular-cardbg-2.png">
        <h3 class="text-xl">Keystone Master</h3>
        <ul class="list-disc list-inside">
          <li>FoS achievement</li>
          <li>2 loot traders for free</li>
          <li>At least 2000 Mythic+ points</li>
        </ul>
      </Card>
      <Card src="/img/popular-cardbg-3.png">
        <h3 class="text-xl">Keystone Hero</h3>
        <ul class="list-disc list-inside">
          <li>FoS achievement</li>
          <li>Teleport unlock</li>
          <li>2500+ Mythic score</li>
        </ul>
      </Card>
    </Container>

    <h2 class="text-2xl">Contac Us</h2>

    <span class="text-bold">Easy steps to contact us fast and easy</span>
    <div class="container">
        <h1>1. Join our discord</h1>
    </div>
    <div class="container">
        <h1>2. open a ticket</h1>
    </div>
    <div class="container">
        <h1>3. wait for our team to contact you</h1>
    </div>

    <h2 class="text-2xl">Services</h2>
    <div class="container">
    Mythic+
    </div>
    <div class="container">
    Power Lvling
    </div>
    <div class="container">
    Questing
    </div>
    <div class="container">
    Mounts
    </div>

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

    <h2 class="text-2xl">Join Discord</h2>
    <div>
      <h1>JOIN NOW</h1>

      We want to create a community in discord, where our customers can empathize and share game experiences, where they can chat, have fun, share memes and feel comfortable

      Where they have the ease and speed of being able to contact us and contract any of our services
    </div>
  </main>
</template>
