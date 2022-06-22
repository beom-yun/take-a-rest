import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { Podcast } from '../entities/podcast.entity';

@ArgsType()
@InputType()
export class SearchPodcastInput {
  @Field((type) => Number)
  id: number;
}

@ObjectType()
export class SearchPodcastOutput {
  @Field((type) => Boolean)
  ok: boolean;

  @Field((type) => String, { nullable: true })
  error?: string;

  @Field((type) => Podcast, { nullable: true })
  podcast?: Podcast;
}
