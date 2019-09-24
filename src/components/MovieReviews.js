import React from 'react';

const Review = ({ title, rating, headline, summary, link }) => {
  return(
    <div>
      <h1>{ title }</h1>
      <h3>{ headline }</h3>
      <p><strong>Rated { rating }</strong> - { summary }</p>
      <a href={ link } target="_blank">Read More</a>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return(
    <div className="review-list">
      <ol>
        { reviews.map((review, index) => <div className="review"> <li key={index}> <Review title={review.display_title} rating={review.mpaa_rating} headline={review.review} summary={review.summary_short} link={review.link.url} /> </li> </div>) }
      </ol>
    </div>
  )
}

export default MovieReviews
