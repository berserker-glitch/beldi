import { Typography } from "../components/ui/Typography";
import { Button } from "../components/ui/Button";
import { PRODUCTS } from "../data/products";
import { useParams, Link } from "react-router-dom";
import { Star, Truck, ShieldCheck, MapPin } from "lucide-react";
import { useCart } from "../context/CartContext";

export function ProductDetailsPage() {
    const { id } = useParams();
    const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0]; // Fallback to first product for demo
    const { addItem } = useCart();

    return (
        <div className="pb-20">
            {/* Breadcrumb */}
            <div className="container-custom py-6">
                <div className="flex items-center text-sm text-gray-500 font-sans">
                    <Link to="/" className="hover:text-beldi-majorelle">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/catalog" className="hover:text-beldi-majorelle">Shop</Link>
                    <span className="mx-2">/</span>
                    <span className="text-beldi-charcoal">{product.name}</span>
                </div>
            </div>

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Gallery Section - Sticky on Desktop */}
                    <div className="lg:w-3/5">
                        <div className="sticky top-24 space-y-4">
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {product.images[1] && (
                                    <div className="aspect-square bg-gray-100">
                                        <img src={product.images[1]} alt={product.name} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div className="aspect-square bg-gray-100 relative items-center justify-center flex bg-beldi-tadelaktLight/30">
                                    <Typography variant="caption" className="text-beldi-majorelle opacity-70">Detail Shot</Typography>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Info - Scrollable */}
                    <div className="lg:w-2/5 space-y-8 pt-4">
                        <div className="space-y-2">
                            <div className="flex justify-between items-start">
                                <Typography variant="h2" className="text-4xl md:text-5xl">{product.name}</Typography>
                                <div className="flex items-center gap-1 text-beldi-brass">
                                    <Star size={16} fill="currentColor" />
                                    <span className="text-sm font-sans text-beldi-charcoal pt-0.5">4.9</span>
                                </div>
                            </div>
                            <Typography variant="h4" className="text-2xl font-sans text-gray-500 font-light">${product.price}</Typography>
                        </div>

                        <div className="border-t border-b border-beldi-tadelakt/20 py-6 space-y-4">
                            <Typography variant="body" className="text-gray-600 leading-relaxed">
                                {product.description}
                            </Typography>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <MapPin size={16} className="text-beldi-terracotta" />
                                <span>Authentically sourced from <strong>{product.region}</strong></span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Button
                                variant="primary"
                                fullWidth
                                size="lg"
                                className="uppercase tracking-widest text-sm font-semibold"
                                onClick={() => addItem(product)}
                            >
                                Add to Cart &bull; ${product.price}
                            </Button>
                            <Typography variant="caption" className="text-center block text-gray-400">
                                Free shipping on orders over $200
                            </Typography>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-start gap-3">
                                <Truck className="text-beldi-majorelle shrink-0 mt-1" size={20} />
                                <div>
                                    <Typography variant="h6" className="text-sm mb-1">Global Shipping</Typography>
                                    <p className="text-xs text-gray-500">Delivered duty paid to USA & EU.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="text-beldi-majorelle shrink-0 mt-1" size={20} />
                                <div>
                                    <Typography variant="h6" className="text-sm mb-1">Authenticity Guaranteed</Typography>
                                    <p className="text-xs text-gray-500">Certificate of origin included.</p>
                                </div>
                            </div>
                        </div>

                        {/* Accordion mockup */}
                        <div className="space-y-0 border-t border-beldi-tadelakt/20 mt-8">
                            {["Dimensions & Care", "The Artisan", "Shipping & Returns"].map((item) => (
                                <button key={item} className="w-full flex justify-between items-center py-4 border-b border-beldi-tadelakt/20 hover:text-beldi-majorelle transition-colors">
                                    <span className="font-serif text-lg">{item}</span>
                                    <span>+</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
