import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findALl();
  }
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) @Body() body: any) {
    return body;
  }
  @Delete(':id')
  delelete(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
}
