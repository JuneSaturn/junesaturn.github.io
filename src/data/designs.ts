export interface Design {
  slug: string
  title: string
  year: number
  href: string
  license?: string
}

export const designs: Design[] = [
    {
        slug: 'mag-emojis',
        title: 'MagEmojis',
        year: 2023,
        href: 'https://github.com/JuneSaturn/mag-emojis',
        license: 'All Rights Reserved',
    },
    {
        slug: 'pixelated-flags',
        title: 'Pixelated Flags',
        year: 2024,
        href: 'https://june-saturn.itch.io/pixelated-flags',
        license: 'MIT License',
    },
    {
        slug: 'icecream-sandwich-font',
        title: 'Ice Cream Sandwich Font',
        year: 2023,
        href: 'https://github.com/JuneSaturn/typefaces',
        license: 'OFL (Open Font License)',
    },
    {
        slug: 'blueberry-icecream-font',
        title: 'Blueberry Ice Cream Font',
        year: 2025,
        href: 'https://github.com/JuneSaturn/typefaces',
        license: 'OFL (Open Font License)',
    }
]