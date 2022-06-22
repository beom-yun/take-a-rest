import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePodcastDto {
  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsNumber()
  rating: number;
}
