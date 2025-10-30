import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface CartItemData {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  businessName: string;
}

interface CartItemProps {
  item: CartItemData;
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemove?: (id: string) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const handleDecrease = () => {
    if (item.quantity > 1) {
      onUpdateQuantity?.(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    onUpdateQuantity?.(item.id, item.quantity + 1);
  };

  return (
    <Card className="p-4 border-2 border-border">
      <div className="flex gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-md bg-muted"
        />
        
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="font-semibold text-foreground">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{item.businessName}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleDecrease}
                className="h-8 w-8"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-semibold">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={handleIncrease}
                className="h-8 w-8"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="font-bold text-lg">
                {(item.price * item.quantity).toFixed(2)} MAD
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemove?.(item.id)}
                className="text-error hover:text-error hover:bg-error/10"
                aria-label="Remove item"
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
