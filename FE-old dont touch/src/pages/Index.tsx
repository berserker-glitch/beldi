import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SearchBar from "@/components/search/SearchBar";
import SuggestedSearches from "@/components/search/SuggestedSearches";
import ProductCard from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/data/mockData";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

const ritualCapsules = [
  {
    title: "Mint Tea Ceremony",
    description: "Hammered trays • crystal khayma glasses • organic mint bundles",
    image:
      "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db1?auto=format&fit=crop&w=800&q=80",
    href: "/search?collection=tea",
  },
  {
    title: "Medina Textiles",
    description: "Cactus silk throws & spice tinted cushions from Marrakech",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    href: "/search?category=Carpets",
  },
  {
    title: "Essaouira Glow",
    description: "Thuya wood, brass lanterns, and ocean-dyed ceramics",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    href: "/search?collection=coastal",
  },
];

const atlasJourneys = [
  {
    city: "Fès Medina",
    detail: "Majolica ateliers",
    story:
      "Hand-thrown bowls fired in century-old kilns with cobalt pigments sourced from Chefchaouen.",
  },
  {
    city: "Marrakech",
    detail: "Leather souks",
    story: "Vegetable-tanned hides softened with rose water and finished with brass zippers.",
  },
  {
    city: "Taza Mountains",
    detail: "Berber cooperatives",
    story: "Women weave Beni Ourain rugs over winter, knot by knot beside cedar fireplaces.",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const featuredProducts = useMemo<Product[]>(() => getFeaturedProducts(6), []);

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <Layout transparentHeader>
      <div className="space-y-24 pb-20">
        <section className="relative overflow-hidden pt-12">
          <div className="container mx-auto grid gap-10 rounded-[2.5rem] border border-white/40 bg-white/70 p-8 shadow-[0_25px_60px_rgba(34,22,18,0.12)] backdrop-blur lg:grid-cols-2">
            <div className="space-y-6">
              <Badge className="w-fit rounded-full bg-primary/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                Maison Beldi
              </Badge>
              <div className="space-y-4">
                <h1 className="font-display text-4xl leading-tight text-secondary lg:text-5xl">
                  The Moroccan pieces you were meant to collect.
                </h1>
                <p className="text-base text-muted-foreground">
                  We scout hidden riads, desert cooperatives, and coastal studios to bring you
                  soulful objects — available on-demand, globally shipped.
                </p>
              </div>
              <SearchBar onSearch={handleSearch} />
              <SuggestedSearches onSearchClick={handleSearch} />
              <div className="flex flex-wrap gap-6 pt-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                <span>47 verified ateliers</span>
                <span>Delivery in 3-7 days</span>
                <span>Concierge sourcing</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {ritualCapsules.map((capsule) => (
                <button
                  key={capsule.title}
                  className="group overflow-hidden rounded-[1.5rem] border border-border/70 bg-white text-left shadow-md transition hover:-translate-y-1"
                  onClick={() => navigate(capsule.href)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={capsule.image}
                      alt={capsule.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white" />
                  </div>
                  <CardContent className="space-y-2 p-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      Capsule
                    </p>
                    <h3 className="text-lg font-semibold text-secondary">{capsule.title}</h3>
                    <p className="text-sm text-muted-foreground">{capsule.description}</p>
                  </CardContent>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Collections</p>
              <h2 className="text-3xl font-semibold text-secondary">Rituals to step into</h2>
              <p className="text-sm text-muted-foreground">
                Tap into heritage craft through curated lifestyle edits.
              </p>
            </div>
            <Button variant="link" className="text-primary" onClick={() => navigate("/search")}>
              Shop all capsules
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ritualCapsules.map((capsule) => (
              <Card
                key={capsule.title}
                className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-white/80 shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={capsule.image}
                    alt={capsule.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/80">Ritual</p>
                    <h3 className="text-2xl font-semibold text-white">{capsule.title}</h3>
                  </div>
                </div>
                <CardContent className="space-y-3 p-5">
                  <p className="text-sm text-secondary">{capsule.description}</p>
                  <Button
                    variant="ghost"
                    className="group w-fit px-0 text-primary"
                    onClick={() => navigate(capsule.href)}
                  >
                    Explore capsule
                    <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="flex items-center justify-between pb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Featured</p>
              <h2 className="text-3xl font-semibold text-secondary">Seasonal capsule</h2>
              <p className="text-sm text-muted-foreground">
                Limited pieces ready to ship from artisan studios.
              </p>
            </div>
            <Badge className="rounded-full bg-primary/10 px-4 py-2 text-primary">
              {featuredProducts.length} pieces
            </Badge>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="rounded-[2rem] border border-border/70 bg-white/80 p-8 shadow-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Atlas Dispatch
                </p>
                <h2 className="text-3xl font-semibold text-secondary">Journeys behind each piece</h2>
                <p className="text-sm text-muted-foreground">
                  Travel with us through sourcing trips documented in the latest field notes.
                </p>
              </div>
              <Button
                className="rounded-full bg-secondary text-secondary-foreground"
                onClick={() => navigate("/reviews")}
              >
                Read journal
              </Button>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {atlasJourneys.map((journey) => (
                <div
                  key={journey.city}
                  className="rounded-2xl border border-border/70 bg-white/70 p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3 text-sm font-semibold text-secondary">
                    <MapPin size={16} />
                    {journey.city}
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    {journey.detail}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{journey.story}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid gap-6 rounded-[2rem] border border-border/70 bg-secondary text-secondary-foreground p-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Beldi Concierge
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Need a bespoke sourcing trip?
              </h2>
              <p className="text-sm text-white/80">
                Our stylists will handpick items from the souk for your home, event, or gifting
                list. Share mood boards and we ship curated edits within days.
              </p>
              <Button
                className="rounded-full bg-white/90 text-secondary"
                onClick={() => navigate("/search?q=concierge")}
              >
                Start a brief
              </Button>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                    Testimonials
                  </p>
                  <p className="text-lg font-semibold text-white">“Like shopping in the medina.”</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/80">
                “The concierge sourced antique zellige tiles and coordinated shipping to Paris in
                four days. Everything arrived with provenance notes.”
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;

