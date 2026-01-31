import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CartItem, { CartItemData } from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb-custom";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag } from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItemData[]>([
    {
      id: "1",
      productId: "1",
      name: "Gaming Mouse RGB Pro",
      price: 299.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
      businessName: "Cyber Gaming Tangier",
    },
    {
      id: "2",
      productId: "2",
      name: "Mechanical Keyboard Blue Switch",
      price: 599.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      businessName: "Cyber Gaming Tangier",
    },
  ]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemove = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 500 ? 0 : 30;
  const total = subtotal + deliveryFee;

  return (
    <Layout cartItemCount={cartItems.length}>
      <div className="min-h-screen page-pattern">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb 
            items={[
              { label: "Cart" }
            ]}
          />
          
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-2">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-6">
                Start shopping to add items to your cart
              </p>
              <Button onClick={() => navigate("/search")}>
                Browse Products
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemove}
                  />
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <Card className="p-6 border-2 border-border sticky top-24">
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4">
                    <div className="flex justify-between text-foreground">
                      <span>Subtotal ({cartItems.length} items)</span>
                      <span className="font-semibold">
                        {subtotal.toFixed(2)} MAD
                      </span>
                    </div>

                    <div className="flex justify-between text-foreground">
                      <span>Delivery Fee</span>
                      <span className="font-semibold">
                        {deliveryFee === 0 ? (
                          <span className="text-success">Free</span>
                        ) : (
                          `${deliveryFee.toFixed(2)} MAD`
                        )}
                      </span>
                    </div>

                    {deliveryFee > 0 && (
                      <p className="text-sm text-muted-foreground">
                        Add {(500 - subtotal).toFixed(2)} MAD for free delivery
                      </p>
                    )}

                    <Separator />

                    <div className="flex justify-between text-lg font-bold text-foreground">
                      <span>Total</span>
                      <span>{total.toFixed(2)} MAD</span>
                    </div>

                    <Button
                      size="lg"
                      className="w-full"
                      onClick={() => navigate("/checkout")}
                    >
                      Proceed to Checkout
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full"
                      onClick={() => navigate("/search")}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
