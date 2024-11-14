import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Excellent care and very professional service!",
      date: "2024-02-15",
    },
    {
      id: 2,
      name: "Mary Smith",
      rating: 4,
      comment: "Very helpful and caring nurse. Would recommend.",
      date: "2024-02-14",
    },
  ];

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Reviews & Feedback</h1>

      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Leave a Review</h2>
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-6 w-6 text-gray-300 cursor-pointer hover:text-medical-300 transition-colors"
              />
            ))}
          </div>
          <Textarea
            placeholder="Share your experience..."
            className="mb-4"
          />
          <Button>Submit Review</Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex items-center mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-medical-300 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;