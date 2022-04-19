import React from "react";
import { Input } from "semantic-ui-react";

class SearchBar extends React.Component {
  state = { query: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={this.onFormSubmit}>
          <Input
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
            style={{
              maxWidth: "400px",
            }}
            icon={{ name: "search", circular: true, link: true }}
            placeholder="Search..."
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
