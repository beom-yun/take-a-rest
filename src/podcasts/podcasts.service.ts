import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { CreatePodcastDto } from './dto/create-podcast.dto';
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

  //

  deleteOnePodcast(podcastId: number) {
    this.getOnePodcast(podcastId);
    this.fakeDB = this.fakeDB.filter((podcast) => podcast.id !== podcastId);
  }

  getEpisodes(podcastId: number) {
    const podcast = this.getOnePodcast(podcastId);
    return podcast.episodes;
  }

  createEpisode(podcastId: number, episode: CreateEpisodeDto) {
    this.fakeDB.find((podcast) => {
      if (podcast.id === podcastId) {
        podcast.episodes.push({
          id: podcast.episodes.length + 1,
          ...episode,
        });
      }
    });
  }

  deleteEpisode(podcastId: number, episodeId: number) {
    this.fakeDB.find((podcast) => {
      if (podcast.id === podcastId) {
        podcast.episodes = podcast.episodes.filter(
          (episode) => episode.id !== episodeId,
        );
      }
    });
  }
}
