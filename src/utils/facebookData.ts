// Utility to generate Facebook profile data for Terrell Jackson
import { getFakeImageUrl } from './fakeImages';

export interface FacebookProfileData {
  name: string;
  friends: string;
  photos: number;
  posts: Array<{
    author: string;
    authorAvatar: string;
    time: string;
    content: string;
    likes: number;
    comments: number;
    shares?: number;
    image?: string;
  }>;
  about: {
    work?: string[];
    education?: string[];
    places?: string[];
    contact?: string;
    basic?: string[];
  };
  friendsList: Array<{
    name: string;
    avatar: string;
  }>;
  peopleYouMayKnow: Array<{
    name: string;
    avatar: string;
  }>;
}

export const generateFacebookProfile = (resultId: string): FacebookProfileData => {
  // All Terrell Jackson results
  return {
    name: 'Terrell Jackson',
    friends: '920 friends',
    photos: 156,
    posts: [
      {
        author: 'Terrell Jackson',
        authorAvatar: resultId,
        time: '4d',
        content: 'Excited to announce our new tech mentorship program! Helping the next generation of developers and entrepreneurs build their careers in tech. Launching this month! #TechLeadership',
        likes: 187,
        comments: 34,
        shares: 12,
        image: 'mentorship-program'
      },
      {
        author: 'Terrell Jackson',
        authorAvatar: resultId,
        time: '1w',
        content: 'Great panel discussion at SXSW on building inclusive tech teams. Diversity isn\'t just important - it\'s essential for innovation. #TechDiversity #Leadership',
        likes: 245,
        comments: 42,
        shares: 18,
        image: 'sxsw-panel'
      },
      {
        author: 'Terrell Jackson',
        authorAvatar: resultId,
        time: '2w',
        content: 'Proud to support Austin\'s growing tech ecosystem. Connecting entrepreneurs with resources, mentorship, and opportunities. Let\'s build something amazing together!',
        likes: 198,
        comments: 31,
        shares: 14,
        image: 'tech-ecosystem'
      }
    ],
    about: {
      work: ['VP of Technology Strategy at Tech Leadership Collective', 'Austin Tech Council Board Member'],
      education: ['Morehouse College'],
      places: ['Austin, Texas'],
      basic: ['Tech leader, mentor, community builder']
    },
    friendsList: [
      { name: 'Marcus Thompson', avatar: 'marcus' },
      { name: 'Jennifer Davis', avatar: 'jennifer' },
      { name: 'Christopher Lee', avatar: 'christopher' },
      { name: 'Amanda Foster', avatar: 'amanda' },
      { name: 'Brandon Carter', avatar: 'brandon' },
      { name: 'Michelle Park', avatar: 'michelle' },
      { name: 'David Rodriguez', avatar: 'david' },
      { name: 'Angela Williams', avatar: 'angela' },
      { name: 'James Martinez', avatar: 'james' }
    ],
    peopleYouMayKnow: [
      { name: 'Sarah Chen', avatar: 'sarah' },
      { name: 'Alex Thompson', avatar: 'alex' },
      { name: 'Nicole Anderson', avatar: 'nicole' },
      { name: 'Kevin Johnson', avatar: 'kevin' },
      { name: 'Lisa Wong', avatar: 'lisa' }
    ]
  };
};
