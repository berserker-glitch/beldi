import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  transparentHeader?: boolean;
}

const Layout = ({ children, transparentHeader = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <Header transparent={transparentHeader} />

      <main id="main-content" className="flex-1 flex flex-col" tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
