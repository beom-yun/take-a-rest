import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsDefined, IsNumber, IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Episode } from './episode.entity';

@Entity()
@InputType({ isAbstract: true })
@ObjectType()
export class Podcast {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Column()
  @Field((type) => String)
  @IsString()
  title: string;

  @Column()
  @Field((type) => String)
  @IsString()
  category: string;

  @Column()
  @Field((type) => Number)
  @IsString()
  rating: number;

  @OneToMany((type) => Episode, (episode) => episode.podcast)
  @Field((type) => [Episode])
  episodes: Episode[];
}
