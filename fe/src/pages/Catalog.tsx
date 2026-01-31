import { Typography } from "../components/ui/Typography";
import { FilterSidebar } from "../components/features/FilterSidebar";
import { PRODUCTS } from "../data/products";
import { Button } from "../components/ui/Button";

export function CatalogPage() {
    return (
        <div className="container-custom py-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-beldi-tadelakt/20 pb-6">
                <div>
                    <Typography variant="caption" className="text-beldi-majorelle mb-2">Shop All</Typography>
                    <Typography variant="h2">The Collection</Typography>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <span className="text-sm text-gray-500 font-sans">{PRODUCTS.length} Products</span>
                    <select className="bg-transparent border-none text-sm font-sans font-medium text-beldi-charcoal focus:outline-none cursor-pointer">
                        <option>Sort by: Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest Arrivals</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar */}
                <aside className="hidden lg:block lg:w-64 flex-shrink-0">
                    <FilterSidebar />
                </aside>

                {/* Mobile Filter Toggle */}
                <div className="lg:hidden w-full mb-6">
                    <Button variant="outline" fullWidth>Filter & Sort</Button>
                </div>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {PRODUCTS.map((product) => (
                            <div key={product.id} className="group cursor-pointer">
                                <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-gray-100">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    {product.isNew && (
                                        <span className="absolute top-4 left-4 bg-beldi-majorelle text-white text-[10px] uppercase tracking-widest px-2 py-1">New</span>
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                    <Button
                                        variant="primary"
                                        className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                                <div className="space-y-1 text-center">
                                    <Typography variant="h5" className="text-lg group-hover:text-beldi-majorelle transition-colors">{product.name}</Typography>
                                    <Typography variant="body" className="text-gray-500 text-sm">{product.category}</Typography>
                                    <Typography variant="body" className="font-medium text-beldi-charcoal">${product.price}</Typography>
                                </div>
                            </div>
                        ))}
                        {/* Duplicating products to fill grid for demo */}
                        {PRODUCTS.map((product) => (
                            <div key={`demo-${product.id}`} className="group cursor-pointer">
                                <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-gray-100">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                    <Button
                                        variant="primary"
                                        className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                                <div className="space-y-1 text-center">
                                    <Typography variant="h5" className="text-lg group-hover:text-beldi-majorelle transition-colors">{product.name}</Typography>
                                    <Typography variant="body" className="text-gray-500 text-sm">{product.category}</Typography>
                                    <Typography variant="body" className="font-medium text-beldi-charcoal">${product.price}</Typography>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 flex justify-center">
                        <div className="flex gap-2">
                            <button className="w-10 h-10 flex items-center justify-center border border-beldi-majorelle text-beldi-majorelle bg-white font-serif">1</button>
                            <button className="w-10 h-10 flex items-center justify-center border border-transparent text-beldi-charcoal hover:bg-gray-100 font-serif">2</button>
                            <button className="w-10 h-10 flex items-center justify-center border border-transparent text-beldi-charcoal hover:bg-gray-100 font-serif">3</button>
                            <span className="flex items-center px-2">...</span>
                            <button className="w-10 h-10 flex items-center justify-center border border-transparent text-beldi-charcoal hover:bg-gray-100 font-serif">&rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
