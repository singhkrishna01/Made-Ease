import React from "react";
import "../cssfiles/Review.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const reviews = [
  {
    name: "Gareti Venam",
    image: "/review1.jpeg", // Replace with actual image path
    review: "Thank you, home maid services. The service was exceptional!",
    rating: 4.5,
  },
  {
    name: "Sophia White",
    image: "/review2.jpeg", // Replace with actual image path
    review: "The team was punctual and did an amazing job cleaning my house.",
    rating: 5,
  },
  {
    name: "John Doe",
    image: "/review3.jpeg", // Replace with actual image path
    review: "Affordable and reliable services. Highly recommend!",
    rating: 4,
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleRedirect = () => {
    window.location.href = "/leave-review"; // Replace with your review page URL
  };

  return (
    <div className="review-container">
      <div className="review-header">
        <h1>Customer Reviews</h1>
        <button className="leave-review-btn" onClick={handleRedirect}>
          Leave Us Review
        </button>
      </div>

      <div className="review-slider-wrapper">
        <div
          className="review-slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <img
                src={review.image}
                alt={review.name}
                className="review-avatar"
              />
              <h3>{review.name}</h3>
              <p>{review.review}</p>
              <div className="review-stars">
                {Array.from({ length: Math.floor(review.rating) }).map(
                  (_, i) => (
                    <FaStar key={i} />
                  )
                )}
                {review.rating % 1 !== 0 && <FaStarHalfAlt />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-indicators">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Review;
