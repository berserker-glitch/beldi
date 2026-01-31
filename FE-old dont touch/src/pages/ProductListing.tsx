import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";
import { getProductsByBusinessId, getBusinessById } from "@/data/mockData";
import { Breadcrumb } from "@/components/ui/breadcrumb-custom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const ProductListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products: Product[] = id ? getProductsByBusinessId(id) : [];
  const business = id ? getBusinessById(id) : null;

  if (!business) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-muted-foreground">Business not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-muted/20">
        <div className="container mx-auto max-w-6xl px-4 py-10">
          <Breadcrumb
            items={[
              { label: "Search", href: "/search" },
              { label: business.name, href: `/business/${id}` },
              { label: "Products" },
            ]}
          />

          <div className="mt-6 rounded-[2rem] border border-border/70 bg-white/80 p-8 shadow-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Artisan Partner
                </p>
                <h1 className="text-3xl font-semibold text-secondary">{business.name}</h1>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  {business.city}, {business.region}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge className="rounded-full bg-primary/10 text-primary">
                  {products.length} pieces
                </Badge>
                {business.verified && <Badge>Verified</Badge>}
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{business.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {business.tags.slice(0, 4).map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full bg-muted px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {products.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-border/60 bg-white p-12 text-center shadow-md">
              <p className="text-muted-foreground">No products available at this time.</p>
              <Button className="mt-4 rounded-full" onClick={() => navigate("/search")}>
                Browse marketplace
              </Button>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductListing;
