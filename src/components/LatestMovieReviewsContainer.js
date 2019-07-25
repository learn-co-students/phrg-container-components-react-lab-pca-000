import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Z0OuW92VIZqxQ9luhrCrSwRh1nxuksXr';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h3>The Latest Reviews:</h3>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
