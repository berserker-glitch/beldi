import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb-custom";
import { ShoppingCart, Minus, Plus, Truck, Sparkles, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getProductById, getBusinessById } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, calculateDiscount, getProductCoverImage } from "@/utils/helpers";

const ProductDetail = () => {
  const { id, productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Get product and business from mock data
  const product = productId ? getProductById(productId) : null;
  const business = id ? getBusinessById(id) : null;

  // If product not found, show error
  if (!product || !business) {
    return (
      <Layout>
        <div className="min-h-screen page-pattern flex items-center justify-center px-4">
          <Card className="max-w-md w-full p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h2>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn't find the product you're looking for.
            </p>
            <div className="flex gap-4 justify-center">
              {id && (
                <Link to={`/business/${id}/products`}>
                  <Button variant="outline">Back to Products</Button>
                </Link>
              )}
              <Link to="/search">
                <Button>Back to Search</Button>
              </Link>
            </div>
          </Card>
        </div>
      </Layout>
    );
  }

  const discount = product.originalPrice
    ? calculateDiscount(product.originalPrice, product.price)
    : 0;
  const galleryImages =
    product.images && product.images.length > 0
      ? product.images
      : [getProductCoverImage(product)];
  const highlights = product.tags?.slice(0, 3) ?? [];

  const handleAddToCart = () => {
    addItem(product, business, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} added to your cart`,
    });
  };

  return (
    <Layout>
      <div className="bg-muted/20">
        <div className="container mx-auto max-w-6xl px-4 py-10">
          <Breadcrumb
            items={[
              { label: "Search", href: "/search" },
              { label: business.name, href: `/business/${id}` },
              { label: "Products", href: `/business/${id}/products` },
              { label: product.name },
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-6">
              <Card className="overflow-hidden rounded-[2rem] border border-border/70 bg-white shadow-lg">
                <div className="relative aspect-[4/3]">
                  <img
                    src={galleryImages[selectedImage]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-5 top-5 flex gap-2">
                    <Badge className="rounded-full bg-white/80 text-secondary">
                      {business.city}
                    </Badge>
                    {product.featured && <Badge>Spotlight</Badge>}
                  </div>
                </div>
              </Card>
              {galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {galleryImages.map((image, index) => (
                    <button
                      key={image}
                      onClick={() => setSelectedImage(index)}
                      className={`rounded-2xl border overflow-hidden ${
                        selectedImage === index ? "border-primary" : "border-border/70"
                      }`}
                    >
                      <img src={image} alt={`${product.name} ${index + 1}`} className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <Card className="rounded-[1.5rem] border border-border/70 bg-white/90 p-6 shadow-md">
                <h2 className="text-lg font-semibold text-secondary">Story</h2>
                <p className="mt-3 text-sm text-muted-foreground">{product.description}</p>
                {highlights.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {highlights.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full bg-muted px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>

              <Card className="rounded-[1.5rem] border border-border/70 bg-white/90 p-6 shadow-md">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      Artisanship
                    </p>
                    <p className="text-sm text-secondary">
                      Hand-finished in {business.city}, {business.region}
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
                  <p>• Verified atelier partner</p>
                  <p>• Natural dyes + low impact finishes</p>
                  <p>• Small batch inventory</p>
                  <p>• Complimentary repair within 1 year</p>
                </div>
              </Card>
            </div>

            <div className="space-y-6 lg:sticky lg:top-28">
              <Card className="rounded-[1.5rem] border border-border/70 bg-white p-6 shadow-lg">
                <Link
                  to={`/business/${id}`}
                  className="text-sm font-semibold text-primary hover:text-primary/80"
                >
                  {business.name}
                </Link>
                <h1 className="mt-2 text-3xl font-semibold text-secondary">{product.name}</h1>

                <div className="mt-6 flex items-center gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      Price
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      {formatPrice(product.price, product.currency)}
                    </p>
                  </div>
                  {product.originalPrice && (
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        Was
                      </p>
                      <p className="text-xl text-muted-foreground line-through">
                        {formatPrice(product.originalPrice, product.currency)}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <Badge className={product.inStock ? "bg-success text-white" : "bg-error text-white"}>
                    {product.inStock ? "In stock" : "Waitlist"}
                  </Badge>
                  <Badge variant="outline" className="rounded-full">
                    Ships from {business.city}
                  </Badge>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-secondary">Quantity</span>
                    <div className="flex items-center gap-2 rounded-full border border-border/70 px-3 py-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={!product.inStock}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                        disabled={!product.inStock}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full rounded-full bg-primary text-primary-foreground"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {product.inStock ? "Add to cart" : "Join waitlist"} •{" "}
                    {formatPrice(product.price * quantity, product.currency)}
                  </Button>
                </div>
              </Card>

              <Card className="rounded-[1.5rem] border border-border/70 bg-white/90 p-6 shadow-md">
                <div className="flex items-center gap-3 text-sm text-secondary">
                  <MapPin size={16} />
                  {business.address}
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Delivery
                </p>
                <p className="text-sm text-muted-foreground">
                  Complimentary shipping in Morocco for orders over 500 MAD. International shipping
                  partners available upon request.
                </p>
                <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                  <Truck size={16} />
                  Dispatches in 2–4 days from Marrakech atelier.
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
