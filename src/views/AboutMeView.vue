<template>
  <main>
    <h1>AT A GLANCE...</h1>
    <hr />
    <section class="at-a-glance">
      <div class="gameography">
        <div>GAMEOGRAPHY</div>
      </div>
      <div class="writings">Characters in the Saturn</div>
      <div class="ui-designs">Stone-Carved UI</div>
      <div class="character-designs">Layout Encelade</div>
      <div class="programming">printf("hello saturn");</div>
    </section>
  </main>
</template>

<style scoped>
h1 {
  font-size: 5rem;
  letter-spacing: -5px;
}

.at-a-glance {
  display: grid;
  gap: 20px 10px;
}

.at-a-glance > div {
  padding: 25px;
  border-radius: 25px;
}

.gameography {
  grid-column: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70lvh;
  background: rgb(221, 42, 87) url('@/assets/images/illustrations/carousel/etoile02.png') center /
    cover no-repeat;
}

.gameography > div {
  text-align: center;
  font-size: 6rem;
  font-weight: 300;
  letter-spacing: -5px;
  color: rgb(221, 42, 87);
  mix-blend-mode: difference;
}

.gameography ::selection {
  color: var(--black);
  background-color: var(--white);
}

/* Abril Fatface / Abhaya Libre / Outfit are not loaded yet: the fallbacks show for now. */
.writings {
  grid-row: 2 / 4;
  background-color: rgb(116, 153, 151);
  color: var(--black);
  font-family: 'Abril Fatface', serif;
  font-size: 80px;
  letter-spacing: -0.05em;
  line-height: 1em;
}

.ui-designs {
  background-color: rgb(195, 190, 169);
  font-family: 'Abhaya Libre', serif;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: -0.13em;
}

.ui-designs::before {
  content: '';
  display: inline-block;
  width: 32px;
  height: 32px;
  background: url('@/assets/images/ui/icon-eight-pointed-star.svg') center / cover no-repeat;
}

.character-designs {
  background-color: rgb(255, 255, 255);
  font-family: 'Outfit', sans-serif;
  font-size: 40px;
  letter-spacing: -0.05em;
}

.programming {
  background-color: var(--black);
  color: var(--white);
  font-size: 50px;
}
</style>
