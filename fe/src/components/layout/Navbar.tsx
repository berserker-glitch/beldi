import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { Typography } from "../ui/Typography";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-beldi-sand/95 backdrop-blur-md py-4 shadow-sm border-beldi-tadelakt/20"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-beldi-charcoal"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Logo */}
                <div className="flex-1 lg:flex-none text-center lg:text-left">
                    <Typography
                        variant="h4"
                        as="a"
                        href="/"
                        className={cn(
                            "tracking-tight transition-colors",
                            isScrolled ? "text-beldi-charcoal" : "text-beldi-charcoal"
                        )}
                    >
                        BELDI
                    </Typography>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    {["Shop", "Collections", "Artisans", "About"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="font-sans text-sm uppercase tracking-widest text-beldi-charcoal hover:text-beldi-majorelle transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <button className="p-2 hover:text-beldi-majorelle transition-colors">
                        <Search size={20} />
                    </button>
                    <button className="p-2 hover:text-beldi-majorelle transition-colors relative">
                        <ShoppingBag size={20} />
                        <span className="absolute top-1 right-0 bg-beldi-majorelle text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                            0
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-[70px] bg-beldi-sand z-40 p-6 flex flex-col space-y-6 lg:hidden animate-fade-in">
                    {["Shop", "Collections", "Artisans", "About"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="font-serif text-3xl text-beldi-charcoal"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <Button variant="primary" fullWidth className="mt-8">Sign In</Button>
                </div>
            )}
        </nav>
    );
}
