import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '9Tt3z9Zj5EBffq5uRdwu7dmaeETqW5h9';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
const API_URL = `?api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  fetchReviews = event => {
    event.preventDefault();
    fetch(BASE_URL + this.state.searchTerm + API_URL)
      .then(res => res.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.fetchReviews}>
          <div>
            <label>
            Search Movie Reviews
              <input id="searchTerm" name="searchTerm" type="text" value={this.state.searchTerm} onChange={this.handleChange} />
            </label>
            <button type="submit">Search</button>
          </div>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}



// The second, <SearchableMovieReviewsContainer>, will provide a searchable interface allowing the user to enter a search term and then receive a list of reviews that match the search term(s).
