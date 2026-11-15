import swordCinemaFeature from '@/assets/images/games/the-sword-cinema/feature-graphic01.png'
import swordCinemaLogo from '@/assets/images/games/the-sword-cinema/logo-full-original.svg'
import nobleBastionFeature from '@/assets/images/games/noble-bastion/feature-graphic01.png'
import nobleBastionLogo from '@/assets/images/games/noble-bastion/logo-wordmark-red.png'

export interface Game {
  slug: string
  title: string
  year: number
  /** Page URL; games without a page yet go to the WIP page. */
  href: string
  /** Fallback/background color of cards and posters. */
  color: string
  /** Title text color, used when there is no logo. */
  textColor?: string
  image?: string
  logo?: string
  /** Blend the logo with mix-blend-mode: difference. */
  logoBlend?: boolean
}

// Order here is the order on the home grid, the games page and the menu.
export const games: Game[] = [
  {
    slug: 'the-sword-cinema',
    title: 'The Sword Cinema',
    year: 2014,
    href: '/games/the-sword-cinema/',
    color: 'rgb(226, 59, 23)',
    image: swordCinemaFeature.src,
    logo: swordCinemaLogo.src,
    logoBlend: true,
  },
  {
    slug: 'rainbow-chateau',
    title: 'Rainbow Chateau',
    year: 2024,
    href: '/wip/',
    color: 'rgb(62, 223, 148)',
    textColor: 'var(--black)',
  },
  {
    slug: 'noble-bastion',
    title: 'Noble Bastion',
    year: 2015,
    href: '/wip/',
    color: 'rgb(252, 252, 252)',
    image: nobleBastionFeature.src,
    logo: nobleBastionLogo.src,
  },
  {
    slug: 'odd-fairies',
    title: 'Odd Fairies',
    year: 2021,
    href: '/wip/',
    color: 'rgb(255, 255, 237)',
    textColor: 'rgb(0, 178, 202)',
  },
]