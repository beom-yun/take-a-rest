import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateEpisodeInput,
  CreateEpisodeOutput,
} from './dto/create-episode.dto';
import {
  CreatePodcastInput,
  CreatePodcastOutput,
} from './dto/create-podcast.dto';
import {
  DeleteEpisodeInput,
  DeleteEpisodeOutput,
} from './dto/delete-episode.dto';
import {
  DeletePodcastInput,
  DeletePodcastOutput,
} from './dto/delete-podcast.dto';
import {
  SearchPodcastInput,
  SearchPodcastOutput,
} from './dto/search-podcast.dto';
import {
  UpdateEpisodeInput,
  UpdateEpisodeOutput,
} from './dto/update-episode.dto';
import {
  UpdatePodcastInput,
  UpdatePodcastOutput,
} from './dto/update-podcast.dto';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';

@Resolver((of) => Podcast)
export class PodcastsResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query((returns) => [Podcast])
  getAllPodcasts(): Podcast[] {
    return this.podcastsService.getAllPodcasts();
  }

  @Mutation((returns) => CreatePodcastOutput)
  createPodcast(@Args('input') createPodcastInput: CreatePodcastInput) {
    return this.podcastsService.createPodcast(createPodcastInput);
  }

  @Query((returns) => Podcast)
  getOnePodcast(
    @Args('input') searchPodcastInput: SearchPodcastInput,
  ): SearchPodcastOutput {
    return this.podcastsService.getOnePodcast(searchPodcastInput);
  }

  @Mutation((returns) => UpdatePodcastOutput)
  updatePodcast(
    @Args('input') updatePodcastInput: UpdatePodcastInput,
  ): UpdatePodcastOutput {
    return this.podcastsService.updatePodcast(updatePodcastInput);
  }

  @Mutation((returns) => DeletePodcastOutput)
  deletePodcast(
    @Args('input') deletePodcastInput: DeletePodcastInput,
  ): DeletePodcastOutput {
    return this.podcastsService.deletePodcast(deletePodcastInput);
  }

  @Query((returns) => [Episode])
  getAllEpisodes(
    @Args('input') searchPodcastInput: SearchPodcastInput,
  ): Episode[] {
    return this.podcastsService.getAllEpisodes(searchPodcastInput);
  }

  @Mutation((returns) => CreateEpisodeOutput)
  createEpisode(
    @Args('input') createEpisodeInput: CreateEpisodeInput,
  ): CreateEpisodeOutput {
    return this.podcastsService.createEpisode(createEpisodeInput);
  }

  @Mutation((returns) => UpdateEpisodeOutput)
  updateEpisode(
    @Args('input') updateEpisodeInput: UpdateEpisodeInput,
  ): UpdateEpisodeOutput {
    return this.podcastsService.updateEpisode(updateEpisodeInput);
  }

  @Mutation((returns) => DeleteEpisodeOutput)
  deleteEpisode(
    @Args('input') deleteEpisodeInput: DeleteEpisodeInput,
  ): DeleteEpisodeOutput {
    return this.podcastsService.deleteEpisode(deleteEpisodeInput);
  }
}
