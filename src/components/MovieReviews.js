import React from 'react';

const Review = ({ headline, link }) => (
  <div className="review">
    <a className="review-link" href={link.url}>{headline}</a>
  </div>
)

const ReviewList = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(Review) }
  </div>
)

  ReviewList.defaultProps = {
    reviews: []
  };

export default ReviewList
