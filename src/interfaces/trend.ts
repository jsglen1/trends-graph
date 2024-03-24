export interface Topic {
  mid: string;
  title: string;
  type: string;
}

export interface ApiResponseTrend {
  default: {
    topics: Topic[];
  };
}

export interface ApiTrendingSearchesResponse {
  default: {
    trendingSearchesDays: {
      date: string;
      formattedDate: string;
      trendingSearches: {
        title: {
          query: string;
          exploreLink: string;
        };
        formattedTraffic: string;
        relatedQueries: string[];
        image: {
          newsUrl: string;
          source: string;
          imageUrl: string;
        };
        articles: {
          title: string;
          timeAgo: string;
          source: string;
          image: {
            newsUrl: string;
            source: string;
            imageUrl: string;
          };
          url: string;
          snippet: string;
        }[];
        shareUrl: string;
      }[];
    }[];
    endDateForNextRequest: string;
    rssFeedPageUrl: string;
  };
}

export interface TimelineDataPoint {
  time: string;
  formattedTime: string;
  formattedAxisTime: string;
  value: number[];
  hasData: boolean[];
  formattedValue: string[];
}

export interface TimelineData {
  default: {
    timelineData: TimelineDataPoint[];
  };
}

export interface ApiTimelineDataResponse {
  results: TimelineData;
}
