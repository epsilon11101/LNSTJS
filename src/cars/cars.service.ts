import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 0, marca: 'Toyota', modelo: 'Corolla', año: 2020, color: 'Rojo' },
    { id: 1, marca: 'Mazda', modelo: 'CX-5', año: 2021, color: 'Negro' },
    { id: 2, marca: 'MG', modelo: 'ZS', año: 2022, color: 'Blanco' },
  ];

  findALl() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }
}
