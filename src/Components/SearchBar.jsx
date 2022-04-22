import React from "react";
import { Input } from "semantic-ui-react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { searchTerm: "" };
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.onSubmitHandler}>
          <Input
            value={this.state.searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
            icon={{ name: "search", circular: true, link: true }}
            placeholder="Search..."
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
