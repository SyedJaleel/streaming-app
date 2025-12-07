export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

export interface MovieDetail extends Movie {
  genres: Array<{ id: number; name: string }>;
  runtime: number;
  tagline: string;
  homepage: string;
}