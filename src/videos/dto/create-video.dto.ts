import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, IsUrl } from 'class-validator';

export class CreateVideoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(1, 16)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  description: string;

  @ApiProperty()
  @IsUrl()
  url: string;
}
