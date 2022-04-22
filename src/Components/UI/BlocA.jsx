import React from "react";
import { Segment } from "semantic-ui-react";
import "./BlocA.css";

const BlocA = (props) => (
  <Segment raised className="bloc-A">
    {props.children}
  </Segment>
);

export default BlocA;
