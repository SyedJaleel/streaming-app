// TMDB API utility functions
import type { Movie, MovieDetails, TMDBResponse } from '@/types/movie';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export function getImageUrl(path: string | null, size: 'w500' | 'w780' | 'original' = 'w500'): string {
  if (!path) {
    // Return a placeholder image URL (using a data URI or a public placeholder)
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="750"%3E%3Crect fill="%23333" width="500" height="750"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
  }
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}

export async function fetchPopularMovies(): Promise<Movie[]> {
  const apiKey = process.env.TMDB_API_KEY;
  
  if (!apiKey) {
    throw new Error('TMDB_API_KEY is not set in environment variables');
  }

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    {
      next: { revalidate: 3600 }, // Revalidate every hour
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch popular movies');
  }

  const data: TMDBResponse = await response.json();
  return data.results;
}

export async function fetchTopRatedMovies(): Promise<Movie[]> {
  const apiKey = process.env.TMDB_API_KEY;
  
  if (!apiKey) {
    throw new Error('TMDB_API_KEY is not set in environment variables');
  }

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch top rated movies');
  }

  const data: TMDBResponse = await response.json();
  return data.results;
}

export async function fetchUpcomingMovies(): Promise<Movie[]> {
  const apiKey = process.env.TMDB_API_KEY;
  
  if (!apiKey) {
    throw new Error('TMDB_API_KEY is not set in environment variables');
  }

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch upcoming movies');
  }

  const data: TMDBResponse = await response.json();
  return data.results;
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const apiKey = process.env.TMDB_API_KEY;
  
  if (!apiKey) {
    throw new Error('TMDB_API_KEY is not set in environment variables');
  }

  if (!query || query.trim().length === 0) {
    return [];
  }

  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(query)}&page=1`,
    {
      next: { revalidate: 300 }, // Revalidate every 5 minutes for search
    }
  );

  if (!response.ok) {
    throw new Error('Failed to search movies');
  }

  const data: TMDBResponse = await response.json();
  return data.results.filter(movie => movie.id && movie.title);
}

export async function fetchMovieById(id: string): Promise<MovieDetails> {
  const apiKey = process.env.TMDB_API_KEY;
  
  if (!apiKey) {
    throw new Error('TMDB_API_KEY is not set in environment variables');
  }

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}?api_key=${apiKey}&language=en-US`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('MOVIE_NOT_FOUND');
    }
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`Failed to fetch movie: ${errorData.status_message || response.statusText}`);
  }

  const data: MovieDetails = await response.json();
  
  // Check if movie data is valid
  if (!data.id || !data.title) {
    throw new Error('MOVIE_NOT_FOUND');
  }
  
  return data;
}

