# Setup Instructions

## Quick Start

1. **Get TMDB API Key**
   - Visit https://www.themoviedb.org/
   - Sign up for a free account
   - Go to Settings > API
   - Request an API key (it's free and instant)
   - Copy your API key

2. **Create Environment File**
   - Create a file named `.env.local` in the root directory
   - Add the following line:
   ```
   TMDB_API_KEY=your_api_key_here
   ```
   - Replace `your_api_key_here` with your actual API key

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   - Navigate to http://localhost:3000

## Project Structure

```
project-folder/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── movie/[id]/       # Dynamic movie detail route
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── HeroBanner.tsx   # Hero banner component
│   └── MovieRow.tsx     # Movie row component
├── lib/                  # Utility functions
│   └── tmdb.ts          # TMDB API functions
└── types/                # TypeScript types
    └── movie.ts         # Movie type definitions
```

## Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable:
     - Name: `TMDB_API_KEY`
     - Value: Your TMDB API key
   - Click "Deploy"

3. **Update AI_Report.md**
   - Add your Vercel live URL
   - Add your GitHub repository link

## Troubleshooting

### Images not loading
- Make sure your TMDB API key is set correctly
- Check that `next.config.ts` has the correct image domain configuration

### API errors
- Verify your API key is correct in `.env.local`
- Check that the API key has the necessary permissions
- Ensure you're not exceeding API rate limits

### Build errors
- Run `npm run build` locally to check for errors
- Make sure all TypeScript types are correct
- Verify all imports are using the correct paths

