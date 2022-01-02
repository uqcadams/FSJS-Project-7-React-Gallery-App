import React, { Component } from "react";
import GalleryDisplay from "./galleryDisplay";
import WelcomePage from "./welcome";
import SearchBar from "./searchBar";
import NavBar from "./navBar";
import axios from "axios";
import apiKey from "../config";

class Gallery extends Component {
  state = {
    data: [],
    loading: true,
    query: "",
  };

  // Populates photo array on load. Allows for page to be populated when searching via URL.
  componentDidMount() {
    this.populateGallery(this.props.match.params.query);
  }

  // Conditional utility functionality to update gallery when the query and url strings are not aligned.
  componentDidUpdate() {
    if (`/${this.state.query}` !== this.props.match.url) {
      this.populateGallery(this.props.match.url);
    }
  }

  populateGallery = async (query, perPage = 24) => {
    console.log("Loading: ", (this.state.loading = true));

    // Fetches data from the Flickr API
    const { data } = await axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${perPage}&format=json&nojsoncallback=1`
    );

    // Sets the new dataset to the gallery state when promise is fulfilled, and modifies the "loading" state.
    this.setState({
      data,
      loading: false,
      query: this.props.match.params.query,
    });

    console.log("Loading: ", this.state.loading);
  };

  render() {
    // Object destructuring
    const { query } = this.props.match.params;

    return (
      <React.Fragment>
        {/* Fixed components; will always generate */}
        <SearchBar {...this.props} onSearch={this.populateGallery} />
        <NavBar onSearch={this.populateGallery} />

        {/* Conditional rendering. If the user has been redirected to the welcome page, the Welcome component will be rendered. Otherwise, display a gallery matching those search terms. */}
        {query === "welcome" ? (
          <WelcomePage />
        ) : (
          <GalleryDisplay
            {...this.props}
            data={this.state.data}
            loading={this.state.loading}
            onLoad={this.handleLoading}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Gallery;
