import { Star, ThumbsUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
  images?: string[];
}

interface ReviewCardProps {
  review: Review;
  onHelpful?: (reviewId: string) => void;
}

const ReviewCard = ({ review, onHelpful }: ReviewCardProps) => {
  return (
    <Card className="p-6 border-2 border-border space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-foreground">{review.userName}</h4>
          <p className="text-sm text-muted-foreground">{review.date}</p>
        </div>
        
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-5 w-5",
                i < review.rating
                  ? "fill-primary text-primary"
                  : "fill-muted text-muted"
              )}
            />
          ))}
        </div>
      </div>

      <p className="text-foreground">{review.comment}</p>

      {review.images && review.images.length > 0 && (
        <div className="flex gap-2">
          {review.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Review image ${index + 1}`}
              className="w-20 h-20 object-cover rounded-md border-2 border-border"
            />
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 pt-2 border-t border-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onHelpful?.(review.id)}
          className="text-muted-foreground"
        >
          <ThumbsUp className="h-4 w-4 mr-2" />
          Helpful ({review.helpful})
        </Button>
      </div>
    </Card>
  );
};

export default ReviewCard;
