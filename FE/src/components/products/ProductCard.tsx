import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice, calculateDiscount } from "@/utils/helpers";
import { useCart } from "@/contexts/CartContext";
import { getBusinessById } from "@/data/mockData";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const business = getBusinessById(product.businessId);

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
      className="block group"
    >
      <Card className="overflow-hidden border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <article className="flex flex-col h-full">
          {/* Product Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
              src={product.images && product.images.length > 0 ? product.images[0] : "/placeholder.svg"}
            alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
          />
            {discount > 0 && (
              <Badge className="absolute top-3 left-3 bg-error text-error-foreground font-semibold">
                -{discount}%
            </Badge>
          )}
          {!product.inStock && (
              <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
                <Badge variant="secondary" className="text-sm font-bold">
                  Out of Stock
                </Badge>
            </div>
          )}
            {product.featured && product.inStock && (
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground font-semibold text-xs">
                Featured
              </Badge>
            )}
        </div>

          <CardContent className="p-4 space-y-3 flex-1 flex flex-col">
            {/* Product Name */}
            <h3 className="text-base font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200 min-h-[3rem]">
            {product.name}
          </h3>
        
            {/* Price */}
        <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-primary">
                {formatPrice(product.price, product.currency)}
          </span>
              {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice, product.currency)}
            </span>
          )}
        </div>
        
            {/* Rating (if available) */}
            {product.rating && product.reviewCount && (
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-primary text-primary" aria-hidden="true" />
                  <span className="font-semibold">{product.rating.toFixed(1)}</span>
                </div>
                <span className="text-muted-foreground">({product.reviewCount})</span>
              </div>
            )}

            {/* Category Badge */}
            <Badge variant="secondary" className="text-xs w-fit">
              {product.category}
            </Badge>

            {/* Add to Cart Button */}
            <div className="mt-auto pt-2">
        <Button
                onClick={handleAddToCart}
          disabled={!product.inStock}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200"
                size="default"
        >
                <ShoppingCart size={18} className="mr-2" aria-hidden="true" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
          </CardContent>
        </article>
    </Card>
    </Link>
  );
};

export default ProductCard;
