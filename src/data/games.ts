import theSwordCinemaFeature from '@/assets/images/games/the-sword-cinema/feature-graphic01.png'
import theSwordCinemaSymbol from '@/assets/images/games/the-sword-cinema/logo-symbol-web.svg'
import theSwordCinemaFullLogo from '@/assets/images/games/the-sword-cinema/logo-full-original.svg'
import nobleBastionFeature from '@/assets/images/games/noble-bastion/feature-graphic01.png'
import nobleBastionFullLogo from '@/assets/images/games/noble-bastion/logo-wordmark-red.png'

export interface Game {
  slug: string
  title: string
  year: number
  href: string
  color: string
  textColor?: string
  image?: string
  symbol?: string
  fullLogo?: string
  
  logoBlend?: boolean
}

export const games: Game[] = [
  {
    slug: 'the-sword-cinema',
    title: 'The Sword Cinema',
    year: 2014,
    href: '/games/the-sword-cinema/',
    color: 'rgb(226, 59, 23)',
    image: theSwordCinemaFeature.src,
    symbol: theSwordCinemaSymbol.src,
    fullLogo: theSwordCinemaFullLogo.src,
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
    fullLogo: nobleBastionFullLogo.src,
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