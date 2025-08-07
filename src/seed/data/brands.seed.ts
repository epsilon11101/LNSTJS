import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'bmw',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'audi',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'mercedes',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'honda',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'ford',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'chevrolet',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'nissan',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'kia',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'hyundai',
    createdAt: new Date().getTime(),
  },
];
