import React from "react";
import { Segment } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import axios from "axios";
import ImgGenerator from "./Images";

class RaisedSegment extends React.Component {
  state = { images: [] };
  fetchImages = async (term) => {
    const fetchedImages = await axios.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: { term } },
        headers: {
          Authorization:
            "Client-ID 4qdxk1vNFaHuuYYJR3YPlZCawDv409z3ckzOb0FRAVE",
        },
      }
    );
    this.setState({ images: fetchedImages.data.results });
  };
  render() {
    return (
      <Segment raised>
        <SearchBar onSubmit={this.fetchImages} />
        <ImgGenerator data={this.state.images} />
      </Segment>
    );
  }
}

export default RaisedSegment;
