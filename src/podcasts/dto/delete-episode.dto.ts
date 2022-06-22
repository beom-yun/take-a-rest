import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@ArgsType()
@InputType()
export class DeleteEpisodeInput {
  @Field((type) => Number)
  @IsNumber()
  podcastId: number;

  @Field((type) => Number)
  @IsNumber()
  id: number;
}

@ObjectType()
export class DeleteEpisodeOutput {
  @Field((type) => Boolean)
  ok: boolean;

  @Field((type) => String, { nullable: true })
  error?: string;
}
