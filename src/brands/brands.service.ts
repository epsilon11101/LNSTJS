import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
import { removeUndefined } from 'src/common/utils/object.util';
@Injectable()
export class BrandsService {
  private brands: Brand[];

  create(createBrandDto: CreateBrandDto) {
    const new_brand = {
      id: uuid(),
      createdAt: new Date().getTime(),
      ...createBrandDto,
    };
    this.brands.push(new_brand);
    return this.brands;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((b) => b.id === id);
    if (!brand)
      throw new NotFoundException(`The brand with id ${id} does not exists`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    const updatedBrand = removeUndefined(updateBrandDto);

    const newUpdatedBrand: Brand = {
      ...brand,
      ...updatedBrand,
      updatedAt: new Date().getTime(),
      id,
    };

    this.brands = this.brands.map((b) => (b.id === id ? newUpdatedBrand : b));

    return this.brands;
  }

  remove(id: string) {
    const dbId = this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== dbId.id);
    return this.brands;
  }

  fillWithSeed(brands: Brand[]) {
    this.brands = brands;
  }
}
