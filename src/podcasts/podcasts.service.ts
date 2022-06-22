import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { CreatePodcastDto } from './dto/create-podcast.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { UpdatePodcastDto } from './dto/update-podcast.dto';
import { Podcast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  private fakeDB: Podcast[] = [
    {
      id: 1,
      title: 'Relaxing Music',
      category: 'Music',
      rating: 4.4,
      episodes: [
        {
          id: 1,
          title: 'Beautiful Piano',
          summary: 'Beaultiful Piano Music',
        },
        {
          id: 2,
          title: 'Relax and Study',
          summary: 'Relaxing Music for Study and Meditation',
        },
      ],
    },
    {
      id: 2,
      title: 'TED Radio Hour',
      category: 'Science Technology',
      rating: 4,
      episodes: [
        {
          id: 1,
          title: 'What Leadership Looks Like',
          summary: 'From workplaces to schools to national governments...',
        },
        {
          id: 2,
          title: 'Listen Again: Sound And Silence',
          summary: 'Sound surrounds us, from cacophony even to silence.',
        },
        {
          id: 3,
          title: 'Humor Us',
          summary: 'Humor can lighten the mood.',
        },
      ],
    },
  ];

  getAllPodcasts(): Podcast[] {
    return this.fakeDB;
  }

  createPodcast(podcastDto: CreatePodcastDto) {
    this.fakeDB.push({
      id: this.fakeDB.length + 1,
      ...podcastDto,
      episodes: [],
    });
  }

  getOnePodcast(podcastId: number): Podcast {
    const podcast = this.fakeDB.find((podcast) => podcast.id === podcastId);
    if (!podcast) {
      throw new NotFoundException(`Podcast with ID ${podcastId} not found.`);
    }
    return podcast;
  }

  updatePodcast(podcastId: number, updatePodcastDto: UpdatePodcastDto) {
    const podcast = this.getOnePodcast(podcastId);
    this.deletePodcast(podcastId);
    this.fakeDB.push({ ...podcast, ...updatePodcastDto });
  }

  deletePodcast(podcastId: number) {
    this.getOnePodcast(podcastId);
    this.fakeDB = this.fakeDB.filter((podcast) => podcast.id !== podcastId);
  }

  getAllEpisodes(podcastId: number) {
    const podcast = this.getOnePodcast(podcastId);
    return podcast.episodes;
  }

  createEpisode(podcastId: number, episode: CreateEpisodeDto) {
    this.getOnePodcast(podcastId);
    this.fakeDB.find((podcast) => {
      if (podcast.id === podcastId) {
        podcast.episodes.push({
          id: podcast.episodes.length + 1,
          ...episode,
        });
      }
    });
  }

  getOneEpisode(podcastId: number, episodeId: number) {
    const podcast = this.getOnePodcast(podcastId);
    const episode = podcast.episodes.find(
      (episode) => episode.id === episodeId,
    );
    if (!episode) {
      throw new NotFoundException(
        `Episode with ID ${episodeId} not found in Podcast ID ${podcastId}.`,
      );
    }
    return episode;
  }

  updateEpisode(
    podcastId: number,
    episodeId: number,
    updateEpisodeDto: UpdateEpisodeDto,
  ) {
    const podcast = this.getOnePodcast(podcastId);
    const episode = this.getOneEpisode(podcastId, episodeId);
    this.deleteEpisode(podcastId, episodeId);
    podcast.episodes.push({ ...episode, ...updateEpisodeDto });
  }

  deleteEpisode(podcastId: number, episodeId: number) {
    const podcast = this.getOnePodcast(podcastId);
    this.getOneEpisode(podcastId, episodeId);
    podcast.episodes = podcast.episodes.filter(
      (episode) => episode.id !== episodeId,
    );
  }
}
