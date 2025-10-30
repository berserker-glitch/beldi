import { useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ReviewCard, { Review } from "@/components/reviews/ReviewCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb-custom";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Reviews = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [showForm, setShowForm] = useState(false);

  const reviews: Review[] = [
    {
      id: "1",
      userName: "Ahmed El Fassi",
      rating: 5,
      date: "Jan 10, 2025",
      comment:
        "Excellent gaming café! Great PCs, comfortable seats, and friendly staff. Highly recommend!",
      helpful: 12,
    },
    {
      id: "2",
      userName: "Sara Bennani",
      rating: 4,
      date: "Jan 8, 2025",
      comment:
        "Good place for gaming. Internet is fast and equipment is modern. Only downside is it can get crowded on weekends.",
      helpful: 8,
    },
    {
      id: "3",
      userName: "Youssef Alami",
      rating: 5,
      date: "Jan 5, 2025",
      comment:
        "Best gaming café in Tangier! Clean, modern, and great prices. The snack bar is also very good.",
      helpful: 15,
    },
  ];

  const handleSubmitReview = () => {
    if (rating === 0 || comment.trim() === "") {
      toast({
        title: "Error",
        description: "Please provide a rating and comment",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Review submitted!",
      description: "Thank you for your feedback",
    });
    setShowForm(false);
    setRating(0);
    setComment("");
  };

  const averageRating = 4.8;
  const totalReviews = reviews.length;

  return (
    <Layout>
      <div className="min-h-screen page-pattern">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb 
            items={[
              { label: "Search", href: "/search" },
              { label: "Business", href: `/business/${id}` },
              { label: "Reviews" }
            ]}
          />
          
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Customer Reviews
          </h1>

          {/* Rating Summary */}
          <Card className="p-6 border-2 border-border mb-8">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-foreground mb-2">
                  {averageRating}
                </div>
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-6 w-6",
                        i < Math.floor(averageRating)
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted"
                      )}
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  {totalReviews} reviews
                </div>
              </div>

              <div className="flex-1">
                <Button
                  onClick={() => setShowForm(!showForm)}
                  className="w-full md:w-auto"
                >
                  Write a Review
                </Button>
              </div>
            </div>
          </Card>

          {/* Review Form */}
          {showForm && (
            <Card className="p-6 border-2 border-primary mb-8">
              <h3 className="font-bold text-lg text-foreground mb-4">
                Write Your Review
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Rating
                  </label>
                  <div className="flex gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setRating(i + 1)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={cn(
                            "h-8 w-8 transition-colors",
                            i < rating
                              ? "fill-primary text-primary"
                              : "fill-muted text-muted hover:fill-primary/50 hover:text-primary/50"
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Review
                  </label>
                  <Textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your experience..."
                    rows={4}
                    className="border-2"
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleSubmitReview}>Submit Review</Button>
                  <Button variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">
                  No reviews yet. Be the first to review!
                </p>
                <Button onClick={() => setShowForm(true)}>
                  Write First Review
                </Button>
              </div>
            ) : (
              reviews.map((review) => <ReviewCard key={review.id} review={review} />)
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
