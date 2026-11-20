import arcadeMagiquePromo from '@/assets/images/software/arcade-magique/promo-banner01.png'
import staticSaturnPromo from '@/assets/images/software/static-saturn-pages/promo-banner01.png'
import magpassPromo from '@/assets/images/software/magpass/promo-banner01.png'

export interface Software {
  slug: string
  title: string
  year: number
  href: string
  color: string
  textColor?: string
  banner1?: string
}

export const software: Software[] = [
  {
    slug: 'arcade-magique',
    title: 'Magic Arcade',
    year: 2025,
    href: '/software/arcade-magique/',
    color: 'rgb(16, 16, 19)',

    banner1: arcadeMagiquePromo.src,
  },
  {
    slug: 'static-saturn-pages',
    title: 'Static Saturn Pages',
    year: 2026,
    href: '/software/static-saturn-pages/',
    color: 'rgb(242, 242, 242)',

    banner1: staticSaturnPromo.src,
  },
  {
    slug: 'magpass',
    title: 'MagPass',
    year: 2026,
    href: '/software/magpass/',
    color: 'rgb(142, 177, 241)',

    banner1: magpassPromo.src,
  },
]