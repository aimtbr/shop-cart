import { Item } from './types';

export const items: Item[] = [
  {
    id: '9e7190a7-09a4-4898-9418-9166c5b232b9',
    title: 'Currant Bun',
    description: 'Sour bun with currant filling',
    createdAt: new Date('2020-01-07T22:55:51.540Z'),
    updatedAt: new Date('2020-01-08T22:55:51.540Z'),
    image: 'https://ouallbed.sirv.com/Images/currant-bun.jpg',
    count: 11,
    price: 2,
    currency: 'EUR'
  },
  {
    id: 'c3da6b0f-e656-46c4-abb0-9136cd12779c',
    title: '"Red Velvet" Cake',
    description: 'A beautiful cake for lovers of sweets',
    createdAt: new Date('2020-01-09T22:55:51.540Z'),
    updatedAt: new Date('2020-01-10T22:55:51.540Z'),
    image: 'https://ouallbed.sirv.com/Images/red-velvet-cake.jpg',
    count: 30,
    price: 10,
    currency: 'EUR'
  }
];
