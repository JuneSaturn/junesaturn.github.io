<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { games } from '@/data/games'
import logoWhite from '@/assets/images/ui/logo-junesaturn-white.svg'
import logoBlack from '@/assets/images/ui/logo-junesaturn-black.svg'

const props = defineProps<{ currentPath: string }>()
const isMenuOpened = ref(false)
const isScrolled = ref(false)

// Clicking the logo on the home page scrolls back to the top instead of navigating.
function onLogoClick(e: MouseEvent) {
  if (props.currentPath === '/') {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="no-select" :class="{ 'menu-open': isMenuOpened, scrolled: isScrolled }">
    <a v-show="!isMenuOpened" href="/" @click="onLogoClick">
      <img :src="logoWhite.src" class="logo" alt="June Saturn" />
    </a>

    <nav class="menu" :class="{ active: isMenuOpened }">
      <div v-if="isMenuOpened" class="menu-header">
        <button class="back-arrow" aria-label="Close menu" @click="isMenuOpened = false"></button>
        <a href="/" @click="onLogoClick">
          <img :src="logoBlack.src" class="logo" alt="June Saturn" />
        </a>
      </div>

      <a href="/games/">Games</a>
      <template v-if="isMenuOpened">
        <a v-for="game in games"
           :key="game.slug"
           :href="game.href"
           class="game">
          {{ game.title }}
        </a>
      </template>
      <a href="/portfolios/">Portfolios</a>
      <a href="/logs/">Logs</a>
      <a href="/about-me/">About Me</a>

      <p v-if="isMenuOpened">&copy; 2026 June Saturn</p>
    </nav>

    <button
      v-show="!isMenuOpened"
      class="hamburger"
      aria-label="Open menu"
      @click="isMenuOpened = true">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  z-index: 49;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  border-bottom: 1px solid var(--white-transparent);
  color: var(--white);
  mix-blend-mode: difference;
  -webkit-font-smoothing: antialiased;
  transition: border-bottom 0.3s ease;
}

header.scrolled {
  border-bottom-color: transparent;
}

header .logo {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.menu > a,
.menu > span {
  cursor: pointer;
  margin-left: 0.5rem;
}

/* ---------------------------------------------------------------- Icon buttons */

.hamburger,
.back-arrow {
  display: none;
  position: relative;
  width: 18px;
  height: 18px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger .line {
  display: block;
  position: relative;
  bottom: 4px;
  width: 100%;
  height: 2px;
  margin-top: 5px;
  border-radius: 12px;
  background-color: var(--white);
}

.back-arrow::before,
.back-arrow::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 2px;
}

.back-arrow::before {
  width: 10px;
  height: 10px;
  border-left: 2px solid var(--black);
  border-bottom: 2px solid var(--black);
  border-radius: 1px;
  transform: translateY(-50%) rotate(45deg);
}

.back-arrow::after {
  width: 14px;
  height: 2px;
  border-radius: 12px;
  background-color: var(--black);
  transform: translateY(-50%);
}

/* ---------------------------------------------------------------- Mobile */

@media (max-width: 768px) {
  header {
    padding-block: 18px;
  }

  .hamburger,
  .back-arrow {
    display: inline-block;
  }

  .menu {
    display: none;
  }

  .menu.active {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    width: 100lvw;
    height: 100lvh;
    padding: 18px;
    overflow-y: auto;

    color: var(--black);
    background-color: rgba(244, 244, 244, 0.5);
    backdrop-filter: blur(12px);
  }

  .menu > a,
  .menu > span {
    margin-left: 0;
    padding: 12px;
    border: 1px solid var(--black);
    border-radius: 8px;
  }

  .menu > a:hover,
  .menu > span:hover {
    color: var(--white);
    background-color: var(--black);
  }

  .menu > .game {
    height: 6rem;
  }
}

/* The open menu sits on a light background, so drop the difference blend. */
header.menu-open {
  padding: 0;
  mix-blend-mode: normal;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
</style>
