import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly marca?: string;
  @IsString()
  @IsOptional()
  readonly modelo?: string;
  @IsString()
  @IsOptional()
  readonly año?: string;
  @IsString()
  @IsOptional()
  readonly color?: string;
}
