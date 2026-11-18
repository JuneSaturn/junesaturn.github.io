<script setup lang="ts">
import logoBlack from '@/assets/images/ui/logo-junesaturn-black.svg'
import youtubeIcon from '@/assets/images/ui/socials/youtube-doodle.svg'
import instagramIcon from '@/assets/images/ui/socials/instagram-doodle.svg'
import xIcon from '@/assets/images/ui/socials/x-doodle.svg'
import behanceIcon from '@/assets/images/ui/socials/behance-doodle.svg'

const socials = [
  { name: 'YouTube', href: 'https://youtube.com/@June-Saturn', icon: youtubeIcon },
  { name: 'Instagram', href: 'https://instagram.com/june_saturn', icon: instagramIcon },
  { name: 'X', href: 'https://x.com/JuneSaturn_', icon: xIcon },
  { name: 'Behance', href: 'https://behance.net/june-saturn', icon: behanceIcon },
]
</script>

<template>
  <footer>
    <section class="top">
      <img :src="logoBlack.src" class="logo" alt="June Saturn" />
      <div class="socials no-select">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer">
          <img class="socials-ico" :src="social.icon.src" :alt="social.name" />
        </a>
      </div>
    </section>

    <section>
      <span>
        Copyright &copy; 2026 June Saturn, All rights reserved. All trademarks are the property of
        their respective owners.
      </span>
      <hr />
    </section>

    <section>
      <span class="instruction">
        Designed and programmed by June Saturn. hosted on GitHub. Feel free to contact me if you have
        any visual or technical suggestions for the website. Thank you for visiting.
      </span>
      <div class="footmenu">
        <a href="/licenses/">Licenses</a>
        <a href="https://github.com/JuneSaturn/junesaturn.github.io" target="_blank" rel="noopener">
          GitHub&nbsp;page
        </a>
      </div>
    </section>
  </footer>
</template>

<style scoped>
footer {
  font-size: 0.75rem;
  letter-spacing: -0.5px;
  padding: 30px 24px 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.14);
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 10px;
}

hr {
  margin: 14px 0 12px;
}

.socials-ico {
  width: 42px;
  height: 42px;
  -webkit-tap-highlight-color: transparent;
}

.instruction {
  display: block;
}

.footmenu {
  margin-top: 20px;
}

.footmenu a {
  margin-right: 0.4rem;
}

.footmenu a:hover {
  text-decoration: underline;
}

.footmenu a:active {
  text-decoration: none;
  color: var(--white);
  background-color: var(--black);
  border-radius: 4px;
}

@media (max-width: 768px) {
  footer {
    padding: 24px;
  }

  .socials-ico {
    width: 32px;
    height: 32px;
  }
}

@media (max-width: 300px) {
  .top {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>
