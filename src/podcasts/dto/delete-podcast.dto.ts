import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { Podcast } from '../entities/podcast.entity';

@ArgsType()
@InputType()
export class DeletePodcastInput {
  @Field((type) => Number)
  id: number;
}

@ObjectType()
export class DeletePodcastOutput {
  @Field((type) => Boolean)
  ok: boolean;

  @Field((type) => String, { nullable: true })
  error?: string;
}
