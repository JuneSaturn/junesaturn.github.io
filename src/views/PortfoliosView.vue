<script setup lang="ts">
import { software } from '@/data/software'
</script>

<template>
  <main>
    <h1>SOFTWARE PROJECTS</h1>
    <div class="software-container">
      <a
        v-for="sw in software"
        :key="sw.slug"
        :href="sw.href"
        class="software-item">
        <div
          class="banner"
          :style="{
            backgroundColor: sw.color,
            backgroundImage: sw.banner1 ? `url('${sw.banner1}')` : undefined}">
        </div>
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

.software-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.software-item {
  margin-top: 20px;
}

.banner {
  width: 420px;
  height: 200px;

  border-radius: 15px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 1024px) {
  .banner {
    width: 360px;
    height: 120px;
  }
}

@media (max-width: 768px) {
  .banner {
    width: 200px;
    height: 90px;
  }
}
</style>
