'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { MovieRowProps } from '@/types/movie';
import { getImageUrl } from '@/lib/tmdb';

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  // Filter out movies without valid IDs
  const validMovies = movies.filter(movie => movie && movie.id && movie.title);

  if (validMovies.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4 px-4 sm:px-6 lg:px-8">
        {categoryTitle}
      </h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4">
          {validMovies.map((movie) => {
            const posterUrl = getImageUrl(movie.poster_path, 'w500');
            return (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="flex-shrink-0 group"
              >
                <div className="relative w-40 h-60 sm:w-48 sm:h-72 transition-transform duration-300 group-hover:scale-105 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={posterUrl}
                    alt={movie.title || 'Movie poster'}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 160px, 192px"
                    unoptimized={posterUrl.startsWith('data:')}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg" />
                </div>
                <p className="mt-2 text-sm font-bold line-clamp-2 max-w-[160px] sm:max-w-[192px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all">
                  {movie.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

