import { Module } from '@nestjs/common';
// import { PodcastsController } from './podcasts.controller';
import { PodcastsResolver } from './podcasts.resolver';
import { PodcastsService } from './podcasts.service';

@Module({
  // controllers: [PodcastsController],
  providers: [PodcastsResolver, PodcastsService],
})
export class PodcastsModule {}
