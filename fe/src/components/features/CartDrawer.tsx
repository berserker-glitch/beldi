import { useCart } from "../../context/CartContext";
import { Button } from "../ui/Button";
import { Typography } from "../ui/Typography";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { cn } from "../../utils/cn";
import { useEffect } from "react";

export function CartDrawer() {
    const { items, isOpen, closeCart, updateQuantity, removeItem, total } = useCart();

    // Prevent background scrolling when cart is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={closeCart}
            />

            {/* Drawer */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-full md:w-[450px] bg-beldi-sand shadow-2xl z-50 transform transition-transform duration-500 ease-out flex flex-col",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex items-center justify-between p-6 border-b border-beldi-tadelakt/20">
                    <Typography variant="h4">Your Cart ({items.length})</Typography>
                    <button onClick={closeCart} className="p-2 hover:bg-beldi-tadelakt/20 rounded-full transition-colors">
                        <X size={24} className="text-beldi-charcoal" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center space-y-4 text-gray-500">
                            <Typography variant="body">Your cart is empty.</Typography>
                            <Button variant="outline" onClick={closeCart}>Continue Shopping</Button>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="flex gap-4 animate-fade-in">
                                <div className="w-24 h-32 bg-gray-100 flex-shrink-0">
                                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <Typography variant="h6" className="text-base leading-tight">{item.name}</Typography>
                                            <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <Typography variant="caption" className="text-gray-500 mt-1 block">{item.material}</Typography>
                                    </div>

                                    <div className="flex justify-between items-end">
                                        <div className="flex items-center border border-beldi-charcoal/20">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 hover:bg-gray-100 transition-colors"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="w-8 text-center text-sm font-sans">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:bg-gray-100 transition-colors"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <Typography variant="body" className="font-medium">${item.price * item.quantity}</Typography>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-6 border-t border-beldi-tadelakt/20 bg-beldi-sand space-y-4">
                        <div className="flex justify-between items-center text-lg font-medium font-serif">
                            <span>Subtotal</span>
                            <span>${total}</span>
                        </div>
                        <Typography variant="caption" className="text-gray-500 text-center block">
                            Shipping & taxes calculated at checkout
                        </Typography>
                        <Button variant="primary" fullWidth size="lg">Checkout</Button>
                    </div>
                )}
            </div>
        </>
    );
}
