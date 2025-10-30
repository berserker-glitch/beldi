import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import SearchBar from "@/components/search/SearchBar";
import CartDrawer from "@/components/cart/CartDrawer";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    if (!transparent) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transparent]);

  const isTransparent = transparent && !isScrolled;

  return (
    <>
      <header 
        className={`z-50 w-full transition-all duration-300 text-secondary-foreground ${
          isTransparent 
            ? "absolute top-0 left-0 right-0 bg-transparent" 
            : "sticky top-0 bg-secondary shadow-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 py-3 md:py-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg px-2 py-1 shrink-0"
              aria-label="Go to homepage"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg md:text-xl">B</span>
              </div>
              <span className="text-xl md:text-2xl font-bold hidden lg:inline">
                BELDI
              </span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:block flex-1 max-w-2xl mx-4">
              <SearchBar onSearch={handleSearch} placeholder="Search businesses, products, or services..." />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4" aria-label="Main navigation">
              {/* Cart Button - Opens Drawer */}
              <Button
                variant="ghost"
                onClick={() => setCartDrawerOpen(true)}
                className="relative flex items-center gap-2 text-secondary-foreground hover:text-primary hover:bg-secondary/80 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-3 py-2"
                aria-label={`Shopping cart with ${itemCount} items`}
              >
                <ShoppingCart size={22} aria-hidden="true" />
                <span className="hidden xl:inline">Cart</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount > 9 ? "9+" : itemCount}
                  </span>
                )}
              </Button>
              {isAuthenticated ? (
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-3 py-2"
                >
                  <User size={22} aria-hidden="true" />
                  <span className="hidden xl:inline">{user?.name || "Profile"}</span>
                </Link>
              ) : (
                <Link to="/auth">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    Sign In
                  </Button>
                </Link>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-secondary-foreground hover:text-primary hover:bg-secondary/80 shrink-0"
                  aria-label="Open menu"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-background">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Search and navigate BELDI
                  </SheetDescription>
                </SheetHeader>

                {/* Mobile Search */}
                <div className="mt-6 mb-4">
                  <SearchBar 
                    onSearch={(query) => {
                      handleSearch(query);
                      setMobileMenuOpen(false);
                    }} 
                    placeholder="Search..." 
                  />
                </div>

                <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 border-b border-border focus:outline-none focus:ring-2 focus:ring-ring rounded-md px-2"
                  >
                    Home
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setCartDrawerOpen(true);
                    }}
                    className="flex items-center justify-between text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 border-b border-border focus:outline-none focus:ring-2 focus:ring-ring rounded-md px-2"
                  >
                    <span className="flex items-center gap-3">
                      <ShoppingCart size={20} aria-hidden="true" />
                      Cart
                    </span>
                    {itemCount > 0 && (
                      <span className="bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {itemCount}
                      </span>
                    )}
                  </button>
                  {isAuthenticated ? (
                    <Link
                      to="/profile"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 border-b border-border focus:outline-none focus:ring-2 focus:ring-ring rounded-md px-2"
                    >
                      <User size={20} aria-hidden="true" />
                      Profile
                    </Link>
                  ) : (
                    <Link
                      to="/auth"
                      onClick={() => setMobileMenuOpen(false)}
                      className="mt-4"
                    >
                      <Button
                        variant="default"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                      >
                        Sign In
                      </Button>
                    </Link>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      <CartDrawer open={cartDrawerOpen} onOpenChange={setCartDrawerOpen} />
    </>
  );
};

export default Header;
