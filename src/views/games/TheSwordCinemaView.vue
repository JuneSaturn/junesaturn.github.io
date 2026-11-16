<script setup lang="ts">
import { games } from '@/data/games'
</script>

<template>
  <div class="tsc-page">
    <section class="feature-graphic">
      <p class="year">2014</p>
      <div class="bottom-row">
        <p class="genre">Action, RPG, Sports</p>
        <div class="download-section">
          <button class="download-button">Download</button>
          <span class="price">Play for free</span>
        </div>
      </div>
    </section>

    <aside class="languages">
      <div>
        <span class="label">Subtitles</span>
        <span>English</span>
        <span>Français</span>
        <span>한국어</span>
      </div>
      <div>
        <span class="label">Audio</span>
        <span>-</span>
      </div>
    </aside>

    <main>
      <p>
        Step into the world of the silver screen and set its troubled stories straight with your
        exceptional directing style: swordplay. Every elegant stroke of your hand has the potential
        to shake up mainstream culture and redefine the formula.
      </p>
      <p>
        Nicole, Patrice &amp; Patricia, Cyriaque, and Fantôme have come together to set the world right.
        First things first: the King Auteur is in trouble... Monsters who despise his stories are
        out to erase movies, music, and literature from the world.
      </p>
      <p>
        Fencing techniques are featured, but the rules of competitive fencing don’t apply.
        Advanced moves may call for a few precise controls, but you can clear the whole game
        without ever learning them.
      </p>
      <h2>Gameplay Notes</h2>
      <ul>
        <li>
          This version does not collect personal information and does not support online saving.
          If you have not backed up your MagPass (your save data), you’ll need to start over from the beginning
          if you delete the game. For details on transferring to another device, <a href="/wip/">click here</a>.
        </li>
        <li>This game was made with Unity. Subject to the Unity license terms.</li>
      </ul>
    </main>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Outfit';
  src: url('@/assets/fonts/outfit/Outfit-VariableFont_wght.ttf') format('truetype');
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: 'Paperlogy';
  src: url('@/assets/fonts/paperlogy/Paperlogy-3Light.ttf') format('truetype');
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: 'Paperlogy';
  src: url('@/assets/fonts/paperlogy/Paperlogy-5Medium.ttf') format('truetype');
  font-weight: 400 500;
  font-display: swap;
}
@font-face {
  font-family: 'Paperlogy';
  src: url('@/assets/fonts/paperlogy/Paperlogy-7Bold.ttf') format('truetype');
  font-weight: 700;
  font-display: swap;
}

/* Game theme: these override the site tokens only inside this page. */
.tsc-page {
  --white: rgb(253, 255, 252);
  --black: rgb(3, 25, 30);
  --red: rgb(255, 46, 0);
  --yellow: rgb(255, 209, 76);
  --jade: rgb(32, 223, 223);
  --blue: rgb(73, 73, 255);
  --magenta: rgb(255, 63, 135);

  min-height: 100lvh;
  font-family: 'Outfit', 'Paperlogy', 'Lexend', sans-serif;
  color: var(--white);
  background-color: var(--black);
}

.tsc-page ::selection {
  color: var(--black);
  background-color: var(--white);
}

.feature-graphic {
  display: flex;
  flex-direction: column;
  height: 60lvh;
  padding: 24px;
  background: var(--magenta) url('@/assets/images/games/the-sword-cinema/feature-graphic01.png')
    center / cover no-repeat fixed;
}

.feature-graphic p {
  font-size: 0.875rem;
}

.bottom-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: auto;
}

.download-section {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
}

.download-button {
  all: unset;
  cursor: pointer;
  padding: 12px 60px;
  border-radius: 4px;
  font-size: 22px;
  color: var(--black);
  background-color: var(--white);
}

.languages {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;
}

.languages span + span {
  margin-left: 0.5rem;
}

.languages .label {
  font-weight: 700;
}

main {
  padding-top: 24px;
}

main h2 {
  margin-top: 1em;
}
</style>
