import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Movie Not Found</h2>
        <p className="text-gray-400 mb-8">The movie you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

