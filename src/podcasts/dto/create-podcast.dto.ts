import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Episode } from '../entities/episode.entity';

export class CreatePodcastDto {
  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsNumber()
  rating: number;
}
