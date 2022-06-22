import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { Podcast } from '../entities/podcast.entity';
import { CreatePodcastInput } from './create-podcast.dto';

@InputType()
export class UpdatePodcastInput {
  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Field((type) => String, { nullable: true })
  @IsString()
  title?: string;

  @Field((type) => String, { nullable: true })
  @IsString()
  category?: string;

  @Field((type) => Number, { nullable: true })
  @IsString()
  rating?: number;
}

@ObjectType()
export class UpdatePodcastOutput {
  @Field((type) => Boolean)
  ok: boolean;

  @Field((type) => String, { nullable: true })
  error?: string;
}
