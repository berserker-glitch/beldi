import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openCart, items } = useCart();
    const location = useLocation();

    // Only apply transparent-to-solid logic on the home page
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Determine navbar styles based on page and scroll state
    const getNavbarClasses = () => {
        if (!isHomePage) {
            // Always solid/glass on non-home pages
            return "bg-white/90 backdrop-blur-md shadow-sm py-4 text-beldi-charcoal border-b border-beldi-tadelakt/20";
        }

        // On Home page:
        if (isScrolled) {
            return "bg-white/90 backdrop-blur-md shadow-sm py-4 text-beldi-charcoal";
        }

        // Transparent top state on Home
        return "bg-transparent py-6 text-white";
    };

    const navClasses = getNavbarClasses();
    const isDarkText = !isHomePage || isScrolled;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 font-sans tracking-wide ${navClasses}`}
            >
                <div className="container-custom flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} className={isDarkText ? "text-beldi-charcoal" : "text-white"} />
                    </button>

                    {/* Logo */}
                    <Link to="/" className={`font-serif text-2xl font-bold tracking-tighter transition-colors duration-300 ${isDarkText ? "text-beldi-majorelle" : "text-white"}`}>
                        BELDI
                    </Link>

                    {/* Desktop Links */}
                    <div className={`hidden md:flex items-center space-x-8 text-sm font-medium transition-colors duration-300 ${isDarkText ? "text-beldi-charcoal" : "text-white/90"}`}>
                        <Link to="/catalog" className="hover:text-beldi-majorelle transition-colors uppercase tracking-widest text-xs">Shop</Link>
                        <a href="#" className="hover:text-beldi-majorelle transition-colors uppercase tracking-widest text-xs">Origins</a>
                        <a href="#" className="hover:text-beldi-majorelle transition-colors uppercase tracking-widest text-xs">Artisans</a>
                        <a href="#" className="hover:text-beldi-majorelle transition-colors uppercase tracking-widest text-xs">About</a>
                    </div>

                    {/* Icons */}
                    <div className={`flex items-center space-x-2 md:space-x-4 transition-colors duration-300 ${isDarkText ? "text-beldi-charcoal" : "text-white"}`}>
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

            {/* Mobile Menu Overlay - Premium Feel */}
            <div
                className={`fixed inset-0 z-50 transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />

                <div className="relative h-full flex flex-col p-6">
                    <div className="flex justify-between items-center mb-12 border-b border-beldi-tadelakt/20 pb-6">
                        <span className="font-serif text-3xl font-bold text-beldi-majorelle">BELDI</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                            <X size={24} className="text-beldi-charcoal" />
                        </button>
                    </div>

                    <div className="flex flex-col space-y-6 text-center">
                        <Link
                            to="/catalog"
                            className="text-3xl font-serif text-beldi-charcoal hover:text-beldi-majorelle transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Shop
                        </Link>
                        <a href="#" className="text-3xl font-serif text-beldi-charcoal hover:text-beldi-majorelle transition-colors">Origins</a>
                        <a href="#" className="text-3xl font-serif text-beldi-charcoal hover:text-beldi-majorelle transition-colors">Artisans</a>
                        <a href="#" className="text-3xl font-serif text-beldi-charcoal hover:text-beldi-majorelle transition-colors">About</a>
                    </div>

                    <div className="mt-auto space-y-4 text-center">
                        <div className="w-12 h-0.5 bg-beldi-majorelle mx-auto mb-4" />
                        <p className="text-sm text-gray-500 font-sans tracking-wide">Est. 1994 &bull; Marrakech</p>
                    </div>
                </div>
            </div>
        </>
    );
}
