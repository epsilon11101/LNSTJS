import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    año: '2024',
    color: 'rojo',
    marca: 'bmw',
    modelo: 'z4',
  },
  {
    id: uuid(),
    año: '2023',
    color: 'negro',
    marca: 'audi',
    modelo: 'a4',
  },
  {
    id: uuid(),
    año: '2022',
    color: 'blanco',
    marca: 'mercedes',
    modelo: 'c300',
  },
  {
    id: uuid(),
    año: '2021',
    color: 'gris',
    marca: 'toyota',
    modelo: 'corolla',
  },
  {
    id: uuid(),
    año: '2020',
    color: 'azul',
    marca: 'honda',
    modelo: 'civic',
  },
  {
    id: uuid(),
    año: '2019',
    color: 'verde',
    marca: 'ford',
    modelo: 'mustang',
  },
  {
    id: uuid(),
    año: '2022',
    color: 'amarillo',
    marca: 'chevrolet',
    modelo: 'camaro',
  },
  {
    id: uuid(),
    año: '2023',
    color: 'naranja',
    marca: 'nissan',
    modelo: '370z',
  },
  {
    id: uuid(),
    año: '2021',
    color: 'morado',
    marca: 'kia',
    modelo: 'stinger',
  },
  {
    id: uuid(),
    año: '2020',
    color: 'plateado',
    marca: 'hyundai',
    modelo: 'elantra',
  },
];
