import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getBusinessById, getProductsByBusinessId, getReviewsByBusinessId } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb-custom";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  BadgeCheck,
  ExternalLink,
  MessageCircle,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";
import { getWhatsAppLink, getGoogleMapsLink, isBusinessOpen, formatPhoneNumber } from "@/utils/helpers";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BusinessProfile = () => {
  const { id } = useParams<{ id: string }>();
  const business = id ? getBusinessById(id) : null;
  const products = id ? getProductsByBusinessId(id) : [];
  const reviews = id ? getReviewsByBusinessId(id) : [];

  if (!business) {
    return (
      <Layout>
        <div className="min-h-screen page-pattern flex items-center justify-center px-4">
          <Card className="max-w-md w-full p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Business Not Found</h2>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn't find the business you're looking for.
            </p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </Card>
        </div>
      </Layout>
    );
  }

  const isOpen = isBusinessOpen(business.hours);

  return (
    <Layout>
      <div className="min-h-screen page-pattern">
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumb 
                items={[
                  { label: "Search", href: "/search" },
                  { label: business.name }
                ]}
              />
            </div>

            {/* Business Header */}
            <div className="mb-8 space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-3">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                      {business.name}
                    </h1>
                    {business.verified && (
                      <BadgeCheck
                        size={32}
                        className="text-primary flex-shrink-0 mt-1"
                        aria-label="Verified business"
                      />
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-sm font-medium">
                      {business.category}
                    </Badge>
                    <Badge
                      variant={isOpen ? "default" : "secondary"}
                      className={isOpen ? "bg-success text-success-foreground" : ""}
                    >
                      {isOpen ? "Open Now" : "Closed"}
                    </Badge>
                    {business.featured && (
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`${
                            i < Math.floor(business.rating)
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-xl font-bold text-foreground">
                      {business.rating.toFixed(1)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ({business.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  {business.phone && (
                    <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
                      <a href={`tel:${business.phone}`}>
                        <Phone size={18} className="mr-2" />
                        Call
                      </a>
                    </Button>
                  )}
                  {business.whatsapp && (
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                      <a
                        href={getWhatsAppLink(business.whatsapp, `Hi, I found you on Morocco Market!`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={18} className="mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Images Carousel - Now below the title */}
            <div className="mb-10">
              <Carousel className="w-full">
                <CarouselContent>
                  {business.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-[250px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={image}
                          alt={`${business.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {business.images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </>
                )}
              </Carousel>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <Card className="border-border/50">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">About</h2>
                    <p className="text-foreground leading-relaxed text-base">{business.description}</p>
                    
                    {/* Tags */}
                    {business.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                        {business.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
              </Card>

                {/* Products Preview */}
                {products.length > 0 && (
                  <Card className="border-border/50">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">Products</h2>
                        <Link to={`/business/${id}/products`}>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                            View All
                            <ChevronRight size={16} className="ml-1" />
                          </Button>
                        </Link>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Browse {products.length} products from this business
                      </p>
                      <Link to={`/business/${id}/products`}>
                        <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                          <ShoppingBag size={20} className="mr-2" />
                          View Products
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}

                {/* Reviews Preview */}
                {reviews.length > 0 && (
                  <Card className="border-border/50">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">Reviews</h2>
                        <Link to={`/business/${id}/reviews`}>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                            View All
                            <ChevronRight size={16} className="ml-1" />
                          </Button>
                        </Link>
                      </div>
                      <div className="space-y-6">
                        {reviews.slice(0, 2).map((review) => (
                          <div
                            key={review.id}
                            className="border-b border-border/50 last:border-0 pb-6 last:pb-0"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={16}
                                    className={`${
                                      i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm font-semibold text-foreground">
                                {review.userName}
                              </span>
                              {review.verified && (
                                <BadgeCheck size={14} className="text-primary" />
                              )}
                            </div>
                            <p className="text-sm text-foreground leading-relaxed">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                </Card>
              )}
            </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Information */}
                <Card className="border-border/50 sticky top-6">
                  <CardContent className="p-6 md:p-8 space-y-6">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Contact Information</h3>
                    
                    {/* Location */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin size={18} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <address className="not-italic text-sm text-foreground leading-relaxed">
                            {business.address}<br />
                            {business.city}, {business.region}
                          </address>
                          <a
                            href={getGoogleMapsLink(business.address, business.city)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 hover:underline mt-2 transition-colors"
                          >
                            View on Map
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    {business.phone && (
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone size={18} className="text-primary" />
                        </div>
                        <a
                          href={`tel:${business.phone}`}
                          className="text-sm text-foreground hover:text-primary transition-colors"
                        >
                          {formatPhoneNumber(business.phone)}
                        </a>
                      </div>
                    )}

                    {/* Hours */}
                    {business.hours && (
                      <div className="pt-6 border-t border-border/50">
                        <div className="flex items-center gap-3 mb-4">
                          <Clock size={18} className="text-primary" />
                          <h4 className="text-sm font-bold text-foreground">Business Hours</h4>
                        </div>
                        <div className="space-y-2.5 text-sm">
                          {Object.entries(business.hours).map(([day, hours]) => (
                            <div key={day} className="flex justify-between items-center gap-4">
                              <span className="capitalize text-muted-foreground text-xs font-medium">{day}:</span>
                              <span className="font-semibold text-foreground text-right">
                                {hours.closed ? "Closed" : `${hours.open} - ${hours.close}`}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
              </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessProfile;
