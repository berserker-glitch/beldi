import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type OrderStatus = "received" | "confirmed" | "delivery" | "delivered";

interface OrderStep {
  id: OrderStatus;
  label: string;
  description: string;
}

const steps: OrderStep[] = [
  { id: "received", label: "Order Received", description: "We've received your order" },
  { id: "confirmed", label: "Confirmed", description: "Shop confirmed your order" },
  { id: "delivery", label: "Out for Delivery", description: "Your order is on the way" },
  { id: "delivered", label: "Delivered", description: "Order completed" },
];

interface OrderTrackerProps {
  currentStatus: OrderStatus;
  orderNumber: string;
  estimatedDelivery?: string;
}

const OrderTracker = ({ currentStatus, orderNumber, estimatedDelivery }: OrderTrackerProps) => {
  const currentStepIndex = steps.findIndex((step) => step.id === currentStatus);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Order Tracking</h2>
        <p className="text-muted-foreground">Order #{orderNumber}</p>
        {estimatedDelivery && (
          <p className="text-sm text-accent font-medium">
            Estimated delivery: {estimatedDelivery}
          </p>
        )}
      </div>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
        <div
          className="absolute left-6 top-0 w-0.5 bg-primary transition-all duration-500"
          style={{ height: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
        />

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const isCompleted = index <= currentStepIndex;
            const isCurrent = index === currentStepIndex;

            return (
              <div key={step.id} className="relative flex items-start gap-4">
                {/* Step Circle */}
                <div
                  className={cn(
                    "relative z-10 w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300",
                    isCompleted
                      ? "bg-primary border-primary"
                      : "bg-background border-border"
                  )}
                >
                  {isCompleted && (
                    <Check className="h-6 w-6 text-primary-foreground" />
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-2">
                  <h3
                    className={cn(
                      "font-bold text-lg",
                      isCompleted ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </h3>
                  <p
                    className={cn(
                      "text-sm",
                      isCurrent ? "text-accent font-medium" : "text-muted-foreground"
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderTracker;
