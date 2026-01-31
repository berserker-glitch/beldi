import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartDrawer } from "../features/CartDrawer";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-beldi-sand text-beldi-charcoal antialiased selection:bg-beldi-majorelle selection:text-white">
            <Navbar />
            <CartDrawer />
            <main className="flex-grow pt-[80px]">
                {children}
            </main>
            <Footer />
        </div>
    );
}
