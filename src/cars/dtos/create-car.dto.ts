import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @MinLength(3)
  readonly marca: string;
  @IsString()
  readonly modelo: string;
  @IsString()
  readonly año: string;
  @IsString()
  readonly color: string;
}
