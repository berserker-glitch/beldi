import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-none font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-beldi-majorelle disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary:
                    "bg-beldi-majorelle text-white hover:bg-beldi-majorelle/90 shadow-sm",
                secondary:
                    "bg-beldi-terracotta text-white hover:bg-beldi-terracotta/90 shadow-sm",
                outline:
                    "border border-beldi-charcoal bg-transparent hover:bg-beldi-charcoal hover:text-white",
                ghost: "hover:bg-beldi-tadelaktLight text-beldi-charcoal",
                link: "text-beldi-majorelle underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-6 py-2",
                sm: "h-9 px-4 text-sm",
                lg: "h-14 px-10 text-lg",
                icon: "h-10 w-10",
            },
            fullWidth: {
                true: "w-full",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
            fullWidth: false,
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, fullWidth, isLoading, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, fullWidth, className }))}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
