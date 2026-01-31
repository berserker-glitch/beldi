import { Typography } from "../components/ui/Typography";
import { Button } from "../components/ui/Button";
import { CATEGORIES, PRODUCTS } from "../data/products";
import { ArrowRight } from "lucide-react";

export function HomePage() {
    const featuredProducts = PRODUCTS.slice(0, 3);

    return (
        <div className="pb-24">
            {/* Hero Section - Immersive & Premium */}
            <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2678&auto=format&fit=crop"
                        alt="Moroccan Architecture"
                        className="w-full h-full object-cover animate-ken-burns" /* Assuming animate-ken-burns or similar simple scale animation */
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
                </div>

                <div className="relative container-custom h-full flex flex-col justify-center items-center text-center text-white z-10 pt-20">
                    <div className="space-y-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                        <Typography variant="caption" className="text-white/90 tracking-[0.4em] uppercase text-sm md:text-base font-medium">
                            Est. 1994 &bull; Marrakech
                        </Typography>

                        <div className="space-y-2">
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight leading-[0.9] drop-shadow-lg">
                                The Soul of <br />
                                <span className="italic block mt-2 text-beldi-sand">Morocco</span>
                            </h1>
                        </div>

                        <p className="max-w-xl mx-auto text-lg md:text-2xl text-white/90 leading-relaxed font-light mt-8 font-serif italic">
                            Handcrafted heritage for the modern home.
                        </p>

                        <div className="pt-12">
                            <Button className="bg-white text-beldi-majorelle hover:bg-beldi-sand rounded-none px-12 py-4 h-auto tracking-[0.2em] uppercase text-sm font-bold transition-all duration-300 hover:scale-105">
                                Shop The Collection
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
                    <ArrowRight className="rotate-90 w-6 h-6" />
                </div>
            </section>

            {/* Intro Section - Editorial Style */}
            <section className="py-32 bg-beldi-sand">
                <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5 space-y-10 order-2 lg:order-1 relative">
                        <div className="absolute -left-20 top-0 w-40 h-40 bg-beldi-majorelle/5 rounded-full blur-3xl" />

                        <div className="space-y-6 relative">
                            <div className="flex items-center space-x-4">
                                <span className="h-px w-12 bg-beldi-majorelle"></span>
                                <span className="text-beldi-majorelle uppercase tracking-widest text-sm font-semibold">Our Philosophy</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-serif text-beldi-charcoal leading-tight">
                                Modern <span className="text-beldi-majorelle italic">Beldi</span>
                            </h2>

                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                                We bridge the gap between ancient craftsmanship and contemporary design. Every piece in our collection tells a story of patience, skill, and heritage.
                                From the clay pits of Tamegroute to the weaving looms of the High Atlas, we bring you the authentic spirit of Morocco.
                            </p>
                        </div>

                        <Button variant="link" className="group text-beldi-terracotta text-lg px-0 hover:no-underline">
                            Read Our Story <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </Button>
                    </div>

                    <div className="lg:col-span-7 relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/5] overflow-hidden order-1 lg:order-2 group">
                        <div className="absolute inset-0 border-[1px] border-beldi-majorelle/20 m-4 z-20 pointer-events-none" />
                        <img
                            src="https://images.unsplash.com/photo-1517260739337-6799d2cc9fe4?q=80&w=2669&auto=format&fit=crop"
                            alt="Artisan at work"
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                    </div>
                </div>
            </section>

            {/* Categories - Mosaic/Masonry Feel */}
            <section className="bg-white py-24">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-16">
                        <div className="space-y-2">
                            <span className="text-beldi-majorelle uppercase tracking-widest text-sm font-semibold">Catalog</span>
                            <h3 className="text-4xl md:text-5xl font-serif">Curated Collections</h3>
                        </div>
                        <Button variant="link" className="hidden md:flex text-beldi-charcoal hover:text-beldi-majorelle">View All Collections</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[700px]">
                        {CATEGORIES.map((category, idx) => (
                            <div
                                key={category.id}
                                className={`relative group overflow-hidden cursor-pointer ${idx === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'
                                    }`}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 z-10" />
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className={`text-white font-serif mb-2 ${idx === 0 ? "text-4xl" : "text-2xl"}`}>
                                            {category.name}
                                        </h3>
                                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            <span className="text-white text-sm uppercase tracking-widest">Explore</span>
                                            <ArrowRight className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products - Glassmorphism Cards */}
            <section className="bg-beldi-tadelaktLight/30 py-32">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <span className="text-beldi-majorelle uppercase tracking-widest text-sm font-semibold">Weekly Selection</span>
                        <h2 className="text-5xl font-serif text-beldi-charcoal">Featured Treasures</h2>
                        <p className="text-gray-500 text-lg font-light">
                            Unique pieces verified by our experts for authenticity and quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="group cursor-pointer">
                                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100 shadow-sm">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Glass Overlay Actions */}
                                    <div className="absolute inset-x-4 bottom-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                                        <div className="glass-panel p-4 flex justify-between items-center backdrop-blur-xl">
                                            <span className="font-serif text-beldi-charcoal hover:text-beldi-majorelle transition-colors">Quick View</span>
                                            <div className="h-4 w-px bg-gray-300 mx-2" />
                                            <span className="font-serif font-medium text-beldi-charcoal hover:text-beldi-majorelle transition-colors flex items-center gap-1">
                                                Add to Cart
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center space-y-1">
                                    <h5 className="text-xl font-serif text-beldi-charcoal group-hover:text-beldi-majorelle transition-colors duration-300">{product.name}</h5>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider">{product.material}</p>
                                    <p className="text-lg font-medium text-beldi-charcoal mt-1">${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <Button variant="outline" size="lg" className="border-beldi-charcoal text-beldi-charcoal hover:bg-beldi-charcoal hover:text-white px-12 tracking-widest uppercase text-sm">
                            View All Products
                        </Button>
                    </div>
                </div>
            </section>

            {/* Immersive Parallax Story Section */}
            <section className="relative py-40 overflow-hidden">
                <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=2574&auto=format&fit=crop')" }}>
                    <div className="absolute inset-0 bg-beldi-majorelle/90 mix-blend-multiply opacity-90" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="relative container-custom text-center space-y-10 text-white max-w-5xl mx-auto z-10">
                    <span className="inline-block border border-white/30 px-4 py-1 rounded-full text-sm uppercase tracking-widest backdrop-blur-sm">Sustainable Impact</span>

                    <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                        "We don't just sell objects. We act as custodians of a disappearing art form."
                    </h2>

                    <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto">
                        Supporting over 200 artisan families across Morocco, ensuring fair wages and preserving techniques that have been passed down for centuries.
                    </p>

                    <Button className="bg-white text-beldi-majorelle hover:bg-beldi-sand mt-8 px-10 py-4 text-sm font-bold uppercase tracking-widest border-none">
                        Meet The Artisans
                    </Button>
                </div>
            </section>
        </div>
    );
}
