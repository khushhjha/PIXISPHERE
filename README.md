# Pixisphere - Photographer Platform

A modern web application for connecting customers with photographers for maternity, newborn, birthday, and special event photography.

## Features

### Category Listing Page
- **Photographer Cards**: Display name, location, price, rating, tags, and profile picture
- **Advanced Filters**: Price range slider, rating filter, style checkboxes, city dropdown
- **Search**: Debounced search by name, location, or tags
- **Sorting**: Price (low/high), rating (high to low), recently added
- **Load More**: Pagination with "Load More" button
- **Smart Suggestions**: AI-powered recommendation strip

### Photographer Profile Page
- **Gallery**: Image carousel with thumbnail navigation
- **Details**: Name, bio, styles, tags, pricing, location, rating
- **Reviews**: Customer reviews with ratings and dates
- **Inquiry Form**: Modal form for sending inquiries

## Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: JSON Server (mock REST API)

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Mock API Server**
   ```bash
   npm run api
   ```
   This starts JSON Server on http://localhost:3001

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Application runs on http://localhost:3000

## Key Implementation Details

### Filtering Logic
- **Debounced Search**: 300ms delay to prevent excessive API calls
- **Multi-criteria Filtering**: Combines search, price, rating, styles, and city filters
- **Real-time Updates**: Filters apply immediately using Zustand store
- **Sorting**: Multiple sort options with efficient array sorting

### State Management
- **Zustand Store**: Centralized state for photographers, filters, and loading states
- **Reactive Updates**: Automatic re-filtering when filter criteria change
- **Performance**: Memoized filter operations to prevent unnecessary re-renders

### Responsive Design
- **Mobile-first**: Tailwind CSS with responsive breakpoints
- **Flexible Layout**: Grid system adapts from 1 to 3 columns
- **Touch-friendly**: Large tap targets and intuitive navigation

### Performance Optimizations
- **Debounced Search**: Reduces API calls during typing
- **Lazy Loading**: Load more functionality for better initial load times
- **Efficient Filtering**: Client-side filtering after initial data fetch
- **Optimized Re-renders**: Zustand prevents unnecessary component updates

## API Endpoints

- `GET /photographers` - Fetch all photographers
- `GET /photographers/:id` - Fetch specific photographer

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with header
│   ├── page.tsx            # Category listing page
│   ├── photographer/
│   │   └── [id]/
│   │       └── page.tsx    # Photographer profile page
│   └── globals.css         # Global styles
├── components/
│   ├── PhotographerCard.tsx    # Photographer card component
│   ├── FilterSidebar.tsx       # Filter and search component
│   └── InquiryModal.tsx        # Inquiry form modal
├── lib/
│   ├── store.ts            # Zustand state management
│   └── api.ts              # API utility functions
├── types/
│   └── index.ts            # TypeScript interfaces
└── db.json                 # Mock API data
```

## Screenshots

The application features a clean, modern design with:
- Responsive photographer cards with ratings and pricing
- Comprehensive filter sidebar with real-time updates
- Professional photographer profile pages with image galleries
- Intuitive inquiry forms for customer engagement

## Future Enhancements

- Image optimization and lazy loading
- Advanced search with fuzzy matching
- User authentication and favorites
- Real-time chat with photographers
- Payment integration
- Review and rating system
- SEO optimization with metadata