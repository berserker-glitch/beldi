import { Typography } from "../ui/Typography";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-beldi-tadelaktLight pt-20 pb-10 border-t border-beldi-tadelakt/30">
            <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand Column */}
                <div className="space-y-6">
                    <Typography variant="h4" className="text-beldi-charcoal">BELDI</Typography>
                    <Typography variant="body" className="text-gray-600 max-w-xs">
                        Preserving the heritage of Moroccan craftsmanship through modern commerce.
                    </Typography>
                    <div className="flex space-x-4 text-beldi-charcoal">
                        <Instagram size={20} className="hover:text-beldi-majorelle cursor-pointer transition-colors" />
                        <Facebook size={20} className="hover:text-beldi-majorelle cursor-pointer transition-colors" />
                        <Twitter size={20} className="hover:text-beldi-majorelle cursor-pointer transition-colors" />
                    </div>
                </div>

                {/* Shop Column */}
                <div className="space-y-6">
                    <Typography variant="h6">Shop</Typography>
                    <ul className="space-y-3">
                        {["All Products", "New Arrivals", "Rugs & Textiles", "Ceramics", "Decor"].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-gray-600 hover:text-beldi-majorelle transition-colors font-sans text-sm tracking-wide uppercase">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company Column */}
                <div className="space-y-6">
                    <Typography variant="h6">Company</Typography>
                    <ul className="space-y-3">
                        {["Our Story", "Artisans", "Sustainability", "Contact"].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-gray-600 hover:text-beldi-majorelle transition-colors font-sans text-sm tracking-wide uppercase">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="space-y-6">
                    <Typography variant="h6">Newsletter</Typography>
                    <Typography variant="small">
                        Subscribe to receive updates, access to exclusive deals, and more.
                    </Typography>
                    <div className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent border-b border-beldi-charcoal py-2 px-0 focus:outline-none focus:border-beldi-majorelle transition-colors font-sans placeholder:text-gray-500"
                        />
                        <button className="text-left font-serif font-semibold uppercase tracking-widest text-sm hover:text-beldi-majorelle transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-custom flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-8 border-t border-beldi-charcoal/10">
                <p>&copy; 2024 Beldi Store. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-beldi-charcoal">Privacy Policy</a>
                    <a href="#" className="hover:text-beldi-charcoal">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
