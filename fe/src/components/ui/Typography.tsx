import React from "react";
import { cn } from "../../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("text-beldi-charcoal", {
    variants: {
        variant: {
            h1: "font-serif font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1]",
            h2: "font-serif font-semibold text-4xl md:text-5xl leading-tight",
            h3: "font-serif font-medium text-3xl md:text-4xl",
            h4: "font-serif font-medium text-2xl md:text-3xl",
            h5: "font-serif font-medium text-xl md:text-2xl",
            h6: "font-serif font-medium text-lg uppercase tracking-wide",
            body: "font-sans text-base leading-relaxed md:text-lg",
            small: "font-sans text-sm leading-relaxed text-gray-600",
            caption: "font-sans text-xs uppercase tracking-widest text-gray-500",
        },
        color: {
            default: "text-beldi-charcoal",
            primary: "text-beldi-majorelle",
            secondary: "text-beldi-terracotta",
            white: "text-white",
            muted: "text-gray-500",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        },
    },
    defaultVariants: {
        variant: "body",
        color: "default",
        align: "left",
    },
});

type TypographyVariants = VariantProps<typeof typographyVariants>;

interface TypographyProps
    extends React.HTMLAttributes<HTMLElement>,
    TypographyVariants {
    as?: React.ElementType;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
    ({ className, variant, color, align, as, ...props }, ref) => {
        const Component = as || (variant === "body" || variant === "small" || variant === "caption" ? "p" : variant || "h1");
        // Ensure variant is treated correctly or define specific element types if needed
        // Defaulting to h1 if variant is a heading string, but 'h1' | 'h2' etc are valid variants
        // The issue was likely strict typing on 'variant' passed to cva not matching 'string'

        return (
            <Component
                // @ts-ignore
                ref={ref}
                className={cn(typographyVariants({ variant, color, align, className }))}
                {...props}
            />
        );
    }
);

Typography.displayName = "Typography";
