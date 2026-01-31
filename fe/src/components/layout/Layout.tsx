import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartDrawer } from "../features/CartDrawer";

interface LayoutProps {
    children: ReactNode;
}

import { useLocation } from "react-router-dom";

export function Layout({ children }: LayoutProps) {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className="min-h-screen flex flex-col bg-beldi-sand text-beldi-charcoal antialiased selection:bg-beldi-majorelle selection:text-white">
            <Navbar />
            <CartDrawer />
            <main className={`flex-grow ${isHomePage ? '' : 'pt-[80px]'}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
