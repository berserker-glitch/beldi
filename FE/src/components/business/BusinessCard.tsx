import { Link } from "react-router-dom";
import { MapPin, Star, Phone, BadgeCheck } from "lucide-react";
import { Business } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BusinessCardProps {
  business: Business;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  return (
    <Link to={`/business/${business.id}`} className="block group">
      <Card className="overflow-hidden border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300">
        <article>
          {/* Business Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
              src={business.images[0]}
            alt={business.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
          />
            {business.featured && (
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground font-semibold">
                Featured
            </Badge>
          )}
        </div>
        
          <CardContent className="p-4 space-y-3">
            {/* Business Name & Verification */}
          <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
              {business.name}
            </h3>
              {business.verified && (
                <BadgeCheck
                  size={20}
                  className="text-primary flex-shrink-0 mt-1"
                  aria-label="Verified business"
                />
              )}
            </div>

            {/* Category Badge */}
            <Badge variant="secondary" className="text-xs font-medium">
              {business.category}
            </Badge>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-primary text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">{business.rating.toFixed(1)}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                ({business.reviewCount} reviews)
              </span>
          </div>
          
            {/* Location */}
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
              <address className="not-italic line-clamp-1">
                {business.city}, {business.region}
              </address>
            </div>

            {/* Contact */}
            {business.phone && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} aria-hidden="true" />
                <span className="line-clamp-1">{business.phone}</span>
          </div>
            )}

            {/* Tags */}
            {business.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {business.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                  >
                    {tag}
            </span>
                ))}
          </div>
            )}
          </CardContent>
        </article>
      </Card>
    </Link>
  );
};

export default BusinessCard;
