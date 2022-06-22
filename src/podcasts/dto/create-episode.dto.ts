import { IsString } from 'class-validator';

export class CreateEpisodeDto {
  @IsString()
  title: string;

  @IsString()
  summary: string;
}
