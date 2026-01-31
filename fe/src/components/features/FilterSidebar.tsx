import { Typography } from "../ui/Typography";
import { Checkbox } from "../ui/Checkbox";
import { Button } from "../ui/Button";
import { CATEGORIES } from "../../data/products";
import { cn } from "../../utils/cn";
import { Minus } from "lucide-react";
import { useState } from "react";

export function FilterSidebar() {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        category: true,
        price: true,
        material: true
    });

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="w-full lg:w-64 space-y-10 pr-8 hidden lg:block">
            <div>
                <Typography variant="h6" className="uppercase tracking-widest text-xs font-bold mb-6">Filters</Typography>
            </div>

            {/* Categories */}
            <div className="space-y-4">
                <button
                    className="flex items-center justify-between w-full group py-2"
                    onClick={() => toggleSection('category')}
                >
                    <span className="font-serif text-lg">Category</span>
                    <Minus size={12} className={cn("transition-transform duration-300", openSections['category'] ? "rotate-0" : "rotate-90")} />
                </button>

                {openSections['category'] && (
                    <div className="space-y-3 pl-1 animate-fade-in text-sm text-gray-600">
                        {CATEGORIES.map(cat => (
                            <Checkbox key={cat.id} label={cat.name} name="category" value={cat.id} />
                        ))}
                    </div>
                )}
            </div>

            <div className="h-px bg-gray-100 w-full" />

            {/* Materials */}
            <div className="space-y-4">
                <button
                    className="flex items-center justify-between w-full group py-2"
                    onClick={() => toggleSection('material')}
                >
                    <span className="font-serif text-lg">Material</span>
                    <Minus size={12} className={cn("transition-transform duration-300", openSections['material'] ? "rotate-0" : "rotate-90")} />
                </button>

                {openSections['material'] && (
                    <div className="space-y-3 pl-1 animate-fade-in text-sm text-gray-600">
                        {["Wool", "Clay", "Leather", "Brass", "Silver", "Wood"].map(mat => (
                            <Checkbox key={mat} label={mat} name="material" value={mat.toLowerCase()} />
                        ))}
                    </div>
                )}
            </div>

            <div className="h-px bg-gray-100 w-full" />

            {/* Price Range */}
            <div className="space-y-4">
                <button
                    className="flex items-center justify-between w-full group py-2"
                    onClick={() => toggleSection('price')}
                >
                    <span className="font-serif text-lg">Price</span>
                    <Minus size={12} className={cn("transition-transform duration-300", openSections['price'] ? "rotate-0" : "rotate-90")} />
                </button>

                {openSections['price'] && (
                    <div className="space-y-4 pl-1 animate-fade-in">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <span className="absolute left-0 top-1.5 text-xs">$</span>
                                <input type="number" placeholder="0" className="w-full border-b border-gray-300 py-1 pl-3 focus:outline-none focus:border-beldi-majorelle font-sans text-sm bg-transparent placeholder:text-gray-300" />
                            </div>
                            <span className="text-gray-300 text-xs uppercase">to</span>
                            <div className="relative">
                                <span className="absolute left-0 top-1.5 text-xs">$</span>
                                <input type="number" placeholder="2000" className="w-full border-b border-gray-300 py-1 pl-3 focus:outline-none focus:border-beldi-majorelle font-sans text-sm bg-transparent placeholder:text-gray-300" />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="pt-12">
                <Button variant="link" className="text-gray-400 hover:text-beldi-charcoal text-xs uppercase tracking-widest px-0">Clear All</Button>
            </div>
        </div>
    );
}
