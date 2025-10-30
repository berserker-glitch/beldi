import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import BusinessCard from "@/components/business/BusinessCard";
import SearchBar from "@/components/search/SearchBar";
import { searchBusinesses } from "@/data/mockData";
import { Business } from "@/types";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";
  const regionFilter = searchParams.get("region") || "";
  
  const [results, setResults] = useState<Business[]>([]);
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [minRating, setMinRating] = useState<number>(0);
  const [category, setCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    // Search businesses
    let searchResults = searchBusinesses(query, regionFilter);

    // Apply filters
    if (minRating > 0) {
      searchResults = searchResults.filter((b) => b.rating >= minRating);
    }

    if (category !== "all") {
      searchResults = searchResults.filter(
        (b) => b.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Sort results
    if (sortBy === "rating") {
      searchResults.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "reviews") {
      searchResults.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    setResults(searchResults);
    
    // Simulate network delay
    setTimeout(() => setIsLoading(false), 300);
  }, [query, regionFilter, sortBy, minRating, category]);

  const handleSearch = (newQuery: string) => {
    navigate(`/search?q=${encodeURIComponent(newQuery)}`);
  };

  const clearFilters = () => {
    setMinRating(0);
    setCategory("all");
    setSortBy("relevance");
  };

  const hasActiveFilters = minRating > 0 || category !== "all" || sortBy !== "relevance";

  // Get unique categories
  const categories = Array.from(
    new Set(searchBusinesses("").map((b) => b.category))
  );

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-foreground mb-3">Sort By</h3>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevance</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="reviews">Most Reviews</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="text-base font-bold text-foreground mb-3">Category</h3>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat.toLowerCase()}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="text-base font-bold text-foreground mb-3">Minimum Rating</h3>
        <Select value={minRating.toString()} onValueChange={(val) => setMinRating(Number(val))}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">All Ratings</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="4.5">4.5+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full"
        >
          <X size={16} className="mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen page-pattern">
        <div className="container mx-auto px-4 py-6 md:py-10">
          {/* Search Bar */}
          <div className="mb-8 max-w-3xl mx-auto">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Results Header */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {query ? `Results for "${query}"` : "All Businesses"}
                </h1>
                <p className="text-muted-foreground mt-1">
                  {isLoading ? "Searching..." : `${results.length} businesses found`}
                </p>
              </div>
              
              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="outline" size="default">
                    <SlidersHorizontal size={18} className="mr-2" />
                Filters
                    {hasActiveFilters && (
                      <Badge variant="default" className="ml-2 px-1.5 py-0.5 text-xs">
                        {[minRating > 0, category !== "all", sortBy !== "relevance"].filter(Boolean).length}
                      </Badge>
                    )}
              </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Refine your search results
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterPanel />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2">
                {sortBy !== "relevance" && (
                  <Badge variant="secondary" className="text-sm">
                    Sort: {sortBy === "rating" ? "Highest Rated" : "Most Reviews"}
                  </Badge>
                )}
                {category !== "all" && (
                  <Badge variant="secondary" className="text-sm">
                    Category: {category}
                  </Badge>
                )}
                {minRating > 0 && (
                  <Badge variant="secondary" className="text-sm">
                    {minRating}+ Stars
                  </Badge>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Filters Sidebar */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-card border-2 border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Filter size={18} className="text-primary" />
                  <h2 className="text-lg font-bold text-foreground">Filters</h2>
                </div>
                <FilterPanel />
              </div>
            </aside>

            {/* Results Grid */}
            <div className="flex-1">
              {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-96 bg-muted rounded-xl animate-pulse" />
              ))}
            </div>
              ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
                  <div className="max-w-md mx-auto space-y-4">
                    <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
                      <Filter size={32} className="text-muted-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">No Results Found</h2>
                    <p className="text-muted-foreground">
                      We couldn't find any businesses matching your search.
                      Try adjusting your filters or search for something else.
                    </p>
                    <div className="pt-4">
                      <Button onClick={clearFilters} variant="default">
                        Clear All Filters
              </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
