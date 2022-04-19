import React from "react";

class Image extends React.Component {
  imgRef = React.createRef();
  state = { imageHeight: 0 };
  componentDidMount() {
    this.imgRef.current.addEventListener("load", () => {
      const height = this.imgRef.current.clientHeight;
      this.setState({ imageHeight: Math.ceil(height / 10)+1 });
    });
  }
  render() {
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.imageHeight}` }}
        ref={this.imgRef}
        src={this.props.params.urls.regular}
        alt={this.props.params.alt_description}
      />
    );
  }
}
export default Image;
