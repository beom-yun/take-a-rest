import {
  ArgsType,
  Field,
  InputType,
  ObjectType,
  PickType,
} from '@nestjs/graphql';
import { Podcast } from '../entities/podcast.entity';

@ArgsType()
@InputType()
export class DeletePodcastInput extends PickType(Podcast, ['id']) {}

@ObjectType()
export class DeletePodcastOutput {
  @Field((type) => Boolean)
  ok: boolean;

  @Field((type) => String, { nullable: true })
  error?: string;
}
