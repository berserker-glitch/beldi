import { useNavigate } from "react-router-dom";
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/helpers";
import { Link } from "react-router-dom";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
  const navigate = useNavigate();
  const { items, itemCount, totalAmount, updateQuantity, removeItem } = useCart();

  const deliveryFee = totalAmount > 500 ? 0 : 30;
  const total = totalAmount + deliveryFee;

  const handleSeeMore = () => {
    onOpenChange(false);
    navigate("/cart");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[400px] sm:w-[500px] bg-background flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <ShoppingCart size={24} />
            Shopping Cart
          </SheetTitle>
          <SheetDescription>
            {itemCount === 0
              ? "Your cart is empty"
              : `${itemCount} ${itemCount === 1 ? "item" : "items"} in your cart`}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center py-12">
            <ShoppingCart size={64} className="text-muted-foreground mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground text-center mb-6 max-w-sm">
              Start shopping to add items to your cart
            </p>
            <Button
              onClick={() => {
                onOpenChange(false);
                navigate("/search");
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Browse Products
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 border border-border rounded-lg bg-card hover:border-primary transition-colors"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                    <img
                      src={
                        item.product.images && item.product.images.length > 0
                          ? item.product.images[0]
                          : "/placeholder.svg"
                      }
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/business/${item.business.id}/product/${item.product.id}`}
                      onClick={() => onOpenChange(false)}
                      className="block"
                    >
                      <h4 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 mb-1">
                        {item.product.name}
                      </h4>
                    </Link>
                    <p className="text-xs text-muted-foreground mb-2">
                      {item.business.name}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            updateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                          }
                          className="h-8 w-8"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-10 text-center font-semibold text-sm">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="h-8 w-8"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-bold text-foreground text-sm">
                          {formatPrice(item.product.price * item.quantity, item.product.currency)}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.product.id)}
                          className="h-8 w-8 text-error hover:text-error hover:bg-error/10"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Footer */}
            <div className="border-t border-border pt-4 space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between text-foreground">
                <span>Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})</span>
                <span className="font-semibold">{formatPrice(totalAmount, "MAD")}</span>
              </div>

              {/* Delivery Fee */}
              <div className="flex justify-between text-foreground">
                <span>Delivery Fee</span>
                <span className="font-semibold">
                  {deliveryFee === 0 ? (
                    <span className="text-success">Free</span>
                  ) : (
                    formatPrice(deliveryFee, "MAD")
                  )}
                </span>
              </div>

              {deliveryFee > 0 && totalAmount < 500 && (
                <p className="text-xs text-muted-foreground">
                  Add {formatPrice(500 - totalAmount, "MAD")} more for free delivery
                </p>
              )}

              <Separator />

              {/* Total */}
              <div className="flex justify-between text-lg font-bold text-foreground">
                <span>Total</span>
                <span>{formatPrice(total, "MAD")}</span>
              </div>

              {/* See More Button */}
              <Button
                onClick={handleSeeMore}
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                See More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Checkout Button */}
              <Button
                onClick={() => {
                  onOpenChange(false);
                  navigate("/checkout");
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                size="lg"
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;

