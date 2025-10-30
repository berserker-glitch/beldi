import { suggestedSearches } from "@/data/mockData";
import { Sparkles } from "lucide-react";

interface SuggestedSearchesProps {
  onSearchClick: (query: string) => void;
}

const SuggestedSearches = ({ onSearchClick }: SuggestedSearchesProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles size={18} className="text-primary" aria-hidden="true" />
        <h3 className="text-lg font-bold text-foreground">Popular Searches</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {suggestedSearches.map((search, index) => (
          <button
            key={index}
            onClick={() => onSearchClick(search)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-foreground bg-muted hover:bg-primary hover:text-primary-foreground border-2 border-transparent hover:border-primary rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label={`Search for ${search}`}
          >
            {search}
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        Click any suggestion to quickly find what you're looking for
      </p>
    </div>
  );
};

export default SuggestedSearches;
