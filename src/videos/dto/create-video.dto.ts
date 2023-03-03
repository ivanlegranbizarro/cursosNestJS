import { IsNotEmpty, IsString, Length, IsUrl } from 'class-validator';

export class CreateVideoDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 16)
  title: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  description: string;

  @IsUrl()
  url: string;
}
