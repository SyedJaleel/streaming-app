import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '@/types/movie';
import { getImageUrl } from '@/lib/tmdb';

interface HeroBannerProps {
  movie: Movie;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  const backdropUrl = getImageUrl(movie.backdrop_path, 'original');
  const posterUrl = getImageUrl(movie.poster_path, 'w500');

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={backdropUrl}
          alt={movie.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative w-48 h-72 flex-shrink-0 hidden md:block">
                <Image
                  src={posterUrl}
                  alt={movie.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="192px"
                />
              </div>
              <div className="flex-1 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent [text-shadow:_0_0_20px_rgba(255,255,255,0.3)]">
                  {movie.title}
                </h1>
                <p className="text-lg md:text-xl mb-4 line-clamp-3 drop-shadow-md">
                  {movie.overview}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded font-semibold">
                    {movie.vote_average.toFixed(1)} ⭐
                  </span>
                  <span className="text-gray-300">
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

