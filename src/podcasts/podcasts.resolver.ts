import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreatePodcastInput,
  CreatePodcastOutput,
} from './dto/create-podcast.dto';
import {
  DeletePodcastInput,
  DeletePodcastOutput,
} from './dto/delete-podcast.dto';
import {
  SearchPodcastInput,
  SearchPodcastOutput,
} from './dto/search-podcast.dto';
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
}
