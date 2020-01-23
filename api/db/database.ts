import { Item } from '../../client/store/types';
// TODO: ADD UNIQUE ID FOR ALL THE ITEMS AND GET ITS TYPE FOR AN INTERFACE

export const Items: Item[] = [
  {
    id: '9e7190a7-09a4-4898-9418-9166c5b232b9',
    title: 'Currant Bun',
    description: 'Very tasty bun with currant filling',
    createdAt: new Date('2020-01-07T22:55:51.540Z'),
    updatedAt: new Date('2020-01-08T22:55:51.540Z'),
    image: 'https://ouallbed.sirv.com/Images/currant-bun.jpg',
    count: 51,
    price: 2,
    currency: 'USD'
  },
  {
    id: 'c3da6b0f-e656-46c4-abb0-9136cd12779c',
    title: '"Red Velvet" Cake',
    description: 'Very sweet and popular cake',
    createdAt: new Date('2020-01-09T22:55:51.540Z'),
    updatedAt: new Date('2020-01-10T22:55:51.540Z'),
    image: 'https://ouallbed.sirv.com/Images/red-velvet-cake.jpg',
    count: 96,
    price: 10,
    currency: 'USD'
  }
];
