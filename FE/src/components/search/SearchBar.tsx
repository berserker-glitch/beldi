import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchProducts, getBusinessById } from "@/data/mockData";
import { debounce, getProductCoverImage } from "@/utils/helpers";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

interface ProductSuggestion {
  id: string;
  label: string;
  meta: string;
  image: string;
}

const SearchBar = ({
  onSearch,
  placeholder = "Search for rugs, saffron, medina rituals, artisans...",
  autoFocus = false,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<ProductSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const debouncedSearch = debounce((searchQuery: string) => {
      if (searchQuery.trim().length >= 2) {
        const results = searchProducts(searchQuery).slice(0, 6);
        const suggestionPayload = results.map((product) => {
          const business = getBusinessById(product.businessId);
          return {
            id: product.id,
            label: product.name,
            meta: `${product.category}${business ? ` • ${business.city}` : ""}`,
            image: getProductCoverImage(product),
          };
        });

        setSuggestions(suggestionPayload);
        setShowSuggestions(suggestionPayload.length > 0);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 250);

    debouncedSearch(query);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: ProductSuggestion) => {
    setQuery(suggestion.label);
    onSearch(suggestion.label);
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveSuggestionIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveSuggestionIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        if (activeSuggestionIndex >= 0) {
          e.preventDefault();
          handleSuggestionClick(suggestions[activeSuggestionIndex]);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setActiveSuggestionIndex(-1);
        break;
    }
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center rounded-full border border-border/70 bg-white/80 backdrop-blur-md shadow-[0_15px_45px_rgba(34,22,18,0.08)] pr-2 pl-4">
          <Search
            className="text-muted-foreground/70 mr-2 hidden sm:flex"
            size={18}
            aria-hidden="true"
          />
          <Input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => query.length >= 2 && setShowSuggestions(true)}
            placeholder={placeholder}
            className="h-16 w-full border-none bg-transparent px-0 text-base font-medium text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0"
            autoFocus={autoFocus}
            aria-label="Search artisan products"
            aria-autocomplete="list"
            aria-controls="search-suggestions"
            aria-expanded={showSuggestions}
            aria-activedescendant={
              activeSuggestionIndex >= 0
                ? `suggestion-${activeSuggestionIndex}`
                : undefined
            }
          />
          <Button
            type="submit"
            size="lg"
            className="rounded-full bg-primary px-6 py-2 font-semibold text-primary-foreground shadow-lg hover:bg-primary-hover"
            disabled={!query.trim()}
            aria-label="Search"
          >
            Search
          </Button>
        </div>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          id="search-suggestions"
          className="absolute z-50 mt-3 w-full overflow-hidden rounded-3xl border border-border/70 bg-white shadow-[0_20px_50px_rgba(34,22,18,0.12)] animate-slide-up"
          role="listbox"
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={suggestion.id}
              id={`suggestion-${index}`}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className={`flex w-full items-center gap-4 px-4 py-3 text-left transition-colors duration-200 ${
                index === activeSuggestionIndex
                  ? "bg-primary/10"
                  : "hover:bg-muted/50"
              } ${index !== suggestions.length - 1 ? "border-b border-border/60" : ""}`}
              role="option"
              aria-selected={index === activeSuggestionIndex}
            >
              <div className="h-12 w-12 overflow-hidden rounded-2xl border border-border/60 bg-muted">
                <img
                  src={suggestion.image}
                  alt={suggestion.label}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">
                  {suggestion.label}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {suggestion.meta}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
