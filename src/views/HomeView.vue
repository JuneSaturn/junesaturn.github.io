<script setup lang="ts">
import { games } from '@/data/games'
</script>

<template>
  <section class="hero"></section>

  <section class="prime-content">
    <div class="desc">
      <div class="title">June Saturn's Web Portfolio</div>
      <div class="context">This website is currently under construction.</div>
    </div>
  </section>

  <section class="content-container">
    <a
      v-for="game in games"
      :key="game.slug"
      :href="game.href"
      class="content-item"
      :style="{
        '--item-color': game.color,
        '--item-image': game.image ? `url('${game.image}')` : 'none'
      }">
      <img
        v-if="game.fullLogo"
        :src="game.fullLogo"
        :alt="game.title"
        class="content-logo"
        :class="{ blend: game.logoBlend }"/>
      <span v-else class="content-text" :style="{ color: game.textColor }">
        {{ game.title.toUpperCase() }}
      </span>
    </a>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 100lvh;

  background-color: var(--black);
  background-image: url('@/assets/images/illustrations/carousel/carpentier01.png');
  background-position: 60% center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.prime-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 75lvh;
  margin: 14px;
  padding: 8px;
  border-radius: 24px;

  background-color: var(--black);
  background-image: url('@/assets/images/illustrations/carousel/etoile01.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.desc {
  padding: 24px;
  border-radius: 18px;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);

  font-size: 2rem;
  font-weight: 300;
  letter-spacing: -2px;
}

.desc .context {
  margin-top: 12px;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.5px;
}

.content-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 14px;
}

.content-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40lvh;
  overflow: hidden;
  border-radius: 24px;
  background-color: var(--black);
}

/* Background lives on ::before so it can zoom without moving the logo. */
.content-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--item-color) var(--item-image) center / cover no-repeat;
  transition: transform 0.3s ease-in-out;
}

.content-item:hover::before {
  transform: scale(1.2);
}

.content-logo,
.content-text {
  position: relative;
  z-index: 1;
}

.content-logo {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

.content-logo.blend {
  width: 95%;
  height: 95%;
  mix-blend-mode: difference;
}

.content-text {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 300;
  letter-spacing: -3px;
}
</style>
