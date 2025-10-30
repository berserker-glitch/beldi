import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchBusinesses } from "@/data/mockData";
import { debounce } from "@/utils/helpers";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

const SearchBar = ({
  onSearch,
  placeholder = "Search for services, products, or locations...",
  autoFocus = false,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Debounced search for autocomplete
  useEffect(() => {
    const debouncedSearch = debounce((searchQuery: string) => {
      if (searchQuery.trim().length >= 2) {
        const results = searchBusinesses(searchQuery);
        const suggestionsList = results
          .slice(0, 5)
          .map((business) => business.name);
        
        // Also add category suggestions
        const categoryMatches = results
          .filter((b) => b.category.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((b) => b.category);
        
        const uniqueSuggestions = Array.from(
          new Set([...suggestionsList, ...categoryMatches])
        ).slice(0, 6);

        setSuggestions(uniqueSuggestions);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    debouncedSearch(query);
  }, [query]);

  // Handle click outside to close suggestions
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

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
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
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
            size={20}
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
            className="pl-12 pr-24 h-14 text-base border-2 border-border focus:border-primary transition-all duration-200 rounded-lg shadow-sm"
            autoFocus={autoFocus}
            aria-label="Search for businesses, products, or services"
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
            size="default"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md transition-all duration-200"
            disabled={!query.trim()}
            aria-label="Search"
          >
          Search
        </Button>
      </div>
    </form>

      {/* Autocomplete Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          id="search-suggestions"
          className="absolute z-50 w-full mt-2 bg-card border-2 border-border rounded-lg shadow-lg overflow-hidden animate-slide-up"
          role="listbox"
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              id={`suggestion-${index}`}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full text-left px-4 py-3 transition-colors duration-150 ${
                index === activeSuggestionIndex
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              } ${index !== suggestions.length - 1 ? "border-b border-border" : ""}`}
              role="option"
              aria-selected={index === activeSuggestionIndex}
            >
              <div className="flex items-center">
                <Search size={16} className="mr-3 opacity-60" aria-hidden="true" />
                <span className="text-sm font-medium">{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
