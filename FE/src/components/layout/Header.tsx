import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, Search, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import CartDrawer from "@/components/cart/CartDrawer";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  transparent?: boolean;
}

const navLinks = [
  { label: "Collections", href: "/search?section=collections" },
  { label: "Artisans", href: "/search?tag=artisan" },
  { label: "Home Rituals", href: "/search?category=Traditional%20Wear" },
  { label: "Gifting", href: "/search?tag=gift" },
];

const Header = ({ transparent = false }: HeaderProps) => {
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass =
    transparent && !isScrolled
      ? "bg-transparent text-white border-transparent"
      : "bg-white/90 text-foreground backdrop-blur-lg border-b border-border/60 shadow-[0_10px_30px_rgba(34,22,18,0.08)]";

  const navLinkClass = (highlight?: boolean) =>
    `text-sm font-semibold tracking-wide transition-colors duration-200 ${
      transparent && !isScrolled
        ? "text-white/80 hover:text-white"
        : highlight
        ? "text-primary"
        : "text-foreground/70 hover:text-primary"
    }`;

  return (
    <>
      <div className="bg-gradient-to-r from-[#f4d7bf] via-[#f0cbb2] to-[#f6e7d9] text-secondary text-xs font-semibold tracking-[0.4em] uppercase py-2 text-center px-4 flex items-center justify-center gap-2">
        <Sparkles size={14} className="text-primary" aria-hidden="true" />
        <span>Handpicked in Moroccan medinas • Worldwide delivery</span>
      </div>

      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${headerClass}`}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center gap-4">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-border/60 bg-white/70 text-foreground shadow-sm"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[320px] bg-background p-0">
                <SheetHeader className="p-6 pb-0 text-left">
                  <SheetTitle className="text-2xl font-display tracking-[0.3em] text-primary">
                    BELDI
                  </SheetTitle>
                </SheetHeader>
                <div className="p-6">
                  <div className="space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-2xl border border-border/60 px-4 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl border border-border/60 bg-white/70 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Concierge
                    </p>
                    <Button
                      className="mt-3 w-full rounded-full bg-primary text-primary-foreground"
                      onClick={() => navigate("/search")}
                    >
                      Explore Products
                    </Button>
                  </div>
                  <div className="mt-6 border-t border-border/60 pt-6">
                    {isAuthenticated ? (
                      <Link
                        to="/profile"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-sm font-semibold text-foreground"
                      >
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={user?.avatar} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {user?.name?.charAt(0) || "U"}
                          </AvatarFallback>
                        </Avatar>
                        {user?.name || "My Account"}
                      </Link>
                    ) : (
                      <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full rounded-full bg-secondary text-secondary-foreground">
                          Sign In
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                <span className="font-display text-xl">B</span>
              </div>
              <div className="hidden lg:flex flex-col">
                <span
                  className={`font-display text-xl tracking-[0.4em] ${
                    transparent && !isScrolled ? "text-white" : "text-secondary"
                  }`}
                >
                  BELDI
                </span>
                <span
                  className={`text-xs uppercase tracking-[0.5em] ${
                    transparent && !isScrolled ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  Maison
                </span>
              </div>
            </Link>

            <nav className="mx-auto hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.href} className={navLinkClass()}>
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => navigate("/search?collection=seasonal")}
                className={`${navLinkClass(true)} hidden lg:inline-flex items-center gap-2`}
              >
                <Sparkles size={14} />
                Seasonal Capsule
              </button>
            </nav>

            <div className="ml-auto flex items-center gap-3">
              <Button
                variant="ghost"
                className="hidden rounded-full border border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground hover:border-primary md:flex"
                onClick={() => navigate("/search?q=concierge")}
              >
                <Phone size={14} className="mr-2" />
                Concierge
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`hidden sm:flex ${
                  transparent && !isScrolled
                    ? "text-white hover:bg-white/10"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => navigate("/search")}
              >
                <Search size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`relative rounded-full border border-border/60 ${
                  transparent && !isScrolled
                    ? "text-white hover:bg-white/10"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setCartDrawerOpen(true)}
              >
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-sm">
                    {itemCount}
                  </span>
                )}
              </Button>

              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full border border-border/60">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={user?.avatar} />
                        <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                          {user?.name?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/profile")}>
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/profile/orders")}>
                      Orders
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="text-red-600">
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/auth" className="hidden sm:block">
                  <Button size="sm" className="rounded-full bg-secondary text-secondary-foreground px-6 font-semibold">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <CartDrawer open={cartDrawerOpen} onOpenChange={setCartDrawerOpen} />
    </>
  );
};

export default Header;
