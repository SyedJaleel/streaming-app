import HeroBanner from '@/components/HeroBanner';
import MovieRow from '@/components/MovieRow';
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '@/lib/tmdb';
import type { Movie } from '@/types/movie';

export default async function Home() {
  // Server-side data fetching
  let popularMovies: Movie[] = [];
  let topRatedMovies: Movie[] = [];
  let upcomingMovies: Movie[] = [];
  let heroMovie: Movie | null = null;
  let apiError: string | null = null;

  try {
    // Fetch all movie categories in parallel
    [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
      fetchPopularMovies(),
      fetchTopRatedMovies(),
      fetchUpcomingMovies(),
    ]);

    // Filter out invalid movies (missing id or title)
    popularMovies = popularMovies.filter(movie => movie.id && movie.title);
    topRatedMovies = topRatedMovies.filter(movie => movie.id && movie.title);
    upcomingMovies = upcomingMovies.filter(movie => movie.id && movie.title);

    // Use the first popular movie as the hero
    heroMovie = popularMovies[0] || null;
  } catch (error) {
    console.error('Error fetching movies:', error);
    if (error instanceof Error) {
      if (error.message.includes('TMDB_API_KEY')) {
        apiError = 'API_KEY_MISSING';
      } else {
        apiError = error.message;
      }
    }
  }

  // Show error message if API key is missing
  if (apiError === 'API_KEY_MISSING') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4 text-red-600">API Key Required</h1>
          <p className="text-xl mb-6 text-gray-300">
            Please set your TMDB API key in the <code className="bg-gray-800 px-2 py-1 rounded">.env.local</code> file
          </p>
          <div className="bg-gray-900 p-6 rounded-lg text-left mb-6">
            <p className="text-sm text-gray-400 mb-2">Steps to fix:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Get your free API key from <a href="https://www.themoviedb.org/settings/api" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">TMDB</a></li>
              <li>Open <code className="bg-gray-800 px-2 py-1 rounded">.env.local</code> in your project root</li>
              <li>Replace <code className="bg-gray-800 px-2 py-1 rounded">your_api_key_here</code> with your actual API key</li>
              <li>Restart the development server</li>
            </ol>
          </div>
          <p className="text-sm text-gray-500">
            Current value: <code className="bg-gray-800 px-2 py-1 rounded text-red-400">your_api_key_here</code> (placeholder)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {heroMovie && <HeroBanner movie={heroMovie} />}
      
      <div className="py-8">
        {popularMovies.length > 0 && (
          <div id="popular" className="scroll-mt-20">
            <MovieRow movies={popularMovies} categoryTitle="Popular Movies" />
          </div>
        )}
        {topRatedMovies.length > 0 && (
          <div id="top-rated" className="scroll-mt-20">
            <MovieRow movies={topRatedMovies} categoryTitle="Top Rated" />
          </div>
        )}
        {upcomingMovies.length > 0 && (
          <div id="upcoming" className="scroll-mt-20">
            <MovieRow movies={upcomingMovies} categoryTitle="Upcoming" />
          </div>
        )}
        {popularMovies.length === 0 && topRatedMovies.length === 0 && upcomingMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No movies available. Please check your API key.</p>
          </div>
        )}
      </div>
    </div>
  );
}
