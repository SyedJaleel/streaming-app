import Image from 'next/image';
import Link from 'next/link';
import { fetchMovieById } from '@/lib/tmdb';
import { getImageUrl } from '@/lib/tmdb';
import { notFound } from 'next/navigation';

interface MovieDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { id } = await params;
  
  // Validate ID is a number
  if (!id || isNaN(Number(id))) {
    notFound();
  }
  
  let movie;
  try {
    movie = await fetchMovieById(id);
  } catch (error) {
    console.error('Error fetching movie:', error);
    if (error instanceof Error && error.message === 'MOVIE_NOT_FOUND') {
      notFound();
    }
    // For other errors, still show not found to avoid exposing API errors
    notFound();
  }
  
  // Double check movie exists
  if (!movie || !movie.id) {
    notFound();
  }

  const posterUrl = getImageUrl(movie.poster_path, 'w500');
  const backdropUrl = getImageUrl(movie.backdrop_path, 'original');

  return (
    <div className="min-h-screen">
      {/* Backdrop Image */}
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={backdropUrl}
          alt={movie.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
      </div>

      {/* Movie Details */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="relative w-full md:w-80 h-[500px] flex-shrink-0">
            <Image
              src={posterUrl}
              alt={movie.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>

          {/* Movie Info */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              {movie.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded font-semibold">
                {movie.vote_average.toFixed(1)} ⭐
              </span>
              <span className="text-gray-300">
                {new Date(movie.release_date).getFullYear()}
              </span>
              {movie.runtime && (
                <span className="text-gray-300">
                  {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                </span>
              )}
              {movie.genres && movie.genres.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-gray-800 text-white px-3 py-1 rounded text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
            </div>

            {movie.production_companies && movie.production_companies.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Production Companies</h2>
                <div className="flex flex-wrap gap-2">
                  {movie.production_companies.map((company) => (
                    <span
                      key={company.id}
                      className="bg-gray-800 text-white px-3 py-1 rounded text-sm"
                    >
                      {company.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <Link
                href="/"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

