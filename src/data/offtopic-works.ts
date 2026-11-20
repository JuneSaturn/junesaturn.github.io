export const CATEGORY = {
    ARTWORK: 'ARTWORK',
    AUDIO: 'AUDIO',
    PHOTO: 'PHOTO',
    VIDEO: 'VIDEO',
} as const;

export type Category = typeof CATEGORY[keyof typeof CATEGORY];

export interface OffTopicWorks {
  slug: string
  title: string
  year: number
  href: string
  
  category: Category
}

export const offtopic_work: OffTopicWorks[] = [
    {
        slug: 'kids-demo',
        title: 'The Kid\'s Demonstrations',
        year: 2016,
        href: '/wip/',

        category: CATEGORY.AUDIO,
    },
    {
        slug: 'le-sfx',
        title: 'Layout Encelade: Sound Effects',
        year: 2021,
        href: '/wip/',

        category: CATEGORY.AUDIO,
    },
]