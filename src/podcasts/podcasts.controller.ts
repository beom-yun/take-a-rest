import { Controller, Get } from '@nestjs/common';
import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Get()
  getAllPodcasts(): Podcast[] {
    return this.podcastsService.getAllPodcasts();
  }
}
