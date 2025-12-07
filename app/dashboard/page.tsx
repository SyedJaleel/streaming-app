import React from 'react';
import MovieList from './components/MovieList';

const DashboardPage = async () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Streaming Service Dashboard</h1>
      <MovieList />
    </div>
  );
};

export default DashboardPage;