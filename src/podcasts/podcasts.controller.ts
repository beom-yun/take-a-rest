// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Patch,
//   Post,
// } from '@nestjs/common';
// import { CreateEpisodeDto } from './dto/create-episode.dto';
// import { CreatePodcastInput } from './dto/create-podcast.dto';
// import { UpdateEpisodeDto } from './dto/update-episode.dto';
// import { UpdatePodcastInput } from './dto/update-podcast.dto';
// import { Podcast } from './entities/podcast.entity';
// import { PodcastsService } from './podcasts.service';

// @Controller('podcasts')
// export class PodcastsController {
//   constructor(private readonly podcastsService: PodcastsService) {}

//   @Get()
//   getAllPodcasts(): Podcast[] {
//     return this.podcastsService.getAllPodcasts();
//   }

//   @Post()
//   createPodcast(@Body() podcastDto: CreatePodcastInput) {
//     return this.podcastsService.createPodcast(podcastDto);
//   }

//   @Get(':id')
//   getOnePodcast(@Param('id') podcastId: number): Podcast {
//     return this.podcastsService.getOnePodcast(+podcastId);
//   }

//   @Patch(':id')
//   updatePodcast(
//     @Param('id') podcastId: number,
//     @Body() updatePodcastDto: UpdatePodcastInput,
//   ) {
//     return this.podcastsService.updatePodcast(+podcastId, updatePodcastDto);
//   }

//   @Delete(':id')
//   deletePodcast(@Param('id') podcastId: number) {
//     return this.podcastsService.deletePodcast(+podcastId);
//   }

//   @Get(':id/episodes')
//   getAllEpisodes(@Param('id') podcastId: number) {
//     return this.podcastsService.getAllEpisodes(+podcastId);
//   }

//   @Post(':id/episodes')
//   createEpisode(
//     @Param('id') podcastId: number,
//     @Body() episode: CreateEpisodeDto,
//   ) {
//     return this.podcastsService.createEpisode(+podcastId, episode);
//   }

//   @Patch(':id/episodes/:episodeId')
//   updateEpisode(
//     @Param('id') podcastId: number,
//     @Param('episodeId') episodeId: number,
//     @Body() updateEpisodeDto: UpdateEpisodeDto,
//   ) {
//     return this.podcastsService.updateEpisode(
//       +podcastId,
//       +episodeId,
//       updateEpisodeDto,
//     );
//   }

//   @Delete(':id/episodes/:episodeId')
//   deleteEpisode(
//     @Param('id') podcastId: number,
//     @Param('episodeId') episodeId: number,
//   ) {
//     return this.podcastsService.deleteEpisode(+podcastId, +episodeId);
//   }
// }
