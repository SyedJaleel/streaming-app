# StreamFlix - Streaming Dashboard Clone

A modern streaming service dashboard built with Next.js 14, TypeScript, and Tailwind CSS, fetching data from The Movie Database (TMDB) API.

## Features

- 🎬 **Movie Discovery**: Browse popular, top-rated, and upcoming movies
- 🎯 **Hero Banner**: Featured movie with large backdrop image
- 📱 **Responsive Design**: Works seamlessly on mobile and desktop
- ⚡ **Server-Side Rendering**: Fast initial page loads with Next.js App Router
- 🖼️ **Optimized Images**: Next.js Image component for optimal performance
- 🔍 **Movie Details**: Dynamic routing to detailed movie pages
- 🎨 **Modern UI**: Netflix-inspired design with smooth animations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: The Movie Database (TMDB)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- TMDB API Key (free at https://www.themoviedb.org/settings/api)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project-folder
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
TMDB_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
project-folder/
├── app/
│   ├── layout.tsx          # Root layout with Header
│   ├── page.tsx            # Homepage with movie rows
│   ├── movie/
│   │   └── [id]/
│   │       └── page.tsx    # Dynamic movie detail page
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroBanner.tsx     # Hero banner component
│   └── MovieRow.tsx       # Horizontal scrolling movie row
├── lib/
│   └── tmdb.ts            # TMDB API utility functions
├── types/
│   └── movie.ts           # TypeScript interfaces
└── public/                # Static assets
```

## API Integration

This project uses The Movie Database (TMDB) API. The following endpoints are used:

- `GET /movie/popular` - Popular movies
- `GET /movie/top_rated` - Top rated movies
- `GET /movie/upcoming` - Upcoming movies
- `GET /movie/{id}` - Movie details

All API calls are made server-side for security and performance.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add the `TMDB_API_KEY` environment variable in Vercel project settings
4. Deploy!

The application will automatically deploy on every push to the main branch.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TMDB_API_KEY` | Your TMDB API key | Yes |

## Development

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

## License

This project is created for educational purposes as part of a technical assessment.
