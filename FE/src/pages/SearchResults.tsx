import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import SearchBar from "@/components/search/SearchBar";
import SuggestedSearches from "@/components/search/SuggestedSearches";
import { searchProducts, mockProducts } from "@/data/mockData";
import { Product } from "@/types";
import { Filter, SlidersHorizontal, Sparkles } from "lucide-react";
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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";

const priceRanges = [
  { label: "Any", value: "any", min: undefined, max: undefined },
  { label: "Under 200 MAD", value: "0-200", min: 0, max: 200 },
  { label: "200 - 600 MAD", value: "200-600", min: 200, max: 600 },
  { label: "Above 600 MAD", value: "600+", min: 600, max: undefined },
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "all";

  const [results, setResults] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState("any");
  const [onlyFeatured, setOnlyFeatured] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(mockProducts.map((product) => product.category)));
    return ["all", ...unique];
  }, []);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setIsLoading(true);
    const range = priceRanges.find((range) => range.value === priceRange);
    const filteredProducts = searchProducts(query, {
      category: selectedCategory !== "all" ? selectedCategory : undefined,
      minPrice: range?.min,
      maxPrice: range?.max,
      featuredOnly: onlyFeatured,
    });

    const sortedProducts = [...filteredProducts];
    if (sortBy === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "new") {
      sortedProducts.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    setResults(sortedProducts);
    setTimeout(() => setIsLoading(false), 250);
  }, [query, selectedCategory, sortBy, priceRange, onlyFeatured]);

  const handleSearch = (newQuery: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("q", newQuery);
    navigate(`/search?${params.toString()}`);
  };

  const updateCategory = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    navigate(`/search?${params.toString()}`);
  };

  const hasActiveFilters =
    selectedCategory !== "all" || priceRange !== "any" || onlyFeatured || sortBy !== "relevance";

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground mb-3">
          Sorting
        </h3>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Relevance" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Curated order</SelectItem>
            <SelectItem value="price-asc">Price: Low → High</SelectItem>
            <SelectItem value="price-desc">Price: High → Low</SelectItem>
            <SelectItem value="new">Featured first</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground mb-3">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => updateCategory(cat)}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                selectedCategory === cat
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/70 text-muted-foreground hover:border-primary/60"
              }`}
            >
              {cat === "all" ? "All" : cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground mb-3">
          Investment
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`w-full rounded-2xl border px-4 py-2 text-left text-sm transition ${
                priceRange === range.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/70 hover:border-primary/60"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-border/70 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-foreground">Featured only</p>
          <p className="text-xs text-muted-foreground">Show limited capsule drops</p>
        </div>
        <Switch checked={onlyFeatured} onCheckedChange={setOnlyFeatured} />
      </div>

      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={() => {
            setSelectedCategory("all");
            setPriceRange("any");
            setOnlyFeatured(false);
            setSortBy("relevance");
          }}
          className="w-full"
        >
          Reset filters
        </Button>
      )}
    </div>
  );

  return (
    <Layout>
      <div className="relative min-h-screen">
        <div className="beldi-gradient pb-16 pt-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white">
                  <Sparkles size={14} />
                  Atlas Capsule
                </div>
                <div>
                  <h1 className="font-display text-4xl text-secondary">
                    {query ? `Searching “${query}”` : "Explore Beldi curation"}
                  </h1>
                  <p className="mt-3 max-w-2xl text-base text-secondary/70">
                    Discover artisan-made goods ready to ship from Casablanca studios, medina
                    workshops, and mountain cooperatives.
                  </p>
                </div>
                <SearchBar onSearch={handleSearch} />
                <SuggestedSearches onSearchClick={handleSearch} />
              </div>
              <div className="rounded-3xl border border-white/30 bg-white/40 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.4em] text-secondary/70">
                  Today&apos;s Inventory
                </p>
                <p className="mt-4 text-4xl font-bold text-secondary">
                  {isLoading ? "…" : results.length}{" "}
                  <span className="text-base font-normal text-secondary/70">pieces</span>
                </p>
                <p className="mt-2 text-sm text-secondary/70">
                  Curated from {new Set(results.map((p) => p.businessId)).size || 1} partner ateliers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto -mt-10 px-4 pb-12">
          <div className="flex flex-col gap-8 md:flex-row">
            <aside className="w-full md:w-64">
              <div className="sticky top-28 hidden rounded-3xl border border-border/60 bg-white p-6 shadow-md md:block">
                <div className="mb-6 flex items-center gap-2">
                  <Filter size={18} className="text-primary" />
                  <h2 className="text-lg font-semibold text-secondary">Refine Ritual</h2>
                </div>
                <FilterPanel />
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button className="w-full rounded-full border border-border/60 bg-white text-secondary md:hidden">
                    <SlidersHorizontal size={16} className="mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Refine your find</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterPanel />
                  </div>
                </SheetContent>
              </Sheet>
            </aside>

            <div className="flex-1">
              {hasActiveFilters && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {selectedCategory !== "all" && (
                    <Badge variant="secondary" className="rounded-full">
                      {selectedCategory}
                    </Badge>
                  )}
                  {priceRange !== "any" && (
                    <Badge variant="secondary" className="rounded-full">
                      {priceRanges.find((range) => range.value === priceRange)?.label}
                    </Badge>
                  )}
                  {onlyFeatured && <Badge variant="secondary">Featured</Badge>}
                </div>
              )}

              {isLoading ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="h-96 animate-pulse rounded-[1.75rem] bg-muted" />
                  ))}
                </div>
              ) : results.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {results.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-border/60 bg-white p-12 text-center shadow-md">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <Filter size={32} className="text-muted-foreground" />
                  </div>
                  <h2 className="text-2xl font-semibold text-secondary">No products found</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Adjust filters or search for another ritual. Our concierge can help source a
                    bespoke piece.
                  </p>
                  <Button className="mt-4 rounded-full" onClick={() => handleSearch("")}>
                    Browse everything
                  </Button>
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
