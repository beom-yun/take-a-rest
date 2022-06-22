import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';
import { Episode } from './episode.entity';

@InputType({ isAbstract: true })
@ObjectType()
export class Podcast {
  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Field((type) => String)
  @IsString()
  title: string;

  @Field((type) => String)
  @IsString()
  category: string;

  @Field((type) => Number)
  @IsString()
  rating: number;

  @Field((type) => [Episode])
  episodes: Episode[];
}
