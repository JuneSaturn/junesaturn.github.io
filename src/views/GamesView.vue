<script setup lang="ts">
import { games } from '@/data/games'
</script>

<template>
  <main>
    <h1>GAMEOGRAPHY</h1>
    <div class="games-container">
      <a
        v-for="game in games"
        :key="game.slug"
        :href="game.href"
        class="games-item">
        <div
          class="poster"
          :style="{
            backgroundColor: game.color,
            backgroundImage: game.image ? `url('${game.image}')` : undefined,}">
        </div>
        <div class="title">{{ game.title }}</div>
        <div class="year">{{ game.year }}</div>
        </a>
    </div>
  </main>
</template>

<style scoped>
h1 {
  font-size: 44px;
  font-weight: 250;
  letter-spacing: -4px;
}

.games-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.games-item {
  margin-top: 20px;
}

.poster {
  width: 300px;
  height: 400px;
  border-radius: 15px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.title {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -1.5px;
}

.year {
  font-size: 12px;
  color: gray;
}

@media (max-width: 1024px) {
  .poster {
    width: 200px;
    height: 300px;
  }
}

@media (max-width: 768px) {
  .poster {
    width: 150px;
    height: 250px;
  }
}
</style>
