import React from "react";
import { cn } from "../../utils/cn";
import { Check } from "lucide-react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, ...props }, ref) => {
        return (
            <label className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="peer sr-only"
                        ref={ref}
                        {...props}
                    />
                    <div className="w-5 h-5 border border-beldi-charcoal bg-transparent peer-checked:bg-beldi-majorelle peer-checked:border-beldi-majorelle transition-all duration-200" />
                    <Check
                        size={14}
                        className="absolute top-0.5 left-0.5 text-white opacity-0 peer-checked:opacity-100 transition-all duration-200"
                    />
                </div>
                {label && (
                    <span className={cn("font-sans text-sm text-beldi-charcoal group-hover:text-beldi-majorelle transition-colors selection:bg-none", className)}>
                        {label}
                    </span>
                )}
            </label>
        );
    }
);

Checkbox.displayName = "Checkbox";
