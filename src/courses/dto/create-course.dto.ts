import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUrl, Length } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty()
  @Length(1, 16)
  title: string;

  @ApiProperty()
  @Length(5, 100)
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  cover: string;
}
