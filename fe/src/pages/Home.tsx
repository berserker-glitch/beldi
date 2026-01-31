import { Button } from "../components/ui/Button";
import { CATEGORIES, PRODUCTS } from "../data/products";
import { ArrowRight, Star } from "lucide-react";

export function HomePage() {
    // Featured product for the "Spotlight" section
    const spotlightProduct = PRODUCTS[0];

    return (
        <div className="bg-beldi-sand text-beldi-charcoal">
            {/* HERO SECTION: Split Screen / Editorial */}
            <section className="relative h-screen min-h-[700px] flex flex-col lg:flex-row overflow-hidden border-b border-beldi-charcoal/10">
                {/* Left: Content */}
                <div className="w-full lg:w-5/12 h-screen flex flex-col justify-center px-8 md:px-16 pt-32 lg:pt-0 relative z-10 bg-beldi-sand order-2 lg:order-1">
                    <div className="space-y-6 animate-slide-up">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-px bg-beldi-majorelle" />
                            <span className="text-xs uppercase tracking-[0.2em] font-medium text-beldi-majorelle">Est. 1994 Marrakech</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tight text-beldi-charcoal">
                            Modern <br />
                            <span className="italic font-light text-beldi-terracotta">Heritage</span>
                        </h1>

                        <p className="text-lg md:text-xl font-light text-gray-600 max-w-md leading-relaxed">
                            A curated dialogue between Moroccan artisan tradition and contemporary living.
                        </p>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto rounded-none tracking-widest uppercase text-xs font-bold px-10 py-5">
                                Explore Collection
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-none tracking-widest uppercase text-xs font-bold px-10 py-5 border-beldi-charcoal hover:bg-beldi-charcoal hover:text-white">
                                Our Story
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right: Immersive Visual */}
                <div className="w-full lg:w-7/12 h-[50vh] lg:h-full relative order-1 lg:order-2">
                    <img
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2678&auto=format&fit=crop"
                        alt="Moroccan Interior"
                        className="w-full h-full object-cover animate-ken-burns"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>
            </section>

            {/* MARQUEE BANNER */}
            <div className="bg-beldi-majorelle text-white py-4 overflow-hidden whitespace-nowrap border-b border-beldi-charcoal">
                <div className="inline-flex animate-infinite-scroll items-center gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex items-center gap-8">
                            <span className="text-sm font-sans tracking-[0.2em] uppercase">Free Worldwide Shipping on Orders Over $500</span>
                            <Star size={12} fill="currentColor" className="text-beldi-sand" />
                        </div>
                    ))}
                </div>
            </div>

            {/* CATEGORY NAV - Visual Cards */}
            <section className="py-24 px-4 md:px-8">
                <div className="container-custom mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif">Curated Departments</h2>
                        <Button variant="link" className="hidden md:flex text-sm uppercase tracking-widest underline decoration-1 underline-offset-4">View All</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[auto] md:h-[600px]">
                        {/* Primary Category - Large */}
                        <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden bg-gray-100 cursor-pointer">
                            <img
                                src={CATEGORIES[0].image}
                                alt={CATEGORIES[0].name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            <div className="absolute bottom-0 left-0 p-8 md:p-12">
                                <h3 className="text-4xl md:text-6xl text-white font-serif mb-4">{CATEGORIES[0].name}</h3>
                                <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                                    <span className="uppercase tracking-widest text-sm">Shop Now</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>

                        {/* Secondary Categories - Smaller */}
                        {CATEGORIES.map((category) => (
                            <div key={category.id} className="md:col-span-4 relative group overflow-hidden bg-gray-100 cursor-pointer h-[300px] md:h-auto">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-2xl text-white font-serif mb-2">{category.name}</h3>
                                    <span className="h-px w-0 group-hover:w-full bg-white block transition-all duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EDITORIAL BLOCK - Texture & Story */}
            <section className="bg-beldi-charcoal text-beldi-sand py-32 relative overflow-hidden">
                <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="space-y-8">
                        <span className="text-beldi-majorelleLight uppercase tracking-[0.2em] text-xs font-bold">The Artisan's Touch</span>
                        <h2 className="text-5xl md:text-7xl font-serif leading-none">
                            Imperfection is <br />
                            <span className="italic text-gray-400">the only perfection.</span>
                        </h2>
                        <p className="text-lg text-gray-400 font-light max-w-md leading-relaxed">
                            We reject mass production. Each piece in our collection bears the mark of the human hand—subtle irregularities that tell a story of ancient techniques passed down through generations of Maalems.
                        </p>
                        <Button className="border border-white/20 text-white hover:bg-white hover:text-beldi-charcoal rounded-none px-10 py-4 uppercase tracking-widest text-xs mt-8">
                            Read the Journal
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="aspect-[3/4] overflow-hidden border border-white/10 p-2">
                            <img
                                src="https://images.unsplash.com/photo-1517260739337-6799d2cc9fe4?q=80&w=2669&auto=format&fit=crop"
                                alt="Hands working clay"
                                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-10 -right-10 text-9xl font-serif text-white/5 pointer-events-none select-none">
                            1994
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED / SPOTLIGHT PRODUCT */}
            <section className="py-24 border-b border-beldi-charcoal/10">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2 aspect-square bg-gray-100 overflow-hidden relative group">
                            <img
                                src={spotlightProduct.images[0]}
                                alt={spotlightProduct.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-8 bottom-8 bg-white/90 backdrop-blur-sm p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <p className="font-serif text-2xl text-beldi-charcoal">{spotlightProduct.name}</p>
                                <p className="font-sans text-sm text-gray-500 mb-4">{spotlightProduct.region}</p>
                                <Button fullWidth variant="primary" size="sm">Quick Add - ${spotlightProduct.price}</Button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="text-beldi-majorelle font-serif italic text-2xl">Editor's Pick</span>
                                <span className="h-px flex-1 bg-gray-200" />
                            </div>
                            <h2 className="text-5xl md:text-6xl font-serif text-beldi-charcoal">
                                {spotlightProduct.name}
                            </h2>
                            <p className="text-xl text-gray-600 font-light leading-relaxed">
                                {spotlightProduct.description}
                            </p>
                            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Material</p>
                                    <p className="font-serif text-xl">{spotlightProduct.material}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Region</p>
                                    <p className="font-serif text-xl">{spotlightProduct.region}</p>
                                </div>
                            </div>
                            <Button variant="primary" size="lg" className="w-auto px-12 mt-8 rounded-none uppercase tracking-widest">
                                View Product Details
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* INSTAGRAM / SOCIAL PROOF */}
            <section className="py-20 text-center">
                <p className="font-serif italic text-2xl text-gray-400 mb-8">@beldi.official</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
                    {[
                        'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=2574',
                        'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2678',
                        'https://images.unsplash.com/photo-1517260739337-6799d2cc9fe4?q=80&w=2669',
                        'https://images.unsplash.com/photo-1628102377484-938f368dd625?q=80&w=2574'
                    ].map((url, i) => (
                        <div key={i} className="aspect-square relative group overflow-hidden cursor-pointer">
                            <img src={url} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-beldi-majorelle/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                <span className="font-sans text-xs uppercase tracking-widest">Follow Us</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
