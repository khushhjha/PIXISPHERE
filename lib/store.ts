import { create } from 'zustand';
import { Photographer, FilterState } from '@/types';

interface PhotographerStore {
  photographers: Photographer[];
  filteredPhotographers: Photographer[];
  filters: FilterState;
  loading: boolean;
  setPhotographers: (photographers: Photographer[]) => void;
  setFilters: (filters: Partial<FilterState>) => void;
  setLoading: (loading: boolean) => void;
  applyFilters: () => void;
}

export const usePhotographerStore = create<PhotographerStore>((set, get) => ({
  photographers: [],
  filteredPhotographers: [],
  filters: {
    search: '',
    priceRange: [0, 20000],
    minRating: 0,
    selectedStyles: [],
    selectedCity: '',
    sortBy: 'rating-desc',
  },
  loading: false,

  setPhotographers: (photographers) => {
    set({ photographers });
    get().applyFilters();
  },

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters }
    }));
    get().applyFilters();
  },

  setLoading: (loading) => set({ loading }),

  applyFilters: () => {
    const { photographers, filters } = get();
    let filtered = [...photographers];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.location.toLowerCase().includes(searchLower) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Price range filter
    filtered = filtered.filter(p => 
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Rating filter
    filtered = filtered.filter(p => p.rating >= filters.minRating);

    // Styles filter
    if (filters.selectedStyles.length > 0) {
      filtered = filtered.filter(p => 
        filters.selectedStyles.some(style => p.styles.includes(style))
      );
    }

    // City filter
    if (filters.selectedCity) {
      filtered = filtered.filter(p => p.location === filters.selectedCity);
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating-desc':
          return b.rating - a.rating;
        case 'recent':
          return b.id - a.id;
        default:
          return 0;
      }
    });

    set({ filteredPhotographers: filtered });
  },
}));