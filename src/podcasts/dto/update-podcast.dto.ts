import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

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
