import { Typography } from "../components/ui/Typography";
import { FilterSidebar } from "../components/features/FilterSidebar";
import { PRODUCTS } from "../data/products";
import { Button } from "../components/ui/Button";
import { useCart } from "../context/CartContext";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

export function CatalogPage() {
    const { addItem } = useCart();

    return (
        <div className="bg-beldi-sand min-h-screen pt-12 pb-24">
            <div className="container-custom">
                {/* Header */}
                <div className="flex flex-col gap-6 mb-16">
                    <div className="flex items-center gap-2 text-sm text-gray-400 uppercase tracking-widest">
                        <Link to="/" className="hover:text-beldi-majorelle">Home</Link>
                        <span>/</span>
                        <span className="text-beldi-charcoal">Shop</span>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-200 pb-8">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-serif text-beldi-charcoal mb-4">All Products</h1>
                            <Typography variant="body" className="text-gray-500 max-w-lg">
                                Explore our complete collection of handcrafted Moroccan treasures, sourced directly from artisan cooperatives.
                            </Typography>
                        </div>
                        <div className="flex items-center gap-6 mt-8 md:mt-0">
                            <span className="text-sm font-medium text-gray-400">{PRODUCTS.length} ITEMS</span>
                            <div className="flex items-center gap-2 cursor-pointer group">
                                <span className="text-sm font-medium uppercase tracking-widest group-hover:text-beldi-majorelle transition-colors">Sort By</span>
                                <ChevronDown size={14} className="text-gray-400 group-hover:text-beldi-majorelle" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-16">
                    {/* Sidebar */}
                    <FilterSidebar />

                    {/* Main Grid */}
                    <div className="flex-1">
                        {/* Mobile Filter Toggle */}
                        <div className="lg:hidden mb-8">
                            <Button variant="outline" fullWidth className="flex items-center justify-between border-gray-300">
                                <span className="uppercase tracking-widest text-xs">Filter & Sort</span>
                                <SlidersHorizontal size={16} />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            {[...PRODUCTS, ...PRODUCTS].map((product, idx) => (
                                <div key={`${product.id}-${idx}`} className="group cursor-pointer">
                                    <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                                        <img
                                            src={product.images[0]}
                                            alt={product.name}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        {product.isNew && (
                                            <span className="absolute top-0 left-0 bg-beldi-majorelle text-white text-[10px] uppercase tracking-widest px-3 py-1.5 font-bold">New Arrival</span>
                                        )}

                                        {/* Quick Add Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                                            <Button
                                                variant="primary"
                                                fullWidth
                                                className="uppercase tracking-widest text-xs font-bold shadow-lg"
                                                onClick={(e) => { e.stopPropagation(); addItem(product); }}
                                            >
                                                Add to Cart - ${product.price}
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-serif group-hover:text-beldi-majorelle transition-colors duration-300">{product.name}</h3>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest">{product.category}</p>
                                        </div>
                                        <span className="font-medium font-sans">${product.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-24 text-center">
                            <Button variant="outline" size="lg" className="px-16 border-gray-300 hover:border-beldi-charcoal hover:bg-beldi-charcoal hover:text-white transition-all uppercase tracking-widest text-xs font-bold">
                                Load More Products
                            </Button>
                            <p className="mt-4 text-xs text-gray-400 uppercase tracking-widest">Showing 8 of 24 Products</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
