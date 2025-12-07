import React from 'react';
import MovieList from './dashboard/components/MovieList';

const HomePage = async () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Streaming Dashboard</h1>
      <MovieList />
    </main>
  );
};

export default HomePage;