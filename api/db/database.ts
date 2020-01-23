import { Item } from '../../client/store/types';
// TODO: ADD UNIQUE ID FOR ALL THE ITEMS AND GET ITS TYPE FOR AN INTERFACE

export const items: Item[] = [
  {
    id: ''
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
    id:
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
