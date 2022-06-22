import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class UpdateEpisodeInput {
  @Field((type) => Number)
  @IsNumber()
  podcastId: number;

  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Field((type) => String, { nullable: true })
  @IsString()
  title?: string;

  @Field((type) => String, { nullable: true })
  @IsString()
  summary?: string;
}

@ObjectType()
export class UpdateEpisodeOutput {
  @Field((type) => Boolean)
  ok: boolean;

  @Field((type) => String, { nullable: true })
  error?: string;
}
