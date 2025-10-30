import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb-custom";
import { ArrowLeft, ShoppingCart, Minus, Plus, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getProductById, getBusinessById } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, calculateDiscount } from "@/utils/helpers";

const ProductDetail = () => {
  const { id, productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Get product and business from mock data
  const product = productId ? getProductById(productId) : null;
  const business = id ? getBusinessById(id) : null;

  // If product not found, show error
  if (!product || !business) {
    return (
      <Layout>
        <div className="min-h-screen page-pattern flex items-center justify-center px-4">
          <Card className="max-w-md w-full p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h2>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn't find the product you're looking for.
            </p>
            <div className="flex gap-4 justify-center">
              {id && (
                <Link to={`/business/${id}/products`}>
                  <Button variant="outline">Back to Products</Button>
                </Link>
              )}
              <Link to="/search">
                <Button>Back to Search</Button>
              </Link>
            </div>
          </Card>
        </div>
      </Layout>
    );
  }

  const discount = product.originalPrice
    ? calculateDiscount(product.originalPrice, product.price)
    : 0;

  const handleAddToCart = () => {
    addItem(product, business, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} added to your cart`,
    });
  };

  return (
    <Layout>
      <div className="min-h-screen page-pattern">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumb 
            items={[
              { label: "Search", href: "/search" },
              { label: business.name, href: `/business/${id}` },
              { label: "Products", href: `/business/${id}/products` },
              { label: product.name }
            ]}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg border-2 border-secondary bg-muted">
                <img
                  src={product.images && product.images.length > 0 ? product.images[selectedImage] : "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square overflow-hidden rounded-lg border-2 ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-border"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Link
                  to={`/business/${id}`}
                  className="text-primary hover:text-primary/80 font-medium mb-2 inline-block transition-colors"
                >
                  {business.name}
                </Link>
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(product.price, product.currency)}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        {formatPrice(product.originalPrice, product.currency)}
                      </span>
                      <Badge className="bg-error text-error-foreground">
                        -{discount}%
                      </Badge>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-6">
                  {product.inStock ? (
                    <Badge className="bg-success text-success-foreground">
                      In Stock
                    </Badge>
                  ) : (
                    <Badge className="bg-error text-error-foreground">
                      Out of Stock
                    </Badge>
                  )}
                  {product.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
              </div>

              <Card className="p-6 border-2 border-border">
                <p className="text-foreground leading-relaxed">
                  {product.description}
                </p>
              </Card>

              {/* Product Variants */}
              {product.variants && product.variants.length > 0 && (
                <Card className="p-6 border-2 border-border">
                  <h3 className="font-bold text-lg text-foreground mb-4">
                    Options
                  </h3>
                  <div className="space-y-4">
                    {product.variants.map((variant) => (
                      <div key={variant.id}>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          {variant.name}
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {variant.options.map((option) => (
                            <Button
                              key={option}
                              variant="outline"
                              size="sm"
                              className="border-2 hover:border-primary hover:bg-primary/10"
                            >
                              {option}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-5 w-5" />
                <span>Free delivery for orders over 500 MAD</span>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-foreground">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={!product.inStock}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-semibold">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={!product.inStock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - {formatPrice(product.price * quantity, product.currency)}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
