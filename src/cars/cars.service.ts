import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v7 as uuid } from 'uuid';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car-dto';
import { removeUndefined } from 'src/common/utils/object.util';

@Injectable()
export class CarsService {
  private cars: Car[];

  findALl() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  create(car: CreateCarDto) {
    const new_car: Car = { id: uuid(), ...car };
    this.cars.push(new_car);
    return new_car;
  }
  update(id: string, updateCardDto: UpdateCarDto) {
    const carDB = this.findOneById(id);
    const cleaneadCarDto = removeUndefined(updateCardDto);

    const updatedCar: Car = {
      ...carDB,
      ...cleaneadCarDto,
      id,
    };

    this.cars = this.cars.map((car) => (car.id === id ? updatedCar : car));

    return updatedCar;
  }

  delete(id: string) {
    const carDB = this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== carDB.id);
    return this.cars;
  }

  fillWithSeed(cars: Car[]) {
    this.cars = cars;
  }
}
