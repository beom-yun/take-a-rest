import { Field, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@ObjectType()
export class Episode {
  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Field((type) => String)
  @IsString()
  title: string;

  @Field((type) => String)
  @IsString()
  summary: string;
}
