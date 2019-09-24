import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '9Tt3z9Zj5EBffq5uRdwu7dmaeETqW5h9';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  fetchReviews = event => {
    event.preventDefault();
    fetch(URL)
      .then(res => res.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <form onSubmit={this.fetchReviews}>
          <div>
            <button type="submit">Latest Reviews</button>
          </div>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
