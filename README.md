# Next.js Streaming Dashboard

This project is a simplified streaming service dashboard built with Next.js 14, TypeScript, and Tailwind CSS. It fetches movie data from a public API and displays it in a user-friendly interface.

## Features

- **Movie Dashboard**: View a list of movies with details.
- **Search Functionality**: Search for movies by title.
- **Filters**: Filter movies based on various criteria.
- **Responsive Design**: The dashboard is designed to be responsive and user-friendly.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd nextjs-streaming-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Copy the `.env.local.example` to `.env.local` and fill in the necessary environment variables.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` to view the dashboard.

## Project Structure

- `app/`: Contains the main application files, including pages and API routes.
- `components/`: Contains reusable components like Navbar, SearchBar, and Filters.
- `lib/`: Contains utility functions for data fetching.
- `hooks/`: Contains custom hooks for managing movie data.
- `styles/`: Contains global styles and Tailwind CSS configuration.
- `types/`: Contains TypeScript interfaces for type safety.

## API

The application fetches movie data from a public API. Ensure you have the correct API endpoint set in your environment variables.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.