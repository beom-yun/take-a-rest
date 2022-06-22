import { Injectable, NotFoundException } from '@nestjs/common';
import { catchError } from 'rxjs';
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
import { DeletePodcastInput } from './dto/delete-podcast.dto';
import {
  SearchPodcastInput,
  SearchPodcastOutput,
} from './dto/search-podcast.dto';
import { UpdateEpisodeInput } from './dto/update-episode.dto';
import {
  UpdatePodcastInput,
  UpdatePodcastOutput,
} from './dto/update-podcast.dto';
import { Episode } from './entities/episode.entity';
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

  createPodcast(podcastInput: CreatePodcastInput): CreatePodcastOutput {
    try {
      this.fakeDB.push({
        id: this.fakeDB.length + 1,
        ...podcastInput,
        episodes: [],
      });
      return { ok: true };
    } catch (e) {
      return { ok: false, error: "Couldn't create a podcast" };
    }
  }

  getOnePodcast(searchPodcastInput: SearchPodcastInput): SearchPodcastOutput {
    try {
      const { id } = searchPodcastInput;
      const podcast = this.fakeDB.find((podcast) => podcast.id === id);
      if (!podcast) {
        return { ok: false, error: `Podcast with ID ${id} not found.` };
      }
      return { ok: true, podcast };
    } catch (e) {
      return { ok: false, error: "Couldn't get a podcast" };
    }
  }

  updatePodcast(updatePodcastInput: UpdatePodcastInput): UpdatePodcastOutput {
    try {
      const { id, title, category, rating } = updatePodcastInput;
      const podcast = this.getOnePodcast({ id });
      this.deletePodcast({ id });
      this.fakeDB.push({ ...podcast.podcast, ...updatePodcastInput });
      return { ok: true };
    } catch (e) {
      return { ok: false, error: "Couldn't update a podcast" };
    }
  }

  deletePodcast(deletePodcastInput: DeletePodcastInput) {
    try {
      const { id } = deletePodcastInput;
      this.getOnePodcast({ id });
      this.fakeDB = this.fakeDB.filter((podcast) => podcast.id !== id);
      return { ok: true };
    } catch (e) {
      return { ok: false, error: "Couldn't delete a podcast" };
    }
  }

  getAllEpisodes({ id }: SearchPodcastInput): Episode[] {
    const podcast = this.getOnePodcast({ id });
    return podcast.podcast.episodes;
  }

  createEpisode(createEpisodeInput: CreateEpisodeInput): CreateEpisodeOutput {
    try {
      const { podcastId, title, summary } = createEpisodeInput;
      this.getOnePodcast({ id: podcastId });
      this.fakeDB.find((podcast) => {
        if (podcast.id === podcastId) {
          podcast.episodes.push({
            id: podcast.episodes.length + 1,
            ...{ title, summary },
          });
        }
      });
      return { ok: true };
    } catch (e) {
      return { ok: false, error: "Couldn't create an episode" };
    }
  }

  getOneEpisode(podcastId: number, episodeId: number) {
    const podcast = this.getOnePodcast({ id: podcastId });
    const episode = podcast.podcast.episodes.find(
      (episode) => episode.id === episodeId,
    );
    if (!episode) {
      throw new NotFoundException(
        `Episode with ID ${episodeId} not found in Podcast ID ${podcastId}.`,
      );
    }
    return episode;
  }

  updateEpisode(updateEpisodeInput: UpdateEpisodeInput) {
    try {
      const { podcastId, id, title, summary } = updateEpisodeInput;
      const podcast = this.getOnePodcast({ id: podcastId });
      const episode = this.getOneEpisode(podcastId, id);
      this.deleteEpisode({ podcastId, id });
      podcast.podcast.episodes.push({ ...episode, ...updateEpisodeInput });
      return { ok: true };
    } catch (e) {
      return { ok: false, error: "Couldn't update an episode" };
    }
  }

  deleteEpisode(deleteEpisodeInput: DeleteEpisodeInput): DeleteEpisodeOutput {
    try {
      const { podcastId, id } = deleteEpisodeInput;
      const podcast = this.getOnePodcast({ id: podcastId });

      this.getOneEpisode(podcastId, id);
      podcast.podcast.episodes = podcast.podcast.episodes.filter(
        (episode) => episode.id !== id,
      );
      return { ok: true };
    } catch (e) {
      return { ok: false, error: "Couldn't delete an episode" };
    }
  }
}
