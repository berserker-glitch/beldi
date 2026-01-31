import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Package } from "lucide-react";

const OrderConfirmation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const orderId = searchParams.get("orderId") || "MRC-2025-XXXX";

  return (
    <Layout>
      <div className="min-h-screen page-pattern">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto p-8 border-2 border-success text-center">
            <CheckCircle2 className="h-20 w-20 text-success mx-auto mb-6" />
            
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Order Confirmed!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your order. We'll prepare it for delivery shortly.
            </p>

            <div className="bg-muted rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-2">Order Number</p>
              <p className="text-2xl font-bold text-foreground mb-4">{orderId}</p>
              
              <div className="flex items-center justify-center gap-2 text-accent">
                <Package className="h-5 w-5" />
                <span className="font-medium">Estimated delivery: 2-3 days</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full"
                onClick={() => navigate(`/order-tracking?orderId=${orderId}`)}
              >
                Track Your Order
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              You will receive a confirmation via phone shortly
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
