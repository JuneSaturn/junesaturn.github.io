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
        Enter the world of the silver screen and solve various problems. Your exceptional directing
        style is swordplay. Your elegant hand movements have the potential to shake mainstream
        culture and create new formulas.
      </p>
      <p>
        Nico, Patrice &amp; Patricia, Cyriaque, and Fantome have gathered to fix the world. First,
        let's save the King Auteur in trouble... There are monsters who dislike the stories written
        by the King Auteur and wish for movies, music, and literature to disappear from the world.
        While fencing skills appear, the rules of actual sports fencing are not applied. Perhaps you
        will need to memorize some refined control methods for advanced moves, but even without
        them, there will be no trouble with the overall game progress.
      </p>
      <h2>Game Play Notes</h2>
      <ul>
        <li>
          The current version of this game does not collect your personal information and does not
          support online saving. If you have not backed up your gamer files, you will need to start
          over from the beginning when you delete the game. For more information about device
          transfers, please click here.
        </li>
        <li>This game was developed with Unity and is subject to the corresponding license.</li>
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
