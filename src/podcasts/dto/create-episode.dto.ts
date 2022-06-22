import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class CreateEpisodeDto {
  @Field((type) => String)
  @IsString()
  title: string;

  @Field((type) => String)
  @IsString()
  summary: string;
}
