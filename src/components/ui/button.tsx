import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest",
    {
        variants: {
            variant: {
                primary:
                    "bg-[#1C1C1C] text-white hover:bg-[#1C1C1C]/90 shadow-sm",
                outline:
                    "border border-[#C9A24D] text-[#C9A24D] bg-transparent hover:bg-[#C9A24D] hover:text-[#0B0B0B]",
                accent:
                    "bg-[#C9A24D] text-[#0B0B0B] hover:bg-[#E0C060]",
                ghost: "hover:bg-[#1C1C1C] text-[#D1D1D1]",
                link: "text-[#D1D1D1] underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-8 py-2",
                sm: "h-9 px-4",
                lg: "h-14 px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "accent",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
