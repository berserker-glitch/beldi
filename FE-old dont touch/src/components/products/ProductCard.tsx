import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice, calculateDiscount, getProductCoverImage } from "@/utils/helpers";
import { useCart } from "@/contexts/CartContext";
import { getBusinessById } from "@/data/mockData";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const business = getBusinessById(product.businessId);
  const coverImage = getProductCoverImage(product);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product detail
    if (business) {
      addItem(product, business, 1);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const discount = product.originalPrice
    ? calculateDiscount(product.originalPrice, product.price)
    : 0;

  return (
    <Link
      to={`/business/${product.businessId}/product/${product.id}`}
      className="block"
    >
      <Card className="group flex h-full flex-col overflow-hidden border border-border/60 bg-white/90 shadow-none transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(34,22,18,0.08)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border/60 bg-muted">
          <img
            src={coverImage}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
              {business?.city || "Morocco"}
            </span>
            {product.featured && (
              <span className="rounded-full bg-primary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-foreground">
                Spotlight
              </span>
            )}
          </div>
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <Badge variant="secondary" className="rounded-full bg-white/90 px-4 py-1 text-secondary">
                Waitlist
              </Badge>
            </div>
          )}
          {discount > 0 && (
            <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-error">
              -{discount}%
            </div>
          )}
        </div>

        <CardContent className="flex flex-1 flex-col gap-4 p-5">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.45em] text-muted-foreground">
            <span>{business?.name || "Artisan Partner"}</span>
            {product.rating && (
              <span className="flex items-center gap-1 text-primary">
                <Star size={12} className="fill-current" />
                {product.rating.toFixed(1)}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold leading-tight text-secondary group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="rounded-full bg-muted px-3 py-1 text-xs">
              {product.category}
            </Badge>
            {product.tags?.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="rounded-full px-3 py-1 text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Investment</p>
              <p className="text-2xl font-bold text-primary">
                {formatPrice(product.price, product.currency)}
              </p>
              {product.originalPrice && (
                <p className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice, product.currency)}
                </p>
              )}
            </div>
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="rounded-full bg-secondary px-6 py-2 text-sm font-semibold text-secondary-foreground hover:bg-secondary/90"
            >
              <ShoppingCart size={16} className="mr-2" />
              {product.inStock ? "Add" : "Notify"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
