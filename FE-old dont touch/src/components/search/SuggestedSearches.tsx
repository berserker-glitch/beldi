import { suggestedSearches } from "@/data/mockData";
import { Sparkles } from "lucide-react";

interface SuggestedSearchesProps {
  onSearchClick: (query: string) => void;
}

const SuggestedSearches = ({ onSearchClick }: SuggestedSearchesProps) => {
  return (
    <div className="space-y-4 rounded-3xl border border-border/70 bg-white/70 p-5 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Sparkles size={18} aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
            Inspired By Travelers
          </p>
          <h3 className="text-lg font-semibold text-foreground">Popular Vibes</h3>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {suggestedSearches.map((search, index) => (
          <button
            key={search}
            onClick={() => onSearchClick(search)}
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/80 px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/5"
            aria-label={`Search for ${search}`}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground/70">
              #{index + 1}
            </span>
            <span>{search}</span>
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Tap to prefill the search with what guests love right now.
      </p>
    </div>
  );
};

export default SuggestedSearches;
