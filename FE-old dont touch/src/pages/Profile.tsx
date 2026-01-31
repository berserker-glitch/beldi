import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, MapPin, ShoppingBag, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const orders = [
    {
      id: "MRC-2025-1234",
      date: "Jan 15, 2025",
      status: "confirmed",
      total: 899.97,
    },
    {
      id: "MRC-2025-1233",
      date: "Jan 10, 2025",
      status: "delivered",
      total: 450.0,
    },
  ];

  const savedAddresses = [
    {
      id: "1",
      label: "Home",
      address: "Boulevard Mohammed VI, Tangier 90000",
    },
    {
      id: "2",
      label: "Work",
      address: "Avenue Hassan II, Tangier 90000",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen page-pattern">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <h1 className="text-3xl font-bold text-foreground mb-8">My Profile</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="space-y-6">
              <Card className="p-6 border-2 border-border text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-1">
                  Ahmed Alami
                </h2>
                <p className="text-muted-foreground mb-4">+212 6XX XXX XXX</p>
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </Card>

              <Card className="p-6 border-2 border-border">
                <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Saved Addresses
                </h3>
                <div className="space-y-3">
                  {savedAddresses.map((address) => (
                    <div key={address.id} className="pb-3 border-b border-border last:border-0">
                      <p className="font-semibold text-foreground">{address.label}</p>
                      <p className="text-sm text-muted-foreground">{address.address}</p>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    Add New Address
                  </Button>
                </div>
              </Card>

              <Button variant="ghost" className="w-full text-error hover:bg-error/10">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>

            {/* Order History */}
            <div className="md:col-span-2">
              <Card className="p-6 border-2 border-border">
                <h3 className="font-bold text-lg text-foreground mb-6 flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Order History
                </h3>

                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="p-4 border-2 border-border">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-semibold text-foreground">
                            Order #{order.id}
                          </p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-foreground">
                            {order.total.toFixed(2)} MAD
                          </p>
                          <p
                            className={`text-sm ${
                              order.status === "delivered"
                                ? "text-success"
                                : "text-accent"
                            }`}
                          >
                            {order.status === "delivered" ? "Delivered" : "In Progress"}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() =>
                          navigate(`/order-tracking?orderId=${order.id}`)
                        }
                      >
                        {order.status === "delivered" ? "View Details" : "Track Order"}
                      </Button>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
