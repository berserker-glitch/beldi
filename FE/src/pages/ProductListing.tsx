import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";
import { getProductsByBusinessId, getBusinessById } from "@/data/mockData";
import { Breadcrumb } from "@/components/ui/breadcrumb-custom";

const ProductListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get products from mock data
  const products: Product[] = id ? getProductsByBusinessId(id) : [];
  const business = id ? getBusinessById(id) : null;
  const businessName = business?.name || "Business";

  return (
    <Layout>
      <div className="min-h-screen page-pattern">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb 
            items={[
              { label: "Search", href: "/search" },
              { label: businessName, href: `/business/${id}` },
              { label: "Products" }
            ]}
          />

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {businessName} - Products
            </h1>
            <p className="text-muted-foreground">
              {products.length} products available
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No products available at this time.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductListing;
