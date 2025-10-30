import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import OrderTracker, { OrderStatus } from "@/components/orders/OrderTracker";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const OrderTracking = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId") || "MRC-2025-XXXX";
  
  // Mock current status - in real app this would come from API
  const currentStatus: OrderStatus = "confirmed";
  const estimatedDelivery = "Tomorrow, 3:00 PM - 5:00 PM";

  return (
    <Layout>
      <div className="min-h-screen page-pattern">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="p-8 border-2 border-border">
              <OrderTracker
                currentStatus={currentStatus}
                orderNumber={orderId}
                estimatedDelivery={estimatedDelivery}
              />
            </Card>

            <Card className="p-6 border-2 border-border">
              <h3 className="font-bold text-lg text-foreground mb-4">
                Order Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order Date</span>
                  <span className="font-semibold text-foreground">
                    Jan 15, 2025
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Amount</span>
                  <span className="font-semibold text-foreground">
                    899.97 MAD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="font-semibold text-foreground">
                    Cash on Delivery
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Address</span>
                  <span className="font-semibold text-foreground text-right">
                    Boulevard Mohammed VI, Tangier
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-border">
              <h3 className="font-bold text-lg text-foreground mb-4">
                Need Help?
              </h3>
              <p className="text-muted-foreground mb-4">
                Contact the seller if you have any questions about your order
              </p>
              <Button variant="outline" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Contact Seller
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderTracking;
