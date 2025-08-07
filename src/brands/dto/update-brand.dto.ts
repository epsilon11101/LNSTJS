import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id: string;
  @IsString()
  @MinLength(3)
  readonly name: string;
}
