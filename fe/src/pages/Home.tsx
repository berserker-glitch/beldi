import { Typography } from "../components/ui/Typography";
import { Button } from "../components/ui/Button";
import { CATEGORIES, PRODUCTS } from "../data/products";
import { ArrowRight } from "lucide-react";

export function HomePage() {
    const featuredProducts = PRODUCTS.slice(0, 3);

    return (
        <div className="space-y-24 pb-24">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2678&auto=format&fit=crop')" }}>
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                </div>

                <div className="relative container-custom text-center space-y-8 animate-fade-in text-white z-10">
                    <Typography variant="caption" className="text-white/90 tracking-[0.3em] uppercase">
                        Est. 1994 &bull; Marrakech
                    </Typography>
                    <Typography variant="h1" className="text-white text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none drop-shadow-sm">
                        The Soul of <br /><span className="italic font-light">Morocco</span>
                    </Typography>
                    <Typography variant="body" className="max-w-xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed font-light">
                        Handcrafted heritage for the modern home. Rugs, ceramics, and artifacts sourced directly from the Atlas Mountains.
                    </Typography>
                    <div className="pt-8">
                        <Button variant="primary" size="lg" className="bg-white text-beldi-majorelle hover:bg-beldi-sand rounded-none px-10 tracking-widest uppercase text-sm font-semibold">
                            Shop The Collection
                        </Button>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 order-2 lg:order-1">
                    <div className="w-16 h-0.5 bg-beldi-majorelle" />
                    <Typography variant="h2" className="text-beldi-charcoal text-5xl">
                        Modern <span className="text-beldi-majorelle italic">Beldi</span>
                    </Typography>
                    <Typography variant="body" className="text-gray-600 text-lg leading-relaxed">
                        We bridge the gap between ancient craftsmanship and contemporary design. Every piece in our collection tells a story of patience, skill, and heritage.
                        From the clay pits of Tamegroute to the weaving looms of the High Atlas, we bring you the authentic spirit of Morocco.
                    </Typography>
                    <Button variant="link" className="px-0 text-beldi-terracotta group text-lg">
                        Read Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden order-1 lg:order-2 group">
                    <div className="absolute inset-0 bg-beldi-majorelle/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                        src="https://images.unsplash.com/photo-1517260739337-6799d2cc9fe4?q=80&w=2669&auto=format&fit=crop"
                        alt="Artisan at work"
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </div>
            </section>

            {/* Categories Grid */}
            <section className="container-custom">
                <div className="flex justify-between items-end mb-12">
                    <Typography variant="h3">Collections</Typography>
                    <Button variant="link" className="hidden md:flex">View All</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[600px]">
                    {CATEGORIES.map((category, idx) => (
                        <div
                            key={category.id}
                            className={`relative group overflow-hidden cursor-pointer ${idx === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'
                                }`}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute bottom-6 left-6 z-20 text-white">
                                <Typography variant={idx === 0 ? "h3" : "h4"} className="text-white mb-2">{category.name}</Typography>
                                <span className="inline-block w-0 group-hover:w-12 h-px bg-white transition-all duration-300 align-middle mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100" />
                                <span className="text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 inline-block align-middle">Explore</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="bg-beldi-tadelaktLight/20 py-24">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <Typography variant="caption" className="text-beldi-majorelle">Curated For You</Typography>
                        <Typography variant="h2">Featured Treasures</Typography>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="group cursor-pointer">
                                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                    {/* Quick Action Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm border-t border-gray-100 flex justify-between items-center">
                                        <span className="font-serif text-beldi-majorelle cursor-pointer hover:underline">Quick View</span>
                                        <span className="font-serif cursor-pointer hover:text-beldi-majorelle">+ Add to Cart</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Typography variant="h5" className="group-hover:text-beldi-majorelle transition-colors">{product.name}</Typography>
                                    <div className="flex justify-between items-center text-sm font-sans">
                                        <span className="text-gray-500">{product.material}</span>
                                        <span className="font-medium text-beldi-charcoal">${product.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Button variant="outline" size="lg">View All Products</Button>
                    </div>
                </div>
            </section>

            {/* Story / Parallax Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=2574&auto=format&fit=crop')" }}>
                    <div className="absolute inset-0 bg-beldi-majorelle/80 mix-blend-multiply" />
                </div>
                <div className="relative container-custom text-center space-y-8 text-white max-w-4xl mx-auto">
                    <Typography variant="h2" className="text-5xl md:text-7xl">Preserving Heritage</Typography>
                    <Typography variant="body" className="text-xl md:text-2xl font-serif leading-relaxed text-white/90">
                        "We don't just sell objects. We act as custodians of a disappearing art form, supporting over 200 artisan families across Morocco."
                    </Typography>
                    <Button variant="primary" className="bg-white text-beldi-majorelle hover:bg-beldi-sand border-none mt-8">Meet The Artisans</Button>
                </div>
            </section>
        </div>
    );
}
