import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { BadgeCheck, Package, TrendingUp, Zap, Sparkles, Shirt, Home as HomeIcon, Coffee, Star, MapPin, ChevronRight, Quote, ArrowRight, Search, ShoppingCart, Heart, Users, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout transparentHeader={false}>
      <div className="min-h-screen bg-background">
        {/* Hero Section - eBay/Amazon Inspired */}
        <div className="bg-secondary pt-20 pb-12 zelij-pattern-dark">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Main Promotional Banner - Left */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl p-8 md:p-12 text-primary-foreground flex flex-col justify-between min-h-[400px]">
                <div>
                  <div className="inline-block px-3 py-1 bg-secondary/20 rounded-full border border-secondary/30 mb-6">
                    <span className="text-sm font-semibold">
                      🇲🇦 Authentic Moroccan Crafts
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Traditional Artisan
                    <span className="block mt-2">Goods & Crafts</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">
                    Handmade treasures from Moroccan artisans. Shop authentic bazaar goods and support local craftsmen.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => navigate('/search')}
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8"
                  >
                    Start Shopping
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                  <Button
                    onClick={() => navigate('/search?category=crafts')}
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
                  >
                    Browse Crafts
                  </Button>
                </div>
              </div>

              {/* Featured Category Tiles - Right */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => navigate('/search?category=handicrafts')}
                  className="bg-card hover:bg-primary border-2 border-border hover:border-primary rounded-xl p-6 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 group-hover:bg-primary-foreground rounded-xl flex items-center justify-center">
                    <Sparkles className="text-primary group-hover:text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary-foreground text-sm">Handicrafts</h3>
                </button>

                <button
                  onClick={() => navigate('/search?category=clothing')}
                  className="bg-card hover:bg-primary border-2 border-border hover:border-primary rounded-xl p-6 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 group-hover:bg-primary-foreground rounded-xl flex items-center justify-center">
                    <Shirt className="text-primary group-hover:text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary-foreground text-sm">Clothing</h3>
                </button>

                <button
                  onClick={() => navigate('/search?category=decor')}
                  className="bg-card hover:bg-primary border-2 border-border hover:border-primary rounded-xl p-6 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 group-hover:bg-primary-foreground rounded-xl flex items-center justify-center">
                    <HomeIcon className="text-primary group-hover:text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary-foreground text-sm">Home Decor</h3>
                </button>

                <button
                  onClick={() => navigate('/search?category=spices')}
                  className="bg-card hover:bg-primary border-2 border-border hover:border-primary rounded-xl p-6 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 group-hover:bg-primary-foreground rounded-xl flex items-center justify-center">
                    <Coffee className="text-primary group-hover:text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary-foreground text-sm">Spices & Foods</h3>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Why Choose BELDI?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the convenience of shopping from authentic Moroccan artisans
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 group-hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                  <BadgeCheck className="text-primary group-hover:text-primary-foreground transition-colors" size={32} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Verified Artisans</h3>
                <p className="text-sm text-muted-foreground">
                  Every business is verified and authenticated for quality assurance
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 group-hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                  <Package className="text-primary group-hover:text-primary-foreground transition-colors" size={32} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Cash on Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Pay when you receive your order. No upfront payment required
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 group-hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                  <TrendingUp className="text-primary group-hover:text-primary-foreground transition-colors" size={32} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Live Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Track your order in real-time from artisan to your doorstep
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 group-hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                  <Zap className="text-primary group-hover:text-primary-foreground transition-colors" size={32} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Quick delivery across Morocco with trusted local couriers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Shop authentic Moroccan crafts in three simple steps
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <Search className="text-primary-foreground" size={36} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Browse & Search</h3>
                <p className="text-muted-foreground">
                  Explore thousands of handmade products from verified Moroccan artisans
                </p>
              </div>

              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <ShoppingCart className="text-primary-foreground" size={36} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Add to Cart</h3>
                <p className="text-muted-foreground">
                  Select your favorite items and add them to your cart for easy checkout
                </p>
              </div>

              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="text-primary-foreground" size={36} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Enjoy & Support</h3>
                <p className="text-muted-foreground">
                  Receive authentic crafts and support local artisans across Morocco
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Artisans */}
        <div className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Featured Artisans
              </h2>
              <Button
                onClick={() => navigate('/search')}
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-primary/10 font-semibold"
              >
                View All
                <ChevronRight size={18} className="ml-1" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { name: "Traditional Pottery Studio", city: "Fès", products: "120+ items", rating: 4.8 },
                { name: "Moroccan Leather Goods", city: "Marrakech", products: "85+ items", rating: 4.6 },
                { name: "Handwoven Carpets", city: "Rabat", products: "200+ items", rating: 4.9 }
              ].map((artisan, i) => (
                <div
                  key={i}
                  onClick={() => navigate('/business/1')}
                  className="group bg-card border border-border hover:border-primary rounded-xl overflow-hidden transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 relative overflow-hidden">
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2 py-1 bg-primary text-primary-foreground rounded-md text-xs font-semibold flex items-center gap-1">
                        <Star size={12} className="fill-primary-foreground" />
                        {artisan.rating}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {artisan.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin size={14} className="text-primary" />
                      <span>{artisan.city}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{artisan.products}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-secondary text-secondary-foreground zelij-pattern-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-secondary-foreground/70">Artisans</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-1">10K+</div>
                <div className="text-sm text-secondary-foreground/70">Handmade Items</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-1">50K+</div>
                <div className="text-sm text-secondary-foreground/70">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-1">16</div>
                <div className="text-sm text-secondary-foreground/70">Regions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real experiences from satisfied customers across Morocco
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { name: "Amina Benali", city: "Casablanca", rating: 5, text: "The quality of handmade pottery I received exceeded all expectations. Fast delivery and authentic craftsmanship!" },
                { name: "Youssef Alami", city: "Rabat", rating: 5, text: "BELDI made it so easy to find traditional leather goods. The artisan was professional and the product is beautiful." },
                { name: "Fatima Idrissi", city: "Marrakech", rating: 5, text: "As someone who values authentic Moroccan crafts, BELDI is a game-changer. Highly recommend to everyone!" }
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <Quote className="text-primary/30 mb-3" size={24} />
                  <p className="text-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="text-primary mx-auto mb-4" size={48} />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-8">
                Get notified about new artisans, exclusive offers, and special promotions
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-16 bg-gradient-to-br from-primary via-primary to-primary/90 zelij-pattern-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Discover Handmade Treasures
              </h2>
              <p className="text-lg text-primary-foreground/90">
                Authentic Moroccan crafts from local artisans across Morocco
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  onClick={() => navigate('/search')}
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8"
                >
                  Browse Artisan Crafts
                </Button>
                <Button
                  onClick={() => navigate('/auth')}
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8"
                >
                  Sign Up Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
