import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { CreatePodcastDto } from './dto/create-podcast.dto';
import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Get()
  getAllPodcasts(): Podcast[] {
    return this.podcastsService.getAllPodcasts();
  }

  @Post()
  createPodcast(@Body() podcastDto: CreatePodcastDto) {
    return this.podcastsService.createPodcast(podcastDto);
  }

  @Get(':id')
  getOnePodcast(@Param('id') podcastId: number): Podcast {
    return this.podcastsService.getOnePodcast(+podcastId);
  }

  //@Patch('id')

  @Delete(':id')
  deleteOnePodcast(@Param('id') podcastId: number) {
    return this.podcastsService.deleteOnePodcast(+podcastId);
  }

  @Get(':id/episodes')
  getEpisodes(@Param('id') podcastId: number) {
    return this.podcastsService.getEpisodes(+podcastId);
  }

  @Post(':id/episodes')
  createEpisode(
    @Param('id') podcastId: number,
    @Body() episode: CreateEpisodeDto,
  ) {
    return this.podcastsService.createEpisode(+podcastId, episode);
  }

  //@Patch

  @Delete(':id/episodes/:episodeId')
  deleteEpisode(
    @Param('id') podcastId: number,
    @Param('episodeId') episodeId: number,
  ) {
    return this.podcastsService.deleteEpisode(+podcastId, +episodeId);
  }
}
