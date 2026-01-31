import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  transparentHeader?: boolean;
}

const Layout = ({ children, transparentHeader = false }: LayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[#fdf5ec] via-[#f8ebde] to-transparent" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(72,124,138,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(198,91,50,0.16),transparent_65%)] blur-2xl" />
      </div>

      <div className="relative flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Skip to main content
        </a>

        <Header transparent={transparentHeader} />

        <main
          id="main-content"
          className="flex flex-1 flex-col"
          tabIndex={-1}
        >
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
