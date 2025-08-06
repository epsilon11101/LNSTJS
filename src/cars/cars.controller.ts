import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car-dto';

@Controller('cars')
//@UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findALl();
  }
  @Get(':id')
  getById(@Param('id', new ParseUUIDPipe({ version: '7' })) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  //@UsePipes(ValidationPipe)
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }
  @Patch(':id')
  //@UsePipes(ValidationPipe)
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }
  @Delete(':id')
  delelete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
