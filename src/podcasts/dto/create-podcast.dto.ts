import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Podcast } from '../entities/podcast.entity';

@InputType()
@ObjectType()
export class CreatePodcastInput extends PickType(Podcast, [
  'title',
  'category',
  'rating',
]) {}

@ObjectType()
export class CreatePodcastOutput {
  @Field((type) => Boolean)
  ok: boolean;

  @Field((type) => String, { nullable: true })
  error?: string;
}
