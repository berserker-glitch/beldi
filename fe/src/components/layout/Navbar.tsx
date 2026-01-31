import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openCart, items } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-sans tracking-wide ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6 text-white"
                    }`}
            >
                <div className="container-custom flex items-center justify-between">
                    {/* Mobile Menu */}
                    <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu size={24} className={isScrolled ? "text-beldi-charcoal" : "text-white"} />
                    </button>

                    {/* Logo */}
                    <Link to="/" className={`font-serif text-2xl font-bold tracking-tighter ${isScrolled ? "text-beldi-majorelle" : "text-white"}`}>
                        BELDI
                    </Link>

                    {/* Desktop Links */}
                    <div className={`hidden md:flex items-center space-x-8 text-sm font-medium ${isScrolled ? "text-beldi-charcoal" : "text-white/90"}`}>
                        <Link to="/catalog" className="hover:text-beldi-majorelle transition-colors">Shop</Link>
                        <a href="#" className="hover:text-beldi-majorelle transition-colors">Origins</a>
                        <a href="#" className="hover:text-beldi-majorelle transition-colors">Artisans</a>
                        <a href="#" className="hover:text-beldi-majorelle transition-colors">About</a>
                    </div>

                    {/* Icons */}
                    <div className={`flex items-center space-x-2 md:space-x-4 ${isScrolled ? "text-beldi-charcoal" : "text-white"}`}>
                        <button className="p-2 hover:bg-black/5 rounded-full transition-colors hidden md:block">
                            <Search size={20} />
                        </button>
                        <button
                            className="p-2 hover:bg-black/5 rounded-full transition-colors relative"
                            onClick={openCart}
                        >
                            <ShoppingBag size={20} />
                            {items.length > 0 && (
                                <span className="absolute top-1 right-0 w-3 h-3 bg-beldi-terracotta rounded-full border border-white" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-beldi-sand z-50 transform transition-transform duration-300 flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-6 flex justify-between items-center border-b border-beldi-tadelakt/20">
                    <span className="font-serif text-2xl font-bold text-beldi-majorelle">BELDI</span>
                    <button onClick={() => setIsMobileMenuOpen(false)}>
                        <X size={24} className="text-beldi-charcoal" />
                    </button>
                </div>
                <div className="p-8 space-y-6 flex flex-col text-xl font-serif">
                    <Link to="/catalog" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
                    <a href="#" className="block py-2">Origins</a>
                    <a href="#" className="block py-2">Artisans</a>
                    <a href="#" className="block py-2">About</a>
                </div>
            </div>
        </>
    );
}
