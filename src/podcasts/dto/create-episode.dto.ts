import {
  ArgsType,
  Field,
  InputType,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
@ObjectType()
export class CreateEpisodeInput {
  @Field((type) => Number)
  @IsNumber()
  podcastId: number;

  @Field((type) => String)
  @IsString()
  title: string;

  @Field((type) => String)
  @IsString()
  summary: string;
}

@ObjectType()
export class CreateEpisodeOutput {
  @Field((type) => Boolean)
  ok: boolean;

  @Field((type) => String, { nullable: true })
  error?: string;
}
