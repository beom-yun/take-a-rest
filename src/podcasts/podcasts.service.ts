import { Injectable } from '@nestjs/common';
import { Podcast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  fakeDB: Podcast[] = [
    {
      id: 1,
      title: 'Relaxing Music',
      category: 'Music',
      rating: 4.4,
      episodes: [
        {
          episodeId: 1,
          episodeTitle: 'Beautiful Piano',
          episodeSummary: 'Beaultiful Piano Music',
        },
        {
          episodeId: 2,
          episodeTitle: 'Relax and Study',
          episodeSummary: 'Relaxing Music for Study and Meditation',
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
          episodeId: 1,
          episodeTitle: 'What Leadership Looks Like',
          episodeSummary:
            'From workplaces to schools to national governments...',
        },
        {
          episodeId: 2,
          episodeTitle: 'Listen Again: Sound And Silence',
          episodeSummary: 'Sound surrounds us, from cacophony even to silence.',
        },
        {
          episodeId: 3,
          episodeTitle: 'Humor Us',
          episodeSummary: 'Humor can lighten the mood.',
        },
      ],
    },
    {
      id: 3,
      title: 'SNL After Party',
      category: 'TV and Movies',
      rating: 3.5,
      episodes: [
        {
          episodeId: 1,
          episodeTitle: 'Lizzo',
          episodeSummary:
            'Enjoy these selected highlights from the full-length ...',
        },
      ],
    },
  ];

  getAllPodcasts(): Podcast[] {
    return this.fakeDB;
  }
}
