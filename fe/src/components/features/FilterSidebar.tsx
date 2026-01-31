import { Typography } from "../ui/Typography";
import { Checkbox } from "../ui/Checkbox";
import { Button } from "../ui/Button";
import { CATEGORIES } from "../../data/products";
import { cn } from "../../utils/cn";
import { ChevronDown } from "lucide-react";
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
        <div className="w-full lg:w-64 space-y-8 pr-8 border-r border-beldi-tadelakt/20 h-full">
            <div className="pb-4 border-b border-beldi-tadelakt/20">
                <Typography variant="h5">Filters</Typography>
            </div>

            {/* Categories */}
            <div className="space-y-4">
                <button
                    className="flex items-center justify-between w-full group"
                    onClick={() => toggleSection('category')}
                >
                    <Typography variant="h6" className="text-sm">Category</Typography>
                    <ChevronDown size={16} className={cn("transition-transform", openSections['category'] ? "rotate-180" : "")} />
                </button>

                {openSections['category'] && (
                    <div className="space-y-3 pl-1 animate-fade-in">
                        {CATEGORIES.map(cat => (
                            <Checkbox key={cat.id} label={cat.name} name="category" value={cat.id} />
                        ))}
                    </div>
                )}
            </div>

            {/* Materials */}
            <div className="space-y-4">
                <button
                    className="flex items-center justify-between w-full group"
                    onClick={() => toggleSection('material')}
                >
                    <Typography variant="h6" className="text-sm">Material</Typography>
                    <ChevronDown size={16} className={cn("transition-transform", openSections['material'] ? "rotate-180" : "")} />
                </button>

                {openSections['material'] && (
                    <div className="space-y-3 pl-1 animate-fade-in">
                        {["Wool", "Clay", "Leather", "Brass", "Silver", "Wood"].map(mat => (
                            <Checkbox key={mat} label={mat} name="material" value={mat.toLowerCase()} />
                        ))}
                    </div>
                )}
            </div>

            {/* Price Range */}
            <div className="space-y-4">
                <button
                    className="flex items-center justify-between w-full group"
                    onClick={() => toggleSection('price')}
                >
                    <Typography variant="h6" className="text-sm">Price Range</Typography>
                    <ChevronDown size={16} className={cn("transition-transform", openSections['price'] ? "rotate-180" : "")} />
                </button>

                {openSections['price'] && (
                    <div className="space-y-3 pl-1 animate-fade-in">
                        <div className="flex gap-4">
                            <input type="number" placeholder="Min" className="w-20 border-b border-beldi-charcoal py-1 focus:outline-none focus:border-beldi-majorelle font-sans text-sm" />
                            <span className="text-gray-400">-</span>
                            <input type="number" placeholder="Max" className="w-20 border-b border-beldi-charcoal py-1 focus:outline-none focus:border-beldi-majorelle font-sans text-sm" />
                        </div>
                    </div>
                )}
            </div>

            <div className="pt-8">
                <Button variant="outline" fullWidth size="sm">Reset Filters</Button>
            </div>
        </div>
    );
}
