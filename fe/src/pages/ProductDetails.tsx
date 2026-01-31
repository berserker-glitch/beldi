import { Button } from "../components/ui/Button";
import { PRODUCTS } from "../data/products";
import { useParams, Link } from "react-router-dom";
import { Star, Truck, ShieldCheck, MapPin, ArrowRight, Info } from "lucide-react";
import { useCart } from "../context/CartContext";

export function ProductDetailsPage() {
    const { id } = useParams();
    const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
    const { addItem } = useCart();

    // Mock related products (excluding current)
    const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

    return (
        <div className="bg-beldi-sand min-h-screen pb-24">
            {/* Minimal Breadcrumb */}
            <div className="border-b border-beldi-charcoal/10">
                <div className="container-custom py-4 flex items-center justify-between text-xs uppercase tracking-widest text-gray-500">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="hover:text-beldi-majorelle">Home</Link>
                        <span>/</span>
                        <Link to="/catalog" className="hover:text-beldi-majorelle">Shop</Link>
                        <span>/</span>
                        <span className="text-beldi-charcoal">{product.name}</span>
                    </div>
                    <div className="hidden md:block">
                        Free Global Shipping on orders over $500
                    </div>
                </div>
            </div>

            <div className="container-custom pt-8 lg:pt-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* LEFT: Scrolling Gallery */}
                    <div className="w-full lg:w-7/12 space-y-4">
                        {/* Main large image */}
                        <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden">
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        {/* Secondary images grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {product.images[1] ? (
                                <div className="aspect-square bg-gray-100 overflow-hidden">
                                    <img src={product.images[1]} alt="Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                            ) : (
                                <div className="aspect-square bg-beldi-tadelaktLight/30 flex items-center justify-center p-8 text-center">
                                    <span className="font-serif italic text-beldi-charcoal/50 text-xl">Detail texture shot coming soon</span>
                                </div>
                            )}
                            <div className="aspect-square bg-beldi-charcoal text-beldi-sand p-8 flex flex-col justify-between">
                                <div className="text-4xl font-serif">"</div>
                                <p className="font-serif text-lg leading-relaxed italic">
                                    Every imperfection is a mark of the artisan's hand, ensuring no two pieces are exactly alike.
                                </p>
                                <div className="text-xs uppercase tracking-widest opacity-50">Authenticity Guaranteed</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Sticky Product Info */}
                    <div className="w-full lg:w-5/12 relative">
                        <div className="sticky top-32 space-y-10">
                            <div className="space-y-4">
                                <span className="text-beldi-majorelle text-xs font-bold uppercase tracking-widest">{product.category}</span>
                                <h1 className="text-4xl md:text-5xl font-serif text-beldi-charcoal leading-tight">{product.name}</h1>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-2xl font-serif">${product.price}</span>
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" className="text-beldi-brass" />)}
                                        <span className="text-xs text-gray-400 ml-2">(24 Reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed font-light text-lg">
                                {product.description}
                            </p>

                            <div className="space-y-4 pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <MapPin size={16} className="text-beldi-terracotta" />
                                    <span>Origin: <span className="text-beldi-charcoal font-medium">{product.region}</span></span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Info size={16} className="text-beldi-charcoal" />
                                    <span>Material: <span className="text-beldi-charcoal font-medium">{product.material}</span></span>
                                </div>
                            </div>

                            <div className="space-y-4 pt-6">
                                <Button
                                    variant="primary"
                                    fullWidth
                                    size="lg"
                                    className="uppercase tracking-widest text-sm font-bold py-5"
                                    onClick={() => addItem(product)}
                                >
                                    Add to Cart
                                </Button>
                                <p className="text-center text-xs text-gray-400">
                                    Usually ships within 2-3 business days.
                                </p>
                            </div>

                            {/* Accordions (Visual Only for now) */}
                            <div className="border-t border-gray-200 pt-6 space-y-4">
                                <div className="group cursor-pointer">
                                    <div className="flex justify-between items-center py-2">
                                        <span className="font-serif text-lg">Shipping & Returns</span>
                                        <span className="text-xl font-light">+</span>
                                    </div>
                                </div>
                                <div className="group cursor-pointer">
                                    <div className="flex justify-between items-center py-2">
                                        <span className="font-serif text-lg">Care Instructions</span>
                                        <span className="text-xl font-light">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROMISE SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-gray-200 py-16 my-24">
                    <div className="text-center space-y-3">
                        <div className="flex justify-center mb-4"><Truck className="text-beldi-majorelle" size={32} /></div>
                        <h4 className="font-serif text-xl border-t-0">Global Shipping</h4>
                        <p className="text-sm text-gray-500 max-w-xs mx-auto">We ship to over 50 countries with fully insured, tracked delivery services.</p>
                    </div>
                    <div className="text-center space-y-3">
                        <div className="flex justify-center mb-4"><ShieldCheck className="text-beldi-majorelle" size={32} /></div>
                        <h4 className="font-serif text-xl border-t-0">Authenticity Guaranteed</h4>
                        <p className="text-sm text-gray-500 max-w-xs mx-auto">Every piece is verified by our experts on the ground in Marrakech.</p>
                    </div>
                    <div className="text-center space-y-3">
                        <div className="flex justify-center mb-4 text-beldi-majorelle font-serif text-3xl italic">100%</div>
                        <h4 className="font-serif text-xl border-t-0">Handmade</h4>
                        <p className="text-sm text-gray-500 max-w-xs mx-auto">Zero mass production. We work directly with artisan families.</p>
                    </div>
                </div>

                {/* RELATED PRODUCTS */}
                <div className="pb-12">
                    <div className="flex justify-between items-end mb-12">
                        <h3 className="text-3xl md:text-4xl font-serif">You May Also Like</h3>
                        <Link to="/catalog" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-beldi-majorelle transition-colors">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProducts.map(p => (
                            <Link to={`/product/${p.id}`} key={p.id} className="group block">
                                <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-4 relative">
                                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="block w-full bg-white/90 backdrop-blur text-center py-3 text-xs uppercase tracking-widest font-bold text-beldi-charcoal">View Details</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h5 className="font-serif text-lg group-hover:text-beldi-majorelle transition-colors">{p.name}</h5>
                                    <p className="text-sm font-medium">${p.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
