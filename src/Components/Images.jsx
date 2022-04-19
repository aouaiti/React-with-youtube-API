import React from "react";
import "./Images.css";
import Image from "./Image";

const ImgGenerator = (props) => {
  const img = props.data.map((img) => {
    return (
      <Image key={img.id} params={img} />
      // alt={img.alt_description} src={img.urls.regular}
    );
  });
  return <div className="container">{img}</div>;
};
export default ImgGenerator;
