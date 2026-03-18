// Utility to generate LinkedIn profile data for Terrell Jackson
import { getFakeImageUrl } from './fakeImages';

export interface LinkedInProfileData {
  name: string;
  headline: string;
  location: string;
  link: string;
  followers: string;
  connections: string;
  about?: string;
  analytics: {
    profileViews: number;
    postImpressions: number;
    searchAppearances: number;
  };
  activity: Array<{
    type: 'post' | 'comment';
    content: string;
    likes: number;
    comments: number;
    time: string;
    image?: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    location?: string;
    logo?: string;
    description?: string[];
  }>;
  education: Array<{
    school: string;
    degree: string;
    field?: string;
    years?: string;
  }>;
  skills: string[];
  suggestedProfiles: Array<{
    name: string;
    title: string;
    company: string;
    seed: string;
  }>;
}

export const generateLinkedInProfile = (resultId: string): LinkedInProfileData => {
  // Terrell Jackson - Technology Leadership & Entrepreneurship
  return {
    name: 'Terrell Jackson',
    headline: 'VP of Technology Strategy | Tech Leadership | Startup Ecosystem Builder | Diversity & Inclusion Advocate',
    location: 'Austin, Texas, United States · Contact info',
    link: 'https://linkedin.com/in/terrelljackson-tech',
    followers: '2,150',
    connections: '2,200+',
    about: 'Results-driven technology leader with 8+ years of experience building high-performing teams and scaling innovative tech ventures. Passionate about leveraging technology to solve real-world problems and creating pathways for underrepresented groups in tech. My expertise spans software architecture, startup strategy, team leadership, and creating inclusive technology ecosystems. Committed to mentoring the next generation of diverse tech talent.',
    analytics: {
      profileViews: 134,
      postImpressions: 487,
      searchAppearances: 67
    },
    activity: [
      {
        type: 'post',
        content: 'Announcing the launch of TechCore Ventures\' new diversity and inclusion initiative. We\'re committed to investing in founders from underrepresented backgrounds. Applications open next month! #TechDiversity #Entrepreneurship',
        likes: 256,
        comments: 38,
        time: '1w',
        image: 'diversity-initiative'
      },
      {
        type: 'post',
        content: 'Just spoke at SXSW about building inclusive tech teams. Diversity isn\'t a checkbox - it\'s a competitive advantage. Excited about the conversations happening in Austin\'s tech ecosystem.',
        likes: 178,
        comments: 24,
        time: '2w',
        image: 'sxsw-speaking'
      }
    ],
    experience: [
      {
        title: 'VP of Technology Strategy',
        company: 'Tech Leadership Collective · Full-time',
        duration: 'Jan 2022 - Present · 3 yrs',
        location: 'Austin, Texas, United States · On-site',
        description: [
          'Define and execute technology strategy for rapidly scaling organization',
          'Lead team of 25+ engineers and architects across multiple product lines',
          'Drive innovation initiatives and evaluate emerging technologies',
          'Mentor and develop next-generation tech leaders'
        ]
      },
      {
        title: 'Director of Business Development',
        company: 'TechCore Ventures · Full-time',
        duration: 'Aug 2019 - Dec 2021 · 2 yrs 5 mos',
        location: 'Austin, Texas, United States · On-site',
        description: [
          'Identified and evaluated investment opportunities in emerging tech sectors',
          'Built partnerships with minority-founded tech startups',
          'Managed portfolio company relationships and provided strategic guidance',
          'Developed diversity and inclusion initiatives for portfolio companies'
        ]
      },
      {
        title: 'Senior Software Engineer',
        company: 'Microsoft · Full-time',
        duration: 'Jun 2015 - Jul 2019 · 4 yrs 2 mos',
        location: 'Seattle, Washington, United States · On-site',
        description: [
          'Architected and delivered high-impact software solutions for enterprise clients',
          'Led cross-functional teams of engineers and product managers',
          'Mentored junior engineers and contributed to technical culture',
          'Launched products used by millions of users worldwide'
        ]
      }
    ],
    education: [
      {
        school: 'Morehouse College',
        degree: 'Bachelor of Science - BS',
        field: 'Computer Science',
        years: '2011 - 2015'
      }
    ],
    skills: ['Software Architecture', 'Technology Strategy', 'Team Leadership', 'Startup Development', 'Product Management', 'Entrepreneurship', 'Diversity & Inclusion', 'Venture Capital', 'Mentorship', 'Innovation'],
    suggestedProfiles: [
      { name: 'Sarah Chen', title: 'CTO | Technology Leadership | Startup Founder', company: '2nd', seed: 'sarah' },
      { name: 'Michael Rodriguez', title: 'VP Engineering | Tech Strategy | Team Builder', company: '2nd', seed: 'michael' },
      { name: 'Jennifer Park', title: 'Startup Founder | Tech Entrepreneur | Investor', company: '3rd+', seed: 'jennifer' },
      { name: 'David Kim', title: 'Senior Software Architect | Innovation Leader', company: '3rd+', seed: 'david' },
      { name: 'Lisa Thompson', title: 'COO | Scale-up Strategy | Operations Leader', company: '3rd+', seed: 'lisa' }
    ]
  };
};

export const getCompanyLogoUrl = (company: string, size: number = 40) => {
  const domainMap: Record<string, string> = {
    'Tech Leadership Collective': 'techleadership.org',
    'TechCore Ventures': 'techcoreventures.com',
    'Microsoft': 'microsoft.com',
    'Morehouse College': 'morehouse.edu'
  };

  const domain = domainMap[company] || 'linkedin.com';
  return `https://logo.clearbit.com/${domain}?size=${size}`;
};
